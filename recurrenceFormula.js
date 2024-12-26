"use strict";
function combiT(n, r) {
    let p = 1;
    for (let i = 1; i <= r; i++) {
        p = p * (n - i + 1) / i;
    }
    return p;
}
for (let n = 0; n <= 5; n++) {
    let result = '';
    for (let r = 0; r <= n; r++) {
        result += n + 'C' + r + ' = ' + combiT(n, r) + ', ';
    }
    console.log(result);
}
function fn(x, a, n) {
    let p = a[n];
    for (let i = n - 1; i >= 0; i--) {
        p = p * x + a[i];
    }
    return p;
}
const a = [1, 2, 3, 4, 5];
for (let x = 1; x <= 5; x++) {
    console.log(`f(${x}) = ${fn(x, a, 4)}`);
}
