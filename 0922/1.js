// Function
// 函數宣告、參數、引數
// 預設值、回傳值
// 箭頭函數



// function calcBMI1(height, weight) {
//   const h = height / 100;

//   return weight / (h * h);
// }

// const calcBMI2 = (h, w) => {
//   return w / ((h / 100) * (h / 100));
// };

// const calcBMI3 = (h, w) => w / ((h / 100) * (h / 100));








// function hi1(n) {
//   //
// }

// const hi2 = function(n) {
//   //
//   // this
// }

// // arrow function 箭頭函數
// const hi3 = (n) => {
//   //
// };





// 寫一個可以計算身體質量指數（Body Mass Index）的函數，
// 它可以接收身高跟體重做為參數，並且回傳計算結果（四捨五入到小數點以下第 2 位
// 提示：BMI = 體重（kg） / 身高2（m）

// function round(num, n = 0) {
//   const ratio = Math.pow(10, n);
//   return Math.round(num * ratio) / ratio;
// }

// function calcBMI(height, weight) {
//   const h = height / 100;

//   return weight / (h * h);
// }

// const bmi = calcBMI(160, 50);
// console.log(round(bmi));



// function round(num) {
//   return Math.round(num * 100) / 100;
// }

// function calcBMI(height, weight) {
//   const h = height / 100;

//   return weight / (h * h);
// }

// const bmi = calcBMI(160, 50);
// console.log(round(bmi));














// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   }
//     return false;
// }

// console.log(isAdult(20));






// function isAdult(age) {
//   if (age >= 18) {
//   return true;
// } else {
//   return false;
// }
// }

// console.log(isAdult(20))







// function add(a, b) {
//   return a + b
// }

// console.log(add(1, 2))




// function checkAge(age) {
//   let message

//   if (age >= 18) {
//     message = "已成年";
//   } else {
//     message = "未成年";
//   }

//   console.log(message);
// }

// (checkAge(16)); // 會印出什麼？
// (checkAge(20)); // 會印出什麼？




// function checkAge(age) {
//   if (age >= 18) {
//     const message = "已成年";
//   } else {
//     const message = "未成年";
//   }

//   console.log(message);
// }

// console.log(checkAge(16)); // 會印出什麼？
// console.log(checkAge(20)); // 會印出什麼？




// let a = 1

// function hello() {
//   a = 2
//   console.log(a)
// }

// hello()
// console.log(a)








// function hello() {
//   var a = 1
//   let b = 2
// }

// hello()

// console.log(a)
// console.log(b)






// // block
// // let/const = block scope
// // var = function scope

// for (var a = 1; a < 3; a++) {
//   //
// }

// console.log(a);







// console.log(a);
// let a = 1;



// // 一般寫法 function declartion
// function aa (n) {
//   console.log(n);
// }

// aa(123);





// var bb = function (x) {
//   console.log(x);
// };

// bb(123);










// // 函數      // 參數
// function hello(x, y, ...z) {
//   console.log(x, y, z);
// }

// hello(1, 2, 3, 4); // 引數
// // hello(1);
// // hello(1, 2, 3);
// // ...只能放最後面





 




// function hello() {
//   console.log(123)
// }

// hello(); // 呼叫、執行
// console.log(hello)






  // // 請使用 for 或 while 迴圈
  // // 印出：
  // // 你好5
  // // 你好3
  // // 你好1

// for (let i = 5; i >= 1; i -= 2) {
//   console.log(`你好${i}`);
// }


// for (let i = 2; i >= 0; i--)




// // While 迴圈

// let i = 0;

// while (i < 5) {
//   console.log(i);
//   i++;
// }