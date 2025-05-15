"use strict";
(() => {
var exports = {};
exports.id = 4265;
exports.ids = [4265];
exports.modules = {

/***/ 7336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "square"
const external_square_namespaceObject = require("square");
;// CONCATENATED MODULE: external "crypto"
const external_crypto_namespaceObject = require("crypto");
;// CONCATENATED MODULE: ./pages/api/pay.js


BigInt.prototype.toJSON = function() {
    return this.toString();
};
const { paymentsApi , customersApi , cardsApi  } = new external_square_namespaceObject.Client({
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
    environment: "sandbox"
});
// try {
//   const response = await cardsApi.retrieveCard('CARD_ID');
//   console.log('card retrived', response.result);
// } catch(error) {
//   console.log(error);
// }
// "GSPWHKPAAWR173VF5B9MGS1NQ8"
async function handler(req, res) {
    if (req.method === "POST") {
        // const { result } = await paymentsApi.createPayment({
        //   idempotencyKey: randomUUID(),
        //   sourceId: req.body.sourceId,
        //   amountMoney: {
        //     currency: 'USD',
        //     amount: req.body.amount
        //   }
        // })
        const customer_response = await customersApi.createCustomer({
            givenName: "Dave Wood",
            emailAddress: "zordelalex@gmail.com"
        });
        const csid = customer_response.result.customer.id;
        try {
            const card_response = await cardsApi.createCard({
                idempotencyKey: (0,external_crypto_namespaceObject.randomUUID)(),
                sourceId: req.body.sourceId,
                card: {
                    cardholderName: "Amelia Earhart",
                    billingAddress: {
                        addressLine1: "500 Electric Ave",
                        addressLine2: "Suite 600",
                        locality: "New York",
                        administrativeDistrictLevel1: "NY",
                        postalCode: "10003",
                        country: "US"
                    },
                    customerId: csid,
                    referenceId: "user-asd222a2"
                }
            });
            // console.log('custoerm id', card_response.result);
            res.status(200).json(card_response.result);
        } catch (error) {
            console.log(error);
        }
    } else {
        res.status(500).send();
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7336));
module.exports = __webpack_exports__;

})();