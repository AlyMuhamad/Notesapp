"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/addNotes/page",{

/***/ "(app-pages-browser)/./app/(components)/SavedNotes.tsx":
/*!*****************************************!*\
  !*** ./app/(components)/SavedNotes.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SavedNotes.module.css */ \"(app-pages-browser)/./app/(components)/SavedNotes.module.css\");\n/* harmony import */ var _SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ \"(app-pages-browser)/./node_modules/html-react-parser/esm/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_images_5_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../(assets)/(images)/5.png */ \"(app-pages-browser)/./app/(assets)/(images)/5.png\");\n/* harmony import */ var _barrel_optimize_names_RiDeleteBin6Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=RiDeleteBin6Line!=!react-icons/ri */ \"(app-pages-browser)/./node_modules/react-icons/ri/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_FiArchive_FiEdit3_react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=FiArchive,FiEdit3!=!react-icons/fi */ \"(app-pages-browser)/./node_modules/react-icons/fi/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_TbPin_TbPinnedOff_react_icons_tb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=TbPin,TbPinnedOff!=!react-icons/tb */ \"(app-pages-browser)/./node_modules/react-icons/tb/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 30rem;\\n  height: 22.7rem;\\n\\n  @media (max-width: 55em) {\\n    width: 40rem;\\n    height: 29rem;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst style = {\n    fontSize: \"2.4rem\",\n    color: \"black\",\n    cursor: \"pointer\"\n};\nconst style2 = {\n    fontSize: \"2.2rem\",\n    color: \"black\"\n};\nconst StyledImage = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_templateObject());\n_c = StyledImage;\nfunction SavedNotes() {\n    _s();\n    const [selectedNote, setSelectedNote] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    function handleEdit(item) {}\n    async function handlePin(note) {\n        const requestOptions = {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                pinned: true\n            })\n        };\n        await fetch(\"http://127.0.0.1:8000/notes/addNotes/\".concat(note._id), requestOptions);\n        setDBnoteSelected({});\n    }\n    async function handleUnpin(note) {\n        const requestOptions = {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                pinned: false\n            })\n        };\n        await fetch(\"http://127.0.0.1:8000/notes/addNotes/\".concat(note._id), requestOptions);\n        setDBnoteSelected({});\n    }\n    async function handleArchive(note) {\n        const requestOptions = {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                archived: true\n            })\n        };\n        await fetch(\"http://127.0.0.1:8000/notes/addNotes/\".concat(note._id), requestOptions);\n        setDBnoteSelected({});\n    }\n    async function handleDelete(note) {\n        const deleteRequest = {\n            method: \"DELETE\"\n        };\n        await fetch(\"http://127.0.0.1:8000/notes/addNotes/\".concat(note._id), deleteRequest);\n        setDBnoteSelected({});\n    }\n    const [DBnotes, setDBnotes] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [DBnoteSelected, setDBnoteSelected] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function handleSubmit() {\n            const res = await fetch(\"http://127.0.0.1:8000/notes/addNotes\");\n            const data = await res.json();\n            console.log(data.data);\n        // setDBnotes(data.data.notes);\n        }\n        handleSubmit();\n    });\n    async function selectNote(id) {\n        const res = await fetch(\"http://127.0.0.1:8000/notes/addNotes/\".concat(id));\n        const data = await res.json();\n        setDBnoteSelected(data.data.note);\n        console.log(data.data.note.selected);\n        const requestOptions = {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                selected: DBnoteSelected && !DBnoteSelected.selected\n            })\n        };\n        await fetch(\"http://127.0.0.1:8000/notes/addNotes/\".concat(id), requestOptions);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().section),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().headline),\n                children: [\n                    DBnotes.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                        children: \"Saved Notes\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                        lineNumber: 145,\n                        columnNumber: 32\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: DBnotes.length > 0 && DBnoteSelected && DBnoteSelected.selected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().icons),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_FiArchive_FiEdit3_react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiEdit3, {\n                                    style: style,\n                                    onClick: ()=>handleEdit(selectedNote)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                    lineNumber: 149,\n                                    columnNumber: 15\n                                }, this),\n                                DBnoteSelected.pinned ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_TbPin_TbPinnedOff_react_icons_tb__WEBPACK_IMPORTED_MODULE_9__.TbPinnedOff, {\n                                    style: style,\n                                    onClick: ()=>handleUnpin(DBnoteSelected)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                    lineNumber: 151,\n                                    columnNumber: 17\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_TbPin_TbPinnedOff_react_icons_tb__WEBPACK_IMPORTED_MODULE_9__.TbPin, {\n                                    style: style,\n                                    onClick: ()=>handlePin(DBnoteSelected)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                    lineNumber: 156,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_FiArchive_FiEdit3_react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiArchive, {\n                                    style: style,\n                                    onClick: ()=>handleArchive(DBnoteSelected)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                    lineNumber: 161,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_RiDeleteBin6Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_10__.RiDeleteBin6Line, {\n                                    style: style,\n                                    onClick: ()=>handleDelete(DBnoteSelected)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                    lineNumber: 165,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                            lineNumber: 148,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                        lineNumber: 146,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                lineNumber: 144,\n                columnNumber: 7\n            }, this),\n            DBnotes.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().noNotesImage),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledImage, {\n                        src: _assets_images_5_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                        alt: \"an image\",\n                        layout: \"resonsive\",\n                        priority: true\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                        lineNumber: 175,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().noNotesText),\n                        children: [\n                            \"No saved notes yet :( , \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                lineNumber: 177,\n                                columnNumber: 37\n                            }, this),\n                            \"try to add some to make me happy :)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                        lineNumber: 176,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                lineNumber: 174,\n                columnNumber: 9\n            }, this) : DBnotes.map((DBnote)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().note),\n                        onClick: ()=>{\n                            selectNote(DBnote._id);\n                        },\n                        style: {\n                            backgroundColor: DBnote.selected ? \"#FFF\" : \"#cbd5e1\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().content),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"\".concat(DBnote.body))\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                        lineNumber: 195,\n                                        columnNumber: 19\n                                    }, this),\n                                    DBnote.pinned && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_TbPin_TbPinnedOff_react_icons_tb__WEBPACK_IMPORTED_MODULE_9__.TbPin, {\n                                        style: style2\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                        lineNumber: 196,\n                                        columnNumber: 37\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                lineNumber: 194,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                            lineNumber: 193,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                        lineNumber: 184,\n                        columnNumber: 13\n                    }, this)\n                }, DBnote._id, false, {\n                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                    lineNumber: 183,\n                    columnNumber: 11\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n        lineNumber: 143,\n        columnNumber: 5\n    }, this);\n}\n_s(SavedNotes, \"+CwBMw0qrWm4JRdEW3uvtp19TNM=\");\n_c1 = SavedNotes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SavedNotes);\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledImage\");\n$RefreshReg$(_c1, \"SavedNotes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oY29tcG9uZW50cykvU2F2ZWROb3Rlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNkM7QUFDTjtBQUNEO0FBQ007QUFDYjtBQUNnQjtBQUNHO0FBQ0U7QUFDQTtBQUNyQjtBQVUvQixNQUFNYSxRQUFRO0lBQ1pDLFVBQVU7SUFDVkMsT0FBTztJQUNQQyxRQUFRO0FBQ1Y7QUFFQSxNQUFNQyxTQUFTO0lBQ2JILFVBQVU7SUFDVkMsT0FBTztBQUNUO0FBRUEsTUFBTUcsY0FBY2pCLDZEQUFNQSxDQUFDSSxrREFBS0E7S0FBMUJhO0FBVU4sU0FBU0M7O0lBQ1AsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2pCLCtDQUFRQSxDQUFDO0lBRWpELFNBQVNrQixXQUFXQyxJQUFhLEdBQUc7SUFFcEMsZUFBZUMsVUFBVUMsSUFBVTtRQUNqQyxNQUFNQyxpQkFBaUI7WUFDckJDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQkMsUUFBUTtZQUNWO1FBQ0Y7UUFDQSxNQUFNQyxNQUNKLHdDQUFpRCxPQUFUUixLQUFLUyxHQUFHLEdBQ2hEUjtRQUdGUyxrQkFBa0IsQ0FBQztJQUNyQjtJQUVBLGVBQWVDLFlBQVlYLElBQVU7UUFDbkMsTUFBTUMsaUJBQWlCO1lBQ3JCQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDbkJDLFFBQVE7WUFDVjtRQUNGO1FBQ0EsTUFBTUMsTUFDSix3Q0FBaUQsT0FBVFIsS0FBS1MsR0FBRyxHQUNoRFI7UUFHRlMsa0JBQWtCLENBQUM7SUFDckI7SUFFQSxlQUFlRSxjQUFjWixJQUFVO1FBQ3JDLE1BQU1DLGlCQUFpQjtZQUNyQkMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CTyxVQUFVO1lBQ1o7UUFDRjtRQUNBLE1BQU1MLE1BQ0osd0NBQWlELE9BQVRSLEtBQUtTLEdBQUcsR0FDaERSO1FBR0ZTLGtCQUFrQixDQUFDO0lBQ3JCO0lBRUEsZUFBZUksYUFBYWQsSUFBVTtRQUNwQyxNQUFNZSxnQkFBZ0I7WUFBRWIsUUFBUTtRQUFTO1FBQ3pDLE1BQU1NLE1BQ0osd0NBQWlELE9BQVRSLEtBQUtTLEdBQUcsR0FDaERNO1FBRUZMLGtCQUFrQixDQUFDO0lBQ3JCO0lBRUEsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUd0QywrQ0FBUUEsQ0FBUyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ3VDLGdCQUFnQlIsa0JBQWtCLEdBQUcvQiwrQ0FBUUEsQ0FDbEQsQ0FBQztJQUVIRCxnREFBU0EsQ0FBQztRQUNSLGVBQWV5QztZQUNiLE1BQU1DLE1BQU0sTUFBTVosTUFBTTtZQUN4QixNQUFNYSxPQUFPLE1BQU1ELElBQUlFLElBQUk7WUFDM0JDLFFBQVFDLEdBQUcsQ0FBQ0gsS0FBS0EsSUFBSTtRQUNyQiwrQkFBK0I7UUFDakM7UUFDQUY7SUFDRjtJQUVBLGVBQWVNLFdBQVdDLEVBQVU7UUFDbEMsTUFBTU4sTUFBTSxNQUFNWixNQUFNLHdDQUEyQyxPQUFIa0I7UUFDaEUsTUFBTUwsT0FBTyxNQUFNRCxJQUFJRSxJQUFJO1FBQzNCWixrQkFBa0JXLEtBQUtBLElBQUksQ0FBQ3JCLElBQUk7UUFDaEN1QixRQUFRQyxHQUFHLENBQUNILEtBQUtBLElBQUksQ0FBQ3JCLElBQUksQ0FBQzJCLFFBQVE7UUFDbkMsTUFBTTFCLGlCQUFpQjtZQUNyQkMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CcUIsVUFBVVQsa0JBQWtCLENBQUNBLGVBQWVTLFFBQVE7WUFDdEQ7UUFDRjtRQUNBLE1BQU1uQixNQUFNLHdDQUEyQyxPQUFIa0IsS0FBTXpCO0lBQzVEO0lBRUEscUJBQ0UsOERBQUMyQjtRQUFJQyxXQUFXdEQsdUVBQWM7OzBCQUM1Qiw4REFBQ3FEO2dCQUFJQyxXQUFXdEQsd0VBQWU7O29CQUM1QnlDLFFBQVFnQixNQUFNLEdBQUcsbUJBQUssOERBQUNKO3dCQUFJQyxXQUFXdEQscUVBQVk7a0NBQUU7Ozs7OztrQ0FDckQsOERBQUNxRDtrQ0FDRVosUUFBUWdCLE1BQU0sR0FBRyxLQUFLZCxrQkFBa0JBLGVBQWVTLFFBQVEsa0JBQzlELDhEQUFDQzs0QkFBSUMsV0FBV3RELHFFQUFZOzs4Q0FDMUIsOERBQUNRLDRGQUFPQTtvQ0FBQ0ssT0FBT0E7b0NBQU8rQyxTQUFTLElBQU10QyxXQUFXRjs7Ozs7O2dDQUNoRHVCLGVBQWVYLE1BQU0saUJBQ3BCLDhEQUFDckIsZ0dBQVdBO29DQUNWRSxPQUFPQTtvQ0FDUCtDLFNBQVMsSUFBTXhCLFlBQVlPOzs7Ozt5REFHN0IsOERBQUNqQywwRkFBS0E7b0NBQ0pHLE9BQU9BO29DQUNQK0MsU0FBUyxJQUFNcEMsVUFBVW1COzs7Ozs7OENBRzdCLDhEQUFDbEMsOEZBQVNBO29DQUNSSSxPQUFPQTtvQ0FDUCtDLFNBQVMsSUFBTXZCLGNBQWNNOzs7Ozs7OENBRS9CLDhEQUFDcEMscUdBQWdCQTtvQ0FDZk0sT0FBT0E7b0NBQ1ArQyxTQUFTLElBQU1yQixhQUFhSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNckNGLFFBQVFnQixNQUFNLEtBQUssa0JBQ2xCLDhEQUFDSjtnQkFBSUMsV0FBV3RELDRFQUFtQjs7a0NBQ2pDLDhEQUFDa0I7d0JBQVk0QyxLQUFLeEQsNERBQUtBO3dCQUFFeUQsS0FBSTt3QkFBV0MsUUFBTzt3QkFBWUMsUUFBUTs7Ozs7O2tDQUNuRSw4REFBQ1o7d0JBQUlDLFdBQVd0RCwyRUFBa0I7OzRCQUFFOzBDQUNWLDhEQUFDbUU7Ozs7OzRCQUFLOzs7Ozs7Ozs7Ozs7dUJBS2xDMUIsUUFBUTJCLEdBQUcsQ0FBQ0MsQ0FBQUEsdUJBQ1YsOERBQUNoQjs4QkFDQyw0RUFBQ0E7d0JBQ0NDLFdBQVd0RCxvRUFBVzt3QkFDdEI0RCxTQUFTOzRCQUNQVixXQUFXbUIsT0FBT25DLEdBQUc7d0JBQ3ZCO3dCQUNBckIsT0FBTzs0QkFDTHlELGlCQUFpQkQsT0FBT2pCLFFBQVEsR0FBRyxTQUFTO3dCQUM5QztrQ0FFQSw0RUFBQ0M7NEJBQUlDLFdBQVd0RCx5RUFBZ0I7c0NBQzlCLDRFQUFDcUQ7Z0NBQUlDLFdBQVd0RCx1RUFBYzs7a0RBQzVCLDhEQUFDcUQ7a0RBQUtuRCw2REFBS0EsQ0FBQyxHQUFlLE9BQVptRSxPQUFPeEMsSUFBSTs7Ozs7O29DQUN6QndDLE9BQU9yQyxNQUFNLGtCQUFJLDhEQUFDdEIsMEZBQUtBO3dDQUFDRyxPQUFPSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkFiOUJvRCxPQUFPbkMsR0FBRzs7Ozs7Ozs7Ozs7QUFzQjlCO0dBbEtTZjtNQUFBQTtBQW9LVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGNvbXBvbmVudHMpL1NhdmVkTm90ZXMudHN4PzlhNGYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NhdmVkTm90ZXMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgcGFyc2UgZnJvbSAnaHRtbC1yZWFjdC1wYXJzZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBpbWFnZSBmcm9tICcuLi8oYXNzZXRzKS8oaW1hZ2VzKS81LnBuZyc7XHJcbmltcG9ydCB7IFJpRGVsZXRlQmluNkxpbmUgfSBmcm9tICdyZWFjdC1pY29ucy9yaSc7XHJcbmltcG9ydCB7IEZpRWRpdDMsIEZpQXJjaGl2ZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcclxuaW1wb3J0IHsgVGJQaW4sIFRiUGlubmVkT2ZmIH0gZnJvbSAncmVhY3QtaWNvbnMvdGInO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgTm90ZSB7XHJcbiAgX2lkOiBudW1iZXI7XHJcbiAgYm9keTogc3RyaW5nO1xyXG4gIHNlbGVjdGVkOiBib29sZWFuO1xyXG4gIHBpbm5lZDogYm9vbGVhbjtcclxuICBhcmNoaXZlZDogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgZm9udFNpemU6ICcyLjRyZW0nLFxyXG4gIGNvbG9yOiAnYmxhY2snLFxyXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxyXG59O1xyXG5cclxuY29uc3Qgc3R5bGUyID0ge1xyXG4gIGZvbnRTaXplOiAnMi4ycmVtJyxcclxuICBjb2xvcjogJ2JsYWNrJyxcclxufTtcclxuXHJcbmNvbnN0IFN0eWxlZEltYWdlID0gc3R5bGVkKEltYWdlKWBcclxuICB3aWR0aDogMzByZW07XHJcbiAgaGVpZ2h0OiAyMi43cmVtO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTVlbSkge1xyXG4gICAgd2lkdGg6IDQwcmVtO1xyXG4gICAgaGVpZ2h0OiAyOXJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBTYXZlZE5vdGVzKCkge1xyXG4gIGNvbnN0IFtzZWxlY3RlZE5vdGUsIHNldFNlbGVjdGVkTm90ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRWRpdChpdGVtOiBib29sZWFuKSB7fVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVQaW4obm90ZTogTm90ZSkge1xyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBwaW5uZWQ6IHRydWUsXHJcbiAgICAgIH0pLFxyXG4gICAgfTtcclxuICAgIGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL25vdGVzL2FkZE5vdGVzLyR7bm90ZS5faWR9YCxcclxuICAgICAgcmVxdWVzdE9wdGlvbnNcclxuICAgICk7XHJcblxyXG4gICAgc2V0REJub3RlU2VsZWN0ZWQoe30gYXMgTm90ZSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVVbnBpbihub3RlOiBOb3RlKSB7XHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHBpbm5lZDogZmFsc2UsXHJcbiAgICAgIH0pLFxyXG4gICAgfTtcclxuICAgIGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL25vdGVzL2FkZE5vdGVzLyR7bm90ZS5faWR9YCxcclxuICAgICAgcmVxdWVzdE9wdGlvbnNcclxuICAgICk7XHJcblxyXG4gICAgc2V0REJub3RlU2VsZWN0ZWQoe30gYXMgTm90ZSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVBcmNoaXZlKG5vdGU6IE5vdGUpIHtcclxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgYXJjaGl2ZWQ6IHRydWUsXHJcbiAgICAgIH0pLFxyXG4gICAgfTtcclxuICAgIGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL25vdGVzL2FkZE5vdGVzLyR7bm90ZS5faWR9YCxcclxuICAgICAgcmVxdWVzdE9wdGlvbnNcclxuICAgICk7XHJcblxyXG4gICAgc2V0REJub3RlU2VsZWN0ZWQoe30gYXMgTm90ZSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVEZWxldGUobm90ZTogTm90ZSkge1xyXG4gICAgY29uc3QgZGVsZXRlUmVxdWVzdCA9IHsgbWV0aG9kOiAnREVMRVRFJyB9O1xyXG4gICAgYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvbm90ZXMvYWRkTm90ZXMvJHtub3RlLl9pZH1gLFxyXG4gICAgICBkZWxldGVSZXF1ZXN0XHJcbiAgICApO1xyXG4gICAgc2V0REJub3RlU2VsZWN0ZWQoe30gYXMgTm90ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBbREJub3Rlcywgc2V0REJub3Rlc10gPSB1c2VTdGF0ZTxOb3RlW10+KFtdKTtcclxuICBjb25zdCBbREJub3RlU2VsZWN0ZWQsIHNldERCbm90ZVNlbGVjdGVkXSA9IHVzZVN0YXRlPE5vdGUgfCB1bmRlZmluZWQ+KFxyXG4gICAge30gYXMgTm90ZVxyXG4gICk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9ub3Rlcy9hZGROb3RlcycpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuICAgICAgLy8gc2V0REJub3RlcyhkYXRhLmRhdGEubm90ZXMpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlU3VibWl0KCk7XHJcbiAgfSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbGVjdE5vdGUoaWQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9ub3Rlcy9hZGROb3Rlcy8ke2lkfWApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBzZXREQm5vdGVTZWxlY3RlZChkYXRhLmRhdGEubm90ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEubm90ZS5zZWxlY3RlZCk7XHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHNlbGVjdGVkOiBEQm5vdGVTZWxlY3RlZCAmJiAhREJub3RlU2VsZWN0ZWQuc2VsZWN0ZWQsXHJcbiAgICAgIH0pLFxyXG4gICAgfTtcclxuICAgIGF3YWl0IGZldGNoKGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvbm90ZXMvYWRkTm90ZXMvJHtpZH1gLCByZXF1ZXN0T3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkbGluZX0+XHJcbiAgICAgICAge0RCbm90ZXMubGVuZ3RoID4gMCAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5TYXZlZCBOb3RlczwvZGl2Pn1cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge0RCbm90ZXMubGVuZ3RoID4gMCAmJiBEQm5vdGVTZWxlY3RlZCAmJiBEQm5vdGVTZWxlY3RlZC5zZWxlY3RlZCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9PlxyXG4gICAgICAgICAgICAgIDxGaUVkaXQzIHN0eWxlPXtzdHlsZX0gb25DbGljaz17KCkgPT4gaGFuZGxlRWRpdChzZWxlY3RlZE5vdGUpfSAvPlxyXG4gICAgICAgICAgICAgIHtEQm5vdGVTZWxlY3RlZC5waW5uZWQgPyAoXHJcbiAgICAgICAgICAgICAgICA8VGJQaW5uZWRPZmZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVbnBpbihEQm5vdGVTZWxlY3RlZCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8VGJQaW5cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQaW4oREJub3RlU2VsZWN0ZWQpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxGaUFyY2hpdmVcclxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFyY2hpdmUoREJub3RlU2VsZWN0ZWQpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJpRGVsZXRlQmluNkxpbmVcclxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShEQm5vdGVTZWxlY3RlZCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge0RCbm90ZXMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm9Ob3Rlc0ltYWdlfT5cclxuICAgICAgICAgIDxTdHlsZWRJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9XCJhbiBpbWFnZVwiIGxheW91dD1cInJlc29uc2l2ZVwiIHByaW9yaXR5IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vTm90ZXNUZXh0fT5cclxuICAgICAgICAgICAgTm8gc2F2ZWQgbm90ZXMgeWV0IDooICwgPGJyIC8+XHJcbiAgICAgICAgICAgIHRyeSB0byBhZGQgc29tZSB0byBtYWtlIG1lIGhhcHB5IDopXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICBEQm5vdGVzLm1hcChEQm5vdGUgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e0RCbm90ZS5faWR9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubm90ZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3ROb3RlKERCbm90ZS5faWQpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogREJub3RlLnNlbGVjdGVkID8gJyNGRkYnIDogJyNjYmQ1ZTEnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PntwYXJzZShgJHtEQm5vdGUuYm9keX1gKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAge0RCbm90ZS5waW5uZWQgJiYgPFRiUGluIHN0eWxlPXtzdHlsZTJ9IC8+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSlcclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhdmVkTm90ZXM7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJzdHlsZWQiLCJwYXJzZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJpbWFnZSIsIlJpRGVsZXRlQmluNkxpbmUiLCJGaUVkaXQzIiwiRmlBcmNoaXZlIiwiVGJQaW4iLCJUYlBpbm5lZE9mZiIsIlJlYWN0Iiwic3R5bGUiLCJmb250U2l6ZSIsImNvbG9yIiwiY3Vyc29yIiwic3R5bGUyIiwiU3R5bGVkSW1hZ2UiLCJTYXZlZE5vdGVzIiwic2VsZWN0ZWROb3RlIiwic2V0U2VsZWN0ZWROb3RlIiwiaGFuZGxlRWRpdCIsIml0ZW0iLCJoYW5kbGVQaW4iLCJub3RlIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwaW5uZWQiLCJmZXRjaCIsIl9pZCIsInNldERCbm90ZVNlbGVjdGVkIiwiaGFuZGxlVW5waW4iLCJoYW5kbGVBcmNoaXZlIiwiYXJjaGl2ZWQiLCJoYW5kbGVEZWxldGUiLCJkZWxldGVSZXF1ZXN0IiwiREJub3RlcyIsInNldERCbm90ZXMiLCJEQm5vdGVTZWxlY3RlZCIsImhhbmRsZVN1Ym1pdCIsInJlcyIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInNlbGVjdE5vdGUiLCJpZCIsInNlbGVjdGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImhlYWRsaW5lIiwibGVuZ3RoIiwidGl0bGUiLCJpY29ucyIsIm9uQ2xpY2siLCJub05vdGVzSW1hZ2UiLCJzcmMiLCJhbHQiLCJsYXlvdXQiLCJwcmlvcml0eSIsIm5vTm90ZXNUZXh0IiwiYnIiLCJtYXAiLCJEQm5vdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb250YWluZXIiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(components)/SavedNotes.tsx\n"));

/***/ })

});