// 物件
const hero = {
  name: "Andy",   // key / value 組合
  age:18,
  5: 123,
  attack: function () { // attack is a function
    console.log("ATTACK!!");
  },
};
console.log(hero.name);
console.log(hero[5]);





// 陣列

// 找找看有沒有 3 的倍數
// const arr = [9, 2, 8, 6, 0, 10, 100];
// const result = arr.findIndex(function (n) {
//   return n % 3 == 0;
// })

// console.log(result);



// 找東西
// 找看看有沒有 9 這個數字
// const arr = [9, 2, 8, 6, 0, 10, 100];
// if (arr.indexOf(9) >= 0) {
//   console.log("有");
// }
  


// 找到最小的 2 個值的和
// const list1 = [19, 5, 42, 2, 77];
// const sorted = list1.sort((a, b) => a - b)
// console.log(sorted[0] + sorted[1]);



// 極簡化
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const isOdd = (num) => num % 2 != 0;
// const square = (num) => num * num;
// const add = (acc, num) => acc + num;

// const sum = arr1.filter(isOdd).map(square).reduce(add, 0);

// console.log(sum);


// 簡化
// 計算 arr1 裡的奇數(filter)的平方(map)和(reduce)
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const isOdd = (num) => num % 2 != 0;
// const square = (num) => num * num;
// const add = (acc, num) => acc + num;

// const odds = arr1.filter(isOdd);
// const squaredOdds = odds.map(square);
// const sum = squaredOdds.reduce(add);

// console.log(sum);


// 一般
// 計算 arr1 裡的奇數(filter)的平方(map)和(reduce)
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const odds = arr1.filter((num) => num % 2 != 0);
// const squaredOdds = odds.map((num) => num * num);
// const sum = squaredOdds.reduce((acc, num) => acc + num);

// console.log(sum);


// 自己
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // 計算 arr1 裡的奇數(filter)的平方(map)和(reduce)
// const arr2 = arr1.filter(function (x) {
//   return x % 2 !== 0;
// });
// const arr3 = arr2.map(function (x) {
//   return x * x;
// });
// const arr4 = arr3.reduce(function (a, b) {
//   return a + b;
// });

// console.log(arr4);



// const arr1 = [1, 2, 3, 4, 5];
//let result = 0;

// ab = 累計
// ac = 目前元素
// const  result = arr1.reduce(function (ab, ac) {
//   return ab + ac;
// }, 0);// 起始值不是0

// console.log(result);



// const arr1 = [1, 2, 3, 4, 5];
// let result = 0;

// for (let i = 0; i < arr1.length; i++) {
//   result += arr1[i]
// }

// console.log(result); // 15



// const cc = [1, 2, 3, 4];

// const result = cc.every(function (x) {
//   return x > 0;
// });

// console.log(result);
// some



// const arr1 = [1, 2, 3, 4];
// const arr2 = arr1.filter(function (x){
//   return x % 2 ===0;
// })

// console.log(arr2);



// const arr1 = [1, 2, 3, 4];
// const arr2 = [];

// for (let i = 0; i < arr1.length; i++) {
//   if(arr1[i] % 2 === 0) {
//     arr2.push(arr1[i]);
//   }
// }

// console.log(arr2); // [1, 2, 3, 4] -> [2, 4]



// const arr1 = [1, 2, 3, 4];
// const arr2 = arr1.map(function (x) {
//   return x * 2;
// });

// console.log(arr2);



// const arr1 = [1, 2, 3, 4];
// const arr2 = [];

// for (let i = 0; i < arr1.length; i++) {
//   arr2.push(arr1[i] * 2);
// } 

// console.log(arr2); // [2, 4, 6, 8]



// push、unshift

// Callback function 回呼函數
//Anonymous Function 匿名函數
// const arr = ["a", "b", "c", "d"];
// arr.forEach(function (x, y, z) {
//   console.log(x, y, z);
// });



// 高階函數 Higher Order Fuction (HOF)
// function hello(x) {
//   console.log(x);

//   function cc() {}

//   return cc;
// }

// function hello(x) {
//   console.log(x);
// }

// function a() {}

// hello(a);



// const arr = ["a", "b", "c", "d"];

// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }



// const arr = ["a", "b", "c", "d"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
