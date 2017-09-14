import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';

const server = ({
  App,
  onError,
  onRedirect,
  onRender
}) =>
  async (ctx, next) => {
    try {
      const location = ctx.request.url;
      const routerContext = {};

      const view = renderToString(
        <StaticRouter
          location={location}
          context={routerContext}
        >
          <App />
        </StaticRouter>
      );

      ctx.state = {
        ...ctx.state,
        routerContext
      };

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

        ctx.response.status = routerContext.status || ctx.response.status;
        ctx.response.body = `
          <!doctype html>
          ${rendered}
        `;
      }
    } catch (err) {
      await onError(ctx, err);
    } finally {
      await next();
    }
  };

export default server;
