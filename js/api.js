// 第 3 題-10
// 行政區：「大安區」
// 地址包含「和平東路」或「復興南路」
// 而且可借車 >= 5
// 而且可還車空位 >= 5
// 最後印出站名
const URL = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

const result = fetch(URL);

result
.then((resp) => {
  return resp.json();
})
.then((stations) => {
  stations
  .filter((station) => {
    return station.sarea == "大安區";
  })
  .filter((station) => {
    return (
    (
    station.ar.includes("和平東路") || 
    station.ar.includes("復興南路")
    ) && 
    station.available_rent_bikes >= 5 && 
    station.available_return_bikes >= 5
    );
  })
  .URLforEach((station) => {
    console.log(station.sna);
  });
})
.catch((err) => {
  console.log(err);
});





// 第 3 題-9
// 行政區：「中山區」
// 地址包含「南京東路」或「民生東路」
// 而且「可還車空位」>= 10
// 最後印出站名
// const URL = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

// const result = fetch(URL);

// result
// .then((resp) => {
//   return resp.json();
// })
// .then((stations) => {
//   stations
//   .filter((station) => {
//     return station.sarea == "中山區";
//   })
//   .filter((station) => { 
//     return (
//     (
//     station.ar.includes("南京東路") || 
//     station.ar.includes("民生東路")
//     ) && 
//     station.available_return_bikes >= 10
//     );
//   })
//   .forEach((station) => {
//     console.log(station.sna);
//   });
// })
// .catch((err) => {
//   console.log(err);
// });



// 第 3 題-8
// 行政區：大安區
// 而且：
// 地址包含「和平東路」或「羅斯福路」
// 而且
// 可還車空位 >= 8 
// const URL = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

// const result = fetch(URL);

// result
// .then((resp) => {
//   return resp.json();
// })
// .then((stations) => {
//   stations
//   .filter((station) => {
//     return station.sarea == "大安區";
//   })
//   .filter((station) => {
//     return (
//     (  
//     station.ar.includes("和平東路") ||
//     station.ar.includes("羅斯福路")
//     ) && 
//     station.available_return_bikes >= 8
//     );
//   })
//   .forEach((station) => {
//     console.log(station.sna);
//   });
// })
// .catch((err) => {
//   console.log(err);
// });

//錯誤
// const URL = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

// const result = fetch(URL);

// result
// .then((resp) => {
//   return resp.json();
// })
// .then((stations) => {
//   stations
//   .filter((station) => {
//     return station.sarea == "大安區";
//   })
//   .filter((station) => {
//     return (
//     (  
//     station.ar.includes("和平東路") ||
//     station.ar.includes("羅斯福路")
//     ) && 
//     station.available_rent_bikes >= 8
//     );
//   })
//   .forEach((station) => {
//     console.log(station.sna);
//   });
// })
// .catch((err) => {
//   console.log(err);
// });



// 第 3 題-7
// 行政區是「信義區」
// 而且
// 地址包含「忠孝東路」或「信義路」
// 而且
// 可借自行車數量 >= 5
// const URL = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

// const result = fetch(URL);

// result
// .then((resp) => {
//   return resp.json();
// })
// .then((stations) => {
//   stations
//   .filter((station) => {
//     return station.sarea == "信義區";
//   })
//   .filter((station) => {
//     return (
//       (
//       station.ar.includes("忠孝東路") || 
//       station.ar.includes("信義路")
//       ) && 
//       station.available_rent_bikes >= 5
//     );
//   })
//   .forEach((station) => {
//     console.log(station.sna);
//   });
// })
// .catch((err) => {
//   console.log(err);
// });

//錯誤
// const URL = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

// const result = fetch(URL);

// result
// .then((resp) => {
//   return resp.json();
// })
// .then((stations) => {
//   stations
//   .filter((station) => {
//     return station.sarea == "信義區";
//   })
//   .filter((station) => {
//     return (
//       station.ar.includes("忠孝敦路") || 
//       station.ar.includes("信義路") && 
//       station.available_rent_bikes >= 5
//     );
//   })
//   .forEach((station) => {
//     console.log(station.sna);
//   });
// })
// .catch((err) => {
//   console.log(err);
// });



// 第 3 題-6
// 行政區是「大安區」
// 而且地址包含「和平東路」或「新生南路」
// 最後印出站名
// const URL = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

// const result = fetch(URL);

// result
// .then((resp) => {
//   return resp.json();
// })
// .then((stations) => {
//   stations
//   .filter((station) => {
//     return station.sarea == "大安區";
//   })
//   .filter((station) => {
//     return (
//       station.ar.includes("和平東路") || 
//       station.ar.includes("新生南路")
//     );
//   })
//   .forEach((station) => {
//     console.log(station.sna);
//   });
// })
// .catch((err) => {
//   console.log(err);
// });

//錯誤
// const URL = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

// const result = fetch(URL);

// result
// .then((resp) => {
//   return resp.json();
// })
// .then((stations) => {
//   stations
//   .filter((station) => {
//     return station.area == "大安區";
//   })
//   .filter((station) => {
//     return (
//       station.ar.includes("和平東路") || 
//       station.ar.includes("新生南路")
//     );
//   })
//   .forEach((station) => {
//     console.log(station.sna);
//   });
// })
// .catch((err) => {
//   console.log(err);
// });



// 第 3 題-5
// 行政區：中正區
// 第二個 filter 同時判斷：
// 地址包含「羅斯福路」
// 而且
// 可借自行車數量 > 5
// 最後印出：
// 站名 sna
// const URL = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

// const result = fetch(URL);

// result
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((stations) => {
//     stations
//     .filter((station) => {
//       return station.sarea == "中正區"
//     })
//     .filter((station) => {
//       return (
//       station.ar.includes("羅斯福路") && 
//       station.available_rent_bikes > 5
//       );
//     })
//     .forEach((station) => {
//       console.log(station.sna);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//錯誤
// const URL = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

// const result = fetch(URL);

// result
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((stations) => {
//     stations
//     .filter((station) => {
//       return station.sarea == "中正區"
//     })
//     .filter((station) => {
//       return (
//       station.ar.includes("羅斯福路") && 
//       station.available_rent_bikes > 5
//       );
//     })
//     .forEatch((station) => {
//       console.log(station.sna);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });



// 第 3 題-4
// 行政區：大安區
// 第二個 filter 同時判斷：
// 地址包含「羅斯福路」
// 而且
// 可還車空位 >= 10
// 最後印出站名
// const URL = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

// const result = fetch(URL);

// result
//   .then((resp) => {
//     return resp.json;
//   })
//   .then((stations) => {
//     stations
//     .filter((station) => {
//       return station.sarea == "大安區";
//     })
//     .filter((station) => {
//       return (
//       station.ar.includes("羅斯福路") && 
//       station.available_return_bikes >= 10
//       );
//     })
//     .forEach((station) => {
//       console.log(station.sna);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });



// 第 3 題-3
// 行政區：信義區
// 而且同時：
// 地址包含「忠孝東路」
// 可借自行車數量 >= 5
// 最後印出站名 sna
// const URL = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

// const result = fetch(URL);

// result
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((stations) => {
//     stations
//     .filter((station) => {
//       return station.sarea == "信義區";
//     })
//     .filter((station) => {
//       return (
//         station.ar.includes("忠孝東路") && 
//         station.available_rent_bikes >= 5
//       );
//     })
//     .forEach((station) => {
//       console.log(station.sna);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
  
// 錯誤
// const URL = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

// const result = fetch(URL);

// result
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((stations) => {
//     stations
//     .filter((station) => {
//       return station.sarea == "信義區";
//     })
//     .filter((station) => {
//       return station
//       .ar.includes("忠孝東路")
//       && .available_rent_bikes >= 5;
//     })
//     .forEach((station) => {
//       console.log(station.sna);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });



// 第 3 題-2
// 行政區：中山區
// 地址包含：南京東路
// 可借自行車數量：大於 3
// 最後印出：站名
// const URL = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

// const result = fetch(URL);

// result
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((stations) => {
//     stations
//     .filter((station) => {
//       return station.sarea == "中山區";
//     })
//     .filter((station) => {
//       return station.ar.includes("南京東路");
//     })
//     .filter((station) => {
//       return station.available_rent_bikes > 3;
//     })
//     .forEach((station) => {
//       console.log(station.sna);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });



// 第 3 題
// 請找出：
// 行政區：大安區
// 地址包含：和平東路
// 可借車數量：大於 5 台
// 最後印出：站名 sna
// const URL = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

// const result = fetch(URL);

// result
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((stations) => {
//     stations
//     .filter((station) => {
//       return station.sarea == "大安區";
//     })
//     .filter((station) => {
//       return station.ar.includes("和平東路");
//     })
//     .filter((station) => {
//       return station.available_return_bikes > 5;
//     })
//     .forEach((station) => {
//       console.log(station.sna);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });



// 第 2 題
// 繼續同樣難度，但這次請按照你今天原本學的 .then() + .catch() 寫。
// 行政區：中山區
// 地址包含：南京東路
// 最後印出：station.sna
// const URL = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

// const result = fetch(URL);

// result
//   .then((resp) =>{
//     return resp.json();
//   })
//   .then((stations) => {
//     stations
//     .filter((station) => {
//       return station.sarea == "中山區";
//     })
//     .filter((station) => {
//       return station.ar.includes("南京東路");
//     })
//     .forEach((station) => {
//       console.log(station.sna);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });



// 第 1 題
// 使用 fetch(URL) 取得資料
// 使用 .then() + resp.json() 解析資料
// 使用 .filter() 找出：- sarea 是 "信義區"
// 再使用一個 .filter() 找出：- ar 地址中包含 "信義路"
// 使用 .forEach() 印出這些站點的：- sna
// const URL = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

// try {
//   const resp = await fetch(URL);
//   const stations = await resp.json();

//   stations
//     .filter((station) => {
//     return station.sarea == "信義區";
//   })
//     .filter((station) => {
//       return station.ar.includes("信義路");
//     })
//     .forEach((station) => {
//       console.log(station.sna);
//     });
// } catch (err) {
//   console.log(err);
// }