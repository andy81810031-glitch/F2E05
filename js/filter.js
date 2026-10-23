// 第 5 題
// 請用 .filter() 篩選出：
// 同時是 2 的倍數，而且也是 3 的倍數的數字。
// [6, 12, 18]
const numbers = [3, 6, 8, 9, 12, 15, 18, 20];

const result = numbers.filter(function (i) {
  return i % 2 ==0 && i % 3 === 0;
});

console.log(result);



// 第 4 題
// 請使用 .filter() 篩選出字串長度大於 4的動物。
// ["rabbit", "tiger"]
// const animals = ["cat", "dog", "rabbit", "lion", "tiger"];

// const result = animals.filter(function (i) {
//   return i.length > 4;
// });

// console.log(result);



// 第 3 題
// 請用 .filter() 篩選出所有的偶數。
// [6, 12, 18]
// const numbers = [3, 6, 9, 12, 15, 18];

// const result = numbers.filter(function (i) {
//   return i % 2 === 0;
// });

// console.log(result);



// 第 2 題
// 請用 .filter() 篩選出 60 分以上（包含 60） 的分數。
// [80, 70, 90]
// const scores = [80, 45, 70, 30, 90, 55];

// const result = scores.filter(function (i) {
//   return i >= 60;
// });

// console.log(result);



// 第 1 題
// 請使用 .filter()，把 大於 10 的數字 篩選出來。
// [12, 20]
// const numbers = [5, 12, 8, 20, 3];

// const result = numbers.filter(function (i) {
//   return i > 10;
// });

// console.log(result);

// 錯誤
// const numbers = [5, 12, 8, 20, 3];

// const result = numbers.filter(function (i) {
//   console.log(i > 10);
// });


