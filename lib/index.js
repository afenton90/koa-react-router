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
                              view = (0, _server.renderToString)(
                              _react2.default.createElement(RouterContainer, null,
                                _react2.default.createElement(_reactRouter.RouterContext, props)));


                            } else {
                              view = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
                            }

                            rendered = (0, _server.renderToStaticMarkup)(
                            _react2.default.createElement(Container, null,
                              _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: view } })));



                            ctx.response.body = rendered;case 24:_context.next = 26;return (

                              next());case 26:case 'end':return _context.stop();}}}, _callee, undefined);}));return function (_x3, _x4, _x5) {return _ref3.apply(this, arguments);};}()));case 3:case 'end':return _context2.stop();}}}, _callee2, undefined);}));return function (_x, _x2) {return _ref2.apply(this, arguments);};}();};exports.default =




server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbInNlcnZlciIsInJvdXRlcyIsIm9uRXJyb3IiLCJvblJlZGlyZWN0Iiwib25Ob3RGb3VuZCIsIm9uUmVuZGVyIiwiY3R4IiwibmV4dCIsImxvY2F0aW9uIiwicmVxdWVzdCIsInVybCIsImVyciIsInJlZGlyZWN0IiwicHJvcHMiLCJDb250YWluZXIiLCJSb3V0ZXJDb250YWluZXIiLCJ2aWV3IiwicmVuZGVyZWQiLCJfX2h0bWwiLCJyZXNwb25zZSIsImJvZHkiXSwibWFwcGluZ3MiOiIyRUFBQSw4QjtBQUNBO0FBQ0EsMkM7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTO0FBQ2JDLFFBRGEsUUFDYkEsTUFEYTtBQUViQyxTQUZhLFFBRWJBLE9BRmE7QUFHYkMsWUFIYSxRQUdiQSxVQUhhO0FBSWJDLFlBSmEsUUFJYkEsVUFKYTtBQUtiQyxVQUxhLFFBS2JBLFFBTGE7O0FBT2Isc0JBQU9DLEdBQVAsRUFBWUMsSUFBWjtBQUNRQyxzQkFEUixHQUNtQkYsSUFBSUcsT0FBSixDQUFZQyxHQUQvQjtBQUVRLHdDQUFNLEVBQUVULGNBQUYsRUFBVU8sa0JBQVYsRUFBTjtBQUNKLG1DQUFPRyxHQUFQLEVBQVlDLFFBQVosRUFBc0JDLEtBQXRCO0FBQ01ELG9DQUROLHFEQUNzQlQsV0FBV0csR0FBWCxFQUFnQk0sUUFBaEIsQ0FEdEI7QUFFV0QsK0JBRlgsc0RBRXNCVCxRQUFRSSxHQUFSLEVBQWFLLEdBQWIsQ0FGdEI7QUFHWUUsaUNBSFosdURBR3lCVCxXQUFXRSxHQUFYLENBSHpCOzs7OztBQVFjRCx1Q0FBU0MsR0FBVCxDQVJkLGdDQU1NUSxTQU5OLFNBTU1BLFNBTk4sQ0FPTUMsZUFQTixTQU9NQSxlQVBOO0FBU1FDLGdDQVRSO0FBVUksZ0NBQUlELGVBQUosRUFBcUI7QUFDbkJDLHFDQUFPO0FBQ0wsNERBQUMsZUFBRDtBQUNFLDBGQUFtQkgsS0FBbkIsQ0FERixDQURLLENBQVA7OztBQUtELDZCQU5ELE1BTU87QUFDTEcscUNBQU8sNEJBQWUsMERBQW1CSCxLQUFuQixDQUFmLENBQVA7QUFDRDs7QUFFS0ksb0NBcEJWLEdBb0JxQjtBQUNmLDBEQUFDLFNBQUQ7QUFDRSxxRUFBSyx5QkFBeUIsRUFBRUMsUUFBUUYsSUFBVixFQUE5QixHQURGLENBRGUsQ0FwQnJCOzs7O0FBMEJJVixnQ0FBSWEsUUFBSixDQUFhQyxJQUFiLEdBQW9CSCxRQUFwQixDQTFCSjs7QUE0QlFWLG9DQTVCUixzRUFESSw4RUFGUix1RUFQYSx5RUFBZixDOzs7OztBQTJDZVAsTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZywgcmVuZGVyVG9TdGF0aWNNYXJrdXAgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IG1hdGNoLCBSb3V0ZXJDb250ZXh0IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuY29uc3Qgc2VydmVyID0gKHtcbiAgcm91dGVzLFxuICBvbkVycm9yLFxuICBvblJlZGlyZWN0LFxuICBvbk5vdEZvdW5kLFxuICBvblJlbmRlclxufSkgPT5cbiAgYXN5bmMgKGN0eCwgbmV4dCkgPT4ge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gY3R4LnJlcXVlc3QudXJsO1xuICAgIGF3YWl0IG1hdGNoKHsgcm91dGVzLCBsb2NhdGlvbiB9LFxuICAgICAgYXN5bmMgKGVyciwgcmVkaXJlY3QsIHByb3BzKSA9PiB7XG4gICAgICAgIGlmIChyZWRpcmVjdCkgYXdhaXQgb25SZWRpcmVjdChjdHgsIHJlZGlyZWN0KTtcbiAgICAgICAgZWxzZSBpZiAoZXJyKSBhd2FpdCBvbkVycm9yKGN0eCwgZXJyKTtcbiAgICAgICAgZWxzZSBpZiAoIXByb3BzKSBhd2FpdCBvbk5vdEZvdW5kKGN0eCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIENvbnRhaW5lcixcbiAgICAgICAgICAgIFJvdXRlckNvbnRhaW5lclxuICAgICAgICAgIH0gPSBhd2FpdCBvblJlbmRlcihjdHgpO1xuICAgICAgICAgIGxldCB2aWV3O1xuICAgICAgICAgIGlmIChSb3V0ZXJDb250YWluZXIpIHtcbiAgICAgICAgICAgIHZpZXcgPSByZW5kZXJUb1N0cmluZygoXG4gICAgICAgICAgICAgIDxSb3V0ZXJDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFJvdXRlckNvbnRleHQgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICA8L1JvdXRlckNvbnRhaW5lcj5cbiAgICAgICAgICAgICkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3ID0gcmVuZGVyVG9TdHJpbmcoPFJvdXRlckNvbnRleHQgey4uLnByb3BzfSAvPik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcmVuZGVyZWQgPSByZW5kZXJUb1N0YXRpY01hcmt1cChcbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB2aWV3IH19IC8+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY3R4LnJlc3BvbnNlLmJvZHkgPSByZW5kZXJlZDtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBuZXh0KCk7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQgc2VydmVyO1xuIl19