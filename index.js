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
            Wrapper
          } = await onRender(ctx);
          let view;
          if (Wrapper) {
            view = renderToString((
              <Wrapper>
                <RouterContext {...props} />
              </Wrapper>
            ));
          } else {
            view = renderToString(<RouterContext {...props} />);
          }

          // Render container to static
          const rendered = renderToStaticMarkup(
            <Container>
              <div dangerouslySetInnerHTML={{ __html: view }} />
            </Container>
          );

          ctx.response.body = rendered;
        }
        await next();
      }
    );
  };

export default server;
