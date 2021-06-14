(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 'use strict'\n\nfunction draw(ctx, canvas_w, canvas_h, data) {\n    let img = new ImageData(new Uint8ClampedArray(data), canvas_w, canvas_h);\n    ctx.putImageData(img, 0, 0);\n}\n\nconst X_MIN = -1.5;\nconst X_MAX = 0.5;\nconst Y_MIN = -1.0;\nconst Y_MAX = 1.0\nconst MAX_ITER = 64;\n\n\nconsole.log(\"start loading wasm\");\nconst mandelbrot = __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./pkg */ \"./pkg/mandelbrot.js\"))\n    .catch(console.error);\n\nPromise.all([mandelbrot]).then(async function ([\n    { generate_mandelbrot_set, draw_mandelbrot_set }\n]) {\n    console.log(\"finished loading wasm\");\n    const renderBton = document.getElementById('render');\n    renderBton.addEventListener('click', () => {\n        draw_mandelbrot_set();\n        let wasmResult = null;\n        {\n            const CANVAS_ID = \"canvas_hybrid\";\n            let canvas = document.getElementById(CANVAS_ID);\n            let context = canvas.getContext(\"2d\");\n            const canvasWidth = canvas.width;\n            const canvasHeight = canvas.height;\n\n            const generateStartTime = Date.now();\n            wasmResult = generate_mandelbrot_set(canvasWidth, canvasHeight,\n                X_MIN, X_MAX, Y_MIN, Y_MAX)\n            const generateEndTime = Date.now();\n            const drawStartTime = Date.now();\n            draw(context, canvasWidth, canvasHeight, wasmResult);\n            const drawEndTime = Date.now();\n            const elapsed = generateEndTime - generateStartTime;\n            console.log(`\\tgenerate:wasm\\tgenerate:_elapsed:${elapsed}[ms]`);\n            console.log(`\\tdraw: js\\tdraw_elapsed: ${drawEndTime - drawStartTime} [ms]`);\n        }\n    });\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);