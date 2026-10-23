// 第 22 題：
// 請使用 for + .length + if + count，計算有幾個人的年齡 大於等於 18 歲。
// 3
// const ages = [15, 20, 17, 25, 30, 16];
// let count = 0;
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 18) {
//     count++;
//   }
// }

// console.log(count);



// 第 21 題：
// 請使用 for + .length + if + count，計算陣列裡有幾個偶數。
// 4
// const numbers = [2, 5, 8, 11, 14, 17, 20];
// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     count++;
//   }
// }

// console.log(count);

// 錯誤
// const numbers = [2, 5, 8, 11, 14, 17, 20];
// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (i % 2 === 0) {
//     count++;
//   }
// }

// console.log(count);



// 第 20 題：
// 請使用 for + .length + if，計算有幾個成績是 60 分以上（包含 60）。
// 4
// const scores = [80, 45, 70, 30, 90, 55, 60];
// let count = 0;
// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] >= 60) {
//     count++;
//   }
// }
// console.log(count);

// 錯誤
// const scores = [80, 45, 70, 30, 90, 55, 60];
// let const = 0;
// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] >= 60) {
//     console.log(const);
//   }
// }




// 第 19 題：
// 請使用 for + .length + if + total，只把 **30 以上（包含 30）**的數字加起來。
// 190
// const numbers = [10, 25, 30, 45, 50, 65];
// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] >= 30) {
//     total += numbers[i];
//   }
// }

// console.log(total);



// 第 18 題：
// 請使用 for + .length + if + total，把 **60 分以上（包含 60）**的成績加起來。
// 235
// const scores = [45, 80, 30, 65, 90, 50];
// let total = 0;
// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] >= 60) {
//     total += scores[i];
//   }
// }

// console.log(total);

// 錯誤
// const scores = [45, 80, 30, 65, 90, 50];
// let total = 0;
// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] >= 60);
//   total += scores[i];
// }

// console.log(total);



// 第 17 題：
// 請使用 for + .length + if + total，只把「偶數」加起來。
// 不要使用 filter()、reduce()。
// 60
// const numbers = [5, 10, 15, 20, 25, 30];
// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     total += numbers[i];
//   }
// }

// console.log(total);



// 第 16 題：
// 請使用 for + .length + total，算出所有數字的總和。
// 150
// const numbers = [10, 20, 30, 40, 50];
// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i];
// }

// console.log(total);



// 第 15 題：
// 請算出陣列中所有價格的總和。
// 500
// 不會
// const prices = [100, 200, 50, 150];
// let total = 0;

// for (let i = 0; i < prices.length; i++) {
//   total += prices[i];
// }

// console.log(total);



// 第 14 題：
// 請使用 for + .length + if，只印出陣列中的偶數。
// 8
// 14
// 20
// const numbers = [3, 8, 11, 14, 19, 20];
// for (let i = 0; i < numbers.length; i++){
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }



// 第 13 題：
// 請使用 for + .length + if，只印出 **60 分以上（包含 60）**的成績。
// 80
// 90
// 75
// const scores = [80, 45, 90, 30, 75];
// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] >= 60) {
//     console.log(scores[i]);
//   }
// }



// 第 12 題：
// 請使用 for + .length，依序印出：
// cat
// dog
// rabbit
// tiger
// const animals = ["cat", "dog", "rabbit", "tiger"];
// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }



// 第 11 題：
// 請使用 for 迴圈和 .length，把每個水果印出來：
// apple
// banana
// orange
// const fruits = ["apple", "banana", "orange"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// } 

// 錯誤
// const fruits = ["apple", "banana", "orange"];
// for (let i = 0; i < 3; i++) {
//   console.log(fruits.length);
// } 



// 第 10 題：
// 請使用 .length 判斷：
// 如果陣列裡剛好有 4 個人，印出：
// 人數正確
// 否則印出：
// 人數不正確
// const users = ["小明", "小美", "小華", "小杰"];
// if (users.length === 4) {
//   console.log("人數正確");
// } else {
//   console.log("人數不正確");
// }

// 錯誤
// const users = ["小明", "小美", "小華", "小杰"];
// if (users.length === 3) {
//   console.log("人數正確");
// } else {
//   console.log("人數不正確");
// }



// 第 9 題：
// 請判斷：
// 如果 messages 裡面沒有任何元素，印出：
// 目前沒有訊息
// 否則印出：
// 你有新訊息
// const messages = [];
// if (messages.length === 0) {
//   console.log("目前沒有訊息");
// } else {
//   console.log("你有新訊息");
// }

// 錯誤
// const messages = [];
// if (messages.length === []) {
//   console.log("目前沒有訊息");
// } else {
//   console.log("你有新訊息");
// }



// 第 8 題：
// 請使用 .length 取得並印出最後一個元素。
// 滷肉飯
// const foods = ["拉麵", "水餃", "牛肉麵", "炒飯", "滷肉飯"];
// console.log(foods[foods.length - 1]);



// 第 7 題：
// 請使用 .length 判斷：
// - 如果購物車商品數量 大於等於 5，印出 "購物車快滿了"
// - 否則印出 "還可以繼續購物"
// 購物車快滿了
// const cart = ["滑鼠", "鍵盤", "螢幕", "耳機", "麥克風"];
// if (cart.length >= 5) {
//   console.log("購物車快滿了");
// } else {
//   console.log("還可以繼續購物");
// } 



// 第 6 題：
// 請使用 .length 和模板字面值印出：
// 班上目前有 3 位學生
// const students = ["小明", "小華", "小美"];
// console.log(`班上目前有 ${students.length} 位學生`);



// 第 5 題：
// 請使用 .length 印出：
// 總共有 6 筆成績
// const scores = [80, 65, 92, 70, 88, 100];
// console.log(`總共有 ${scores.length} 筆成績`);

// 錯誤
// const scores = [80, 65, 92, 70, 88, 100];
// console.log(`${總共有}`scores.length`${筆成績}`);



// 第 4 題：用.length 取得最後一個元素 ⭐⭐
// 請不要直接寫 animals[3]。
// 使用 .length 取得並印出陣列的最後一個元素。
// tiger

// 不會
// const animals = ["cat", "dog", "rabbit", "tiger"];
// console.log(animals[animals.length - 1]);



// 第 3 題：搭配 if ⭐⭐
// 如果 colors 的長度 大於 3，就印出 "顏色很多"；否則印出 "顏色不多"。
// 顏色很多
// const colors = ["red", "blue", "green", "yellow"];
// if (colors.length > 3) {
//    console.log("顏色很多");
// } else {
//    console.log("顏色不多");
// }



// 第 2 題
// 請使用 .length 印出 "JavaScript" 一共有幾個字元。
// const message = "JavaScript";
// console.log(message.length);



// 第 1 題
// 請使用 .length 印出陣列裡面有幾個元素。
// const fruits = ["apple", "banana", "orange", "grape", "mango"];
// console.log(fruits.length);