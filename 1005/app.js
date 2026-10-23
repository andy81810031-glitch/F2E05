// const btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//   console.log("abc");
// });

// Event Loop
// JSON = JavaScript Object Notion 


// 留下已成年
// const users = [
//   { name: "aa", age: 10 },
//   { name: "bb", age: 12 },
//   { name: "cc", age: 20 },
//   { name: "dd", age: 22 },
//   { name: "e", age: 8 },
// ];

// const result = users.filter((user) => {
//   return user.age >= 18;
// });

// console.log(result);






// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // 印出奇數 [1, 3, 5, 7, 9]

// const result = arr.filter((i) => {
//   return i % 2 !== 0;
// });

// console.log(result);



const URL = "https://jsonplaceholder.typicode.com/users";

try {
  const resp = await fetch(URL);
  const users = await resp.json();

  users.forEach((user) => {
    console.log(user.email);
  });
} catch (err) {
  console.log(err);
}



// const URL = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

// const result = fetch(URL);

result
  .then((resp) => {
    return resp.json();
  })
  .then((stations) => {stations
    .filter((station) => {
      return station.sarea == "大安區";
    })
    .filter((station) => {
      return station.ar.includes("復興南路");
    })
    .forEach((station) => {
      console.log(station.sna);
    });
  })
  .catch((err) => {
    console.log(err);
  });



    // 老師
    // 大安區的所有站點
    // const daan = stations.filter((station) => {
    //   return station.sarea == "大安區";
    // });

    // daan.forEach((station) => {
    //   console.log(station.sna);
    // });

    // stations
    //   .filter((station) => {
    //     return station.sarea == "大安區";
    //   })
    //   .forEach((station) => {
    //     console.log(station.sna);
    //   });

    // stations
    //   .filter((station) => station.sarea == "大安區")
    //   .forEach((station) => console.log(station.sna));



// const URL = "https://jsonplaceholder.typicode.com/users";

// const result = fetch(URL);
// result = 是一個 promise(pending)
// 1. pending
// 2. resolved 成功
// 3. rejected 失敗
// resolved
// result
//   .then((resp) => {
//     return resp.json(); // 把 response 解開成 JSON
//   })
//   .then((users) => {
//     users.forEach((user) => {
//       console.log(user.email);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });



// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 2000);

// console.log(3);