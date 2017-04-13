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
                              try {
                                view = (0, _server.renderToString)(
                                _react2.default.createElement(RouterContainer, null,
                                  _react2.default.createElement(_reactRouter.RouterContext, props)));


                              } catch (e) {
                                onError(ctx, e);
                              }
                            } else {
                              view = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
                            }

                            rendered = void 0;
                            if (containerRenderer) {
                              try {
                                rendered = (0, _server.renderToStaticMarkup)(containerRenderer(view));
                              } catch (e) {
                                onError(ctx, e);
                              }
                            } else {
                              try {
                                rendered = (0, _server.renderToStaticMarkup)(
                                _react2.default.createElement(Container, null,
                                  _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: view } })));


                              } catch (e) {
                                onError(ctx, e);
                              }
                            }
                            ctx.response.body = rendered;case 26:_context.next = 28;return (

                              next());case 28:case 'end':return _context.stop();}}}, _callee, undefined);}));return function (_x3, _x4, _x5) {return _ref3.apply(this, arguments);};}()));case 3:case 'end':return _context2.stop();}}}, _callee2, undefined);}));return function (_x, _x2) {return _ref2.apply(this, arguments);};}();};exports.default =




server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbInNlcnZlciIsInJvdXRlcyIsIm9uRXJyb3IiLCJvblJlZGlyZWN0Iiwib25Ob3RGb3VuZCIsIm9uUmVuZGVyIiwiY3R4IiwibmV4dCIsImxvY2F0aW9uIiwicmVxdWVzdCIsInVybCIsImVyciIsInJlZGlyZWN0IiwicHJvcHMiLCJDb250YWluZXIiLCJSb3V0ZXJDb250YWluZXIiLCJjb250YWluZXJSZW5kZXJlciIsInZpZXciLCJlIiwicmVuZGVyZWQiLCJfX2h0bWwiLCJyZXNwb25zZSIsImJvZHkiXSwibWFwcGluZ3MiOiIyRUFBQSw4QjtBQUNBO0FBQ0EsMkM7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTO0FBQ2JDLFFBRGEsUUFDYkEsTUFEYTtBQUViQyxTQUZhLFFBRWJBLE9BRmE7QUFHYkMsWUFIYSxRQUdiQSxVQUhhO0FBSWJDLFlBSmEsUUFJYkEsVUFKYTtBQUtiQyxVQUxhLFFBS2JBLFFBTGE7O0FBT2Isc0JBQU9DLEdBQVAsRUFBWUMsSUFBWjtBQUNRQyxzQkFEUixHQUNtQkYsSUFBSUcsT0FBSixDQUFZQyxHQUQvQjtBQUVRLHdDQUFNLEVBQUVULGNBQUYsRUFBVU8sa0JBQVYsRUFBTjtBQUNKLG1DQUFPRyxHQUFQLEVBQVlDLFFBQVosRUFBc0JDLEtBQXRCO0FBQ01ELG9DQUROLHFEQUNzQlQsV0FBV0csR0FBWCxFQUFnQk0sUUFBaEIsQ0FEdEI7QUFFV0QsK0JBRlgsc0RBRXNCVCxRQUFRSSxHQUFSLEVBQWFLLEdBQWIsQ0FGdEI7QUFHWUUsaUNBSFosdURBR3lCVCxXQUFXRSxHQUFYLENBSHpCOzs7Ozs7QUFTY0QsdUNBQVNDLEdBQVQsQ0FUZCxnQ0FNTVEsU0FOTixTQU1NQSxTQU5OLENBT01DLGVBUE4sU0FPTUEsZUFQTixDQVFNQyxpQkFSTixTQVFNQSxpQkFSTjs7QUFXUUMsZ0NBWFI7QUFZSSxnQ0FBSUYsZUFBSixFQUFxQjtBQUNuQixrQ0FBSTtBQUNGRSx1Q0FBTztBQUNMLDhEQUFDLGVBQUQ7QUFDRSw0RkFBbUJKLEtBQW5CLENBREYsQ0FESyxDQUFQOzs7QUFLRCwrQkFORCxDQU1FLE9BQU9LLENBQVAsRUFBVTtBQUNWaEIsd0NBQVFJLEdBQVIsRUFBYVksQ0FBYjtBQUNEO0FBQ0YsNkJBVkQsTUFVTztBQUNMRCxxQ0FBTyw0QkFBZSwwREFBbUJKLEtBQW5CLENBQWYsQ0FBUDtBQUNEOztBQUVHTSxvQ0ExQlI7QUEyQkksZ0NBQUlILGlCQUFKLEVBQXVCO0FBQ3JCLGtDQUFJO0FBQ0ZHLDJDQUFXLGtDQUFxQkgsa0JBQWtCQyxJQUFsQixDQUFyQixDQUFYO0FBQ0QsK0JBRkQsQ0FFRSxPQUFPQyxDQUFQLEVBQVU7QUFDVmhCLHdDQUFRSSxHQUFSLEVBQWFZLENBQWI7QUFDRDtBQUNGLDZCQU5ELE1BTU87QUFDTCxrQ0FBSTtBQUNGQywyQ0FBVztBQUNULDhEQUFDLFNBQUQ7QUFDRSx5RUFBSyx5QkFBeUIsRUFBRUMsUUFBUUgsSUFBVixFQUE5QixHQURGLENBRFMsQ0FBWDs7O0FBS0QsK0JBTkQsQ0FNRSxPQUFPQyxDQUFQLEVBQVU7QUFDVmhCLHdDQUFRSSxHQUFSLEVBQWFZLENBQWI7QUFDRDtBQUNGO0FBQ0RaLGdDQUFJZSxRQUFKLENBQWFDLElBQWIsR0FBb0JILFFBQXBCLENBNUNKOztBQThDUVosb0NBOUNSLHNFQURJLDhFQUZSLHVFQVBhLHlFQUFmLEM7Ozs7O0FBNkRlUCxNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nLCByZW5kZXJUb1N0YXRpY01hcmt1cCB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgbWF0Y2gsIFJvdXRlckNvbnRleHQgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5jb25zdCBzZXJ2ZXIgPSAoe1xuICByb3V0ZXMsXG4gIG9uRXJyb3IsXG4gIG9uUmVkaXJlY3QsXG4gIG9uTm90Rm91bmQsXG4gIG9uUmVuZGVyXG59KSA9PlxuICBhc3luYyAoY3R4LCBuZXh0KSA9PiB7XG4gICAgY29uc3QgbG9jYXRpb24gPSBjdHgucmVxdWVzdC51cmw7XG4gICAgYXdhaXQgbWF0Y2goeyByb3V0ZXMsIGxvY2F0aW9uIH0sXG4gICAgICBhc3luYyAoZXJyLCByZWRpcmVjdCwgcHJvcHMpID0+IHtcbiAgICAgICAgaWYgKHJlZGlyZWN0KSBhd2FpdCBvblJlZGlyZWN0KGN0eCwgcmVkaXJlY3QpO1xuICAgICAgICBlbHNlIGlmIChlcnIpIGF3YWl0IG9uRXJyb3IoY3R4LCBlcnIpO1xuICAgICAgICBlbHNlIGlmICghcHJvcHMpIGF3YWl0IG9uTm90Rm91bmQoY3R4KTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgQ29udGFpbmVyLFxuICAgICAgICAgICAgUm91dGVyQ29udGFpbmVyLFxuICAgICAgICAgICAgY29udGFpbmVyUmVuZGVyZXJcbiAgICAgICAgICB9ID0gYXdhaXQgb25SZW5kZXIoY3R4KTtcblxuICAgICAgICAgIGxldCB2aWV3O1xuICAgICAgICAgIGlmIChSb3V0ZXJDb250YWluZXIpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZpZXcgPSByZW5kZXJUb1N0cmluZygoXG4gICAgICAgICAgICAgICAgPFJvdXRlckNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxSb3V0ZXJDb250ZXh0IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlckNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIG9uRXJyb3IoY3R4LCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlldyA9IHJlbmRlclRvU3RyaW5nKDxSb3V0ZXJDb250ZXh0IHsuLi5wcm9wc30gLz4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCByZW5kZXJlZDtcbiAgICAgICAgICBpZiAoY29udGFpbmVyUmVuZGVyZXIpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHJlbmRlcmVkID0gcmVuZGVyVG9TdGF0aWNNYXJrdXAoY29udGFpbmVyUmVuZGVyZXIodmlldykpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBvbkVycm9yKGN0eCwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHJlbmRlcmVkID0gcmVuZGVyVG9TdGF0aWNNYXJrdXAoXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB2aWV3IH19IC8+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIG9uRXJyb3IoY3R4LCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY3R4LnJlc3BvbnNlLmJvZHkgPSByZW5kZXJlZDtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBuZXh0KCk7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQgc2VydmVyO1xuIl19