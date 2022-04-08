webpackHotUpdate_N_E("pages/index",{

/***/ "../components/ContactForm/ContactForm.js":
/*!************************************************!*\
  !*** ../components/ContactForm/ContactForm.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactForm; });
/* harmony import */ var C_Users_Owner_Desktop_deadline_coming_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Owner_Desktop_deadline_coming_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/regenerator */ "../node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Owner_Desktop_deadline_coming_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Owner_Desktop_deadline_coming_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _deadline_common_hooks_useTimeout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deadline/common/hooks/useTimeout */ "../common/hooks/useTimeout.js");
/* harmony import */ var _TextField_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TextField/TextField */ "../components/TextField/TextField.js");
/* harmony import */ var _Button___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button/ */ "../components/Button/index.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Loader */ "../components/Loader/index.js");
/* harmony import */ var _ConatctForm_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ConatctForm.style */ "../components/ContactForm/ConatctForm.style.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\Owner\\Desktop\\deadline\\coming\\components\\ContactForm\\ContactForm.js",
    _s = $RefreshSig$();









function ContactForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      success = _useState3[0],
      setSuccess = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      pending = _useState4[0],
      setPending = _useState4[1];

  var _useTimeout = Object(_deadline_common_hooks_useTimeout__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
    if (error) setError(false);
    if (success) setSuccess(false);
  }, 3500),
      start = _useTimeout.start;

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Owner_Desktop_deadline_coming_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/C_Users_Owner_Desktop_deadline_coming_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      return C_Users_Owner_Desktop_deadline_coming_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setPending(true); // const response = await fetch(
              //   'https://api.sendgrid.com/v3/marketing/contacts',
              //   {
              //     headers: {
              //       Accept: 'application/json',
              //       'Content-Type': 'application/json',
              //       Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
              //     },
              //     method: 'PUT',
              //     body: JSON.stringify({
              //       list_ids: [],
              //       contacts: [{ email: value }],
              //     }),
              //   }
              // );
              // const data = await response.json();
              // console.log(data, 'data');
              // if (data.job_id) {
              //   setPending(false);
              //   setSuccess(true);
              //   start();
              //   setValue('');
              // } else if (data.errors.length) {
              //   setPending(false);
              //   setError(true);
              //   start();
              // }

              console.log('contact form');
              setTimeout(function () {
                setPending(false);
                setSuccess(true);
                setError(false);
                start();
                setValue('');
              }, 2000);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleChange = function handleChange(event) {
    setValue(event.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ConatctForm_style__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_TextField_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "user_email",
      placeholder: "placeholder",
      type: "email",
      required: "required",
      value: value,
      error: error,
      errorMessage: "errorMessage",
      successMessage: "successMsg",
      success: success,
      onChange: handleChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_Button___WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "submit",
      title: "buttonText" // style={{backgroundColor: "#e76f51", color: "#fff"}}
      ,
      isLoading: pending,
      loader: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        loaderColor: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, this);
}

_s(ContactForm, "gmC/ELfhBf2xl7kFpKLAgAc25wQ=", false, function () {
  return [_deadline_common_hooks_useTimeout__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c = ContactForm;

var _c;

$RefreshReg$(_c, "ContactForm");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL2NvbXBvbmVudHMvQ29udGFjdEZvcm0vQ29udGFjdEZvcm0uanMiXSwibmFtZXMiOlsiQ29udGFjdEZvcm0iLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJlcnJvciIsInNldEVycm9yIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJwZW5kaW5nIiwic2V0UGVuZGluZyIsInVzZVRpbWVvdXQiLCJzdGFydCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBQ3BDLGtCQUEwQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT0MsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQTBCRixzREFBUSxDQUFDLEtBQUQsQ0FBbEM7QUFBQSxNQUFPRyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBOEJKLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9LLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQThCTixzREFBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBQSxNQUFPTyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG9CQUFrQkMsaUZBQVUsQ0FBQyxZQUFNO0FBQ2pDLFFBQUlOLEtBQUosRUFBV0MsUUFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNYLFFBQUlDLE9BQUosRUFBYUMsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNkLEdBSDJCLEVBR3pCLElBSHlCLENBQTVCO0FBQUEsTUFBUUksS0FBUixlQUFRQSxLQUFSOztBQUlBLE1BQU1DLFlBQVk7QUFBQSx3VUFBRyxpQkFBTUMsQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CQSxlQUFDLENBQUNDLGNBQUY7QUFDQUwsd0JBQVUsQ0FBQyxJQUFELENBQVYsQ0FGbUIsQ0FHbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBTSxxQkFBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUVBQyx3QkFBVSxDQUFDLFlBQVc7QUFDcEJSLDBCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FGLDBCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FGLHdCQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0FNLHFCQUFLO0FBQ0xSLHdCQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0QsZUFOUyxFQU1QLElBTk8sQ0FBVjs7QUFqQ21CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpTLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBMENBLE1BQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLEtBQUssRUFBSTtBQUM1QmhCLFlBQVEsQ0FBQ2dCLEtBQUssQ0FBQ0MsTUFBTixDQUFhbEIsS0FBZCxDQUFSO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRSxxRUFBQyx1REFBRDtBQUFNLFlBQVEsRUFBRVUsWUFBaEI7QUFBQSw0QkFDRSxxRUFBQyw0REFBRDtBQUNFLFFBQUUsRUFBQyxZQURMO0FBRUUsaUJBQVcsRUFBQyxhQUZkO0FBR0UsVUFBSSxFQUFDLE9BSFA7QUFJRSxjQUFRLEVBQUMsVUFKWDtBQUtFLFdBQUssRUFBRVYsS0FMVDtBQU1FLFdBQUssRUFBRUUsS0FOVDtBQU9FLGtCQUFZLEVBQUMsY0FQZjtBQVFFLG9CQUFjLEVBQUMsWUFSakI7QUFTRSxhQUFPLEVBQUVFLE9BVFg7QUFVRSxjQUFRLEVBQUVZO0FBVlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBYUUscUVBQUMsZ0RBQUQ7QUFDRSxVQUFJLEVBQUMsUUFEUDtBQUVFLFdBQUssRUFBQyxZQUZSLENBR0U7QUFIRjtBQUlFLGVBQVMsRUFBRVYsT0FKYjtBQUtFLFlBQU0sZUFBRSxxRUFBQywrQ0FBRDtBQUFRLG1CQUFXLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVCRDs7R0E3RXVCUixXO1VBS0pVLHlFOzs7S0FMSVYsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wN2MxOGEwODY1NmRkZTVlY2ExNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlVGltZW91dCBmcm9tICdAZGVhZGxpbmUvY29tbW9uL2hvb2tzL3VzZVRpbWVvdXQnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJy4uL1RleHRGaWVsZC9UZXh0RmllbGQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbi8nO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlcic7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICcuL0NvbmF0Y3RGb3JtLnN0eWxlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGVuZGluZywgc2V0UGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBzdGFydCB9ID0gdXNlVGltZW91dCgoKSA9PiB7XHJcbiAgICBpZiAoZXJyb3IpIHNldEVycm9yKGZhbHNlKTtcclxuICAgIGlmIChzdWNjZXNzKSBzZXRTdWNjZXNzKGZhbHNlKTtcclxuICB9LCAzNTAwKTtcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFBlbmRpbmcodHJ1ZSk7XHJcbiAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgLy8gICAnaHR0cHM6Ly9hcGkuc2VuZGdyaWQuY29tL3YzL21hcmtldGluZy9jb250YWN0cycsXHJcbiAgICAvLyAgIHtcclxuICAgIC8vICAgICBoZWFkZXJzOiB7XHJcbiAgICAvLyAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIC8vICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAvLyAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuU0VOREdSSURfQVBJX0tFWX1gLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAvLyAgICAgICBsaXN0X2lkczogW10sXHJcbiAgICAvLyAgICAgICBjb250YWN0czogW3sgZW1haWw6IHZhbHVlIH1dLFxyXG4gICAgLy8gICAgIH0pLFxyXG4gICAgLy8gICB9XHJcbiAgICAvLyApO1xyXG4gICAgLy8gY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEsICdkYXRhJyk7XHJcbiAgICAvLyBpZiAoZGF0YS5qb2JfaWQpIHtcclxuICAgIC8vICAgc2V0UGVuZGluZyhmYWxzZSk7XHJcbiAgICAvLyAgIHNldFN1Y2Nlc3ModHJ1ZSk7XHJcbiAgICAvLyAgIHN0YXJ0KCk7XHJcbiAgICAvLyAgIHNldFZhbHVlKCcnKTtcclxuICAgIC8vIH0gZWxzZSBpZiAoZGF0YS5lcnJvcnMubGVuZ3RoKSB7XHJcbiAgICAvLyAgIHNldFBlbmRpbmcoZmFsc2UpO1xyXG4gICAgLy8gICBzZXRFcnJvcih0cnVlKTtcclxuICAgIC8vICAgc3RhcnQoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygnY29udGFjdCBmb3JtJyk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgc2V0UGVuZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XHJcbiAgICAgIHNldEVycm9yKGZhbHNlKTtcclxuICAgICAgc3RhcnQoKTtcclxuICAgICAgc2V0VmFsdWUoJycpO1xyXG4gICAgfSwgMjAwMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xyXG4gICAgc2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGlkPVwidXNlcl9lbWFpbFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICByZXF1aXJlZD1cInJlcXVpcmVkXCJcclxuICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgZXJyb3I9e2Vycm9yfVxyXG4gICAgICAgIGVycm9yTWVzc2FnZT1cImVycm9yTWVzc2FnZVwiXHJcbiAgICAgICAgc3VjY2Vzc01lc3NhZ2U9XCJzdWNjZXNzTXNnXCJcclxuICAgICAgICBzdWNjZXNzPXtzdWNjZXNzfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICB0aXRsZT1cImJ1dHRvblRleHRcIlxyXG4gICAgICAgIC8vIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiNlNzZmNTFcIiwgY29sb3I6IFwiI2ZmZlwifX1cclxuICAgICAgICBpc0xvYWRpbmc9e3BlbmRpbmd9XHJcbiAgICAgICAgbG9hZGVyPXs8TG9hZGVyIGxvYWRlckNvbG9yPVwid2hpdGVcIiAvPn1cclxuICAgICAgLz5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=