// 判斷是否為閏年
// 閏年判斷規則
// - 4 的倍數且非 100 的倍數：為閏年（例如 2024 年）
// - 400 的倍數：為閏年（例如 2000 年）
// - 100 的倍數但非 400 的倍數：為平年（例如 1900 年）
// - 非 4 的倍數：為平年（例如 2023 年）
//
// 提示：
// 而且 = &&
// 或者 = ||


// let y = 2000;

// if (y % 4 == 0) {
//   if (y % 100 == 0) {
//     if (y % 400 == 0) {
//       console.log("閏年");
//     } else {
//       console.log("平年");
//     }
//   } else {
//     console.log("閏年");
//   }
// } else {
//   console.log("平年");
// }

// // 簡化版
// let y = 2026;

// if (y % 4 == 0) {
//   if (y % 100 != 0) {
//     console.log("閏年");
//   } else {
//     if (y % 400 == 0) {
//       console.log("閏年");
//     } else {
//       console.log("平年");
//     }
//   }
// } else {
//   console.log("平年");
// }

// 精簡版
if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
  // 閏年
} else {
  // 平年
}





// 判斷 n 是否為 奇數
// n % 2 => 3 種情況 1/0/-1
// != <-- 不等於
// let n = -3;
// if (n % 2 != 0) {
//   console.log("奇數");
// } else {
//   console.log("偶數")
// }



//  判斷 n 是否為 偶數
// let n = 123;
// if (n % 2 ==0) {
//   console.log("是偶數");
// } else {
//   console.log("不是偶數")
// }


// 寫一個 if 判斷 數字 n 是否為 5 的倍數
// let n = 123;
// if (n % 5 ==0) {
//   console.log("是5的倍數");
// } else {
//   console.log("不是5的倍數")
// }












// let gender = 1;

// switch (gender) {
//   case 0:
//     console.log(0);
//     break;
//   case 1:
//     console.log(1);
//     break;
//   case 2:
//     console.log(2);
//     break;
//   default:
//     console.log("others");
// }


// let age = 18;
// if (age >= 18) {
//   console.log("已成年");

// } else {
//   console.log("年輕人")
// }


// 沒有值可以等於NaN


// a = a + 1;
// a  += 1;
// a++; // postfix
// ++a; // prefix

// a *= 3;
// a = a * 3;

// a /= 3;
// a = a / 3;


// a++; // postfix
// ++a; // prefix
// console.log(typeof typeof 123)


