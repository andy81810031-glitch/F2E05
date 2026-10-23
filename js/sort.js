// 第 7 題
// 1. 用 filter() 找出 10 以上（包含 10）
// 2. 接著用 sort() 由小到大排序
// [12, 16, 20, 25, 30]
const numbers = [25, 8, 16, 3, 30, 12, 5, 20];

const result = numbers
  .filter((i) => {
    return i >= 10;
  })
  .sort((a, b) => {
    return a - b;
  });

  console.log(result);



// 第 6 題
// 用 filter() 找出 60 分以上（包含 60） 的成績
// 再用 sort() 將這些成績 由大到小 排序
// [90, 85, 70, 60]
// const scores = [85, 40, 70, 30, 90, 55, 60];

// const result = scores
//   .filter((i) => {
//     return i >= 60;
//   })
//   .sort((a, b) => {
//     return b - a;
//   });

//   console.log(result);

// 錯誤
// const scores = [85, 40, 70, 30, 90, 55, 60];

// const result = scores
//   .filter((i) => {
//     return i >= 60;
//   })
//   .sort((b, a) => {
//     return b - a;
//   });

//   console.log(result);



// 第 5 題
// 請先使用 filter() 找出 大於 10 的數字，再使用 sort() 由小到大排序。
// [12, 15, 18, 20]
// 不會
// const numbers = [12, 5, 20, 8, 15, 3, 18];

// const result = numbers
//   .filter((i) => {
//     return i > 10;
//   })
//   .sort((a, b) => {
//     return a - b;
//   });

// console.log(result);



// 第 4 題
// 請使用 sort() 排成：
// [100, 95, 85, 70, 55, 40]
// const scores = [55, 100, 70, 85, 40, 95];

// const result = scores.sort((a, b) => {
//   return b - a;
// });

// console.log(result);



// 第 3 題
// 請使用 sort() 排成：
// [45, 60, 75, 80, 90]
// const scores = [80, 45, 90, 60, 75];

// const result = scores.sort((a, b) => {
//   return a - b;
// });

// console.log(result);



// 第 2 題
// 請用 sort() 排成：
// [30, 21, 15, 8, 2]
// const numbers = [15, 2, 30, 8, 21];

// const result = numbers.sort((a, b) => {
//   return b - a;
// });

// console.log(result);



// 第 1 題
// 請使用：
// sort()
// 把陣列排序成：
// [1, 3, 6, 8, 10]
// const numbers = [8, 3, 10, 1, 6];

// const result = numbers.sort((a, b) => {
//   return a - b;
// });

// console.log(result);