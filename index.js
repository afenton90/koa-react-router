import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';

const server = ({
  App,
  onError,
  onRedirect,
  onNotFound,
  onRender
}) =>
  async (ctx, next) => {
    const location = ctx.request.url;
    const routerContext = {};
    try {
      const view = renderToString(
        <StaticRouter
          location={location}
          context={routerContext}
        >
          <App />
        </StaticRouter>
      );

      if (routerContext.url) await onRedirect(ctx, routerContext.url);
      else {
        const {
          Container,
          containerRenderer
        } = await onRender(ctx);
        
        let rendered;
        if (containerRenderer) {
          rendered = renderToStaticMarkup(containerRenderer(view));
        } else {
          rendered = renderToStaticMarkup(
            <Container>
              <div dangerouslySetInnerHTML={{ __html: view }} />
            </Container>
          );
        }
        ctx.response.body = rendered;
      }
    } catch (err) {
      await onError(ctx, err);
    } finally {
      await next();
    }
  };

export default server;
