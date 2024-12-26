function format(x: number, field: number, precision: number) {
  return x.toFixed(precision).toString().padStart(field, " ");
}

const b: number[] = [
  35, 25, 56, 78, 43, 66, 71, 73, 80, 90, 0, 73, 35, 65, 100, 78, 80, 85, 35,
  50,
];
let hist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < b.length; i++) {
  let rank = Math.floor(b[i] / 10);
  if (0 <= rank && rank <= 10) {
    hist[rank]++;
  }
}

for (let i = 0; i <= 10; i++) {
  console.log(format(i * 10, 4, 0) + ' - : ' + hist[i]);
}
