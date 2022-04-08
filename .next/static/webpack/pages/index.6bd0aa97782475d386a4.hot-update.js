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
      title: "buttonText",
      style: {
        backgroundColor: "#e76f51",
        color: "#fff"
      },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL2NvbXBvbmVudHMvQ29udGFjdEZvcm0vQ29udGFjdEZvcm0uanMiXSwibmFtZXMiOlsiQ29udGFjdEZvcm0iLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJlcnJvciIsInNldEVycm9yIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJwZW5kaW5nIiwic2V0UGVuZGluZyIsInVzZVRpbWVvdXQiLCJzdGFydCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFDcEMsa0JBQTBCQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBMEJGLHNEQUFRLENBQUMsS0FBRCxDQUFsQztBQUFBLE1BQU9HLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUE4Qkosc0RBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUEsTUFBT0ssT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBOEJOLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9PLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0Esb0JBQWtCQyxpRkFBVSxDQUFDLFlBQU07QUFDakMsUUFBSU4sS0FBSixFQUFXQyxRQUFRLENBQUMsS0FBRCxDQUFSO0FBQ1gsUUFBSUMsT0FBSixFQUFhQyxVQUFVLENBQUMsS0FBRCxDQUFWO0FBQ2QsR0FIMkIsRUFHekIsSUFIeUIsQ0FBNUI7QUFBQSxNQUFRSSxLQUFSLGVBQVFBLEtBQVI7O0FBSUEsTUFBTUMsWUFBWTtBQUFBLHdVQUFHLGlCQUFNQyxDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJBLGVBQUMsQ0FBQ0MsY0FBRjtBQUNBTCx3QkFBVSxDQUFDLElBQUQsQ0FBVixDQUZtQixDQUduQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFNLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBRUFDLHdCQUFVLENBQUMsWUFBVztBQUNwQlIsMEJBQVUsQ0FBQyxLQUFELENBQVY7QUFDQUYsMEJBQVUsQ0FBQyxJQUFELENBQVY7QUFDQUYsd0JBQVEsQ0FBQyxLQUFELENBQVI7QUFDQU0scUJBQUs7QUFDTFIsd0JBQVEsQ0FBQyxFQUFELENBQVI7QUFDRCxlQU5TLEVBTVAsSUFOTyxDQUFWOztBQWpDbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWlMsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUEwQ0EsTUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSyxFQUFJO0FBQzVCaEIsWUFBUSxDQUFDZ0IsS0FBSyxDQUFDQyxNQUFOLENBQWFsQixLQUFkLENBQVI7QUFDRCxHQUZEOztBQUdBLHNCQUNFLHFFQUFDLHVEQUFEO0FBQU0sWUFBUSxFQUFFVSxZQUFoQjtBQUFBLDRCQUNFLHFFQUFDLDREQUFEO0FBQ0UsUUFBRSxFQUFDLFlBREw7QUFFRSxpQkFBVyxFQUFDLGFBRmQ7QUFHRSxVQUFJLEVBQUMsT0FIUDtBQUlFLGNBQVEsRUFBQyxVQUpYO0FBS0UsV0FBSyxFQUFFVixLQUxUO0FBTUUsV0FBSyxFQUFFRSxLQU5UO0FBT0Usa0JBQVksRUFBQyxjQVBmO0FBUUUsb0JBQWMsRUFBQyxZQVJqQjtBQVNFLGFBQU8sRUFBRUUsT0FUWDtBQVVFLGNBQVEsRUFBRVk7QUFWWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFhRSxxRUFBQyxnREFBRDtBQUNFLFVBQUksRUFBQyxRQURQO0FBRUUsV0FBSyxFQUFDLFlBRlI7QUFHRSxXQUFLLEVBQUU7QUFBQ0csdUJBQWUsRUFBRSxTQUFsQjtBQUE2QkMsYUFBSyxFQUFFO0FBQXBDLE9BSFQ7QUFJRSxlQUFTLEVBQUVkLE9BSmI7QUFLRSxZQUFNLGVBQUUscUVBQUMsK0NBQUQ7QUFBUSxtQkFBVyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1QkQ7O0dBN0V1QlIsVztVQUtKVSx5RTs7O0tBTElWLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmJkMGFhOTc3ODI0NzVkMzg2YTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZVRpbWVvdXQgZnJvbSAnQGRlYWRsaW5lL2NvbW1vbi9ob29rcy91c2VUaW1lb3V0JztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICcuLi9UZXh0RmllbGQvVGV4dEZpZWxkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24vJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnLi9Db25hdGN0Rm9ybS5zdHlsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3BlbmRpbmcsIHNldFBlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgc3RhcnQgfSA9IHVzZVRpbWVvdXQoKCkgPT4ge1xyXG4gICAgaWYgKGVycm9yKSBzZXRFcnJvcihmYWxzZSk7XHJcbiAgICBpZiAoc3VjY2Vzcykgc2V0U3VjY2VzcyhmYWxzZSk7XHJcbiAgfSwgMzUwMCk7XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRQZW5kaW5nKHRydWUpO1xyXG4gICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIC8vICAgJ2h0dHBzOi8vYXBpLnNlbmRncmlkLmNvbS92My9tYXJrZXRpbmcvY29udGFjdHMnLFxyXG4gICAgLy8gICB7XHJcbiAgICAvLyAgICAgaGVhZGVyczoge1xyXG4gICAgLy8gICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAvLyAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgLy8gICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52LlNFTkRHUklEX0FQSV9LRVl9YCxcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgLy8gICAgICAgbGlzdF9pZHM6IFtdLFxyXG4gICAgLy8gICAgICAgY29udGFjdHM6IFt7IGVtYWlsOiB2YWx1ZSB9XSxcclxuICAgIC8vICAgICB9KSxcclxuICAgIC8vICAgfVxyXG4gICAgLy8gKTtcclxuICAgIC8vIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhLCAnZGF0YScpO1xyXG4gICAgLy8gaWYgKGRhdGEuam9iX2lkKSB7XHJcbiAgICAvLyAgIHNldFBlbmRpbmcoZmFsc2UpO1xyXG4gICAgLy8gICBzZXRTdWNjZXNzKHRydWUpO1xyXG4gICAgLy8gICBzdGFydCgpO1xyXG4gICAgLy8gICBzZXRWYWx1ZSgnJyk7XHJcbiAgICAvLyB9IGVsc2UgaWYgKGRhdGEuZXJyb3JzLmxlbmd0aCkge1xyXG4gICAgLy8gICBzZXRQZW5kaW5nKGZhbHNlKTtcclxuICAgIC8vICAgc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICAvLyAgIHN0YXJ0KCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ2NvbnRhY3QgZm9ybScpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHNldFBlbmRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRTdWNjZXNzKHRydWUpO1xyXG4gICAgICBzZXRFcnJvcihmYWxzZSk7XHJcbiAgICAgIHN0YXJ0KCk7XHJcbiAgICAgIHNldFZhbHVlKCcnKTtcclxuICAgIH0sIDIwMDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgIHNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICBpZD1cInVzZXJfZW1haWxcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgIGVycm9yPXtlcnJvcn1cclxuICAgICAgICBlcnJvck1lc3NhZ2U9XCJlcnJvck1lc3NhZ2VcIlxyXG4gICAgICAgIHN1Y2Nlc3NNZXNzYWdlPVwic3VjY2Vzc01zZ1wiXHJcbiAgICAgICAgc3VjY2Vzcz17c3VjY2Vzc31cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgdGl0bGU9XCJidXR0b25UZXh0XCJcclxuICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjZTc2ZjUxXCIsIGNvbG9yOiBcIiNmZmZcIn19XHJcbiAgICAgICAgaXNMb2FkaW5nPXtwZW5kaW5nfVxyXG4gICAgICAgIGxvYWRlcj17PExvYWRlciBsb2FkZXJDb2xvcj1cIndoaXRlXCIgLz59XHJcbiAgICAgIC8+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9