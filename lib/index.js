'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _server = require('react-dom/server');
var _reactRouter = require('react-router');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}

var server = function server(_ref) {var
  App = _ref.App,
  onError = _ref.onError,
  onRedirect = _ref.onRedirect,
  onRender = _ref.onRender,_ref$preRender = _ref.
  preRender,preRender = _ref$preRender === undefined ? function (router) {return router;} : _ref$preRender;return function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(

    function _callee(ctx, next) {var location, routerContext, router, updatedComponent, view, _ref3, Container, containerRenderer, rendered;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;

              location = ctx.request.url;
              routerContext = {};

              router =
              _react2.default.createElement(_reactRouter.StaticRouter, {
                  location: location,
                  context: routerContext },

                _react2.default.createElement(App, null));_context.next = 6;return (



                preRender(router));case 6:updatedComponent = _context.sent;if (

              updatedComponent) {_context.next = 9;break;}throw new Error('No component returned from preRender');case 9:

              view = (0, _server.renderToString)(updatedComponent);

              ctx.state = _extends({},
              ctx.state, {
                routerContext: routerContext });if (!


              routerContext.url) {_context.next = 16;break;}_context.next = 14;return onRedirect(ctx, routerContext.url);case 14:_context.next = 25;break;case 16:_context.next = 18;return (




                onRender(ctx));case 18:_ref3 = _context.sent;Container = _ref3.Container;containerRenderer = _ref3.containerRenderer;

              rendered = void 0;
              if (containerRenderer) {
                rendered = (0, _server.renderToStaticMarkup)(containerRenderer(view));
              } else {
                rendered = (0, _server.renderToStaticMarkup)(
                _react2.default.createElement(Container, null,
                  _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: view } })));


              }

              if (routerContext.status) ctx.response.status = routerContext.status;
              ctx.response.body = '\n          <!doctype html>\n          ' +

              rendered + '\n        ';case 25:_context.next = 31;break;case 27:_context.prev = 27;_context.t0 = _context['catch'](0);_context.next = 31;return (



                onError(ctx, _context.t0));case 31:_context.prev = 31;_context.next = 34;return (

                next());case 34:return _context.finish(31);case 35:case 'end':return _context.stop();}}}, _callee, undefined, [[0, 27, 31, 35]]);}));return function (_x, _x2) {return _ref2.apply(this, arguments);};}();};exports.default =



server;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbInNlcnZlciIsIkFwcCIsIm9uRXJyb3IiLCJvblJlZGlyZWN0Iiwib25SZW5kZXIiLCJwcmVSZW5kZXIiLCJyb3V0ZXIiLCJjdHgiLCJuZXh0IiwibG9jYXRpb24iLCJyZXF1ZXN0IiwidXJsIiwicm91dGVyQ29udGV4dCIsInVwZGF0ZWRDb21wb25lbnQiLCJFcnJvciIsInZpZXciLCJzdGF0ZSIsIkNvbnRhaW5lciIsImNvbnRhaW5lclJlbmRlcmVyIiwicmVuZGVyZWQiLCJfX2h0bWwiLCJzdGF0dXMiLCJyZXNwb25zZSIsImJvZHkiXSwibWFwcGluZ3MiOiJrVUFBQSw4QjtBQUNBO0FBQ0EsMkM7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTO0FBQ2JDLEtBRGEsUUFDYkEsR0FEYTtBQUViQyxTQUZhLFFBRWJBLE9BRmE7QUFHYkMsWUFIYSxRQUdiQSxVQUhhO0FBSWJDLFVBSmEsUUFJYkEsUUFKYTtBQUtiQyxXQUxhLENBS2JBLFNBTGEsa0NBS0QsMEJBQVVDLE1BQVYsRUFMQzs7QUFPYixxQkFBT0MsR0FBUCxFQUFZQyxJQUFaOztBQUVVQyxzQkFGVixHQUVxQkYsSUFBSUcsT0FBSixDQUFZQyxHQUZqQztBQUdVQywyQkFIVixHQUcwQixFQUgxQjs7QUFLVU4sb0JBTFY7QUFNTTtBQUNFLDRCQUFVRyxRQURaO0FBRUUsMkJBQVNHLGFBRlg7O0FBSUUsOENBQUMsR0FBRCxPQUpGLENBTk47Ozs7QUFjbUNQLDBCQUFVQyxNQUFWLENBZG5DLFNBY1VPLGdCQWRWOztBQWdCU0EsOEJBaEJULGtDQWdCaUMsSUFBSUMsS0FBSixDQUFVLHNDQUFWLENBaEJqQzs7QUFrQlVDLGtCQWxCVixHQWtCaUIsNEJBQWVGLGdCQUFmLENBbEJqQjs7QUFvQklOLGtCQUFJUyxLQUFKO0FBQ0tULGtCQUFJUyxLQURUO0FBRUVKLDRDQUZGLElBcEJKOzs7QUF5QlFBLDRCQUFjRCxHQXpCdEIsdURBeUJpQ1IsV0FBV0ksR0FBWCxFQUFnQkssY0FBY0QsR0FBOUIsQ0F6QmpDOzs7OztBQThCZ0JQLHlCQUFTRyxHQUFULENBOUJoQixnQ0E0QlFVLFNBNUJSLFNBNEJRQSxTQTVCUixDQTZCUUMsaUJBN0JSLFNBNkJRQSxpQkE3QlI7O0FBZ0NVQyxzQkFoQ1Y7QUFpQ00sa0JBQUlELGlCQUFKLEVBQXVCO0FBQ3JCQywyQkFBVyxrQ0FBcUJELGtCQUFrQkgsSUFBbEIsQ0FBckIsQ0FBWDtBQUNELGVBRkQsTUFFTztBQUNMSSwyQkFBVztBQUNULDhDQUFDLFNBQUQ7QUFDRSx5REFBSyx5QkFBeUIsRUFBRUMsUUFBUUwsSUFBVixFQUE5QixHQURGLENBRFMsQ0FBWDs7O0FBS0Q7O0FBRUQsa0JBQUlILGNBQWNTLE1BQWxCLEVBQTBCZCxJQUFJZSxRQUFKLENBQWFELE1BQWIsR0FBc0JULGNBQWNTLE1BQXBDO0FBQzFCZCxrQkFBSWUsUUFBSixDQUFhQyxJQUFiOztBQUVJSixzQkFGSixnQkE1Q047Ozs7QUFrRFVqQix3QkFBUUssR0FBUixjQWxEVjs7QUFvRFVDLHNCQXBEViw0SEFQYSx5RUFBZixDOzs7O0FBK0RlUixNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nLCByZW5kZXJUb1N0YXRpY01hcmt1cCB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuY29uc3Qgc2VydmVyID0gKHtcbiAgQXBwLFxuICBvbkVycm9yLFxuICBvblJlZGlyZWN0LFxuICBvblJlbmRlcixcbiAgcHJlUmVuZGVyID0gcm91dGVyID0+IHJvdXRlclxufSkgPT5cbiAgYXN5bmMgKGN0eCwgbmV4dCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBsb2NhdGlvbiA9IGN0eC5yZXF1ZXN0LnVybDtcbiAgICAgIGNvbnN0IHJvdXRlckNvbnRleHQgPSB7fTtcblxuICAgICAgY29uc3Qgcm91dGVyID0gKFxuICAgICAgICA8U3RhdGljUm91dGVyXG4gICAgICAgICAgbG9jYXRpb249e2xvY2F0aW9ufVxuICAgICAgICAgIGNvbnRleHQ9e3JvdXRlckNvbnRleHR9XG4gICAgICAgID5cbiAgICAgICAgICA8QXBwIC8+XG4gICAgICAgIDwvU3RhdGljUm91dGVyPlxuICAgICAgKTtcblxuICAgICAgY29uc3QgdXBkYXRlZENvbXBvbmVudCA9IGF3YWl0IHByZVJlbmRlcihyb3V0ZXIpO1xuXG4gICAgICBpZiAoIXVwZGF0ZWRDb21wb25lbnQpIHRocm93IG5ldyBFcnJvcignTm8gY29tcG9uZW50IHJldHVybmVkIGZyb20gcHJlUmVuZGVyJyk7XG5cbiAgICAgIGNvbnN0IHZpZXcgPSByZW5kZXJUb1N0cmluZyh1cGRhdGVkQ29tcG9uZW50KTtcblxuICAgICAgY3R4LnN0YXRlID0ge1xuICAgICAgICAuLi5jdHguc3RhdGUsXG4gICAgICAgIHJvdXRlckNvbnRleHRcbiAgICAgIH07XG5cbiAgICAgIGlmIChyb3V0ZXJDb250ZXh0LnVybCkgYXdhaXQgb25SZWRpcmVjdChjdHgsIHJvdXRlckNvbnRleHQudXJsKTtcbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgQ29udGFpbmVyLFxuICAgICAgICAgIGNvbnRhaW5lclJlbmRlcmVyXG4gICAgICAgIH0gPSBhd2FpdCBvblJlbmRlcihjdHgpO1xuXG4gICAgICAgIGxldCByZW5kZXJlZDtcbiAgICAgICAgaWYgKGNvbnRhaW5lclJlbmRlcmVyKSB7XG4gICAgICAgICAgcmVuZGVyZWQgPSByZW5kZXJUb1N0YXRpY01hcmt1cChjb250YWluZXJSZW5kZXJlcih2aWV3KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVuZGVyZWQgPSByZW5kZXJUb1N0YXRpY01hcmt1cChcbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB2aWV3IH19IC8+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvdXRlckNvbnRleHQuc3RhdHVzKSBjdHgucmVzcG9uc2Uuc3RhdHVzID0gcm91dGVyQ29udGV4dC5zdGF0dXM7XG4gICAgICAgIGN0eC5yZXNwb25zZS5ib2R5ID0gYFxuICAgICAgICAgIDwhZG9jdHlwZSBodG1sPlxuICAgICAgICAgICR7cmVuZGVyZWR9XG4gICAgICAgIGA7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhd2FpdCBvbkVycm9yKGN0eCwgZXJyKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgYXdhaXQgbmV4dCgpO1xuICAgIH1cbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQgc2VydmVyO1xuIl19