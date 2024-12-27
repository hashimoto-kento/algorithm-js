export function format(x: number, field: number, precision: number): string {
  return x.toFixed(precision).toString().padStart(field, " ");
}

export function combiT(n: number, r: number) {
  let p = 1;
  for (let i = 1; i <= r; i++) {
    p = p * (n - i + 1) / i;
  }
  return p;
}