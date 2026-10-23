// if .. else
// 奇數、偶數判斷
// 閏年判斷
// switch .. case
// for 迴圈
// 印聖誕樹



// 九九乘法表
// 提示：
// 1. 巢狀迴圈
// 2. 可使用 `${i}` backtick
// 結果：
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// 1 x 4 = 4
// 1 x 5 = 5
// ...
// 9 x 9 = 81
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} x ${j} = ${i * j}`)
  }
}



// // 聖誕樹
// for (let i = 0; i < 5; i++) {
//   const SPACES = " ".repeat(4 - i);
//   const STARS = "*".repeat(2 * i + 1);

//   console.log(`${SPACES}${STARS}`);
// }


// console.log(`我今年 ${age} ${1 + 2} 歲`)

// // 印出 13579
// for (let i = 0; i < 5; i++) {
//   console.log(i * 2 + 1);
// }

// // 印出 43210
// for (let i = 0; i < 5; i++) {
//   console.log(4 - i);
// }













// // *
// // ***
// // *****
// // *******
// // *********
// for (let i = 1; i <= 9; i = i + 2) {
//   console.log("*".repeat(i));
// }




// // 印出
// // *
// // **
// // ***
// // ****
// // *****
// for (let i = 1; i <= 5; i = i + 1) {
//   console.log("*".repeat(i));
// }





// console.log("A".repeat(10))



// // 印出 1 ~ 10 之間的偶數
// for (let a = 1; a <= 10; a++)
//   if (a % 2 == 0) {
//     console.log(a);
//   } 




// // for 迴圈
// //   開始        停止判斷  每回合的變化
// // 正常版
// for (let a = 1; a <= 10; a++) {
//   console.log(a);
// }

// // 拆解版
// let a = 1;

// for (;;) {
//   if (a > 10) {
//     break;
//   }
//   console.log(a);
//   a++;
// }