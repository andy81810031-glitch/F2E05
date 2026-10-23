// 第 5 題
// 請使用 map()：
// - 如果數字 >= 10 → 乘以 2
// - 否則 → 保持原本數字
// [5, 20, 30, 8, 40]
const numbers = [5, 10, 15, 8, 20];

const result = numbers.map(function (i) {
  if (i >= 10) {
    return i * 2;
  } else {
    return i;
  }
});

console.log(result);



// 第 4 題
// 請使用 map()，讓每個數字先乘以 3，再加 5。
// [8, 11, 14, 17]
// const numbers = [1, 2, 3, 4];

// const result = numbers.map(function (i) {
//   return ((i * 3) + 5);
// });

// console.log(result);



// 第 3 題
// 請使用 map()，把每個數字變成「自己的平方」。
// [4, 9, 16, 25]
// const numbers = [2, 3, 4, 5];

// const result = numbers.map(function (i) {
//   return i * i;
// });

// console.log(result);



// 第 2 題
// 請使用 map()，讓每個數字都 + 10。
// [15, 20, 25, 30]
// const numbers = [5, 10, 15, 20];

// const result = numbers.map(function (i) {
//   return i + 10;
// });

// console.log(result);



// 第 1 題
// 請使用 map()，讓每個數字都 乘以 2。
// [4, 8, 12, 16]
// const numbers = [2, 4, 6, 8];

// const result = numbers.map(function (i) {
//   return i* 2;
// });

// console.log(result);