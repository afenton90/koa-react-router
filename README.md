# koa-react-router

koa 2 middleware for React server side rendering and routing with [react-router 4](https://github.com/ReactTraining/react-router).

> Looking for React Router 3 support see [v1](https://github.com/afenton90/koa-react-router/tree/v1.1.2) docs.
Try React Router 4 though it's awesome!

## Usage

To install `koa-react-router`:

```
  npm install koa-react-router react react-dom react-router --save
```

> Note: `react` `react-dom` & `react-router` are all `peerDependencies` of `koa-react-router`.
> This allows your application to easily keep up to date with the latest versions of the frameworks.

`koa-react-router` can be mounted easily in a koa 2 application like so:

```js
  // index.js
  import Koa from 'koa';
  import reactrouter from 'koa-react-router';
  import App from './App';
  import Container from './containers/PageContainer';

  const app = new Koa();

  app.use(reactrouter({
    App,
    onError: (ctx, err) => console.log('I Have failed!!!!'),
    onRedirect: (ctx, redirect) => console.log('I have redirected!'),
    onRender: (ctx) => ({ Container })
  }));
```

## API

`koa-react-router` requires the following parameters:

### `App`

The `App` config prop should be a react component that contains one or more React Router 4 `Route` components to be rendered.
For example:
```jsx
  // App.js
  import React from 'react';
  import { Route } from 'react-router';
  import Home from '../containers/Home';
  import Article from '../containers/Article';

 const App = () =>
    <div>
      <h1>This is my App!</h1>
      <Route path="/" component={Home} exact />
      <Route path="/article" component={Article} exact />
    </div>;

  // index.js
  // ...imports
  import App from './App';

  // ... koa app setup
  app.use(reactrouter({
    App,
    // Other callbacks
  }));  
```

### `onError`

Callback function called when an error occurs whilst route matching or rendering.  
The function accepts the following parameters:

* `ctx` - The Koa [`Context`](http://koajs.com/#context) object.
* `err` - The error that was caught when matching routes.

### `onRedirect`

Callback function called if a `Redirect` route is matched.  
The function accepts the following parameters:

* `ctx` - The Koa [`Context`](http://koajs.com/#context) object.
* `redirectUrl` - The url to redirect to.

### `onRender`

Callback function called before sending a response to the client.
This function must be supplied, and must return an object that contains the following property:

#### `Container`
This should be a React component that wraps around the rendered route.  
Typically this will be the template for the page, however this is not mandatory.  
As such this component is rendered using `renderToStaticMarkup`.  
The component must accept the `children` prop and insert it when rendered.
For example:  

```jsx
  // ./containers/Container
  import React from 'react';

  const Container = (props) =>
    <html lang="en">
      <head>
        <title>Hello Container</title>
      </head>
      <body>
        <div id="app">
          {props.children}
        </div>
      </body>
    </html>;

  export default Container;
```

This would then be supplied to `koa-react-router` via the `onRender` callback like so:

```js
  // index.js
  import Koa from 'koa';
  import reactrouter from 'koa-react-router';
  import App from './App';
  import Container from './containers/Container';

  const app = new Koa();

  app.use(reactrouter({
    App,
    onRender: (ctx) => ({ Container })
  }));
```

As well as the `Container` property this callback can optionally return:

#### `containerRenderer`

Optional function for handling the rendering of a container component.  
This function has one argument which is `view`. This argument is the currently rendered view of the app.  
This function may be used if some custom props need to be injected into the container component, such as an initial Redux state.  
This function should be used instead of the `Container` property when returning from `onRender`.  
For example you may want to render the container as follows:

```js
  // index.js
  import Koa from 'koa';
  import reactrouter from 'koa-react-router';
  // ...other imports

  const app = new Koa();

  const state = // Create state.

  app.use(reactrouter({
    App,
    onRender: (ctx) => ({
      containerRenderer: (view) =>
      <html lang="en">
        <head>
          <script dangerouslySetInnerHTML={{ __html: state}} />
        </head>
        <body>
          <p>hello container</p>
          <div dangerouslySetInnerHTML={{ __html: view }} />
        </body>
      </html>
    })
  }));
```

The final page render would look something like:

```html
<html lang="en">
  <head>
    <script>//State config</script>
  </head>
  <body>
    <p>hello container</p>
    <div>
      <!-- View html in here -->
    </div>
  </body>
</html>
```

## Router Context
React Router 4 added support for a [static router context](https://reacttraining.com/react-router/web/example/static-router) this context can be used in your application, to pass values from your router to other middleware and drive behaviour for routes.  
`koa-react-router` makes this context available on the koa `ctx` in the following location:  
```js
ctx.state.routerContext;
```

One example of using this context is setting a `status` in the route context so a later middleware can set that as this response code. 
The common use case of status is already taken care of. So if one of your routes sets a `status` prop whilst rendering that will be set as the response status See [Not found](#what-do-i-do-with-routes-that-are-not-found-) in the FAQ section for an example.  
Use the `routerContext` for whatever you want in your app, some common recipes will be added to this repo at a later date.

## FAQ

This release includes some deprecated props. As React Router has come with some major changes so has `koa-react-router`.

### No more routes prop ?
The `routes` prop has gone in favour of the `App` config prop. Where you would have passed in your static routes before you can now pass in your `App` component that contains the React Router routes. For example:

```jsx
// App.js
  import React from 'react';
  import { Route } from 'react-router';
  import Home from '../containers/Home';
  import Article from '../containers/Article';

  const App = () =>
    <div>
      <h1>This is my App!</h1>
      <Route path="/" component={Home} exact />
      <Route path="/article" component={Article} exact />
    </div>;
```
React Router 4 gives you the flexibility to define your routes wherever you want in your app, and so does `koa-react-router`.

### What do I do with routes that are not found ?
The previous version of `koa-react-router` supported a `onNotFound` callback. This has been deprecated in favour of defining a `status` prop on the React Router static context and using a `Switch` component in your app. For example, our `App` component may be written as:

```jsx
  import React from 'react';
  import { Route, Switch } from 'react-router';
  import Home from '../containers/Home';
  import Article from '../containers/Article';

  const NotFound = ({ status }) =>
    <Route
      render={({ staticContext }) => {
        if (staticContext) staticContext.status = status;
        return <div>This route has not been found Soz!</div>;
      }}
    />;

  const App = () =>
    <div>
      <h1>This is my App!</h1>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/article" component={Article} exact />
        <NotFound status={404} />
      </Switch>
    </div>;
```

If not other routes are matched the `NotFound` component will be rendered, and `koa-react-router` will set the response code status.
