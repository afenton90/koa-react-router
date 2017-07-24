'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _server = require('react-dom/server');
var _reactRouter = require('react-router');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}

var server = function server(_ref) {var
  App = _ref.App,
  onError = _ref.onError,
  onRedirect = _ref.onRedirect,
  onRender = _ref.onRender;return function () {var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(

    function _callee(ctx, next) {var location, routerContext, view, _ref3, Container, containerRenderer, rendered;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              location = ctx.request.url;
              routerContext = {};_context.prev = 2;

              view = (0, _server.renderToString)(
              _react2.default.createElement(_reactRouter.StaticRouter, {
                  location: location,
                  context: routerContext },

                _react2.default.createElement(App, null)));if (!



              routerContext.url) {_context.next = 9;break;}_context.next = 7;return onRedirect(ctx, routerContext.url);case 7:_context.next = 18;break;case 9:_context.next = 11;return (




                onRender(ctx));case 11:_ref3 = _context.sent;Container = _ref3.Container;containerRenderer = _ref3.containerRenderer;

              rendered = void 0;
              if (containerRenderer) {
                rendered = (0, _server.renderToStaticMarkup)(containerRenderer(view));
              } else {
                rendered = (0, _server.renderToStaticMarkup)(
                _react2.default.createElement(Container, null,
                  _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: view } })));


              }

              ctx.response.status = routerContext.status || 200;
              ctx.response.body = rendered;case 18:_context.next = 24;break;case 20:_context.prev = 20;_context.t0 = _context['catch'](2);_context.next = 24;return (


                onError(ctx, _context.t0));case 24:_context.prev = 24;_context.next = 27;return (

                next());case 27:return _context.finish(24);case 28:case 'end':return _context.stop();}}}, _callee, undefined, [[2, 20, 24, 28]]);}));return function (_x, _x2) {return _ref2.apply(this, arguments);};}();};exports.default =



server;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbInNlcnZlciIsIkFwcCIsIm9uRXJyb3IiLCJvblJlZGlyZWN0Iiwib25SZW5kZXIiLCJjdHgiLCJuZXh0IiwibG9jYXRpb24iLCJyZXF1ZXN0IiwidXJsIiwicm91dGVyQ29udGV4dCIsInZpZXciLCJDb250YWluZXIiLCJjb250YWluZXJSZW5kZXJlciIsInJlbmRlcmVkIiwiX19odG1sIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJib2R5Il0sIm1hcHBpbmdzIjoiMkVBQUEsOEI7QUFDQTtBQUNBLDJDOztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUztBQUNiQyxLQURhLFFBQ2JBLEdBRGE7QUFFYkMsU0FGYSxRQUViQSxPQUZhO0FBR2JDLFlBSGEsUUFHYkEsVUFIYTtBQUliQyxVQUphLFFBSWJBLFFBSmE7O0FBTWIscUJBQU9DLEdBQVAsRUFBWUMsSUFBWjtBQUNRQyxzQkFEUixHQUNtQkYsSUFBSUcsT0FBSixDQUFZQyxHQUQvQjtBQUVRQywyQkFGUixHQUV3QixFQUZ4Qjs7QUFJVUMsa0JBSlYsR0FJaUI7QUFDWDtBQUNFLDRCQUFVSixRQURaO0FBRUUsMkJBQVNHLGFBRlg7O0FBSUUsOENBQUMsR0FBRCxPQUpGLENBRFcsQ0FKakI7Ozs7QUFhUUEsNEJBQWNELEdBYnRCLHFEQWFpQ04sV0FBV0UsR0FBWCxFQUFnQkssY0FBY0QsR0FBOUIsQ0FiakM7Ozs7O0FBa0JnQkwseUJBQVNDLEdBQVQsQ0FsQmhCLGdDQWdCUU8sU0FoQlIsU0FnQlFBLFNBaEJSLENBaUJRQyxpQkFqQlIsU0FpQlFBLGlCQWpCUjs7QUFvQlVDLHNCQXBCVjtBQXFCTSxrQkFBSUQsaUJBQUosRUFBdUI7QUFDckJDLDJCQUFXLGtDQUFxQkQsa0JBQWtCRixJQUFsQixDQUFyQixDQUFYO0FBQ0QsZUFGRCxNQUVPO0FBQ0xHLDJCQUFXO0FBQ1QsOENBQUMsU0FBRDtBQUNFLHlEQUFLLHlCQUF5QixFQUFFQyxRQUFRSixJQUFWLEVBQTlCLEdBREYsQ0FEUyxDQUFYOzs7QUFLRDs7QUFFRE4sa0JBQUlXLFFBQUosQ0FBYUMsTUFBYixHQUFzQlAsY0FBY08sTUFBZCxJQUF3QixHQUE5QztBQUNBWixrQkFBSVcsUUFBSixDQUFhRSxJQUFiLEdBQW9CSixRQUFwQixDQWhDTjs7O0FBbUNVWix3QkFBUUcsR0FBUixjQW5DVjs7QUFxQ1VDLHNCQXJDViw0SEFOYSx5RUFBZixDOzs7O0FBK0NlTixNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nLCByZW5kZXJUb1N0YXRpY01hcmt1cCB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuY29uc3Qgc2VydmVyID0gKHtcbiAgQXBwLFxuICBvbkVycm9yLFxuICBvblJlZGlyZWN0LFxuICBvblJlbmRlclxufSkgPT5cbiAgYXN5bmMgKGN0eCwgbmV4dCkgPT4ge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gY3R4LnJlcXVlc3QudXJsO1xuICAgIGNvbnN0IHJvdXRlckNvbnRleHQgPSB7fTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdmlldyA9IHJlbmRlclRvU3RyaW5nKFxuICAgICAgICA8U3RhdGljUm91dGVyXG4gICAgICAgICAgbG9jYXRpb249e2xvY2F0aW9ufVxuICAgICAgICAgIGNvbnRleHQ9e3JvdXRlckNvbnRleHR9XG4gICAgICAgID5cbiAgICAgICAgICA8QXBwIC8+XG4gICAgICAgIDwvU3RhdGljUm91dGVyPlxuICAgICAgKTtcblxuICAgICAgaWYgKHJvdXRlckNvbnRleHQudXJsKSBhd2FpdCBvblJlZGlyZWN0KGN0eCwgcm91dGVyQ29udGV4dC51cmwpO1xuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBDb250YWluZXIsXG4gICAgICAgICAgY29udGFpbmVyUmVuZGVyZXJcbiAgICAgICAgfSA9IGF3YWl0IG9uUmVuZGVyKGN0eCk7XG5cbiAgICAgICAgbGV0IHJlbmRlcmVkO1xuICAgICAgICBpZiAoY29udGFpbmVyUmVuZGVyZXIpIHtcbiAgICAgICAgICByZW5kZXJlZCA9IHJlbmRlclRvU3RhdGljTWFya3VwKGNvbnRhaW5lclJlbmRlcmVyKHZpZXcpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZW5kZXJlZCA9IHJlbmRlclRvU3RhdGljTWFya3VwKFxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHZpZXcgfX0gLz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBjdHgucmVzcG9uc2Uuc3RhdHVzID0gcm91dGVyQ29udGV4dC5zdGF0dXMgfHwgMjAwO1xuICAgICAgICBjdHgucmVzcG9uc2UuYm9keSA9IHJlbmRlcmVkO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYXdhaXQgb25FcnJvcihjdHgsIGVycik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGF3YWl0IG5leHQoKTtcbiAgICB9XG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IHNlcnZlcjtcbiJdfQ==