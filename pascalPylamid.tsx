import { format } from './utils/formatter';
import { combiT } from './utils/formatter';

const N :number = 12;
for (let n = 0; n <= N; n++) {
  let result = '' .padStart((N - n) * 2, ' ');
  for (let r = 0; r <= N; r++) {
    result += format(combiT(n, r), 4, 0);
  }
  console.log(result);
}