import test from 'ava';
import sinon from 'sinon';
import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
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
const routes = (
  <Route path="/">
    <IndexRoute component={Index} />
    <Route path="/away" component={Away} />
    <Redirect from="/home" to="/away" />
  </Route>
);

const mockCallbacks = () => ({
  onError: sinon.spy(),
  onRedirect: sinon.spy(),
  onNotFound: sinon.spy(),
  onRender: () => ({ Container })
});

test('renders Container', async t => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: {
      url: '/'
    },
    response: {}
  };
  const next = sinon.spy();

  await koaReactRouter({
    routes,
    ...callbacks
  })(ctx, next);

  t.true(ctx.response.body.includes('<title>Koa React-Router Title</title>'));
  t.true(ctx.response.body.includes('<p>Stuff in body</p>'));
  t.true(next.calledOnce);
});

test('renders RouterContainer', async t => {
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
    routes,
    ...callbacks,
    onRender: () => ({ Container, RouterContainer })
  })(ctx, next);

  t.true(ctx.response.body.includes('id="some-container"'));
  t.true(ctx.response.body.includes('I am Home'));
  t.true(next.calledOnce);
});

test('matches IndexRoute', async t => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: {
      url: '/'
    },
    response: {}
  };
  const next = sinon.spy();

  await koaReactRouter({
    routes,
    ...callbacks
  })(ctx, next);

  t.true(ctx.response.body.includes('I am Home'));
  t.false(ctx.response.body.includes('I am away in a route'));
  t.true(next.calledOnce);
});

test('matches Route', async t => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: { url: '/away' },
    response: {}
  };
  const next = sinon.spy();

  await koaReactRouter({
    routes,
    ...callbacks
  })(ctx, next);

  t.true(ctx.response.body.includes('I am away in a route'));
  t.false(ctx.response.body.includes('I am Home'));
  t.true(next.calledOnce);
});

test('handles redirect with callback', async t => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: { url: '/home' },
    response: {}
  };
  const next = sinon.spy();

  await koaReactRouter({
    routes,
    ...callbacks
  })(ctx, next);

  t.true(callbacks.onRedirect.calledOnce);
  t.false(callbacks.onError.called);
  t.false(callbacks.onNotFound.called);
  t.falsy(ctx.response.body);
});

test('handles not found with callback', async t => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: { url: '/something-wrong' },
    response: {}
  };
  const next = sinon.spy();

  await koaReactRouter({
    routes,
    ...callbacks
  })(ctx, next);

  t.true(callbacks.onNotFound.calledOnce);
  t.false(callbacks.onRedirect.called);
  t.false(callbacks.onError.called);
  t.falsy(ctx.response.body);
});

test('handles containerRenderer in onRender', async t => {
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
    routes,
    onRender
  })(ctx, next);

  t.true(ctx.response.body.includes('hello container from renderer'));
  t.true(ctx.response.body.includes('I am away in a route'));
  t.true(ctx.response.body.includes(message));
  t.true(next.calledOnce);
});

