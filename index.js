import React from 'react';
import { renderToString } from 'react-dom/server';
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
            RouterContainer
          } = await onRender(ctx);

          let view;
          if (RouterContainer) {
            view = (
              <RouterContainer>
                <RouterContext {...props} />
              </RouterContainer>
            );
          } else {
            view = <RouterContext {...props} />;
          }

          const rendered = renderToString(
            <Container>
              {view}
            </Container>
          );

          ctx.response.body = rendered;
        }
        await next();
      }
    );
  };

export default server;
