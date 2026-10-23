// 第 5 題
// 判斷是否至少有一個數字同時是 2 的倍數，也是 3 的倍數。
const numbers = [5, 8, 10, 18, 25];
const result = numbers.some(function (i) {
  return i % 2 === 0 && i % 3 === 0;
});

console.log(result);



// 第 4 題
// 判斷是否至少有一個動物名稱長度大於 5：
// const animals = ["cat", "dog", "rabbit", "lion"];
// const result = animals.some(function (i) {
//   return i.length > 5;
// });

// console.log(result);



// 第 3 題
// 判斷陣列中是否至少有一個偶數：
// const numbers = [1, 3, 7, 9, 12];
// const result = numbers.some(function (i) {
//   return i % 2 === 0;
// });

// console.log(result);



// 第 2 題
// 判斷是否至少有一個分數不及格（小於 60）：
// const scores = [80, 75, 90, 55, 88];
// const result = scores.some(function (i) {
//   return i < 60;
// });

// console.log(result);



// 第 1 題
// // 請判斷陣列中，是否至少有一個數字大於 10。
// const numbers = [3, 7, 12, 5, 8];

// const result = numbers.some(function (i) {
//   return i > 10;
// });

// console.log(result);



