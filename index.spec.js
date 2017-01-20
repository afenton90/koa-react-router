import test from 'ava';
import sinon from 'sinon';
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import koaReactRouter from './';

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
