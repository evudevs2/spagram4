"use strict";
exports.id = 3527;
exports.ids = [3527];
exports.modules = {

/***/ 3033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Loading = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "loading",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "loading__icon",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/images/loading.gif",
                alt: "Loading Image"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ 698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const ModelReview = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().memo(()=>{
    //console.log('sssss', model, model[0].name);
    let reviewText = [
        "I had the most incredible at-home love experience with her. ",
        "I treated myself to an amazing love day in the comfort of my own home with a skilled specialist. From the moment she arrived, I felt at ease. The specialist brought everything needed for a top-notch experience, creating a serene ambiance. The massage were both fantastic, leaving me feeling pampered and stress-free. Home-based services are a game-changer!",
        "I recently experienced a home based session with this outstanding girl, and it exceeded all expectations. The convenience of having a professional come to your home is unparalleled. The specialist's expertise and attention to creating a peaceful atmosphere turned my living room into a sanctuary. The massage was rejuvenating, and I left feeling like I had just visited a luxury spot. Highly recommend this at-home awesome service!",
        "Bringing the girl to my doorstep was the best decision ever! The home-based specialist I booked was incredibly talented. ",
        "The home-based service I received from the girl was a game-changer. Not having to drive to a spot made the experience so much more enjoyable. The specialist was professional, and her skills were evident in the relaxing massage and soothing behaviour. I appreciated the personalized touch, and my stress melted away. I highly recommend this convenient and luxurious at-home massage and more experience.",
        "A huge shoutout to the talented home-based massage specialist who turned my bed room into a sanctuary of relaxation. The convenience of this service is unmatched, and the specialist's skill in creating a peaceful ambiance was impressive. The massage was exactly what I needed, and the facial left my skin glowing. I felt like royalty enjoying a massage day without leaving home. Five stars!",
        "The convenience of having this service at home is a game-changer, and the specialist brought a level of expertise that exceeded my expectations. ",
        "The home-based massage specialist I booked created a massage oasis right in my living room.  It's incredible how a professional massage experience can be delivered to your doorstep. I highly recommend this service for anyone in need of relaxation without leaving home.",
        "I treated myself to a luxurious at-home massage session, and it was absolutely divine!",
        "My recent home-based massage experience with the girl specialist was nothing short of incredible. The convenience of having a professional come to my home made the entire experience stress-free. The specialist's expertise in massage and special service was evident, and the personalized attention to detail turned my bed room into a tranquil retreat. I'm already planning to make this a regular treat!",
        "I had the pleasure of enjoying a massage day at home with a skilled massage specialist, and it was pure bliss. From the moment they set up, I knew I was in for a treat. The massage techniques were both relaxing and therapeutic, and the specialist's commitment to creating a peaceful environment made the experience even more enjoyable. I highly recommend this home-based massage service for anyone in need of self-care.",
        "The at-home massage session I had with the massage specialist exceeded my expectations. ",
        " ",
        " ",
        " ",
        " "
    ];
    let randNanes = [
        "Connor Thompson",
        "Mason Harris",
        "Nathan Rodriguez",
        "Dylan Martinez",
        "Jordan Walker",
        "Ethan Turner",
        "Cameron Wright",
        "Logan Anderson",
        "Justin Lewis",
        "Tyler Mitchell",
        "Brandon Moore",
        "Austin Taylor"
    ];
    const generateAvgRating = ()=>{
        let rand = Math.floor(Math.random() * 2);
        let avgratingArr = [
            4,
            4.5,
            5
        ];
        if (avgratingArr[rand] == 4) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-empty.png",
                        alt: "Empty"
                    })
                ]
            });
        }
        if (avgratingArr[rand] == 4.5) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-half.png",
                        alt: "Half"
                    })
                ]
            });
        }
        if (avgratingArr[rand] == 5) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    })
                ]
            });
        }
    };
    const generateName = ()=>{
        let rand = Math.floor(Math.random() * 12);
        return randNanes[rand];
    };
    const generateText = ()=>{
        let rand = Math.floor(Math.random() * 16);
        return reviewText[rand];
    };
    const generateNumber = ()=>{
        let rand = Math.floor(Math.random() * 3);
        console.log("rands", rand);
        let possibleArr = [
            3.5,
            5,
            4.5,
            5
        ];
        if (possibleArr[rand] == 3.5) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-half.png",
                        alt: "Half"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-empty.png",
                        alt: "Empty"
                    })
                ]
            });
        }
        if (possibleArr[rand] == 4) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-empty.png",
                        alt: "Empty"
                    })
                ]
            });
        }
        if (possibleArr[rand] == 4.5) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-half.png",
                        alt: "Half"
                    })
                ]
            });
        }
        if (possibleArr[rand] == 5) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://tsm.spagram.com/api/assets/img/star-full.png",
                        alt: "Full"
                    })
                ]
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "reviews-cnt",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                class: "reviewNumber avg",
                children: [
                    " Average Rating ",
                    generateAvgRating(),
                    "  "
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                class: "customer-name",
                children: [
                    " ",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                        children: [
                            " ",
                            generateName(),
                            " "
                        ]
                    }),
                    " "
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                class: "reviewNumber",
                children: [
                    " ",
                    generateNumber(),
                    " "
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                class: "reviewText",
                children: [
                    " ",
                    generateText(),
                    " "
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                class: "customer-name",
                children: [
                    " ",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                        children: [
                            " ",
                            generateName(),
                            " "
                        ]
                    }),
                    " "
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                class: "reviewNumber",
                children: [
                    " ",
                    generateNumber(),
                    " "
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                class: "reviewText",
                children: [
                    " ",
                    generateText(),
                    " "
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                class: "customer-name",
                children: [
                    " ",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                        children: [
                            " ",
                            generateName(),
                            " "
                        ]
                    }),
                    " "
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                class: "reviewNumber",
                children: [
                    " ",
                    generateNumber(),
                    " "
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                class: "reviewText",
                children: [
                    " ",
                    generateText(),
                    " "
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#/",
                        children: " Load more. "
                    }),
                    " "
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModelReview);


/***/ }),

/***/ 4174:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2598);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_modelReview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(698);
/* harmony import */ var _components_galleryImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3200);
/* harmony import */ var react_simply_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9141);
/* harmony import */ var react_simply_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_simply_carousel__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_galleryImages__WEBPACK_IMPORTED_MODULE_4__]);
_components_galleryImages__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function SingleModelView(model) {
    const [activeSlideIndex, setActiveSlideIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    //console.log('sssss', model, model[0].name);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col2 photobg",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "modelSingel",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default().modeSingleimg),
                            src: model[0].picture_url,
                            alt: model[0].name
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "modelDesc mt0 pt0",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "mt0",
                                children: [
                                    "Name: ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                        children: [
                                            " ",
                                            model[0].name,
                                            " "
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Service Areas: ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                        children: [
                                            " ",
                                            model[0].service_area,
                                            " "
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Availability Type: ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                        children: [
                                            " ",
                                            model[0].location_type,
                                            " "
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Price: ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                        children: [
                                            " $",
                                            model[0].price.trim(),
                                            "/hr "
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Gender: ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                        children: [
                                            " ",
                                            model[0].gender,
                                            " "
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Ethnicities: ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: model[0].ethnicity
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Height: ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                        children: [
                                            " ",
                                            model[0].height,
                                            " Feet"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Age: ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                        children: [
                                            " ",
                                            model[0].age,
                                            " "
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_galleryImages__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                gs: model[0].picture_urls
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleModelView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;