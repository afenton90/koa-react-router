'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _server = require('react-dom/server');
var _reactRouter = require('react-router');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}

var server = function server(_ref) {var
  App = _ref.App,
  onError = _ref.onError,
  onRedirect = _ref.onRedirect,
  onRender = _ref.onRender;return function () {var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(

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

              ctx.response.status = routerContext.status || 200;
              ctx.response.body = '\n          <!doctype html>\n          ' +

              rendered + '\n        ';case 19:_context.next = 25;break;case 21:_context.prev = 21;_context.t0 = _context['catch'](0);_context.next = 25;return (



                onError(ctx, _context.t0));case 25:_context.prev = 25;_context.next = 28;return (

                next());case 28:return _context.finish(25);case 29:case 'end':return _context.stop();}}}, _callee, undefined, [[0, 21, 25, 29]]);}));return function (_x, _x2) {return _ref2.apply(this, arguments);};}();};exports.default =



server;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbInNlcnZlciIsIkFwcCIsIm9uRXJyb3IiLCJvblJlZGlyZWN0Iiwib25SZW5kZXIiLCJjdHgiLCJuZXh0IiwibG9jYXRpb24iLCJyZXF1ZXN0IiwidXJsIiwicm91dGVyQ29udGV4dCIsInZpZXciLCJzdGF0ZSIsIkNvbnRhaW5lciIsImNvbnRhaW5lclJlbmRlcmVyIiwicmVuZGVyZWQiLCJfX2h0bWwiLCJyZXNwb25zZSIsInN0YXR1cyIsImJvZHkiXSwibWFwcGluZ3MiOiJrVUFBQSw4QjtBQUNBO0FBQ0EsMkM7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTO0FBQ2JDLEtBRGEsUUFDYkEsR0FEYTtBQUViQyxTQUZhLFFBRWJBLE9BRmE7QUFHYkMsWUFIYSxRQUdiQSxVQUhhO0FBSWJDLFVBSmEsUUFJYkEsUUFKYTs7QUFNYixxQkFBT0MsR0FBUCxFQUFZQyxJQUFaOztBQUVVQyxzQkFGVixHQUVxQkYsSUFBSUcsT0FBSixDQUFZQyxHQUZqQztBQUdVQywyQkFIVixHQUcwQixFQUgxQjs7QUFLVUMsa0JBTFYsR0FLaUI7QUFDWDtBQUNFLDRCQUFVSixRQURaO0FBRUUsMkJBQVNHLGFBRlg7O0FBSUUsOENBQUMsR0FBRCxPQUpGLENBRFcsQ0FMakI7Ozs7QUFjSUwsa0JBQUlPLEtBQUo7QUFDS1Asa0JBQUlPLEtBRFQ7QUFFRUYsNENBRkYsSUFkSjs7O0FBbUJRQSw0QkFBY0QsR0FuQnRCLHNEQW1CaUNOLFdBQVdFLEdBQVgsRUFBZ0JLLGNBQWNELEdBQTlCLENBbkJqQzs7Ozs7QUF3QmdCTCx5QkFBU0MsR0FBVCxDQXhCaEIsZ0NBc0JRUSxTQXRCUixTQXNCUUEsU0F0QlIsQ0F1QlFDLGlCQXZCUixTQXVCUUEsaUJBdkJSOztBQTBCVUMsc0JBMUJWO0FBMkJNLGtCQUFJRCxpQkFBSixFQUF1QjtBQUNyQkMsMkJBQVcsa0NBQXFCRCxrQkFBa0JILElBQWxCLENBQXJCLENBQVg7QUFDRCxlQUZELE1BRU87QUFDTEksMkJBQVc7QUFDVCw4Q0FBQyxTQUFEO0FBQ0UseURBQUsseUJBQXlCLEVBQUVDLFFBQVFMLElBQVYsRUFBOUIsR0FERixDQURTLENBQVg7OztBQUtEOztBQUVETixrQkFBSVksUUFBSixDQUFhQyxNQUFiLEdBQXNCUixjQUFjUSxNQUFkLElBQXdCLEdBQTlDO0FBQ0FiLGtCQUFJWSxRQUFKLENBQWFFLElBQWI7O0FBRUlKLHNCQUZKLGdCQXRDTjs7OztBQTRDVWIsd0JBQVFHLEdBQVIsY0E1Q1Y7O0FBOENVQyxzQkE5Q1YsNEhBTmEseUVBQWYsQzs7OztBQXdEZU4sTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZywgcmVuZGVyVG9TdGF0aWNNYXJrdXAgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmNvbnN0IHNlcnZlciA9ICh7XG4gIEFwcCxcbiAgb25FcnJvcixcbiAgb25SZWRpcmVjdCxcbiAgb25SZW5kZXJcbn0pID0+XG4gIGFzeW5jIChjdHgsIG5leHQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbG9jYXRpb24gPSBjdHgucmVxdWVzdC51cmw7XG4gICAgICBjb25zdCByb3V0ZXJDb250ZXh0ID0ge307XG5cbiAgICAgIGNvbnN0IHZpZXcgPSByZW5kZXJUb1N0cmluZyhcbiAgICAgICAgPFN0YXRpY1JvdXRlclxuICAgICAgICAgIGxvY2F0aW9uPXtsb2NhdGlvbn1cbiAgICAgICAgICBjb250ZXh0PXtyb3V0ZXJDb250ZXh0fVxuICAgICAgICA+XG4gICAgICAgICAgPEFwcCAvPlxuICAgICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICAgICk7XG5cbiAgICAgIGN0eC5zdGF0ZSA9IHtcbiAgICAgICAgLi4uY3R4LnN0YXRlLFxuICAgICAgICByb3V0ZXJDb250ZXh0XG4gICAgICB9O1xuXG4gICAgICBpZiAocm91dGVyQ29udGV4dC51cmwpIGF3YWl0IG9uUmVkaXJlY3QoY3R4LCByb3V0ZXJDb250ZXh0LnVybCk7XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIENvbnRhaW5lcixcbiAgICAgICAgICBjb250YWluZXJSZW5kZXJlclxuICAgICAgICB9ID0gYXdhaXQgb25SZW5kZXIoY3R4KTtcblxuICAgICAgICBsZXQgcmVuZGVyZWQ7XG4gICAgICAgIGlmIChjb250YWluZXJSZW5kZXJlcikge1xuICAgICAgICAgIHJlbmRlcmVkID0gcmVuZGVyVG9TdGF0aWNNYXJrdXAoY29udGFpbmVyUmVuZGVyZXIodmlldykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlbmRlcmVkID0gcmVuZGVyVG9TdGF0aWNNYXJrdXAoXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdmlldyB9fSAvPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5yZXNwb25zZS5zdGF0dXMgPSByb3V0ZXJDb250ZXh0LnN0YXR1cyB8fCAyMDA7XG4gICAgICAgIGN0eC5yZXNwb25zZS5ib2R5ID0gYFxuICAgICAgICAgIDwhZG9jdHlwZSBodG1sPlxuICAgICAgICAgICR7cmVuZGVyZWR9XG4gICAgICAgIGA7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhd2FpdCBvbkVycm9yKGN0eCwgZXJyKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgYXdhaXQgbmV4dCgpO1xuICAgIH1cbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQgc2VydmVyO1xuIl19