"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatter_1 = require("./utils/formatter");
const formatter_2 = require("./utils/formatter");
const N = 12;
for (let n = 0; n <= N; n++) {
    let result = ''.padStart((N - n) * 2, ' ');
    for (let r = 0; r <= N; r++) {
        result += (0, formatter_1.format)((0, formatter_2.combiT)(n, r), 4, 0);
    }
    console.log(result);
}
