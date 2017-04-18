import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

const server = ({
  routes,
  onError,
  onRedirect,
  onNotFound,
  onRender
}) =>
  async (ctx, next) => {
    const location = ctx.request.url;
    await match({ routes, location },
      async (err, redirect, props) => {
        if (redirect) await onRedirect(ctx, redirect);
        else if (err) await onError(ctx, err);
        else if (!props) await onNotFound(ctx);
        else {
          const {
            Container,
            RouterContainer,
            containerRenderer
          } = await onRender(ctx);

          let view;
          if (RouterContainer) {
            try {
              view = renderToString((
                <RouterContainer>
                  <RouterContext {...props} />
                </RouterContainer>
              ));
            } catch (e) {
              onError(ctx, e);
            }
          } else {
            view = renderToString(<RouterContext {...props} />);
          }

          let rendered;
          if (containerRenderer) {
            try {
              rendered = renderToStaticMarkup(containerRenderer(view));
            } catch (e) {
              onError(ctx, e);
            }
          } else {
            try {
              rendered = renderToStaticMarkup(
                <Container>
                  <div dangerouslySetInnerHTML={{ __html: view }} />
                </Container>
              );
            } catch (e) {
              onError(ctx, e);
            }
          }
          ctx.response.body = rendered;
        }
        await next();
      }
    );
  };

export default server;
