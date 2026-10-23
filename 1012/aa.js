// OOP = Object-Oriented Programming
// 物件導向程式設計


// 第4版
// 規則1：所有的物件都有 `__proto__`
// 規則2：所有的function都有 `prototype`
// const actions = {
//   attack: function () {
//     console.log("ATTACK");
//   },
//   sleep: function () {
//     console.log("ZZZ");
//   },
// };

// function heroCreatorV4(name, age) {
//   // 1. {} <-- this
//   // 2. {}.__proto__ --> heroCreatorV4.prototype -> { }
//   this.name = name;
//   this.age = age;
//   // 3. 自動回傳 { }
// }
// heroCreatorV4.prototype = actions;

// const h1 = new heroCreatorV4("cc", 123);
// console.log(h1);
// // h1.__proto__ -> heroCreatorV4.prototype <-- {}
// h1.sleep();
// h1.attack();



// 第3版
const actions = {
  attack: function () {
    console.log("ATTACK");
  },
  sleep: function () {
    console.log("ZZZ");
  },
};

function heroCreatorV3(name, age) {
  const h = Object.create(actions);
  h.name = name;
  h.age = age;

  return h;
}

const h1 = heroCreatorV3("cc", 123);
console.log(h1);
h1.sleep();
h1.attack();



// 第2版本
// const actions = {
//   attack: function () {
//     console.log("ATTACK");
//   },
//   sleep: function () {
//     console.log("ZZZ");
//   },
// };

// function heroCreatorV2(name, age) {
//   const h = {
//     name: name,
//     age: age,
//   };

//   h.__proto__ = actions;

//   return h;
// }

// const h1 = heroCreatorV2("cc", 123);
// console.log(h1);
// h1.sleep();
// h1.attack();



// function heroCreator(name, age) {
//   const h = {
//     name: name,
//     age: age,
//     attack: function () {
//       console.log("ATTACK!");
//   },
// };
//   return h;
// }

// const h1 = heroCreator("cc", 123);
// const h2 = heroCreator("bb", 456);

// console.log(h1);
// console.log(h2);



// const hero = {
//   name: "cc",
//   age: 18,
//   attack: function () {
//     console.log("ATTACK!");
//   },
// };

// hero.attack();



// import { hello as h2 } from "./bb";

// function hello() {
//   console.log(123);
// }

// console.log(h2);
// console.log(hello);

// import dayjs from "dayjs"; // export default
// console.log(dayjs); // fn

// import { hello } from "./bb.js";
// import world from "./bb.js";
// import world, { hello } from "./bb.js";

// hello();
// world();
// console.log(a, b);

// 打包工具 bundler
// import ... from .. 可以正常使用套件名稱
// Node -> xxxx ->
// 套件們 --> 打包、整理 --> 單一個 .js
// Vue - > View
// Vite -> 不是打包工具
// esbuild   (dev) <-- vite --> rollup   (上線)
// erolldown (dev) <-- vite --> rolldown (上線)
