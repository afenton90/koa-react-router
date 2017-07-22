import sinon from 'sinon';
import React from 'react';
import { Route, Redirect } from 'react-router';
import koaReactRouter from './index';

const Container = ({ children }) =>
  <html lang="en" >
    <head>
      <title>Koa React-Router Title</title>
    </head>
    <body>
      <p>Stuff in body</p>
      {children}
    </body>
  </html>;

// Routes
const Index = () => <div>I am Home</div>;
const Away = () => <div>I am away in a route</div>;
const App = () =>
  <div>
    <Route path="/" component={Index} exact />
    <Route path="/away" component={Away} exact />
  </div>;

const mockCallbacks = () => ({
  onError: sinon.stub(),
  onRedirect: sinon.spy(),
  onNotFound: sinon.spy(),
  onRender: () => ({ Container })
});

test('renders Container', async () => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: {
      url: '/'
    },
    response: {}
  };
  const next = sinon.spy();

  await koaReactRouter({
    App,
    ...callbacks
  })(ctx, next);

  expect(ctx.response.body.includes('<title>Koa React-Router Title</title>')).toBe(true);
  expect(ctx.response.body.includes('<p>Stuff in body</p>')).toBe(true);
  expect(next.calledOnce).toBe(true);
});

test('renders RouterContainer', async () => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: { url: '/' },
    response: {}
  };
  const next = sinon.spy();
  const RouterContainer = ({ children }) =>
    <div id="some-container">
      {children}
    </div>;

  await koaReactRouter({
    App,
    ...callbacks,
    onRender: () => ({ Container, RouterContainer })
  })(ctx, next);

  expect(ctx.response.body.includes('id="some-container"')).toBe(true);
  expect(ctx.response.body.includes('I am Home')).toBe(true);
  expect(next.calledOnce).toBe(true);
});

test('matches IndexRoute', async () => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: {
      url: '/'
    },
    response: {}
  };
  const next = sinon.spy();

  await koaReactRouter({
    App,
    ...callbacks
  })(ctx, next);

  expect(ctx.response.body.includes('I am Home')).toBe(true);
  expect(ctx.response.body.includes('I am away in a route')).toBe(false);
  expect(next.calledOnce).toBe(true);
});

test('matches Route', async () => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: { url: '/away' },
    response: {}
  };
  const next = sinon.spy();

  await koaReactRouter({
    App,
    ...callbacks
  })(ctx, next);

  expect(ctx.response.body.includes('I am away in a route')).toBe(true);
  expect(ctx.response.body.includes('I am Home')).toBe(false);
  expect(next.calledOnce).toBe(true);
});

test('handles redirect with callback', async () => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: { url: '/home' },
    response: {}
  };
  const next = sinon.spy();

  const RedirectApp = () =>
    <div>
      <Route path="/away" component={Away} />
      <Route path="/home" component={Index} />
      <Redirect to="/home" />
    </div>;

  await koaReactRouter({
    App: RedirectApp,
    ...callbacks
  })(ctx, next);

  expect(callbacks.onRedirect.calledOnce).toBe(true);
  expect(callbacks.onError.called).toBe(false);
  expect(callbacks.onNotFound.called).toBe(false);
  expect(ctx.response.body).toBeFalsy();
});

test('handles not found with callback', async () => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: { url: '/something-wrong' },
    response: {}
  };
  const next = sinon.spy();

  await koaReactRouter({
    App,
    ...callbacks
  })(ctx, next);

  expect(callbacks.onNotFound.calledOnce).toBe(true);
  expect(callbacks.onRedirect.called).toBe(false);
  expect(callbacks.onError.called).toBe(false);
  expect(ctx.response.body).toBeFalsy();
});

test('handles containerRenderer in onRender', async () => {
  const ctx = {
    request: { url: '/away' },
    response: {}
  };
  const next = sinon.spy();

  const message = 'Hello I am the message';
  const onRender = () => ({
    containerRenderer: (view) =>
      <html lang="en">
        <body>
          <p>hello container from renderer</p>
          <p>{message}</p>
          <div dangerouslySetInnerHTML={{ __html: view }} />
        </body>
      </html>
  });

  await koaReactRouter({
    App,
    onRender
  })(ctx, next);

  expect(ctx.response.body.includes('hello container from renderer')).toBe(true);
  expect(ctx.response.body.includes('I am away in a route')).toBe(true);
  expect(ctx.response.body.includes(message)).toBe(true);
  expect(next.calledOnce).toBe(true);
});

test('handles RouterContainer rendering errors', async () => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: { url: '/' },
    response: {}
  };
  const next = sinon.spy();
  const RouterContainer = ({ children, nothing }) =>
    <div id="some-container">
      {children}
      {nothing.length}
    </div>;

  await koaReactRouter({
    App,
    ...callbacks,
    onRender: () => ({ Container, RouterContainer })
  })(ctx, next);

  expect(callbacks.onError.called).toBe(true);
  expect(callbacks.onError.args[0][0]).toEqual(ctx);
  expect(typeof callbacks.onError.args[0][1].message).toBe('string');
  expect(next.calledOnce).toBe(true);
});

test('handles containerRenderer rendering errors', async () => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: { url: '/away' },
    response: {}
  };
  const next = sinon.spy();
  const containerRenderer = (view, nothing) =>
    <html lang="en">
      <body>
        <p>{nothing()}</p>
      </body>
    </html>;

  await koaReactRouter({
    ...callbacks,
    App,
    onRender: () => ({ containerRenderer })
  })(ctx, next);

  expect(callbacks.onError.called).toBe(true);
  expect(callbacks.onError.args[0][0]).toEqual(ctx);
  expect(typeof callbacks.onError.args[0][1].message).toBe('string');
  expect(next.calledOnce).toBe(true);
});


test('handles Container rendering errors', async () => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: { url: '/away' },
    response: {}
  };

  const next = sinon.spy();
  const RenderContainer = ({ nothing }) => <p>{nothing()}</p>;

  await koaReactRouter({
    ...callbacks,
    App,
    onRender: () => ({ Container: RenderContainer })
  })(ctx, next);

  expect(callbacks.onError.called).toBe(true);
  expect(callbacks.onError.args[0][0]).toEqual(ctx);
  expect(typeof callbacks.onError.args[0][1].message).toBe('string');
  expect(next.calledOnce).toBe(true);
});
