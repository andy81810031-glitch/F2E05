class = 語法糖 syntax suger

type="module" 會打開defer、"use strict";

`this`
-代名詞
-規則：
1. 誰呼叫，誰就是 this;沒有人呼叫，this -> 全域變數 window / global(非瀏覽器)
2. 是否有使用箭頭函數？箭頭函數沒有自己的 this & arguments
3. 是否有使用 `new`？
4. 是否有使用 `call`, `apply`, `bind`？
5. 是否有使用「嚴格模式」（Strict Mode）