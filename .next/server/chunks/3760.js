"use strict";
exports.id = 3760;
exports.ids = [3760];
exports.modules = {

/***/ 3760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_square_web_payments_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2443);
/* harmony import */ var react_square_web_payments_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_square_web_payments_sdk__WEBPACK_IMPORTED_MODULE_2__);
// Dependencies



// import { useHistory } from 'react-router-dom';
// const history = useHistory();
// const customerdb_id = localStorage.getItem('customerdbid');
// const price = localStorage.getItem('price');
const MyPaymentForm = (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_square_web_payments_sdk__WEBPACK_IMPORTED_MODULE_2__.PaymentForm, {
        /**
     * Identifies the calling form with a verified application ID generated from
     * the Square Application Dashboard.
     */ // //sandbox
        // applicationId="sandbox-sq0idb-90pxZJ69rbf3lNuPBFdURg"
        applicationId: "sq0idp-gL8WgKdyA4DEv0Pa0eGi6A",
        /**
     * Invoked when payment form receives the result of a tokenize generation
     * request. The result will be a valid credit card or wallet token, or an error.
     */ cardTokenizeResponseReceived: async (token, verifiedBuyer)=>{
            // console.log('token generated', token);
            // console.log('cid', params.customer_id);
            // console.log('price', params.price);
            const response = await fetch("https://tsm.spagram.com/api/square/pay.php", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    sourceId: token.token,
                    customerdb_id: params.customer_id,
                    model_id: params.model_id,
                    service_address: params.service_address,
                    service_type: params.service_type,
                    service_time: params.service_time,
                    amount: params.price
                })
            });
            console.log(await response.json());
            window.location.href = "/cardsaved";
        // console.log(await response);
        },
        /**
     * This function enable the Strong Customer Authentication (SCA) flow
     *
     * We strongly recommend use this function to verify the buyer and reduce
     * the chance of fraudulent transactions.
     */ createVerificationDetails: ()=>({
                amount: "100",
                /* collected from the buyer */ billingContact: {
                    addressLines: [
                        "123 Main Street",
                        "Apartment 1"
                    ],
                    familyName: "Doe",
                    givenName: "John",
                    countryCode: "GB",
                    city: "London"
                },
                currencyCode: "GBP",
                intent: "STORE"
            }),
        /**
     * Identifies the location of the merchant that is taking the payment.
     * Obtained from the Square Application Dashboard - Locations tab.
     */ locationId: "L9EE047NGRTAM",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_square_web_payments_sdk__WEBPACK_IMPORTED_MODULE_2__.CreditCard, {
            children: "Save Card"
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyPaymentForm);


/***/ })

};
;