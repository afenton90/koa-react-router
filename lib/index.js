"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = ({
  App,
  onError,
  onRedirect,
  onRender,
  preRender = router => router,
  id = 'app'
}) => async (ctx, next) => {
  try {
    const location = ctx.request.url;
    const routerContext = {};

    const router = _react.default.createElement(_reactRouter.StaticRouter, {
      location: location,
      context: routerContext
    }, _react.default.createElement(App, null));

    const updatedComponent = await preRender(router);
    if (!updatedComponent) throw new Error('No component returned from preRender');
    const view = (0, _server.renderToString)(updatedComponent);
    ctx.state = { ...ctx.state,
      routerContext
    };
    if (routerContext.url) await onRedirect(ctx, routerContext.url);else {
      const {
        Container,
        containerRenderer
      } = await onRender(ctx);
      let rendered;

      if (containerRenderer) {
        rendered = (0, _server.renderToStaticMarkup)(containerRenderer(view));
      } else {
        rendered = (0, _server.renderToStaticMarkup)(_react.default.createElement(Container, null, _react.default.createElement("div", {
          id: id,
          dangerouslySetInnerHTML: {
            __html: view
          }
        })));
      }

      if (routerContext.status) ctx.response.status = routerContext.status;
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

var _default = server;
exports.default = _default;