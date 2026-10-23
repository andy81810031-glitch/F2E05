const btn = document.querySelector("#add");
const box = document.querySelector("#box");

btn.addEventListener("click", async () => {
  // 動態新增 div
  const url = "https://jsonplaceholder.typicode.com/users";
  const resp = await fetch(url);
  const users = await resp.json();

  users.forEach((user) => {
    const el = `<div><span>${user.email}</span></div>`;
    box.insertAdjacentHTML("afterbegin", el);
  });
  //
  // const el = document.createElement("div");
  // const span = document.createElement("span");
  // span.textContent = "hi";
});
