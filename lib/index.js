'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _server = require('react-dom/server');
var _reactRouter = require('react-router');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}

var server = function server(_ref) {var
  routes = _ref.routes,
  onError = _ref.onError,
  onRedirect = _ref.onRedirect,
  onNotFound = _ref.onNotFound,
  onRender = _ref.onRender;return function () {var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(

    function _callee2(ctx, next) {var location;return regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
              location = ctx.request.url;_context2.next = 3;return (
                (0, _reactRouter.match)({ routes: routes, location: location }, function () {var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(
                  function _callee(err, redirect, props) {var _ref4, Container, RouterContainer, containerRenderer, view, rendered;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!
                            redirect) {_context.next = 5;break;}_context.next = 3;return onRedirect(ctx, redirect);case 3:_context.next = 26;break;case 5:if (!
                            err) {_context.next = 10;break;}_context.next = 8;return onError(ctx, err);case 8:_context.next = 26;break;case 10:if (
                            props) {_context.next = 15;break;}_context.next = 13;return onNotFound(ctx);case 13:_context.next = 26;break;case 15:_context.next = 17;return (





                              onRender(ctx));case 17:_ref4 = _context.sent;Container = _ref4.Container;RouterContainer = _ref4.RouterContainer;containerRenderer = _ref4.containerRenderer;
                            view = void 0;
                            if (RouterContainer) {
                              view = (0, _server.renderToString)(
                              _react2.default.createElement(RouterContainer, null,
                                _react2.default.createElement(_reactRouter.RouterContext, props)));


                            } else {
                              view = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
                            }

                            rendered = void 0;
                            if (containerRenderer) {
                              rendered = (0, _server.renderToStaticMarkup)(containerRenderer(view));
                            } else {
                              rendered = (0, _server.renderToStaticMarkup)(
                              _react2.default.createElement(Container, null,
                                _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: view } })));


                            }

                            ctx.response.body = rendered;case 26:_context.next = 28;return (

                              next());case 28:case 'end':return _context.stop();}}}, _callee, undefined);}));return function (_x3, _x4, _x5) {return _ref3.apply(this, arguments);};}()));case 3:case 'end':return _context2.stop();}}}, _callee2, undefined);}));return function (_x, _x2) {return _ref2.apply(this, arguments);};}();};exports.default =




server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbInNlcnZlciIsInJvdXRlcyIsIm9uRXJyb3IiLCJvblJlZGlyZWN0Iiwib25Ob3RGb3VuZCIsIm9uUmVuZGVyIiwiY3R4IiwibmV4dCIsImxvY2F0aW9uIiwicmVxdWVzdCIsInVybCIsImVyciIsInJlZGlyZWN0IiwicHJvcHMiLCJDb250YWluZXIiLCJSb3V0ZXJDb250YWluZXIiLCJjb250YWluZXJSZW5kZXJlciIsInZpZXciLCJyZW5kZXJlZCIsIl9faHRtbCIsInJlc3BvbnNlIiwiYm9keSJdLCJtYXBwaW5ncyI6IjJFQUFBLDhCO0FBQ0E7QUFDQSwyQzs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVM7QUFDYkMsUUFEYSxRQUNiQSxNQURhO0FBRWJDLFNBRmEsUUFFYkEsT0FGYTtBQUdiQyxZQUhhLFFBR2JBLFVBSGE7QUFJYkMsWUFKYSxRQUliQSxVQUphO0FBS2JDLFVBTGEsUUFLYkEsUUFMYTs7QUFPYixzQkFBT0MsR0FBUCxFQUFZQyxJQUFaO0FBQ1FDLHNCQURSLEdBQ21CRixJQUFJRyxPQUFKLENBQVlDLEdBRC9CO0FBRVEsd0NBQU0sRUFBRVQsY0FBRixFQUFVTyxrQkFBVixFQUFOO0FBQ0osbUNBQU9HLEdBQVAsRUFBWUMsUUFBWixFQUFzQkMsS0FBdEI7QUFDTUQsb0NBRE4scURBQ3NCVCxXQUFXRyxHQUFYLEVBQWdCTSxRQUFoQixDQUR0QjtBQUVXRCwrQkFGWCxzREFFc0JULFFBQVFJLEdBQVIsRUFBYUssR0FBYixDQUZ0QjtBQUdZRSxpQ0FIWix1REFHeUJULFdBQVdFLEdBQVgsQ0FIekI7Ozs7OztBQVNjRCx1Q0FBU0MsR0FBVCxDQVRkLGdDQU1NUSxTQU5OLFNBTU1BLFNBTk4sQ0FPTUMsZUFQTixTQU9NQSxlQVBOLENBUU1DLGlCQVJOLFNBUU1BLGlCQVJOO0FBVVFDLGdDQVZSO0FBV0ksZ0NBQUlGLGVBQUosRUFBcUI7QUFDbkJFLHFDQUFPO0FBQ0wsNERBQUMsZUFBRDtBQUNFLDBGQUFtQkosS0FBbkIsQ0FERixDQURLLENBQVA7OztBQUtELDZCQU5ELE1BTU87QUFDTEkscUNBQU8sNEJBQWUsMERBQW1CSixLQUFuQixDQUFmLENBQVA7QUFDRDs7QUFFR0ssb0NBckJSO0FBc0JJLGdDQUFJRixpQkFBSixFQUF1QjtBQUNyQkUseUNBQVcsa0NBQXFCRixrQkFBa0JDLElBQWxCLENBQXJCLENBQVg7QUFDRCw2QkFGRCxNQUVPO0FBQ0xDLHlDQUFXO0FBQ1QsNERBQUMsU0FBRDtBQUNFLHVFQUFLLHlCQUF5QixFQUFFQyxRQUFRRixJQUFWLEVBQTlCLEdBREYsQ0FEUyxDQUFYOzs7QUFLRDs7QUFFRFgsZ0NBQUljLFFBQUosQ0FBYUMsSUFBYixHQUFvQkgsUUFBcEIsQ0FoQ0o7O0FBa0NRWCxvQ0FsQ1Isc0VBREksOEVBRlIsdUVBUGEseUVBQWYsQzs7Ozs7QUFpRGVQLE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcsIHJlbmRlclRvU3RhdGljTWFya3VwIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBtYXRjaCwgUm91dGVyQ29udGV4dCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmNvbnN0IHNlcnZlciA9ICh7XG4gIHJvdXRlcyxcbiAgb25FcnJvcixcbiAgb25SZWRpcmVjdCxcbiAgb25Ob3RGb3VuZCxcbiAgb25SZW5kZXJcbn0pID0+XG4gIGFzeW5jIChjdHgsIG5leHQpID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGN0eC5yZXF1ZXN0LnVybDtcbiAgICBhd2FpdCBtYXRjaCh7IHJvdXRlcywgbG9jYXRpb24gfSxcbiAgICAgIGFzeW5jIChlcnIsIHJlZGlyZWN0LCBwcm9wcykgPT4ge1xuICAgICAgICBpZiAocmVkaXJlY3QpIGF3YWl0IG9uUmVkaXJlY3QoY3R4LCByZWRpcmVjdCk7XG4gICAgICAgIGVsc2UgaWYgKGVycikgYXdhaXQgb25FcnJvcihjdHgsIGVycik7XG4gICAgICAgIGVsc2UgaWYgKCFwcm9wcykgYXdhaXQgb25Ob3RGb3VuZChjdHgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBDb250YWluZXIsXG4gICAgICAgICAgICBSb3V0ZXJDb250YWluZXIsXG4gICAgICAgICAgICBjb250YWluZXJSZW5kZXJlclxuICAgICAgICAgIH0gPSBhd2FpdCBvblJlbmRlcihjdHgpO1xuICAgICAgICAgIGxldCB2aWV3O1xuICAgICAgICAgIGlmIChSb3V0ZXJDb250YWluZXIpIHtcbiAgICAgICAgICAgIHZpZXcgPSByZW5kZXJUb1N0cmluZygoXG4gICAgICAgICAgICAgIDxSb3V0ZXJDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFJvdXRlckNvbnRleHQgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICA8L1JvdXRlckNvbnRhaW5lcj5cbiAgICAgICAgICAgICkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3ID0gcmVuZGVyVG9TdHJpbmcoPFJvdXRlckNvbnRleHQgey4uLnByb3BzfSAvPik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHJlbmRlcmVkO1xuICAgICAgICAgIGlmIChjb250YWluZXJSZW5kZXJlcikge1xuICAgICAgICAgICAgcmVuZGVyZWQgPSByZW5kZXJUb1N0YXRpY01hcmt1cChjb250YWluZXJSZW5kZXJlcih2aWV3KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlcmVkID0gcmVuZGVyVG9TdGF0aWNNYXJrdXAoXG4gICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHZpZXcgfX0gLz5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGN0eC5yZXNwb25zZS5ib2R5ID0gcmVuZGVyZWQ7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgbmV4dCgpO1xuICAgICAgfVxuICAgICk7XG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IHNlcnZlcjtcbiJdfQ==