// ① 取得 HTML 元素
const btn = document.querySelector("#add");
const box = document.querySelector("#box");

// ② 監聽按鈕點擊事件
btn.addEventListener("click", async () => {
  // ③ 向 API 取得資料
  const url = "https://jsonplaceholder.typicode.com/users";
  const resp = await fetch(url);

  // ④ 將回傳資料轉成 JavaScript 物件
  const users = await resp.json();

  // ⑤ 遍歷陣列中的每個使用者
  users.forEach((user) => {
    // ⑥ 建立 HTML 字串
    const el = `<div><span>${user.email}</span></div>`;

    // ⑦ 將 HTML 插入網頁
    box.insertAdjacentHTML("afterbegin", el);
  });
});
