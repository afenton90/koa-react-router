'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _server = require('react-dom/server');
var _reactRouter = require('react-router');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}

var server = function server(_ref) {var
  App = _ref.App,
  onError = _ref.onError,
  onRedirect = _ref.onRedirect,
  onRender = _ref.onRender;return function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(

    function _callee(ctx, next) {var location, routerContext, view, _ref3, Container, containerRenderer, rendered;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;

              location = ctx.request.url;
              routerContext = {};

              view = (0, _server.renderToString)(
              _react2.default.createElement(_reactRouter.StaticRouter, {
                  location: location,
                  context: routerContext },

                _react2.default.createElement(App, null)));



              ctx.state = _extends({},
              ctx.state, {
                routerContext: routerContext });if (!


              routerContext.url) {_context.next = 10;break;}_context.next = 8;return onRedirect(ctx, routerContext.url);case 8:_context.next = 19;break;case 10:_context.next = 12;return (




                onRender(ctx));case 12:_ref3 = _context.sent;Container = _ref3.Container;containerRenderer = _ref3.containerRenderer;

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

              rendered + '\n        ';case 19:_context.next = 25;break;case 21:_context.prev = 21;_context.t0 = _context['catch'](0);_context.next = 25;return (



                onError(ctx, _context.t0));case 25:_context.prev = 25;_context.next = 28;return (

                next());case 28:return _context.finish(25);case 29:case 'end':return _context.stop();}}}, _callee, undefined, [[0, 21, 25, 29]]);}));return function (_x, _x2) {return _ref2.apply(this, arguments);};}();};exports.default =



server;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbInNlcnZlciIsIkFwcCIsIm9uRXJyb3IiLCJvblJlZGlyZWN0Iiwib25SZW5kZXIiLCJjdHgiLCJuZXh0IiwibG9jYXRpb24iLCJyZXF1ZXN0IiwidXJsIiwicm91dGVyQ29udGV4dCIsInZpZXciLCJzdGF0ZSIsIkNvbnRhaW5lciIsImNvbnRhaW5lclJlbmRlcmVyIiwicmVuZGVyZWQiLCJfX2h0bWwiLCJzdGF0dXMiLCJyZXNwb25zZSIsImJvZHkiXSwibWFwcGluZ3MiOiJrVUFBQSw4QjtBQUNBO0FBQ0EsMkM7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTO0FBQ2JDLEtBRGEsUUFDYkEsR0FEYTtBQUViQyxTQUZhLFFBRWJBLE9BRmE7QUFHYkMsWUFIYSxRQUdiQSxVQUhhO0FBSWJDLFVBSmEsUUFJYkEsUUFKYTs7QUFNYixxQkFBT0MsR0FBUCxFQUFZQyxJQUFaOztBQUVVQyxzQkFGVixHQUVxQkYsSUFBSUcsT0FBSixDQUFZQyxHQUZqQztBQUdVQywyQkFIVixHQUcwQixFQUgxQjs7QUFLVUMsa0JBTFYsR0FLaUI7QUFDWDtBQUNFLDRCQUFVSixRQURaO0FBRUUsMkJBQVNHLGFBRlg7O0FBSUUsOENBQUMsR0FBRCxPQUpGLENBRFcsQ0FMakI7Ozs7QUFjSUwsa0JBQUlPLEtBQUo7QUFDS1Asa0JBQUlPLEtBRFQ7QUFFRUYsNENBRkYsSUFkSjs7O0FBbUJRQSw0QkFBY0QsR0FuQnRCLHNEQW1CaUNOLFdBQVdFLEdBQVgsRUFBZ0JLLGNBQWNELEdBQTlCLENBbkJqQzs7Ozs7QUF3QmdCTCx5QkFBU0MsR0FBVCxDQXhCaEIsZ0NBc0JRUSxTQXRCUixTQXNCUUEsU0F0QlIsQ0F1QlFDLGlCQXZCUixTQXVCUUEsaUJBdkJSOztBQTBCVUMsc0JBMUJWO0FBMkJNLGtCQUFJRCxpQkFBSixFQUF1QjtBQUNyQkMsMkJBQVcsa0NBQXFCRCxrQkFBa0JILElBQWxCLENBQXJCLENBQVg7QUFDRCxlQUZELE1BRU87QUFDTEksMkJBQVc7QUFDVCw4Q0FBQyxTQUFEO0FBQ0UseURBQUsseUJBQXlCLEVBQUVDLFFBQVFMLElBQVYsRUFBOUIsR0FERixDQURTLENBQVg7OztBQUtEOztBQUVELGtCQUFJRCxjQUFjTyxNQUFsQixFQUEwQlosSUFBSWEsUUFBSixDQUFhRCxNQUFiLEdBQXNCUCxjQUFjTyxNQUFwQztBQUMxQlosa0JBQUlhLFFBQUosQ0FBYUMsSUFBYjs7QUFFSUosc0JBRkosZ0JBdENOOzs7O0FBNENVYix3QkFBUUcsR0FBUixjQTVDVjs7QUE4Q1VDLHNCQTlDViw0SEFOYSx5RUFBZixDOzs7O0FBd0RlTixNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nLCByZW5kZXJUb1N0YXRpY01hcmt1cCB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuY29uc3Qgc2VydmVyID0gKHtcbiAgQXBwLFxuICBvbkVycm9yLFxuICBvblJlZGlyZWN0LFxuICBvblJlbmRlclxufSkgPT5cbiAgYXN5bmMgKGN0eCwgbmV4dCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBsb2NhdGlvbiA9IGN0eC5yZXF1ZXN0LnVybDtcbiAgICAgIGNvbnN0IHJvdXRlckNvbnRleHQgPSB7fTtcblxuICAgICAgY29uc3QgdmlldyA9IHJlbmRlclRvU3RyaW5nKFxuICAgICAgICA8U3RhdGljUm91dGVyXG4gICAgICAgICAgbG9jYXRpb249e2xvY2F0aW9ufVxuICAgICAgICAgIGNvbnRleHQ9e3JvdXRlckNvbnRleHR9XG4gICAgICAgID5cbiAgICAgICAgICA8QXBwIC8+XG4gICAgICAgIDwvU3RhdGljUm91dGVyPlxuICAgICAgKTtcblxuICAgICAgY3R4LnN0YXRlID0ge1xuICAgICAgICAuLi5jdHguc3RhdGUsXG4gICAgICAgIHJvdXRlckNvbnRleHRcbiAgICAgIH07XG5cbiAgICAgIGlmIChyb3V0ZXJDb250ZXh0LnVybCkgYXdhaXQgb25SZWRpcmVjdChjdHgsIHJvdXRlckNvbnRleHQudXJsKTtcbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgQ29udGFpbmVyLFxuICAgICAgICAgIGNvbnRhaW5lclJlbmRlcmVyXG4gICAgICAgIH0gPSBhd2FpdCBvblJlbmRlcihjdHgpO1xuXG4gICAgICAgIGxldCByZW5kZXJlZDtcbiAgICAgICAgaWYgKGNvbnRhaW5lclJlbmRlcmVyKSB7XG4gICAgICAgICAgcmVuZGVyZWQgPSByZW5kZXJUb1N0YXRpY01hcmt1cChjb250YWluZXJSZW5kZXJlcih2aWV3KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVuZGVyZWQgPSByZW5kZXJUb1N0YXRpY01hcmt1cChcbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB2aWV3IH19IC8+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvdXRlckNvbnRleHQuc3RhdHVzKSBjdHgucmVzcG9uc2Uuc3RhdHVzID0gcm91dGVyQ29udGV4dC5zdGF0dXM7XG4gICAgICAgIGN0eC5yZXNwb25zZS5ib2R5ID0gYFxuICAgICAgICAgIDwhZG9jdHlwZSBodG1sPlxuICAgICAgICAgICR7cmVuZGVyZWR9XG4gICAgICAgIGA7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhd2FpdCBvbkVycm9yKGN0eCwgZXJyKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgYXdhaXQgbmV4dCgpO1xuICAgIH1cbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQgc2VydmVyO1xuIl19