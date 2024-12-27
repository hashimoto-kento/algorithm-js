"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = format;
exports.combiT = combiT;
function format(x, field, precision) {
    return x.toFixed(precision).toString().padStart(field, " ");
}
function combiT(n, r) {
    let p = 1;
    for (let i = 1; i <= r; i++) {
        p = p * (n - i + 1) / i;
    }
    return p;
}
