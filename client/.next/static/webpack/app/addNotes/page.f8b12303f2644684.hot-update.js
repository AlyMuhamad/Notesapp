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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SavedNotes.module.css */ \"(app-pages-browser)/./app/(components)/SavedNotes.module.css\");\n/* harmony import */ var _SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ \"(app-pages-browser)/./node_modules/html-react-parser/esm/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_images_5_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../(assets)/(images)/5.png */ \"(app-pages-browser)/./app/(assets)/(images)/5.png\");\n/* harmony import */ var _barrel_optimize_names_RiDeleteBin6Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=RiDeleteBin6Line!=!react-icons/ri */ \"(app-pages-browser)/./node_modules/react-icons/ri/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_FiArchive_FiEdit3_react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=FiArchive,FiEdit3!=!react-icons/fi */ \"(app-pages-browser)/./node_modules/react-icons/fi/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_TbPin_TbPinnedOff_react_icons_tb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=TbPin,TbPinnedOff!=!react-icons/tb */ \"(app-pages-browser)/./node_modules/react-icons/tb/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 30rem;\\n  height: 22.7rem;\\n\\n  @media (max-width: 55em) {\\n    width: 40rem;\\n    height: 29rem;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst StyledImage = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_templateObject());\n_c = StyledImage;\nfunction SavedNotes() {\n    _s();\n    const [selectedNote, setSelectedNote] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    function handleEdit(item) {}\n    async function handlePin(note) {\n        const requestOptions = {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                pinned: true\n            })\n        };\n        await fetch(\"http://localhost:8000/notes/addNotes/\".concat(note._id), requestOptions);\n        setDBnoteSelected({});\n    }\n    async function handleUnpin(note) {\n        const requestOptions = {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                pinned: false\n            })\n        };\n        await fetch(\"http://127.0.0.1:8000/notes/addNotes/\".concat(note._id), requestOptions);\n        setDBnoteSelected({});\n    }\n    async function handleArchive(note) {\n        const requestOptions = {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                archived: true\n            })\n        };\n        await fetch(\"http://127.0.0.1:8000/notes/addNotes/\".concat(note._id), requestOptions);\n        setDBnoteSelected({});\n    }\n    async function handleDelete(note) {\n        const deleteRequest = {\n            method: \"DELETE\"\n        };\n        await fetch(\"http://127.0.0.1:5000/notes/addNotes/\".concat(note._id), deleteRequest);\n        setDBnoteSelected({});\n    }\n    const [DBnotes, setDBnotes] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [DBnoteSelected, setDBnoteSelected] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function handleSubmit() {\n            const res = await fetch(\"http://127.0.0.1:5000/notes/addNotes\");\n            const data = await res.json();\n            setDBnotes(data.data.notes);\n        }\n        handleSubmit();\n    });\n    ////////////////////////////////////////////////////\n    // async function selectNote(id: number) {\n    //   const res = await fetch(`http://127.0.0.1:5000/notes/addNotes/${id}`);\n    //   const data = await res.json();\n    //   setDBnoteSelected(data.data.note);\n    //   const requestOptions = {\n    //     method: 'PATCH',\n    //     headers: {\n    //       'Content-Type': 'application/json',\n    //     },\n    //     body: JSON.stringify({\n    //       selected: DBnoteSelected && !DBnoteSelected.selected,\n    //     }),\n    //   };\n    //   await fetch(`http://127.0.0.1:5000/notes/addNotes/${id}`, requestOptions);\n    // }\n    /////////////////////////////////////////////////////////\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().section),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().headline),\n                children: [\n                    DBnotes.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                        children: \"Saved Notes\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 32\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: DBnotes.length > 0 && DBnoteSelected && DBnoteSelected.selected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().icons),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_FiArchive_FiEdit3_react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiEdit3, {\n                                    className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().edit),\n                                    onClick: ()=>handleEdit(selectedNote)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                    lineNumber: 139,\n                                    columnNumber: 15\n                                }, this),\n                                DBnoteSelected.pinned ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_TbPin_TbPinnedOff_react_icons_tb__WEBPACK_IMPORTED_MODULE_9__.TbPinnedOff, {\n                                    className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().pinoff),\n                                    onClick: ()=>handleUnpin(DBnoteSelected)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                    lineNumber: 144,\n                                    columnNumber: 17\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_TbPin_TbPinnedOff_react_icons_tb__WEBPACK_IMPORTED_MODULE_9__.TbPin, {\n                                    className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().pin),\n                                    onClick: ()=>handlePin(DBnoteSelected)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                    lineNumber: 149,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_FiArchive_FiEdit3_react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiArchive, {\n                                    className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().archive),\n                                    onClick: ()=>handleArchive(DBnoteSelected)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                    lineNumber: 154,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_RiDeleteBin6Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_10__.RiDeleteBin6Line, {\n                                    className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"delete\"]),\n                                    onClick: ()=>handleDelete(DBnoteSelected)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                    lineNumber: 158,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                            lineNumber: 138,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                        lineNumber: 136,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, this),\n            DBnotes.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().noNotesImage),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledImage, {\n                        src: _assets_images_5_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                        alt: \"an image\",\n                        layout: \"resonsive\",\n                        priority: true\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                        lineNumber: 168,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().noNotesText),\n                        children: [\n                            \"No saved notes yet :( , \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                lineNumber: 170,\n                                columnNumber: 37\n                            }, this),\n                            \"try to add some to make me happy :)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                        lineNumber: 169,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                lineNumber: 167,\n                columnNumber: 9\n            }, this) : DBnotes.map((DBnote)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().note),\n                        onClick: ()=>{\n                            setDBnoteSelected(DBnote);\n                        // selectNote(DBnote._id);\n                        },\n                        style: {\n                            backgroundColor: DBnote.selected ? \"#FFF\" : \"#cbd5e1\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().content),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"\".concat(DBnote.body))\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                        lineNumber: 189,\n                                        columnNumber: 19\n                                    }, this),\n                                    DBnote.pinned && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_TbPin_TbPinnedOff_react_icons_tb__WEBPACK_IMPORTED_MODULE_9__.TbPin, {\n                                        className: (_SavedNotes_module_css__WEBPACK_IMPORTED_MODULE_7___default().pinned)\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                        lineNumber: 190,\n                                        columnNumber: 37\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                                lineNumber: 188,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                            lineNumber: 187,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                        lineNumber: 177,\n                        columnNumber: 13\n                    }, this)\n                }, DBnote._id, false, {\n                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n                    lineNumber: 176,\n                    columnNumber: 11\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(components)\\\\SavedNotes.tsx\",\n        lineNumber: 133,\n        columnNumber: 5\n    }, this);\n}\n_s(SavedNotes, \"+CwBMw0qrWm4JRdEW3uvtp19TNM=\");\n_c1 = SavedNotes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SavedNotes);\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledImage\");\n$RefreshReg$(_c1, \"SavedNotes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oY29tcG9uZW50cykvU2F2ZWROb3Rlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNkM7QUFDTjtBQUNEO0FBQ007QUFDYjtBQUNnQjtBQUNHO0FBQ0U7QUFDQTtBQUNyQjtBQVUvQixNQUFNYSxjQUFjWiw2REFBTUEsQ0FBQ0ksa0RBQUtBO0tBQTFCUTtBQVVOLFNBQVNDOztJQUNQLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFDO0lBRWpELFNBQVNhLFdBQVdDLElBQWEsR0FBRztJQUVwQyxlQUFlQyxVQUFVQyxJQUFVO1FBQ2pDLE1BQU1DLGlCQUFpQjtZQUNyQkMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CQyxRQUFRO1lBQ1Y7UUFDRjtRQUNBLE1BQU1DLE1BQ0osd0NBQWlELE9BQVRSLEtBQUtTLEdBQUcsR0FDaERSO1FBR0ZTLGtCQUFrQixDQUFDO0lBQ3JCO0lBRUEsZUFBZUMsWUFBWVgsSUFBVTtRQUNuQyxNQUFNQyxpQkFBaUI7WUFDckJDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQkMsUUFBUTtZQUNWO1FBQ0Y7UUFDQSxNQUFNQyxNQUNKLHdDQUFpRCxPQUFUUixLQUFLUyxHQUFHLEdBQ2hEUjtRQUdGUyxrQkFBa0IsQ0FBQztJQUNyQjtJQUVBLGVBQWVFLGNBQWNaLElBQVU7UUFDckMsTUFBTUMsaUJBQWlCO1lBQ3JCQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDbkJPLFVBQVU7WUFDWjtRQUNGO1FBQ0EsTUFBTUwsTUFDSix3Q0FBaUQsT0FBVFIsS0FBS1MsR0FBRyxHQUNoRFI7UUFHRlMsa0JB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QjBDLE9BQU92QyxNQUFNLGtCQUFJLDhEQUFDakIsMEZBQUtBO3dDQUFDbUMsV0FBVzdDLHNFQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQWQvQ2tFLE9BQU9yQyxHQUFHOzs7Ozs7Ozs7OztBQXVCOUI7R0F2S1NmO01BQUFBO0FBeUtULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oY29tcG9uZW50cykvU2F2ZWROb3Rlcy50c3g/OWE0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2F2ZWROb3Rlcy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBwYXJzZSBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IGltYWdlIGZyb20gJy4uLyhhc3NldHMpLyhpbWFnZXMpLzUucG5nJztcclxuaW1wb3J0IHsgUmlEZWxldGVCaW42TGluZSB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcclxuaW1wb3J0IHsgRmlFZGl0MywgRmlBcmNoaXZlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xyXG5pbXBvcnQgeyBUYlBpbiwgVGJQaW5uZWRPZmYgfSBmcm9tICdyZWFjdC1pY29ucy90Yic7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBOb3RlIHtcclxuICBfaWQ6IG51bWJlcjtcclxuICBib2R5OiBzdHJpbmc7XHJcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XHJcbiAgcGlubmVkOiBib29sZWFuO1xyXG4gIGFyY2hpdmVkOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBTdHlsZWRJbWFnZSA9IHN0eWxlZChJbWFnZSlgXHJcbiAgd2lkdGg6IDMwcmVtO1xyXG4gIGhlaWdodDogMjIuN3JlbTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pIHtcclxuICAgIHdpZHRoOiA0MHJlbTtcclxuICAgIGhlaWdodDogMjlyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gU2F2ZWROb3RlcygpIHtcclxuICBjb25zdCBbc2VsZWN0ZWROb3RlLCBzZXRTZWxlY3RlZE5vdGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUVkaXQoaXRlbTogYm9vbGVhbikge31cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlUGluKG5vdGU6IE5vdGUpIHtcclxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgcGlubmVkOiB0cnVlLFxyXG4gICAgICB9KSxcclxuICAgIH07XHJcbiAgICBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9ub3Rlcy9hZGROb3Rlcy8ke25vdGUuX2lkfWAsXHJcbiAgICAgIHJlcXVlc3RPcHRpb25zXHJcbiAgICApO1xyXG5cclxuICAgIHNldERCbm90ZVNlbGVjdGVkKHt9IGFzIE5vdGUpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlVW5waW4obm90ZTogTm90ZSkge1xyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBwaW5uZWQ6IGZhbHNlLFxyXG4gICAgICB9KSxcclxuICAgIH07XHJcbiAgICBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9ub3Rlcy9hZGROb3Rlcy8ke25vdGUuX2lkfWAsXHJcbiAgICAgIHJlcXVlc3RPcHRpb25zXHJcbiAgICApO1xyXG5cclxuICAgIHNldERCbm90ZVNlbGVjdGVkKHt9IGFzIE5vdGUpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQXJjaGl2ZShub3RlOiBOb3RlKSB7XHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGFyY2hpdmVkOiB0cnVlLFxyXG4gICAgICB9KSxcclxuICAgIH07XHJcbiAgICBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9ub3Rlcy9hZGROb3Rlcy8ke25vdGUuX2lkfWAsXHJcbiAgICAgIHJlcXVlc3RPcHRpb25zXHJcbiAgICApO1xyXG5cclxuICAgIHNldERCbm90ZVNlbGVjdGVkKHt9IGFzIE5vdGUpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRGVsZXRlKG5vdGU6IE5vdGUpIHtcclxuICAgIGNvbnN0IGRlbGV0ZVJlcXVlc3QgPSB7IG1ldGhvZDogJ0RFTEVURScgfTtcclxuICAgIGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovLzEyNy4wLjAuMTo1MDAwL25vdGVzL2FkZE5vdGVzLyR7bm90ZS5faWR9YCxcclxuICAgICAgZGVsZXRlUmVxdWVzdFxyXG4gICAgKTtcclxuICAgIHNldERCbm90ZVNlbGVjdGVkKHt9IGFzIE5vdGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgW0RCbm90ZXMsIHNldERCbm90ZXNdID0gdXNlU3RhdGU8Tm90ZVtdPihbXSk7XHJcbiAgY29uc3QgW0RCbm90ZVNlbGVjdGVkLCBzZXREQm5vdGVTZWxlY3RlZF0gPSB1c2VTdGF0ZTxOb3RlIHwgdW5kZWZpbmVkPihcclxuICAgIHt9IGFzIE5vdGVcclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo1MDAwL25vdGVzL2FkZE5vdGVzJyk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBzZXREQm5vdGVzKGRhdGEuZGF0YS5ub3Rlcyk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVTdWJtaXQoKTtcclxuICB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIC8vIGFzeW5jIGZ1bmN0aW9uIHNlbGVjdE5vdGUoaWQ6IG51bWJlcikge1xyXG4gIC8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9ub3Rlcy9hZGROb3Rlcy8ke2lkfWApO1xyXG4gIC8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgLy8gICBzZXREQm5vdGVTZWxlY3RlZChkYXRhLmRhdGEubm90ZSk7XHJcbiAgLy8gICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAvLyAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gIC8vICAgICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gIC8vICAgICAgIHNlbGVjdGVkOiBEQm5vdGVTZWxlY3RlZCAmJiAhREJub3RlU2VsZWN0ZWQuc2VsZWN0ZWQsXHJcbiAgLy8gICAgIH0pLFxyXG4gIC8vICAgfTtcclxuICAvLyAgIGF3YWl0IGZldGNoKGBodHRwOi8vMTI3LjAuMC4xOjUwMDAvbm90ZXMvYWRkTm90ZXMvJHtpZH1gLCByZXF1ZXN0T3B0aW9ucyk7XHJcbiAgLy8gfVxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkbGluZX0+XHJcbiAgICAgICAge0RCbm90ZXMubGVuZ3RoID4gMCAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5TYXZlZCBOb3RlczwvZGl2Pn1cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge0RCbm90ZXMubGVuZ3RoID4gMCAmJiBEQm5vdGVTZWxlY3RlZCAmJiBEQm5vdGVTZWxlY3RlZC5zZWxlY3RlZCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9PlxyXG4gICAgICAgICAgICAgIDxGaUVkaXQzXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5lZGl0fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRWRpdChzZWxlY3RlZE5vdGUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge0RCbm90ZVNlbGVjdGVkLnBpbm5lZCA/IChcclxuICAgICAgICAgICAgICAgIDxUYlBpbm5lZE9mZlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5waW5vZmZ9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVVucGluKERCbm90ZVNlbGVjdGVkKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxUYlBpblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5waW59XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBpbihEQm5vdGVTZWxlY3RlZCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPEZpQXJjaGl2ZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXJjaGl2ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFyY2hpdmUoREJub3RlU2VsZWN0ZWQpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJpRGVsZXRlQmluNkxpbmVcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShEQm5vdGVTZWxlY3RlZCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge0RCbm90ZXMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm9Ob3Rlc0ltYWdlfT5cclxuICAgICAgICAgIDxTdHlsZWRJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9XCJhbiBpbWFnZVwiIGxheW91dD1cInJlc29uc2l2ZVwiIHByaW9yaXR5IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vTm90ZXNUZXh0fT5cclxuICAgICAgICAgICAgTm8gc2F2ZWQgbm90ZXMgeWV0IDooICwgPGJyIC8+XHJcbiAgICAgICAgICAgIHRyeSB0byBhZGQgc29tZSB0byBtYWtlIG1lIGhhcHB5IDopXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICBEQm5vdGVzLm1hcChEQm5vdGUgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e0RCbm90ZS5faWR9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubm90ZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXREQm5vdGVTZWxlY3RlZChEQm5vdGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gc2VsZWN0Tm90ZShEQm5vdGUuX2lkKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IERCbm90ZS5zZWxlY3RlZCA/ICcjRkZGJyA6ICcjY2JkNWUxJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdj57cGFyc2UoYCR7REJub3RlLmJvZHl9YCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHtEQm5vdGUucGlubmVkICYmIDxUYlBpbiBjbGFzc05hbWU9e3N0eWxlcy5waW5uZWR9IC8+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSlcclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhdmVkTm90ZXM7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJzdHlsZWQiLCJwYXJzZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJpbWFnZSIsIlJpRGVsZXRlQmluNkxpbmUiLCJGaUVkaXQzIiwiRmlBcmNoaXZlIiwiVGJQaW4iLCJUYlBpbm5lZE9mZiIsIlJlYWN0IiwiU3R5bGVkSW1hZ2UiLCJTYXZlZE5vdGVzIiwic2VsZWN0ZWROb3RlIiwic2V0U2VsZWN0ZWROb3RlIiwiaGFuZGxlRWRpdCIsIml0ZW0iLCJoYW5kbGVQaW4iLCJub3RlIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwaW5uZWQiLCJmZXRjaCIsIl9pZCIsInNldERCbm90ZVNlbGVjdGVkIiwiaGFuZGxlVW5waW4iLCJoYW5kbGVBcmNoaXZlIiwiYXJjaGl2ZWQiLCJoYW5kbGVEZWxldGUiLCJkZWxldGVSZXF1ZXN0IiwiREJub3RlcyIsInNldERCbm90ZXMiLCJEQm5vdGVTZWxlY3RlZCIsImhhbmRsZVN1Ym1pdCIsInJlcyIsImRhdGEiLCJqc29uIiwibm90ZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiaGVhZGxpbmUiLCJsZW5ndGgiLCJ0aXRsZSIsInNlbGVjdGVkIiwiaWNvbnMiLCJlZGl0Iiwib25DbGljayIsInBpbm9mZiIsInBpbiIsImFyY2hpdmUiLCJkZWxldGUiLCJub05vdGVzSW1hZ2UiLCJzcmMiLCJhbHQiLCJsYXlvdXQiLCJwcmlvcml0eSIsIm5vTm90ZXNUZXh0IiwiYnIiLCJtYXAiLCJEQm5vdGUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNvbnRhaW5lciIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(components)/SavedNotes.tsx\n"));

/***/ })

});