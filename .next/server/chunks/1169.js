"use strict";
exports.id = 1169;
exports.ids = [1169];
exports.modules = {

/***/ 7250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2598);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);






//
function Model({ slug , photoOnlyView , date , time , id , picture_url , name , service_area_primary , service_area , price , services_prices , gender , color , height , availability  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [isActive, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    function toggleinfo(isActive) {
        isActive ? setActive(photoOnlyView) : setActive(photoOnlyView);
    }
    const handleClick = ()=>{
        let singleModelApiUrl = "https://tsm.spagram.com/api/models.php?id=" + id + "&date=" + date + "&time=" + time;
        let setvalue = localStorage.setItem("singleModelApiUrl", singleModelApiUrl);
        router.push({
            pathname: "/" + slug
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const hell = ()=>{
            console.log("show", photoOnlyView);
        };
        hell();
    }, [
        isActive
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onClick: handleClick,
        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().model),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().modelimgCnt),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().modelimg),
                        src: picture_url,
                        alt: name
                    }),
                    "  "
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: photoOnlyView ? "hide" : "show",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().modelName),
                        children: name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().location),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                alt: "location icon",
                                width: "20",
                                src: "https://tsm.spagram.com/api/images/location.png"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                children: [
                                    " ",
                                    service_area_primary,
                                    " "
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);


/***/ }),

/***/ 1169:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7250);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2598);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const modelist = [
    {
        image: "/images/model.jpeg",
        name: "Jane Doe",
        service_area: "New York",
        phone: "555-555-5555",
        email: "jane.doe@example.com",
        availability: "Available"
    },
    {
        image: "/images/model.jpeg",
        name: "Johny depp",
        service_area: "Los Angeles",
        phone: "555-555-5556",
        email: "john.doe@example.com",
        availability: "Unavailable"
    },
    {
        image: "/images/model.jpeg",
        name: "Jane Smith",
        service_area: "San Francisco",
        phone: "555-555-5557",
        email: "jane.smith@example.com",
        availability: "Available"
    },
    {
        image: "/images/model.jpeg",
        name: "Jane Doe",
        service_area: "New York",
        phone: "555-555-5555",
        email: "jane.doe@example.com",
        availability: "Available"
    },
    {
        image: "/images/model.jpeg",
        name: "Johny depp",
        service_area: "Los Angeles",
        phone: "555-555-5556",
        email: "john.doe@example.com",
        availability: "Unavailable"
    },
    {
        image: "/images/model.jpeg",
        name: "Jane Smith",
        service_area: "San Francisco",
        phone: "555-555-5557",
        email: "jane.smith@example.com",
        availability: "Available"
    }
];
function Models({ photoOnlyView , apiUrl  }) {
    // const base_endpoint = 'https://tsm.spagram.com/api/models.php';
    //const [api_enpoint, setApi_enpoint] = useState(base_endpoint);
    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    console.log("ses", apiUrl);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // console.log('show mm', photoOnlyView);
        const urlParams = new URLSearchParams(apiUrl);
        let mdy = "";
        if (urlParams.get("date") == "") {
            const date = new Date();
            const month = date.getMonth() + 1; // Months are zero-based in JavaScript
            const day = date.getDate();
            const year = date.getFullYear();
            mdy = `${month}/${day}/${year}`;
            setDate(mdy);
        } else {
            setDate(urlParams.get("date"));
        }
        setTime(urlParams.get("time"));
        setLoading(true);
        const getData = async ()=>{
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(apiUrl);
                setData(response.data);
                console.log("alldata", response.data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally{
                setLoading(false);
            }
        };
        getData();
    }, [
        apiUrl
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().models),
        children: [
            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: "Loading..."
            }),
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: `There is a problem fetching the post data - ${error}`
            }),
            data && data.map((model, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    slug: model.slug,
                    photoOnlyView: photoOnlyView,
                    date: date,
                    time: time,
                    ...model
                }, index)),
            data && !loading && data.length < 1 ? " No Model matched your searched criteria.  " : ""
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Models);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;