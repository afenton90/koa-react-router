import React from 'react';
import { Route, Redirect, StaticRouter } from 'react-router';
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
  <div id="the-app-proper">
    <Route path="/" component={Index} exact />
    <Route path="/away" component={Away} exact />
  </div>;

const mockCallbacks = () => ({
  onError: jest.fn(),
  onRedirect: jest.fn(),
  next: jest.fn(),
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
  const next = jest.fn();

  await koaReactRouter({
    App,
    ...callbacks
  })(ctx, next);

  expect(ctx.response.body.includes('<title>Koa React-Router Title</title>')).toBe(true);
  expect(ctx.response.body.includes('<p>Stuff in body</p>')).toBe(true);
  expect(next).toHaveBeenCalled();
});

test('matches IndexRoute', async () => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: {
      url: '/'
    },
    response: {}
  };
  const { next } = callbacks;

  await koaReactRouter({
    App,
    ...callbacks
  })(ctx, next);

  expect(ctx.response.body.includes('I am Home')).toBe(true);
  expect(ctx.response.body.includes('I am away in a route')).toBe(false);
  expect(next).toHaveBeenCalled();
});

test('matches Route', async () => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: { url: '/away' },
    response: {}
  };
  const { next } = callbacks;

  await koaReactRouter({
    App,
    ...callbacks
  })(ctx, next);

  expect(ctx.response.body.includes('I am away in a route')).toBe(true);
  expect(ctx.response.body.includes('I am Home')).toBe(false);
  expect(next).toHaveBeenCalled();
});

test('handles redirect with callback', async () => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: { url: '/home' },
    response: {}
  };
  const { next } = callbacks;

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

  expect(callbacks.onRedirect).toHaveBeenCalledTimes(1);
  expect(callbacks.onError).not.toHaveBeenCalled();
  expect(ctx.response.body).toBeFalsy();
});

test('handles status in router context', async () => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: { url: '/something-wrong' },
    response: {}
  };
  const { next } = callbacks;

  const NotFound = () =>
    <Route
      render={({ staticContext }) => {
        if (staticContext) staticContext.status = 404;
        return <div />;
      }}
    />;

  await koaReactRouter({
    App: NotFound,
    ...callbacks
  })(ctx, next);

  expect(callbacks.onRedirect).not.toHaveBeenCalled();
  expect(callbacks.onError).not.toHaveBeenCalled();
  expect(ctx.response.body).toBeTruthy();
  expect(ctx.response.status).toBe(404);
});

test('status is set from koa context is not set in router context', async () => {
  const callbacks = mockCallbacks();
  const status = 302;
  const ctx = {
    request: { url: '/something-wrong' },
    response: {
      status
    }
  };
  const { next } = callbacks;

  await koaReactRouter({
    App,
    ...callbacks
  })(ctx, next);

  expect(callbacks.onRedirect).not.toHaveBeenCalled();
  expect(callbacks.onError).not.toHaveBeenCalled();
  expect(ctx.response.status).toBe(status);
});

test('handles containerRenderer in onRender', async () => {
  const ctx = {
    request: { url: '/away' },
    response: {}
  };
  const next = jest.fn();

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
  expect(next).toHaveBeenCalled();
});

test('handles containerRenderer rendering errors', async () => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: { url: '/away' },
    response: {}
  };
  const { next } = callbacks;
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

  expect(callbacks.onError).toHaveBeenCalled();
  expect(callbacks.onError).toHaveBeenCalledWith(
    ctx,
    expect.objectContaining({
      message: expect.any(String)
    })
  );
  expect(next).toHaveBeenCalled();
});


test('handles Container rendering errors', async () => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: { url: '/away' },
    response: {}
  };

  const { next } = callbacks;
  const RenderContainer = ({ nothing }) => <p>{nothing()}</p>;

  await koaReactRouter({
    ...callbacks,
    App,
    onRender: () => ({ Container: RenderContainer })
  })(ctx, next);

  expect(callbacks.onError).toHaveBeenCalled();
  expect(callbacks.onError).toHaveBeenCalledWith(
    ctx,
    expect.objectContaining({
      message: expect.any(String)
    })
  );
  expect(next).toHaveBeenCalled();
});


test('passes router context to koa context', async () => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: { url: '/something-wrong' },
    response: {}
  };
  const { next } = callbacks;

  const ContextApp = () =>
    <Route
      render={({ staticContext }) => {
        staticContext.hello = 'world';
        return <div />;
      }}
    />;

  await koaReactRouter({
    App: ContextApp,
    ...callbacks
  })(ctx, next);

  expect(callbacks.onRedirect).not.toHaveBeenCalled();
  expect(callbacks.onError).not.toHaveBeenCalled();
  expect(ctx.response.body).toBeTruthy();
  expect(ctx.state.routerContext).toEqual({
    hello: 'world'
  });
});

test('sets doctype in response body', async () => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: { url: '/away' },
    response: {}
  };
  const { next } = callbacks;

  await koaReactRouter({
    App,
    ...callbacks
  })(ctx, next);

  expect(ctx.response.body.includes('I am away in a route')).toBe(true);
  expect(ctx.response.body.includes('<!doctype html>')).toBe(true);
  expect(next).toHaveBeenCalled();
});

test('calls preRender with StaticRouter as argument', async () => {
  const preRender = jest.fn();
  const callbacks = mockCallbacks();

  const ctx = {
    request: { url: '/away' },
    response: {}
  };
  const { next } = callbacks;

  await koaReactRouter({
    App,
    preRender,
    ...callbacks
  })(ctx, next);

  const expected = (
    <StaticRouter location={ctx.request.url} context={{}}>
      <App />
    </StaticRouter>
  );
  expect(preRender).toHaveBeenCalled();
  expect(preRender).toHaveBeenCalledWith(expected);
});

test('should throw an error if preRender callback doesn\'t return component', async () => {
  const preRender = () => {};
  const callbacks = mockCallbacks();

  const ctx = {
    request: { url: '/away' },
    response: {}
  };
  const { next } = callbacks;

  await koaReactRouter({
    App,
    preRender,
    ...callbacks
  })(ctx, next);

  expect(callbacks.onError).toHaveBeenCalled();
  expect(callbacks.onError).toHaveBeenCalledWith(
    expect.any(Object),
    expect.objectContaining({
      message: 'No component returned from preRender'
    })
  );
});

test('should render with specific root id', async () => {
  const id = 'root';
  const callbacks = mockCallbacks();
  const ctx = {
    request: {
      url: '/'
    },
    response: {}
  };
  const next = jest.fn();

  await koaReactRouter({
    App,
    id,
    ...callbacks
  })(ctx, next);

  expect(ctx.response.body).toEqual(expect.stringContaining(`<div id="root"><div id="the-app-proper"><div>I am Home</div>`));
});

test('should render with default root id if not supplied', async () => {
  const callbacks = mockCallbacks();
  const ctx = {
    request: {
      url: '/'
    },
    response: {}
  };
  const next = jest.fn();

  await koaReactRouter({
    App,
    ...callbacks
  })(ctx, next);

  expect(ctx.response.body).toEqual(expect.stringContaining(`<div id="app"><div id="the-app-proper"><div>I am Home</div>`));
});

