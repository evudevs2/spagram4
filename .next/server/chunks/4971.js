"use strict";
exports.id = 4971;
exports.ids = [4971];
exports.modules = {

/***/ 4971:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);
axios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function ReviewSingle() {
    // const changestats = (status) => {
    //     const xx = changeOrderStatus(status);
    //     updateOrder(status);
    // }
    // const changestats = async (status) => {
    //     try {
    //         const reviewtoUpdate = {id: reviewto.id, reviewto_status: status, customer_id: reviewto.customer_id};
    //         const response = await axios.post('https://tsm.spagram.com/api/update-reviewto.php', reviewtoUpdate);
    //         console.log('s response', response.data );
    //         changeOrderStatus(status);
    //       } catch (err) {
    //         console.log(err)
    //         // setError(err.message);
    //       } finally {
    //         // setLoading(false);
    //       }
    // }
    // console.log('sssss', reviewto);
    /*{ <td> {reviewto.reviewto_status} <br/> {reviewto.reviewto_status == "Initiated"?  <div><button onClick={()=>changestats("Approved")}>Approve</button>  <button onClick={()=>changestats("Denied")}>Deny</button> </div> : ''} </td>  }*/ /* { <form onSubmit={handleReviewUpdate}>
<div class="review-card">
    <div class="rating">4.5</div>
      <div class="user-details">
      <h2 class="user-name">John Doe</h2>
      <p class="comment">"Great product! Highly recommended."</p>
  </div>
</div>
<button className='button' type="submit"> Update </button>
<p className='message'> {message} </p>
</form> }*/ return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
            children: [
                " Provide Review to Andrea Sherri Parton ",
                " "
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewSingle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;