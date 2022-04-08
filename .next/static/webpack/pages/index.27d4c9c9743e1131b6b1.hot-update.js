webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SocialShare/SocialShare.js":
/*!***********************************************!*\
  !*** ./components/SocialShare/SocialShare.js ***!
  \***********************************************/
/*! exports provided: SocialShare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialShare", function() { return SocialShare; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit */ "../node_modules/react-icons-kit/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/ionicons/socialDribbbleOutline */ "../node_modules/react-icons-kit/ionicons/socialDribbbleOutline.js");
/* harmony import */ var react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Owner\\Desktop\\deadline\\coming\\nextjs\\components\\SocialShare\\SocialShare.js",
    _this = undefined;







var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "SocialShare__Wrapper",
  componentId: "sc-1fc6rpe-0"
})(["position:relative;display:flex;align-items:center;flex-wrap:wrap;"]);
_c = Wrapper;
var Item = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "SocialShare__Item",
  componentId: "sc-1fc6rpe-1"
})(["margin:0 9px;a{color:#fff;transition:0.15s ease-in-out;&:hover{color:#3444f1;}}"]);
_c2 = Item;
var SocialShare = function SocialShare(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      className = _ref.className,
      _ref$iconSize = _ref.iconSize,
      iconSize = _ref$iconSize === void 0 ? 22 : _ref$iconSize;
  if (!items) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Wrapper, {
    className: "social_profiles ".concat(className ? className : '').trim(),
    children: items.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Item, {
        className: "social_profile_item",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: item.url || '#',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this)
      }, "social-item-".concat(item.id), false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
}; // export default SocialShare;

_c3 = SocialShare;

var _c, _c2, _c3;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "Item");
$RefreshReg$(_c3, "SocialShare");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "../node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Tb2NpYWxTaGFyZS9Tb2NpYWxTaGFyZS5qcyJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiSXRlbSIsIlNvY2lhbFNoYXJlIiwiaXRlbXMiLCJjbGFzc05hbWUiLCJpY29uU2l6ZSIsInRyaW0iLCJtYXAiLCJpdGVtIiwidXJsIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseUVBQWI7S0FBTUYsTztBQU9OLElBQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1RkFBVjtNQUFNQyxJO0FBV0MsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBOEM7QUFBQSx3QkFBM0NDLEtBQTJDO0FBQUEsTUFBM0NBLEtBQTJDLDJCQUFuQyxFQUFtQztBQUFBLE1BQS9CQyxTQUErQixRQUEvQkEsU0FBK0I7QUFBQSwyQkFBcEJDLFFBQW9CO0FBQUEsTUFBcEJBLFFBQW9CLDhCQUFULEVBQVM7QUFDdkUsTUFBSSxDQUFDRixLQUFMLEVBQVksT0FBTyxJQUFQO0FBQ1osc0JBQ0UscUVBQUMsT0FBRDtBQUFTLGFBQVMsRUFBRSwwQkFBbUJDLFNBQVMsR0FBR0EsU0FBSCxHQUFlLEVBQTNDLEVBQWdERSxJQUFoRCxFQUFwQjtBQUFBLGNBQ0dILEtBQUssQ0FBQ0ksR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSwwQkFDYixxRUFBQyxJQUFEO0FBQXFDLGlCQUFTLEVBQUMscUJBQS9DO0FBQUEsK0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUVBLElBQUksQ0FBQ0MsR0FBTCxJQUFZLEdBQXhCO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERiwrQkFBMEJELElBQUksQ0FBQ0UsRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURhO0FBQUEsS0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWFELENBZk0sQyxDQWlCUDs7TUFqQmFSLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjdkNGM5Yzk3NDNlMTEzMWI2YjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJY29uIGZyb20gJ3JlYWN0LWljb25zLWtpdCc7XHJcbmltcG9ydCB7IHNvY2lhbERyaWJiYmxlT3V0bGluZSB9IGZyb20gJ3JlYWN0LWljb25zLWtpdC9pb25pY29ucy9zb2NpYWxEcmliYmJsZU91dGxpbmUnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5gO1xyXG5cclxuY29uc3QgSXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAwIDlweDtcclxuICBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICMzNDQ0ZjE7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNvY2lhbFNoYXJlID0gKHsgaXRlbXMgPSBbXSwgY2xhc3NOYW1lLCBpY29uU2l6ZSA9IDIyIH0pID0+IHtcclxuICBpZiAoIWl0ZW1zKSByZXR1cm4gbnVsbDtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXIgY2xhc3NOYW1lPXtgc29jaWFsX3Byb2ZpbGVzICR7Y2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJyd9YC50cmltKCl9PlxyXG4gICAgICB7aXRlbXMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgIDxJdGVtIGtleT17YHNvY2lhbC1pdGVtLSR7aXRlbS5pZH1gfSBjbGFzc05hbWU9XCJzb2NpYWxfcHJvZmlsZV9pdGVtXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtpdGVtLnVybCB8fCAnIyd9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICB7LyogPEljb24gaWNvbj17aXRlbS5pY29uIHx8IHNvY2lhbERyaWJiYmxlT3V0bGluZX0gc2l6ZT17aWNvblNpemV9IC8+ICovfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9JdGVtPlxyXG4gICAgICApKX1cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgU29jaWFsU2hhcmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=