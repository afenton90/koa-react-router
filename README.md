# koa-react-router

koa 2 middleware for React server side rendering and routing with [react-router](https://github.com/ReactTraining/react-router).

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
  import routes from './routes';
  import Container from './containers/PageContainer';
  import RouterContainer from './containers/RouterContainer';

  const app = new Koa();

  app.use(reactrouter({
    routes,
    onError: (ctx, err) => console.log('I Have failed!!!!'),
    onRedirect: (ctx, redirect) => console.log('I have redirected!'),
    onNotFound: (ctx) => console.log('Not Found!!!'),
    onRender: (ctx) => ({ Container, RouterContainer })
  }));
```

## API

`koa-react-router` requires the following parameters:

### routes

The `react-router` routes to use for the application. For example:
```jsx
  // routes.js
  import React from 'react';
  import { Route, IndexRoute } from 'react-router';
  import Home from '../containers/Home';
  import Article from '../containers/Article';

  module.exports = (
    <Route path="/">
      <IndexRoute component={Home} />
      <Route path="/article" component={Article} />
    </Route>
  );

  // index.js
  // ...imports
  import routes from './routes';

  // ... koa app setup
  app.use(reactrouter({
    routes: routes,
    // Other callbacks
  }));  
```

### onError

Callback function called when an error occurs whilst route matching.  
The function accepts the following parameters:

* `ctx` - The Koa [`Context`](http://koajs.com/#context) object.
* `err` - The error that occured whilst route matching. See [react-router](https://github.com/ReactTraining/react-router/blob/master/docs/API.md#match-routes-location-history-options--cb) docs for more details.

### onRedirect

Callback function called if the route is match to a redirect.  
The function accepts the following parameters:

* `ctx` - The Koa [`Context`](http://koajs.com/#context) object.
* `redirect` - The Location object for the route. See [react-router](https://github.com/ReactTraining/react-router/blob/master/docs/API.md#match-routes-location-history-options--cb) docs for more details.

### onNotFound

Callback function called if no route matches the requested url.  
The function accepts the following parameters:

* `ctx` - The Koa [`Context`](http://koajs.com/#context) object.

### onRender

Callback function called before rendering a route.  
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
  import routes from './routes';
  import Container from './containers/Container';

  const app = new Koa();

  app.use(reactrouter({
    routes,
    onRender: (ctx) => ({ Container })
  }));
```

As well as the `Container` property this callback can optionally return:

#### `RouterContainer`

Optional React component that is immediatley wrappered around the routes.
If supplied this component will sit between the `Container` component and the `routes`.  
For example:

```jsx
  <Container>
    <RouterContainer>
      {routes}
    </RouterContainer>
  </Container>
```
As such this component is rendered using `renderToString` meaning it has the react attributes it would have when rendered in a browser.  
The component must accept the `children` prop and insert it when rendered.
Full example:

```jsx
  // ./containers/RouterContainer
  import React from 'react';

  const RouterContainer = (props) =>
    <div>
      <p>Hello routes</p>
      {props.children}
    </div>;

  export default RouterContainer;
```

This would then be supplied to `koa-react-router` via the `onRender` callback like so:

```js
  // index.js
  import Koa from 'koa';
  import reactrouter from 'koa-react-router';
  import routes from './routes';
  import Container from './containers/Container';
  import RouterContainer from './containers/RouterContainer';

  const app = new Koa();

  app.use(reactrouter({
    routes,
    onRender: (ctx) => ({ Container, RouterContainer })
  }));
```

This component could also be a `Provider` containing a `redux` store.
A full example when using redux is coming soon.
