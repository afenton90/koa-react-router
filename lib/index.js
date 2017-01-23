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
                  function _callee(err, redirect, props) {var _ref4, Container, RouterContainer, view, rendered;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!
                            redirect) {_context.next = 5;break;}_context.next = 3;return onRedirect(ctx, redirect);case 3:_context.next = 24;break;case 5:if (!
                            err) {_context.next = 10;break;}_context.next = 8;return onError(ctx, err);case 8:_context.next = 24;break;case 10:if (
                            props) {_context.next = 15;break;}_context.next = 13;return onNotFound(ctx);case 13:_context.next = 24;break;case 15:_context.next = 17;return (




                              onRender(ctx));case 17:_ref4 = _context.sent;Container = _ref4.Container;RouterContainer = _ref4.RouterContainer;

                            view = void 0;
                            if (RouterContainer) {
                              view =
                              _react2.default.createElement(RouterContainer, null,
                                _react2.default.createElement(_reactRouter.RouterContext, props));


                            } else {
                              view = _react2.default.createElement(_reactRouter.RouterContext, props);
                            }

                            rendered = (0, _server.renderToString)(
                            _react2.default.createElement(Container, null,
                              view));



                            ctx.response.body = rendered;case 24:_context.next = 26;return (

                              next());case 26:case 'end':return _context.stop();}}}, _callee, undefined);}));return function (_x3, _x4, _x5) {return _ref3.apply(this, arguments);};}()));case 3:case 'end':return _context2.stop();}}}, _callee2, undefined);}));return function (_x, _x2) {return _ref2.apply(this, arguments);};}();};exports.default =




server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbInNlcnZlciIsInJvdXRlcyIsIm9uRXJyb3IiLCJvblJlZGlyZWN0Iiwib25Ob3RGb3VuZCIsIm9uUmVuZGVyIiwiY3R4IiwibmV4dCIsImxvY2F0aW9uIiwicmVxdWVzdCIsInVybCIsImVyciIsInJlZGlyZWN0IiwicHJvcHMiLCJDb250YWluZXIiLCJSb3V0ZXJDb250YWluZXIiLCJ2aWV3IiwicmVuZGVyZWQiLCJyZXNwb25zZSIsImJvZHkiXSwibWFwcGluZ3MiOiIyRUFBQSw4QjtBQUNBO0FBQ0EsMkM7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTO0FBQ2JDLFFBRGEsUUFDYkEsTUFEYTtBQUViQyxTQUZhLFFBRWJBLE9BRmE7QUFHYkMsWUFIYSxRQUdiQSxVQUhhO0FBSWJDLFlBSmEsUUFJYkEsVUFKYTtBQUtiQyxVQUxhLFFBS2JBLFFBTGE7O0FBT2Isc0JBQU9DLEdBQVAsRUFBWUMsSUFBWjtBQUNRQyxzQkFEUixHQUNtQkYsSUFBSUcsT0FBSixDQUFZQyxHQUQvQjtBQUVRLHdDQUFNLEVBQUVULGNBQUYsRUFBVU8sa0JBQVYsRUFBTjtBQUNKLG1DQUFPRyxHQUFQLEVBQVlDLFFBQVosRUFBc0JDLEtBQXRCO0FBQ01ELG9DQUROLHFEQUNzQlQsV0FBV0csR0FBWCxFQUFnQk0sUUFBaEIsQ0FEdEI7QUFFV0QsK0JBRlgsc0RBRXNCVCxRQUFRSSxHQUFSLEVBQWFLLEdBQWIsQ0FGdEI7QUFHWUUsaUNBSFosdURBR3lCVCxXQUFXRSxHQUFYLENBSHpCOzs7OztBQVFjRCx1Q0FBU0MsR0FBVCxDQVJkLGdDQU1NUSxTQU5OLFNBTU1BLFNBTk4sQ0FPTUMsZUFQTixTQU9NQSxlQVBOOztBQVVRQyxnQ0FWUjtBQVdJLGdDQUFJRCxlQUFKLEVBQXFCO0FBQ25CQztBQUNFLDREQUFDLGVBQUQ7QUFDRSwwRkFBbUJILEtBQW5CLENBREYsQ0FERjs7O0FBS0QsNkJBTkQsTUFNTztBQUNMRyxxQ0FBTywwREFBbUJILEtBQW5CLENBQVA7QUFDRDs7QUFFS0ksb0NBckJWLEdBcUJxQjtBQUNmLDBEQUFDLFNBQUQ7QUFDR0Qsa0NBREgsQ0FEZSxDQXJCckI7Ozs7QUEyQklWLGdDQUFJWSxRQUFKLENBQWFDLElBQWIsR0FBb0JGLFFBQXBCLENBM0JKOztBQTZCUVYsb0NBN0JSLHNFQURJLDhFQUZSLHVFQVBhLHlFQUFmLEM7Ozs7O0FBNENlUCxNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBtYXRjaCwgUm91dGVyQ29udGV4dCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmNvbnN0IHNlcnZlciA9ICh7XG4gIHJvdXRlcyxcbiAgb25FcnJvcixcbiAgb25SZWRpcmVjdCxcbiAgb25Ob3RGb3VuZCxcbiAgb25SZW5kZXJcbn0pID0+XG4gIGFzeW5jIChjdHgsIG5leHQpID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGN0eC5yZXF1ZXN0LnVybDtcbiAgICBhd2FpdCBtYXRjaCh7IHJvdXRlcywgbG9jYXRpb24gfSxcbiAgICAgIGFzeW5jIChlcnIsIHJlZGlyZWN0LCBwcm9wcykgPT4ge1xuICAgICAgICBpZiAocmVkaXJlY3QpIGF3YWl0IG9uUmVkaXJlY3QoY3R4LCByZWRpcmVjdCk7XG4gICAgICAgIGVsc2UgaWYgKGVycikgYXdhaXQgb25FcnJvcihjdHgsIGVycik7XG4gICAgICAgIGVsc2UgaWYgKCFwcm9wcykgYXdhaXQgb25Ob3RGb3VuZChjdHgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBDb250YWluZXIsXG4gICAgICAgICAgICBSb3V0ZXJDb250YWluZXJcbiAgICAgICAgICB9ID0gYXdhaXQgb25SZW5kZXIoY3R4KTtcblxuICAgICAgICAgIGxldCB2aWV3O1xuICAgICAgICAgIGlmIChSb3V0ZXJDb250YWluZXIpIHtcbiAgICAgICAgICAgIHZpZXcgPSAoXG4gICAgICAgICAgICAgIDxSb3V0ZXJDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFJvdXRlckNvbnRleHQgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICA8L1JvdXRlckNvbnRhaW5lcj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXcgPSA8Um91dGVyQ29udGV4dCB7Li4ucHJvcHN9IC8+O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHJlbmRlcmVkID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICB7dmlld31cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjdHgucmVzcG9uc2UuYm9keSA9IHJlbmRlcmVkO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IG5leHQoKTtcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG5leHBvcnQgZGVmYXVsdCBzZXJ2ZXI7XG4iXX0=