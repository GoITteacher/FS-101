function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  console.log(n);
  return n * factorial(n - 1);
}

const res = factorial(5);
console.log(res);

// 120;
// 5 * 24;
// 4 * 6;
// 3 * 2;
// 2 * 1;

// =================================

// function fibba(n) {
//   if (n <= 1) return 1;
//   return fibba(n - 1) + fibba(n - 2);
// }

// 1 1 2 3 5 8 13 21
// 0 1 2 3 4 5  6

// fibba(0); // 1
// fibba(1); // 1
// fibba(2); // 2
// fibba(3); // 3

// const data = fibba(6);

// console.log(data);
