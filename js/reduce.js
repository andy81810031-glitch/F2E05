// 第 10 題
// 請算出「偶數而且大於 10」的數字總和。
// 50
const numbers = [4, 12, 7, 18, 20, 9, 6, 15];

const result = numbers.reduce(function (total, i) {
  if (i % 2 === 0 && i > 10) {
    return total + i;
  } else {
    return total;
  }
}, 0);

console.log(result);



// 第 9 題
// 請用 reduce() 算出 低於 60 分的人有幾個。
// 4
// const scores = [85, 40, 55, 70, 30, 90, 58];

// const result = scores.reduce(function (total, i) {
//   if (i < 60) {
//     return total + 1;
//   } else {
//     return total;
//   }
// }, 0);

// console.log(result);



// 第 8 題
// 請用 reduce() 算出「大於等於 60 分」的人有幾個：
// 4
// const scores = [80, 45, 70, 30, 90, 55, 60];

// const result = scores.reduce(function (total, i) {
//   if (i >= 60) {
//     return total + 1;
//   } else {
//     return total;
//   }
// }, 0);

// console.log(result);

// 錯誤
// const scores = [80, 45, 70, 30, 90, 55, 60];

// const result = scores.reduce(function (total, i) {
//   if (i >= 60) {
//     return total + 1;
//   } else {
//     return total;
//   }
// });

// console.log(result);



// 第 7 題
// 請用 reduce() 算出陣列中所有偶數的數量。
// 4
// const numbers = [2, 5, 8, 11, 14, 17, 20];

// const result = numbers.reduce(function (total, i) {
//   if (i % 2 === 0) {
//     return total + 1;
//   } else {
//     return total;
//   }
// }, 0);

// console.log(result);

// 錯誤
// const numbers = [2, 5, 8, 11, 14, 17, 20];

// const result = numbers.reduceRight(function (total, i) {
//   if (i % 2 === 0) {
//     return total.length;
//   } else {
//     return total;
//   }
// }, 0);

// console.log(result);



// 第 6 題
// 請用 reduce() 算出所有 小於 10 的數字總和：
// 14
// const numbers = [4, 15, 7, 20, 3, 12];

// const result = numbers.reduce(function (total, i) {
//   if (i < 10) {
//     return total + i;
//   } else {
//     return total;
//   }
// }, 0);

// console.log(result);



// 第 5 題
// 請算出所有 大於 10 的數字總和：
// 47
// const numbers = [5, 12, 8, 20, 3, 15];
// const result = numbers.reduce(function (total, i) {
//   if (i > 10) {
//     return total + i;
//   } else {
//     return total;
//   }
// }, 0);

// console.log(result);



// 第 4 題
// 請用 reduce() 算出陣列中所有偶數的總和：
// 12
// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.reduce(function (total, i) {
//   if (i % 2 === 0) {
//     return total + i;
//   } else {
//     return total;
//   }
// }, 0);

// console.log(result);

// 錯誤
// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.reduce(function (total, i) {
//   if (i % 2 === 0) {
//     return total + i;
//   }
// }, 0);

// console.log(result);



// 第 3 題
// 請使用 reduce()，算出所有數字的乘積。
// 3840
// const numbers = [2, 4, 6, 8, 10];

// const result = numbers.reduce(function (total, i) {
//   return total * i;
// }, 1);

// console.log(result);

// 錯誤
// const numbers = [2, 4, 6, 8, 10];

// const result = numbers.reduce(function (total, i) {
//   return total *= i;
// });

// console.log(result);



// 第 2 題
// 請用 reduce() 算出全部數字的總和。
// 100
// const numbers = [10, 20, 30, 40];

// const result = numbers.reduce(function (total, i) {
//   return total += i; 
// }, 0);

// console.log(result);



// 第 1 題
// 請使用 reduce() 算出所有數字的總和。
// 15
// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.reduce(function (total, i) {
//   return total += i; 
// }, 0);

// console.log(result);