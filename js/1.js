// 第 37 題｜陣列 + 條件計數
// 請計算陣列中有幾個分數大於等於 60。
// 4
// const scores = [80, 45, 70, 30, 90, 55, 60];

// let count = 0;

// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] >= 60) {
//     count++
//   }
// }

// console.log(count);

// 錯誤
// const scores = [80, 45, 70, 30, 90, 55, 60];

// let total = 0;

// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] >= 60) {
//     total++
//   }
// }

// console.log(total);



// 第 36 題｜陣列 + 條件累加
// 請把陣列中 大於等於 20 的數字全部加起來。
// 20 + 30 + 40 = 90
// const scores = [20, 5, 30, 8, 40];

// let total = 0;
//  for (let i = 0; i < scores.length; i++) {
//   if (scores[i] >= 20) {
//     total = total + scores[i];
//   }
//  }

// console.log(total);



// 第 35 題｜陣列 + 條件 + 累加
// 請計算陣列中：
// 「是偶數，而且大於 10」的所有數字總和。
// 50
// const numbers = [4, 12, 7, 18, 20, 9, 6, 15];

// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0 && numbers[i] > 10) {
//     total = total + numbers[i];
//   }
// }

// console.log(total);

// 錯誤
// const numbers = [4, 12, 7, 18, 20, 9, 6, 15];

// let total = 0;

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0 && numbers[i] > 10) {
//     total = total + numbers[i];
//   }
// }

// console.log(total);



// 第 34 題
// 請計算陣列中 大於等於 10 的數字總和。
// 12 + 20 + 15 = 47
// const numbers = [5, 12, 8, 20, 3, 15];

// let total = 0;

// for(let i = 0; i < numbers.length; i++) {
//   if (numbers[i] >= 10) {
//     total = total + numbers[i]}
// }

// console.log(total);



// 第 33-2 題
// 請使用 for + length + scores[i] 計算所有分數的總和。
// 150
// const scores = [10, 20, 30, 40, 50];

// let total = 0;

// for (let i = 0; i < scores.length; i++) {
//   total = total + scores[i];
// }

// console.log(total);



// 第 33 題｜陣列 + for + 累加
// 請計算陣列裡所有數字的總和。
// 50
// const numbers = [5, 10, 15, 20];

// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//   total = total + numbers[i];
// }

// console.log(total);

// 錯誤
// const numbers = [5, 10, 15, 20];

// let total = 0;

// for (i = 0; i <= numbers.length; i++) {
//   total = total + numbers[i];
// }

// console.log(total);



// 第 32 題｜陣列 + for + %
// 請使用 for，只輸出陣列中的偶數。
// 6
// 8
// 14
// 20
// const numbers = [3, 6, 8, 11, 14, 17, 20];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }



// 第 31 題｜陣列 + for + if
// 請使用 for 迴圈，只輸出陣列中 大於等於 10 的數字。
// 12
// 10
// const numbers = [3, 8, 12, 5, 10];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] >= 10) {
//     console.log(numbers[i]);
//   }
// }



// 第 30 題
// 請使用 for + length + 陣列索引，依序輸出：
// red
// blue
// green
// yellow
// black
// const colors = ["red", "blue", "green", "yellow", "black"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }



// 第 29 題｜陣列 + for
// 請使用 for 迴圈，依序輸出：
// apple
// banana
// orange
// const fruits = ["apple", "banana", "orange"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }



// 第 28 題｜count++ + ||
// 請計算 1～20 中，是 3 的倍數「或」5 的倍數的數字有幾個？
// 9
// let count = 0;

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     count++
//   }
// }

// console.log(count);



// 第 27 題｜條件計數
// 請計算 1～30 中，同時是 2 的倍數和 3 的倍數，有幾個？
// 5
// let count = 0;

// for (let i = 1; i <= 30; i++) {
//   if(i % 2 ===0 && i % 3 === 0) {
//     count++;
//   }
// }

// console.log(count);



// 第 26 題｜計算符合條件的數量 ⭐⭐⭐⭐
// 請計算 1～20 中，有幾個數字是 5 的倍數。
// 4
// let count = 0;

// for (let i = 1; i <= 20; i++) {
//   if (i % 5 === 0) {
//     count++;
//   }
// }

// console.log(count);



// 第 26 題｜計算符合條件的數量 ⭐⭐⭐⭐
// 計算 1～10 中有幾個偶數
// 5
//不會
// let count = 0;

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     count++
//   }
  
// }

// console.log(count);



// 第 25 題｜只累加 3 的倍數 ⭐⭐⭐⭐
// 請計算 1～20 中所有 3 的倍數總和。
// 要求使用 for + if + % + total
// 63
// let total = 0;

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0) {
//     total += i;
//   }
// }

// console.log(total);



// 第 24 題｜只累加偶數 ⭐⭐⭐⭐
// let total = 0;

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     total += i;
//   }
// }

// console.log(total);

// 未優化
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     total += i;
//   }
// }

// console.log(total);



// 第 23 題｜for 累加 ⭐⭐⭐
// let total = 0;

// for (let i = 1; i <= 10; i++) {
//   total += i;
// }

// console.log(total);
 


// 第 22 題｜for 累加 ⭐⭐⭐
// let total = 0;

// for (let i = 1; i <= 5; i++) {
//   total += i;
// }

// console.log(total);



// 第 21 題｜for + % + || ⭐⭐⭐
// for (let i = 1; i <= 30; i++) {
//   if (i % 4 ===0 || i % 5 ===0) {
//     console.log(i);
//   }
// }



// 第 20 題｜for + if + % + && ⭐⭐⭐
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 ===0 && i % 3 ===0) {
//     console.log(i);
//   }
// }



// 第 19 題｜for + if + % ⭐⭐⭐

// for (let i = 1; i <= 30; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }



// 第 18 題｜for + if + % ⭐⭐⭐

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }



// 第 17 題｜for + 間隔遞增 ⭐⭐⭐
// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }



// 第 16 題｜倒著跑的 for ⭐⭐⭐
// for (let i = 5; i >=1; i--) {
//   console.log(i);
// }



// 第 15 題｜第一題 for 迴圈 ⭐⭐
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

//未優化
// for (i = 1; i <= 5; i++) {
//   console.log(i)
// }



// 第 14 題｜倍數綜合判斷 ⭐⭐⭐
// let num = 10;

// if (num % 2 ===0 || num % 5 ===0) {
//   console.log("符合條件");
// } else {
//   console.log("不符合條件");
// }



// 第 13 題｜% + && 綜合 ⭐⭐⭐
// let num = 12;

// if (num % 2 === 0 && num % 3 === 0) {
//   console.log("同時是2和3的倍數");
// } else {
//   console.log("不是同時為2和3的倍數");
// }



// 第 12 題｜判斷 3 的倍數 ⭐⭐⭐
// let num = 15;

// if (num % 3 === 0) {
//   console.log("是3的倍數");
// } else {
//   console.log("不是3的倍數");
// }

// 錯誤
// let num = 15;
// if (num * 3 === 45) {
//   console.log("是3的倍數");
// } else {
//   console.log("不是3的倍數");
// }



// 第 11-2 題｜再次判斷奇偶數 ⭐⭐
// let num = 12;

// if (num % 2 === 0) {
//   console.log("偶數");
// } else {
//   console.log("奇數");
// }



// 第 11 題｜奇數、偶數判斷 ⭐⭐⭐
// let num = 7;

// if (num % 2 === 1) {
//   console.log("奇數");
// } else {
//   console.log("偶數");
// }

// // 錯誤
// let num = 7;

// if (num % 1 === 0) {
//   console.log("奇數");
// } else {
//   console.log("偶數");
// }



// 第 10 題｜&& + || 綜合判斷 ⭐⭐⭐
// let age = 17;
// let hasParent = true;
// let hasTicket = true;

// if (hasTicket && (age >=18 || hasParent)) {
//   console.log("可以入場");
// } else {
//   console.log("不能入場");
// }



// 第 9 題｜! 邏輯反轉 ⭐⭐
// let isLoggedIn = false;

// if (!isLoggedIn) {
//   console.log("請先登入");
// } else {
//   console.log("歡迎回來");
// }



// 第 8 題｜||（OR）⭐⭐
// let isMember = false;
// let hasCoupon = true;

// if (isMember || hasCoupon) {
//   console.log("可以享有折扣");
// } else {
//   console.log("沒有折扣");
// }



// 第 7 題｜&&（AND）⭐⭐
// let age = 20;
// let hasTicket = true;

// if (age >= 18 && hasTicket) {
//   console.log("可以入場");
// } else {
//   console.log("不能入場");
// }

//未優化
// let age = 20;
// let hasTicket = true;
// if (age >= 18 && hasTicket === true) {
//   console.log("可以入場")
// } else {
//   console.log("不能入場")
// }



// 第 6 題｜if...else if...else ⭐⭐
// let score = 85;

// if (score >= 90) {
//   console.log("優等");
// } else if (score >= 80) {
//   console.log("甲等");
// } else if (score >= 60) {
//   console.log("及格");
// } else {
//   console.log("不及格");
// }



// 第 5 題｜if 判斷 ⭐⭐
// let age = 20;

// if (age >= 18) {
//   console.log("已成年");
// } else {
//   console.log("未成年");
// }



// 第 4 題｜= 與 === ⭐⭐
// let age = 20;

// console.log(age===20);
// age = 25;
// console.log(age);

// 未優化
// let age = 20;
// console.log(age===20);
// console.log(age=25);



// 第 3 題｜比較運算子 ⭐⭐
// let score = 75;
// console.log(score>60);
// console.log(score=75);
// console.log(score<50);



// 第 2 題｜變數＋字串 ⭐
// let name = "Andy";
// let age = 27;
// console.log("我是"+name+"，"+"今年"+age+"歲");



// 第 1 題｜變數＋基本運算 ⭐
// let a = 12;
// let b = 4;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);