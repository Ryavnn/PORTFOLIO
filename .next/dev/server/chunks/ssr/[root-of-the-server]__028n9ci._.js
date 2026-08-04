module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/projects/[slug]/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CaseStudy,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Mockups$2f$BrowserMockup$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Mockups/BrowserMockup.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Mockups$2f$PhoneMockup$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Mockups/PhoneMockup.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Shared$2f$Icon$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Shared/Icon.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/api.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function generateMetadata({ params }) {
    const resolvedParams = await params;
    try {
        const project = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectBySlug"])(resolvedParams.slug);
        return {
            title: `${project.title} — Case Study`,
            description: `${project.description.slice(0, 155).trim()}…`
        };
    } catch (error) {
        return {
            title: 'Project Not Found'
        };
    }
}
async function CaseStudy({ params }) {
    const resolvedParams = await params;
    let project;
    try {
        project = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectBySlug"])(resolvedParams.slug);
    } catch (err) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-grid-max mx-auto px-grid-margin py-[40px] md:py-[60px] border-b-2 border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-[40px] lg:grid lg:grid-cols-2 lg:gap-[60px] lg:items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-[20px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-sans text-[12px] tracking-[1px] m-0 opacity-70",
                                    children: project.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-heading text-4xl lg:text-5xl font-bold leading-none m-0 tracking-[-1.5px]",
                                    children: project.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-sans text-base leading-[1.7] m-0",
                                    children: project.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/projects/[slug]/page.jsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full border-2 border-border bg-card-bg flex items-center justify-center overflow-hidden",
                                children: project.images?.hero ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Mockups$2f$BrowserMockup$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BrowserMockup"], {
                                    url: `${project.title.toLowerCase().replace(/\s+/g, '')}.com`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: project.images.hero,
                                        alt: project.title,
                                        className: "w-full h-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                        lineNumber: 44,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                    lineNumber: 43,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        opacity: 0.3
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Shared$2f$Icon$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        name: "Tent",
                                        size: 64
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                        lineNumber: 47,
                                        columnNumber: 48
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                    lineNumber: 47,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[slug]/page.jsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-grid-max mx-auto px-grid-margin border-b-2 border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full bg-text flex items-center justify-center overflow-hidden",
                    children: project.images?.featured ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Mockups$2f$BrowserMockup$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BrowserMockup"], {
                        url: `${project.title.toLowerCase().replace(/\s+/g, '')}.com`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: project.images.featured,
                            alt: "Featured project visual",
                            className: "w-full h-auto"
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[slug]/page.jsx",
                            lineNumber: 58,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/[slug]/page.jsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            opacity: 0.5,
                            padding: '100px 0'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Shared$2f$Icon$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            name: "Globe",
                            size: 80
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[slug]/page.jsx",
                            lineNumber: 61,
                            columnNumber: 64
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/[slug]/page.jsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-grid-max mx-auto px-grid-margin border-b-2 border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:grid md:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-[24px] border-b border-solid border-border md:p-[30px_20px] md:border-b-0 md:border-r-2 md:border-border lg:p-[40px_30px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-sans text-sm font-bold m-0 leading-[1.5] tracking-[0.3px]",
                                children: project.role
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[slug]/page.jsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-[24px] border-b border-solid border-border md:p-[30px_20px] md:border-b-0 md:border-r-2 md:border-border lg:p-[40px_30px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-sans text-sm font-bold m-0 leading-[1.5] tracking-[0.3px]",
                                children: project.tech
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[slug]/page.jsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-[24px] md:p-[30px_20px] lg:p-[40px_30px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-sans text-sm font-bold m-0 leading-[1.5] tracking-[0.3px] whitespace-pre-line",
                                children: project.timeline
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[slug]/page.jsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            project.challenge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-grid-max mx-auto px-grid-margin py-[60px] md:py-[80px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-[32px] lg:grid lg:grid-cols-[1fr_2fr] lg:gap-[80px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-heading text-xl font-bold leading-[1.2] m-0 tracking-[-0.5px]",
                                children: project.challenge.heading
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[slug]/page.jsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-[20px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-sans text-[16px] leading-[1.7] m-0",
                                    children: project.challenge.text
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-sans text-[14px] leading-[1.7] m-0 opacity-[0.85]",
                                    children: project.challenge.subtext
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/projects/[slug]/page.jsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                lineNumber: 81,
                columnNumber: 9
            }, this),
            project.strategy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-grid-max mx-auto px-grid-margin pb-[60px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-text text-bg p-[40px_24px] md:p-[60px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-[40px] lg:grid lg:grid-cols-2 lg:gap-[60px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-heading text-2xl font-bold leading-[1.1] m-[0_0_32px_0] md:m-[0_0_40px_0] tracking-[-1px]",
                                        children: [
                                            "STRATEGY",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                                lineNumber: 99,
                                                columnNumber: 136
                                            }, this),
                                            "& SOLUTION"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                        lineNumber: 99,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-[32px]",
                                        children: project.strategy.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-[16px] items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-heading text-[24px] font-bold text-accent shrink-0",
                                                        children: item.number
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                                        lineNumber: 103,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-[8px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-sans text-[16px] font-bold m-0 tracking-[0.5px]",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                                                lineNumber: 105,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-sans text-[13px] leading-[1.6] m-0 opacity-90",
                                                                children: item.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                                                lineNumber: 106,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                                        lineNumber: 104,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                                lineNumber: 102,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full p-[40px_20px] min-h-[500px] border-2 border-solid border-[rgba(242,237,228,0.3)] bg-[rgba(15,15,15,0.5)] flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center w-full max-w-[280px] aspect-[9/19.5] overflow-hidden",
                                        children: project.images?.strategy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Mockups$2f$PhoneMockup$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PhoneMockup"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: project.images.strategy,
                                                alt: "Project strategy visual",
                                                className: "w-full h-auto"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                                lineNumber: 117,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                            lineNumber: 116,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                opacity: 0.3
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Shared$2f$Icon$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                name: "Smartphone",
                                                size: 48
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                                lineNumber: 120,
                                                columnNumber: 54
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                            lineNumber: 120,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                        lineNumber: 114,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/[slug]/page.jsx",
                        lineNumber: 97,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                    lineNumber: 96,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                lineNumber: 95,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-grid-max mx-auto px-grid-margin pb-[60px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-[20px] md:grid md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full border-2 border-border bg-card-bg flex items-center justify-center overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full flex items-center justify-center",
                                children: project.images?.gallery1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Mockups$2f$BrowserMockup$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BrowserMockup"], {
                                    url: `${project.title.toLowerCase().replace(/\s+/g, '')}.com`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: project.images.gallery1,
                                        alt: "Project gallery visual 1",
                                        loading: "lazy",
                                        className: "w-full h-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                        lineNumber: 136,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        opacity: 0.3,
                                        padding: '100px 0'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Shared$2f$Icon$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        name: "User",
                                        size: 48
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                        lineNumber: 139,
                                        columnNumber: 68
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                    lineNumber: 139,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[slug]/page.jsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full border-2 border-border bg-card-bg flex items-center justify-center overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full flex items-center justify-center",
                                children: project.images?.gallery2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Mockups$2f$BrowserMockup$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BrowserMockup"], {
                                    url: `${project.title.toLowerCase().replace(/\s+/g, '')}.com`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: project.images.gallery2,
                                        alt: "Project gallery visual 2",
                                        loading: "lazy",
                                        className: "w-full h-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                        lineNumber: 147,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                    lineNumber: 146,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        opacity: 0.3,
                                        padding: '100px 0'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Shared$2f$Icon$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        name: "Laptop",
                                        size: 48
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                        lineNumber: 150,
                                        columnNumber: 68
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                    lineNumber: 150,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[slug]/page.jsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full border-2 border-border bg-card-bg flex items-center justify-center overflow-hidden md:col-span-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full flex items-center justify-center",
                                children: project.images?.gallery3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Mockups$2f$BrowserMockup$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BrowserMockup"], {
                                    url: `${project.title.toLowerCase().replace(/\s+/g, '')}.com`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: project.images.gallery3,
                                        alt: "Project gallery visual 3",
                                        loading: "lazy",
                                        className: "w-full h-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                        lineNumber: 158,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                    lineNumber: 157,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        opacity: 0.3,
                                        padding: '100px 0'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Shared$2f$Icon$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        name: "Palette",
                                        size: 64
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                        lineNumber: 161,
                                        columnNumber: 68
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                    lineNumber: 161,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[slug]/page.jsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            project.results && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-grid-max mx-auto px-grid-margin pb-[60px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-[20px] md:grid md:grid-cols-3",
                    children: project.results.map((result, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `border-2 border-border p-[32px_24px] md:p-[40px_30px] flex flex-col gap-[12px] ${result.highlighted ? 'bg-accent text-bg border-accent' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-heading text-3xl font-bold m-0 leading-none tracking-[-1.5px]",
                                    children: result.metric
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                    lineNumber: 176,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-sans text-[12px] font-bold m-0 tracking-[0.5px] uppercase",
                                    children: result.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                    lineNumber: 177,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `font-sans text-[12px] leading-[1.5] m-0 ${result.highlighted ? 'opacity-100' : 'opacity-[0.85]'}`,
                                    children: result.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                    lineNumber: 178,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/projects/[slug]/page.jsx",
                            lineNumber: 172,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                    lineNumber: 170,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                lineNumber: 169,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-grid-max mx-auto px-grid-margin pb-[60px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-[40px_24px] md:p-[80px_60px] flex flex-col items-center gap-[32px] text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-heading text-[clamp(28px,8vw,48px)] font-bold leading-[1.2] m-0 tracking-[-1px]",
                            children: [
                                "INTERESTED IN A",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                    lineNumber: 188,
                                    columnNumber: 28
                                }, this),
                                "SIMILAR TRANSFORMATION?"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/projects/[slug]/page.jsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row gap-[16px] w-full md:w-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "w-full md:w-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn-primary w-full md:w-auto",
                                        children: "LET'S TALK PROJECT →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                        lineNumber: 192,
                                        columnNumber: 64
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/projects",
                                    className: "w-full md:w-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn-secondary w-full md:w-auto",
                                        children: "VIEW PORTFOLIO"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                        lineNumber: 193,
                                        columnNumber: 65
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/projects/[slug]/page.jsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/[slug]/page.jsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/projects/[slug]/page.jsx",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/projects/[slug]/page.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/projects/[slug]/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/projects/[slug]/page.jsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/Mockups/BrowserMockup.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrowserMockup",
    ()=>BrowserMockup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
function BrowserMockup({ url = "localhost", children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-auto flex flex-col overflow-hidden rounded-[4px] border border-[#e5e5e5] bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 flex items-center gap-[12px] px-[12px] bg-[#fafafa] border-b border-[#e5e5e5] h-[32px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-[6px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block w-[10px] h-[10px] rounded-full bg-[#FF5F57]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Mockups/BrowserMockup.jsx",
                                lineNumber: 10,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block w-[10px] h-[10px] rounded-full bg-[#FFBD2E]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Mockups/BrowserMockup.jsx",
                                lineNumber: 11,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block w-[10px] h-[10px] rounded-full bg-[#28C840]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Mockups/BrowserMockup.jsx",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Mockups/BrowserMockup.jsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-[6px] bg-[#e5e5e5] rounded-[4px] p-[2px_10px] max-w-[200px] w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "8",
                                    height: "9",
                                    viewBox: "0 0 8 9",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "shrink-0 opacity-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "1",
                                            y: "4",
                                            width: "6",
                                            height: "5",
                                            rx: "0.5",
                                            fill: "#6B7280"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Mockups/BrowserMockup.jsx",
                                            lineNumber: 20,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M2 4V2.5a2 2 0 114 0V4",
                                            stroke: "#6B7280",
                                            strokeWidth: "1",
                                            fill: "none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Mockups/BrowserMockup.jsx",
                                            lineNumber: 21,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Mockups/BrowserMockup.jsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#737373] whitespace-nowrap overflow-hidden text-ellipsis text-[9px] font-mono tracking-[0.01em]",
                                    children: url
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Mockups/BrowserMockup.jsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Mockups/BrowserMockup.jsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Mockups/BrowserMockup.jsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[37px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Mockups/BrowserMockup.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Mockups/BrowserMockup.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-hidden min-h-0 [&>img]:w-full [&>img]:h-auto [&>img]:object-contain [&>img]:block [&>img]:rounded-none",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/Mockups/BrowserMockup.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Mockups/BrowserMockup.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Mockups/PhoneMockup.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhoneMockup",
    ()=>PhoneMockup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
function PhoneMockup({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full flex flex-col overflow-hidden bg-black rounded-[36px] border-[8px] border-[#111] shadow-[0_0_0_1px_#333,inset_0_0_0_1px_#222]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 flex justify-center pt-[8px] pb-[4px] bg-black relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-black rounded-full w-[90px] h-[24px]"
                }, void 0, false, {
                    fileName: "[project]/src/components/Mockups/PhoneMockup.jsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Mockups/PhoneMockup.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-hidden min-h-0 bg-white relative [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>img]:object-top [&>img]:block [&>img]:rounded-none",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/Mockups/PhoneMockup.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 flex justify-center items-center bg-black pb-[8px] pt-[4px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#525252] rounded-full w-[100px] h-[4px]"
                }, void 0, false, {
                    fileName: "[project]/src/components/Mockups/PhoneMockup.jsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Mockups/PhoneMockup.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Mockups/PhoneMockup.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Shared/Icon.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-rsc] (ecmascript)");
;
;
;
const Icon = ({ name, size = 24, color = "currentColor", className = "", ...props })=>{
    const IconComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[name] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.Package;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
        size: size,
        color: color,
        className: className,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/Shared/Icon.jsx",
        lineNumber: 6,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Icon;
}),
"[project]/src/data/caseStudies.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "bnb-safari": {
        "label": "CASE STUDY | 2025",
        "title": "BNB SAFARI",
        "description": "A self-initiated booking platform built to solve a real problem in the Kenyan hospitality space — replacing informal, conversation-heavy reservation flows with a clean, direct booking experience tailored for local operators.",
        "role": "SOLE DEVELOPER & DESIGNER",
        "tech": "REACT, FLASK, POSTGRESQL",
        "timeline": "25 WEEKS\nQ1 2025",
        "challenge": {
            "heading": "THE CHALLENGE",
            "text": "Most small BnB operators in Kenya were running bookings through WhatsApp threads — no availability calendar, no payment confirmation, no paper trail. Every inquiry meant a back-and-forth conversation before anything was confirmed.",
            "subtext": "The goal was to build a lightweight booking engine that gave property owners real-time control over their listings and gave guests a faster, more trustworthy path to checkout — without the overhead of a full OTA platform."
        },
        "strategy": [
            {
                "number": "01",
                "title": "LISTING MANAGEMENT",
                "description": "Built an operator dashboard that lets BnB hosts manage availability, pricing, and property details in real time — no technical knowledge required."
            },
            {
                "number": "02",
                "title": "GUEST EXPERIENCE",
                "description": "Designed a browsing and booking flow optimized for mobile — full-bleed photography, availability calendar, and property details surfaced without friction."
            },
            {
                "number": "03",
                "title": "LOCAL PAYMENTS",
                "description": "Integrated M-Pesa via the Safaricom Daraja API to handle reservations and deposits natively — no card required, no foreign payment friction."
            }
        ],
        "images": {
            "hero": "/bnb-safar-hero.webp",
            "featured": "/bnb-safari-explore.webp",
            "strategy": "/bnb-safari-mobile-dash.webp",
            "gallery1": "/bnb-safari-analytics.webp",
            "gallery2": "/bnb-safari-bookings.webp",
            "gallery3": "/bnb-safari-dash.webp"
        },
        "results": [
            {
                "metric": "< 3 MIN",
                "label": "To Confirm a Booking",
                "description": "End-to-end reservation time from browsing to M-Pesa payment confirmation."
            },
            {
                "metric": "100%",
                "label": "Mobile-First",
                "description": "Designed and tested exclusively for the devices Kenyan guests and operators actually use."
            },
            {
                "metric": "0",
                "label": "WhatsApp Steps Required",
                "description": "Guests complete the full booking flow without leaving the platform.",
                "highlighted": true
            }
        ]
    },
    "freelanceboard": {
        "label": "CASE STUDY | 2026",
        "title": "FREELANCEBOARD",
        "description": "A personal operations system built to run my own freelance practice — replacing five separate tools with one dashboard that handles time tracking, client management, invoicing, and AI-assisted lead generation.",
        "role": "SOLE DEVELOPER",
        "tech": "NEXT.JS, SUPABASE, TAILWIND",
        "timeline": "ONGOING\nStarted Q1 2026",
        "challenge": {
            "heading": "THE CHALLENGE",
            "text": "Running a freelance practice means context-switching between invoicing tools, project trackers, communication threads, and spreadsheets — none of which talk to each other.",
            "subtext": "Rather than duct-taping third-party tools together, I built one system specifically around how I actually work — with the flexibility to add modules as my workflow evolves."
        },
        "strategy": [
            {
                "number": "01",
                "title": "MODULAR DASHBOARD",
                "description": "Built around discrete, independently functional modules — time tracking, invoicing, client records, project milestones — so the system grows without becoming brittle."
            },
            {
                "number": "02",
                "title": "PAYMENT PROTECTION",
                "description": "Implemented a three-gate payment flow that ties milestone completion to invoice generation, reducing the risk of unpaid work slipping through."
            },
            {
                "number": "03",
                "title": "AI LEAD GENERATION",
                "description": "Built a leads module that scrapes Google Maps for potential clients and uses an AI layer to auto-generate tailored service proposals — turning cold outreach into a semi-automated pipeline."
            }
        ],
        "images": {
            "hero": "/board-dash.webp",
            "featured": "/board-client-modal.webp",
            "strategy": "/board-phone.webp",
            "gallery1": "/board-client.webp",
            "gallery2": "/board-project.webp",
            "gallery3": "/board-project-modal.webp"
        },
        "results": [
            {
                "metric": "28",
                "label": "Modules Scoped",
                "description": "Covering the full freelance workflow from lead capture to invoice collection."
            },
            {
                "metric": "1",
                "label": "Tool Instead of Five",
                "description": "Consolidated time tracking, invoicing, project management, and client comms into a single system."
            },
            {
                "metric": "AI-Powered",
                "label": "Lead Pipeline",
                "description": "Automated proposal generation from Maps scraping — cuts cold outreach time significantly.",
                "highlighted": true
            }
        ]
    },
    "damtite-ems": {
        "label": "CASE STUDY | 2025",
        "title": "DAMTITE EMS",
        "description": "A workforce operations platform built to centralize employee management, project tracking, and automated payroll for an engineering and construction firm — replacing fragmented paper and spreadsheet systems with a single mobile-optimized source of truth.",
        "role": "LEAD DEVELOPER",
        "tech": "REACT, FLASK, POSTGRESQL, TAILWIND",
        "timeline": "ONGOING\nStarted Q3 2025",
        "challenge": {
            "heading": "THE FRAGMENTATION BARRIER",
            "text": "Field operations at engineering firms run on disconnected systems — attendance tracked on paper, tools logged in spreadsheets, payroll calculated manually in isolation. The gaps between these create compounding errors and no single view of what's actually happening on site.",
            "subtext": "The objective was a mobile-optimized platform that bridges site workers and office management — giving both sides real-time operational visibility without adding workflow friction."
        },
        "strategy": [
            {
                "number": "01",
                "title": "ROLE-BASED ACCESS",
                "description": "Built a three-tier permission system — Admin, Manager, Worker — with granular access controls tailored to how each role actually operates, whether in the office or on site."
            },
            {
                "number": "02",
                "title": "AUTOMATED PAYROLL",
                "description": "Engineered a payroll calculation engine that pulls directly from attendance logs, approved leave records, and advance requests — removing manual computation from the process entirely."
            },
            {
                "number": "03",
                "title": "FIELD-TO-OFFICE SYNC",
                "description": "Developed real-time tool request workflows and image-based proof-of-work uploads — giving office management verifiable daily progress reports straight from the site."
            }
        ],
        "images": {
            "hero": "/damtite-hero.webp",
            "featured": "/damtite-manager.webp",
            "strategy": "/damtite-mobile.webp",
            "gallery1": "/damtite-employee.webp",
            "gallery2": "/damtite-employee-mgt.webp",
            "gallery3": "/damtite-profile.webp"
        },
        "results": [
            {
                "metric": "3-TIER",
                "label": "Access Control",
                "description": "Distinct permission layers for Workers, Managers, and Admins — each scoped to their operational context."
            },
            {
                "metric": "10+",
                "label": "Integrated Modules",
                "description": "Payroll, attendance, leave, tool requests, project tracking, and more — consolidated into one system."
            },
            {
                "metric": "MOBILE",
                "label": "Field Optimized",
                "description": "Built for reliability on-site — workers submit attendance, tool requests, and proof-of-work from their phones.",
                "highlighted": true
            }
        ]
    }
};
}),
"[project]/src/data/projects.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "slug": "bnb-safari",
        "number": "01",
        "title": "BNB SAFARI",
        "description": "A direct booking platform for Kenyan BnB operators — replacing WhatsApp-based reservations with M-Pesa-integrated checkout.",
        "tags": [
            "TRAVEL",
            "BOOKING"
        ],
        "image": "/bnb-safar-hero.webp",
        "layout": "right"
    },
    {
        "slug": "freelanceboard",
        "number": "02",
        "title": "FREELANCEBOARD",
        "description": "A personal ops system for running a freelance practice — time tracking, invoicing, client management, and AI-assisted lead generation in one dashboard.",
        "tags": [
            "PRODUCTIVITY",
            "AI"
        ],
        "image": "/board-dash.webp",
        "layout": "left"
    },
    {
        "slug": "damtite-ems",
        "number": "03",
        "title": "DAMTITE EMS",
        "description": "A workforce operations platform for an engineering firm — automated payroll, role-based field access, and real-time site-to-office sync.",
        "tags": [
            "ENTERPRISE",
            "OPERATIONS"
        ],
        "image": "/damtite-hero.webp",
        "layout": "right"
    },
    {
        "slug": "njorogeryan-tech",
        "number": "04",
        "title": "NJOROGERYAN.TECH",
        "description": "Personal portfolio built for performance and editorial impact — high Lighthouse scores, brutalist type system, zero templates.",
        "tags": [
            "PORTFOLIO",
            "FRONTEND"
        ],
        "image": "/portfolio-hero.webp",
        "layout": "left"
    }
];
}),
"[project]/src/data/services.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("[{\"id\":1,\"slug\":\"web-design-development\",\"number\":\"01\",\"category\":\"CORE OFFER\",\"tags\":[\"DESIGN\",\"DEVELOPMENT\"],\"title\":\"WEB DESIGN & DEVELOPMENT\",\"description\":\"I design and code custom websites that help you grow your business, capture more leads, and convert visitors into customers. From one-page sites to full web apps—designed with clarity and developed swiftly and fully responsive. No teams why. One person fully does code.\",\"included\":[\"Custom design — no themes or builders used\",\"Mobile-first, responsive layout designs\",\"Performance optimization for fast load times\",\"Contact forms, integrations, and basic SEO\",\"Interactive UIs with smooth animations\"],\"iconCard\":{\"icon\":\"Globe\",\"bgColor\":\"#000\"},\"projectCard\":{\"title\":\"Example/Melek\",\"description\":\"Designed and built a bespoke landing page for a SaaS product that converts visitors into qualified leads.\",\"tags\":[\"DESIGN\",\"WEBFLOW\"]},\"icon\":\"Palette\",\"detail\":{\"headline\":\"WEBSITES THAT WORK AS HARD AS YOU DO.\",\"longDescription\":\"Every website I build starts with one question: what does this need to do for your business? Not what template should we use. Not what your competitor's site looks like. What specific outcome are we engineering towards — more leads, more bookings, more trust. From there, I design and code everything from scratch. No WordPress themes. No page builders. Just clean, fast, purpose-built code that does exactly what it needs to.\",\"approach\":[{\"number\":\"01\",\"title\":\"STRATEGIC DESIGN\",\"description\":\"Every layout decision is driven by your business goals. I map user journeys before touching a pixel — so the design isn't just beautiful, it converts.\"},{\"number\":\"02\",\"title\":\"HAND-CODED FRONTEND\",\"description\":\"React, Next.js, or vanilla HTML/CSS — chosen based on what your project needs. No bloated builders. Every line of code earns its place.\"},{\"number\":\"03\",\"title\":\"PERFORMANCE OBSESSED\",\"description\":\"Sub-2-second load times. Optimized images. Lazy loading. Lighthouse scores that actually matter — because speed is a ranking factor and a trust signal.\"}],\"deliverables\":[\"Fully custom responsive website (desktop + tablet + mobile)\",\"SEO-optimized page structure and meta tags\",\"Contact forms with email notifications\",\"Google Analytics / Tag Manager integration\",\"Performance optimization and speed audit\",\"30 days of post-launch support\"],\"faq\":[{\"question\":\"How long does a typical website take?\",\"answer\":\"Most websites are delivered within 4–8 weeks depending on complexity. A simple landing page can be done in 2 weeks. A multi-page site with custom interactions takes closer to 6–8.\"},{\"question\":\"Do you use WordPress or page builders?\",\"answer\":\"No. Everything is hand-coded for performance and flexibility. You get a website that loads fast, ranks well, and doesn't break when a plugin updates.\"},{\"question\":\"What do I need to provide before we start?\",\"answer\":\"Content (text, images, brand assets) and a clear idea of your goals. I'll guide you through everything else during the scoping phase.\"},{\"question\":\"Can you redesign my existing website?\",\"answer\":\"Absolutely. I'll audit your current site, identify UX and performance gaps, and rebuild it from the ground up with a modern stack.\"}],\"idealFor\":[\"Startups needing a launch-ready web presence\",\"Businesses replacing outdated WordPress sites\",\"Founders who want a site that actually converts\"],\"timeline\":\"4 – 8 WEEKS\",\"startingAt\":\"KES 30,000\"}},{\"id\":2,\"slug\":\"platform-system-development\",\"number\":\"02\",\"category\":\"CORE OFFER\",\"tags\":[\"WEB\",\"API\"],\"title\":\"PLATFORM & SYSTEM DEVELOPMENT\",\"description\":\"Need something more complex than a website? I build full-stack web platforms that handle real workflows — whether it's a client portal, booking system, membership area, or custom tool for your team to use. Built to be scalable, manageable, and actually work — built on a tech stack your business can scale with.\",\"included\":[\"Custom dashboards and real-time data handling\",\"API development and third-party integrations\",\"User authentication, role management, and security\",\"Responsive, documentation, and UI feedback\"],\"iconCard\":{\"icon\":\"Settings\",\"bgColor\":\"#000\"},\"projectCard\":{\"title\":\"Job Portal\",\"description\":\"Developed a fully functional job board platform with employer & job seeker roles, custom filters, and notifications.\",\"tags\":[\"NEXTJS\",\"TAILWIND\"]},\"icon\":\"Laptop\",\"detail\":{\"headline\":\"SYSTEMS THAT RUN YOUR BUSINESS — NOT THE OTHER WAY AROUND.\",\"longDescription\":\"A website shows people what you do. A platform actually does it. I build the internal tools, dashboards, portals, and custom systems that replace your spreadsheets, reduce manual work, and give your team a single source of truth. Whether it's a booking engine, a client portal, or an employee management system — I architect it for the way your business actually operates.\",\"approach\":[{\"number\":\"01\",\"title\":\"WORKFLOW MAPPING\",\"description\":\"Before writing a single line of code, I map your actual business processes. Every feature is scoped against a real use case — not a feature list from a competitor.\"},{\"number\":\"02\",\"title\":\"FULL-STACK ARCHITECTURE\",\"description\":\"React or Next.js frontend, Flask or Node backend, PostgreSQL or Supabase for data. Every technology choice is justified by your scale and requirements.\"},{\"number\":\"03\",\"title\":\"ROLE-BASED ACCESS\",\"description\":\"Admin, manager, user — each role sees exactly what they need. Row-level security and permission systems built into the core, not bolted on later.\"}],\"deliverables\":[\"Custom web platform with admin dashboard\",\"User authentication and role-based access control\",\"RESTful API architecture and documentation\",\"Database design and data migration support\",\"Third-party integrations (payment, email, SMS)\",\"Deployment to production with CI/CD pipeline\",\"60 days of post-launch support and bug fixes\"],\"faq\":[{\"question\":\"How is this different from a regular website?\",\"answer\":\"A website displays information. A platform handles workflows — user accounts, data processing, role management, payments, real-time updates. It's software, not a brochure.\"},{\"question\":\"Can you integrate with tools we already use?\",\"answer\":\"Yes. M-Pesa, Stripe, Google Workspace, Notion, Slack, custom APIs — if it has an API, I can connect it.\"},{\"question\":\"What about hosting and maintenance?\",\"answer\":\"I deploy on modern infrastructure (Vercel, Railway, or your own servers) and provide documentation so your team can maintain it. Ongoing support retainers are also available.\"},{\"question\":\"How do you handle data security?\",\"answer\":\"Row-level security policies, encrypted credentials, HTTPS everywhere, and proper authentication flows. Security isn't an afterthought — it's built into the architecture.\"}],\"idealFor\":[\"Businesses replacing manual spreadsheet processes\",\"Teams needing internal tools and dashboards\",\"Companies requiring client-facing portals\"],\"timeline\":\"8 – 16 WEEKS\",\"startingAt\":\"KES 60,000\"}},{\"id\":3,\"slug\":\"saas-mvp-development\",\"number\":\"03\",\"category\":\"CORE OFFER\",\"tags\":[\"WEB\",\"SaaS\"],\"title\":\"SAAS MVP DEVELOPMENT\",\"description\":\"You have a product idea. I'll take it from concept to a working, functional service that you can show investors or launch to early users. SaaS development focused on the features that matter most—no bloat, just core functionality.\",\"included\":[\"Product scoping and feature prioritization\",\"UI design and interactive prototype\",\"Payment integration (Stripe, M-Pesa, etc.)\",\"User dashboards, subscriptions, and user management\",\"Deployment and hosting on live servers\"],\"iconCard\":{\"icon\":\"Rocket\",\"bgColor\":\"#000\"},\"projectCard\":{\"title\":\"Freelance Board\",\"description\":\"Built a two-sided SaaS marketplace for freelancers and clients with real-time messaging and payment escrow.\",\"tags\":[\"REACT\",\"NODE.JS\"]},\"icon\":\"Smartphone\",\"detail\":{\"headline\":\"FROM IDEA TO PRODUCT — WITHOUT THE BLOAT.\",\"longDescription\":\"Most MVPs fail because they try to do everything. I build MVPs that do one thing well — the thing your users actually need. We scope ruthlessly, design for clarity, build for speed, and ship something real. Not a prototype. Not a mockup. A working product with authentication, payments, and a user experience that earns trust from day one.\",\"approach\":[{\"number\":\"01\",\"title\":\"RUTHLESS SCOPING\",\"description\":\"We strip your idea down to its core value proposition. What's the one thing your product must do well? Everything else is V2.\"},{\"number\":\"02\",\"title\":\"RAPID PROTOTYPING\",\"description\":\"Interactive prototypes before code. You validate the UX with real users before we invest dev hours — reducing risk and rework.\"},{\"number\":\"03\",\"title\":\"PRODUCTION-GRADE CODE\",\"description\":\"The MVP isn't throwaway code. It's built on a stack that scales — so when you get traction, you don't need to rebuild from scratch.\"}],\"deliverables\":[\"Product requirements document and feature map\",\"UI/UX design with interactive prototype\",\"Full-stack MVP with authentication and payments\",\"User dashboard and admin panel\",\"Subscription/billing integration\",\"Production deployment and launch support\",\"Technical documentation for future development\"],\"faq\":[{\"question\":\"I only have an idea — is that enough to start?\",\"answer\":\"Yes. I'll help you scope the idea into a buildable product during the discovery phase. You don't need wireframes or a pitch deck to begin.\"},{\"question\":\"Will the MVP code be reusable for the full product?\",\"answer\":\"Absolutely. I build MVPs on production-grade architecture specifically so you don't have to throw it away when you scale.\"},{\"question\":\"Can you handle payments and subscriptions?\",\"answer\":\"Yes — Stripe, PayStack, M-Pesa, or custom billing flows. Recurring subscriptions, one-time payments, or usage-based billing.\"},{\"question\":\"What happens after the MVP launches?\",\"answer\":\"I provide 30 days of support post-launch. After that, we can discuss an ongoing retainer for feature development or hand off to your team with full documentation.\"}],\"idealFor\":[\"Founders validating a product idea\",\"Startups preparing for investor demos\",\"Solo entrepreneurs launching their first digital product\"],\"timeline\":\"10 – 16 WEEKS\",\"startingAt\":\"KES 80,000\"}},{\"id\":4,\"slug\":\"workflow-automation\",\"number\":\"04\",\"category\":\"ADD-ON\",\"tags\":[\"AUTOMATION\"],\"title\":\"WORKFLOW AUTOMATION\",\"description\":\"I connect the tools you already use—like Notion, Airtable, Google Sheets, your CRM, email marketing tools — so your team focuses on work, not admin. Maybe you need new leads to auto-populate into a spreadsheet, or orders to instantly trigger fulfillment emails. I'll set it up.\",\"included\":[\"Audit your current tools and manual processes\",\"Automate workflows with Zapier, Make, or APIs\",\"Notion databases, Airtable, CRM, email automation integrations\",\"Notifications\"],\"iconCard\":{\"icon\":\"RefreshCw\",\"bgColor\":\"#000\"},\"projectCard\":{\"title\":\"Lead Scrapper Tool\",\"description\":\"Automated lead collection from multiple sources into a central database with auto-enrichment and notifications.\",\"tags\":[\"PYTHON\",\"API\"]},\"icon\":\"Rocket\",\"detail\":{\"headline\":\"STOP DOING MANUALLY WHAT MACHINES DO BETTER.\",\"longDescription\":\"You're spending hours on tasks that should take seconds. Copying data between spreadsheets. Sending follow-up emails by hand. Updating records across three different tools. I audit your workflow, identify the friction points, and wire everything together — so your tools talk to each other and your team focuses on work that actually matters.\",\"approach\":[{\"number\":\"01\",\"title\":\"WORKFLOW AUDIT\",\"description\":\"I map your current processes step by step — identifying bottlenecks, manual handoffs, and integration gaps that are costing you time.\"},{\"number\":\"02\",\"title\":\"INTEGRATION DESIGN\",\"description\":\"Using Make, Zapier, or custom API scripts — I design automation flows that connect your existing tools without replacing them.\"},{\"number\":\"03\",\"title\":\"TESTING & HANDOFF\",\"description\":\"Every automation is tested with real data, documented with clear instructions, and handed off so your team can manage it independently.\"}],\"deliverables\":[\"Workflow audit and process documentation\",\"Custom automation flows (Make, Zapier, or API)\",\"Integration between 3–5 existing tools\",\"Error handling and notification alerts\",\"Documentation and team training session\",\"14 days of post-launch monitoring\"],\"faq\":[{\"question\":\"What tools can you connect?\",\"answer\":\"Anything with an API — Google Sheets, Notion, Airtable, HubSpot, Mailchimp, Slack, M-Pesa, WhatsApp Business, and hundreds more.\"},{\"question\":\"Do I need to switch to new tools?\",\"answer\":\"No. The whole point is to make your current tools work better together. I build around what you already use.\"},{\"question\":\"How complex can the automations get?\",\"answer\":\"From simple two-step triggers to multi-branch workflows with conditional logic, data transformation, and error handling. It depends on your needs.\"},{\"question\":\"Is this a one-time setup or ongoing?\",\"answer\":\"It's a one-time setup with documentation. If your workflows evolve, I offer retainer packages for ongoing automation management.\"}],\"idealFor\":[\"Teams drowning in manual data entry\",\"Businesses using 5+ disconnected tools\",\"Founders who want to scale without hiring ops staff\"],\"timeline\":\"2 – 4 WEEKS\",\"startingAt\":\"KES 40,000\"}}]");
}),
"[project]/src/data/testimonials.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": "01",
        "company": "Construction",
        "text": "The employee management system Ryano Built is the backbone of our operations. He took time to understand our needs before we finished explaining them.",
        "author": "John Ngenga",
        "role": "CEO Gwella Store"
    },
    {
        "id": "02",
        "company": "Finance",
        "text": "The employee management system Ryano Built is the backbone of our operations. He took time to understand our needs before we finished explaining them.",
        "author": "Jane Doe",
        "role": "Director Focus"
    },
    {
        "id": "03",
        "company": "Retail",
        "text": "The employee management system Ryano Built is the backbone of our operations. He took time to understand our needs before we finished explaining them.",
        "author": "Alice Kim",
        "role": "CTO Mart"
    }
];
}),
"[project]/src/utils/api.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProjectBySlug",
    ()=>getProjectBySlug,
    "getProjects",
    ()=>getProjects,
    "getServiceBySlug",
    ()=>getServiceBySlug,
    "getServices",
    ()=>getServices,
    "getTestimonials",
    ()=>getTestimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$testimonials$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/testimonials.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$caseStudies$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/caseStudies.json.[json].cjs [app-rsc] (ecmascript)");
;
;
;
;
// Simulate network delay for realistic mock API
const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
const getProjects = async ()=>{
    await delay(500);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
};
const getProjectBySlug = async (slug)=>{
    await delay(500);
    const projectList = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
    const overview = projectList.find((p)=>p.slug === slug);
    const details = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$caseStudies$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"][slug];
    if (!overview || !details) {
        throw new Error('Project not found');
    }
    return {
        ...overview,
        ...details
    };
};
const getServices = async ()=>{
    await delay(300);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
};
const getServiceBySlug = async (slug)=>{
    await delay(300);
    const service = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find((s)=>s.slug === slug);
    if (!service) {
        throw new Error('Service not found');
    }
    return service;
};
const getTestimonials = async ()=>{
    await delay(300);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$testimonials$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__028n9ci._.js.map