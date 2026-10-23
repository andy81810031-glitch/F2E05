const aa = document.querySelector("#aa");
const bb = document.querySelector("#bb");

aa.addEventListener("click", (e) => {
  // console.log(123);
  // console.log(e.target);
  console.log(e.currentTarget);
}, true);

bb.addEventListener("click", () => {
  // console.log(456);
}, true);






// IIFE (Immediately Invoked Function Expression)
// var a = 100;

// (function (x) {
//   var a = 1;
//   console.log(x);
//   console.log(a);
// })(123);

// console.log(a);



// (function (x) {
//   console.log(x);
// })(123)



// (function () {
//   console.log(123);
// })()



// closure 閉包
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }
// 解法 1：
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }
// 解法 2：
// for (var i = 0; i < 3; i++) {
//   let j = i;
//   setTimeout(() => {
//     console.log(j);
//   }, 0);
// }
// 解法 3：
// for (var i = 0; i < 3; i++) {
//   ((j) => {
//     setTimeout(() => {
//       console.log(j);
//     }, 3000);
//   })(i);
// }
// 解法 4：利用 setTimeout 的第三個參數
// for (var i = 0; i < 3; i++) {
//   setTimeout((x) => {
//     console.log(x);
//   }, 0, i);
// }
// 解法 5：
// for (var i = 0; i < 3; i++) {
//   const delayFn = (j) => {
//     console.log(j);
//   };

//   const delayFn2 = delayFn.bind(null, i);

//   setTimeout(delayFn2, 1000);
// }





// function aa() {
//   var i = 1;

//   function bb() {
//     console.log(i);
//     i += 1;
//   }

//   return bb;
  
// }

// const cc = aa();
// cc()



// function aa() {
//   var i = 1; // scope
//   var j = 2;

//   function bb() {
//     console.log(i);
//   }

//   console.log(j);
//   return bb;
// }

// const cc = aa();
// cc()



// for(let i = 0; i < 3; i++) {
//   // i => 自由變數 free variable
//   setTimeout(() => {
//     console.log(i);
//   }, 1000)
// }



// for(var i = 0; i < 3; i++) {
//   // i => 自由變數 free variable
//   setTimeout(() => {
//     console.log(i);
//   }, 1000)
// }

// console.log(i);





