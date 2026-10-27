# CSS Selectors（CSS 選擇器）完整分類與語法

> 前端學習筆記｜繁體中文｜2026-10-26

## 目錄
1. 核心概念與分類
2. 基本選擇器
3. 屬性選擇器
4. 組合器
5. 偽類選擇器
6. 偽元素選擇器
7. 選擇器的組合形式
8. 權重、層疊與常見陷阱
9. 綜合實作與練習
10. 速查表與官方資料

## 1. 核心概念與分類

CSS 選擇器（Selectors）用來指出哪些 HTML／XML 元素符合樣式規則。

```css
.card > p:hover { color: red; }
```

- `.card`：類別選擇器
- `>`：子元素組合器（Combinator）
- `p`：型別選擇器
- `:hover`：偽類選擇器
- `{ color: red; }`：宣告區塊，不是選擇器

**分類層級要分清楚**：型別、類別、ID、通用、屬性與偽類屬於簡單選擇器（simple selectors）的主要形式；偽元素有獨立的語法規則；組合器是連接選擇器的符號，不是獨立的簡單選擇器；複合、複雜、相對選擇器與選擇器列表是「組合結構」。

| 類別 | 語法 | 說明 |
|---|---|---|
| 型別 Type | `p` | 指定標籤 |
| 類別 Class | `.box` | 指定 class |
| ID | `#app` | 指定 id |
| 通用 Universal | `*` | 任意元素 |
| 屬性 Attribute | `[disabled]` | 依屬性匹配 |
| 偽類 Pseudo-class | `:hover` | 依狀態／結構／條件匹配 |
| 偽元素 Pseudo-element | `::before` | 指向元素的特定部分或虛擬部分 |
| 組合器 Combinator | 空白、`>`、`+`、`~`、`||` | 描述元素關係 |
| 複合 Compound | `button.primary:hover` | 同一元素同時符合多個條件 |
| 複雜 Complex | `.menu > li a` | 使用組合器串接 |
| 列表 Selector list | `h1, h2, h3` | 多個選擇器共用宣告 |
| 相對 Relative | `> img` | 相對於錨定元素，常見於 `:has()` |
| 命名空間限定 | `svg|a`、`*|a`、`|a` | 用於 XML/SVG 等命名空間情境；`svg` 前綴須先宣告 |

## 2. 基本選擇器

```css
p { color: navy; }               /* 型別：所有 p */
.notice { color: orange; }       /* 類別：class 包含 notice */
#main { max-width: 960px; }     /* ID：id=main */
* { box-sizing: border-box; }   /* 通用：所有元素 */
```

```html
<p class="notice">提示</p>
<main id="main">內容</main>
```

注意：`.a.b` 是同一元素同時有 a 與 b 兩個 class；`.a .b` 則是 `.a` 裡面的後代 `.b`，意思不同。HTML 的 id 原則上應保持唯一。

## 3. 屬性選擇器（Attribute selectors）

| 語法 | 意思 | 範例 |
|---|---|---|
| `[attr]` | 有這個屬性 | `[required]` |
| `[attr="v"]` | 完全等於 v | `[type="email"]` |
| `[attr~="v"]` | 空白分隔的詞清單包含 v | `[class~="active"]` |
| `[attr|="v"]` | 等於 v 或以 `v-` 開頭（常用於語言） | `[lang|="zh"]` |
| `[attr^="v"]` | 以 v 開頭 | `a[href^="https"]` |
| `[attr$="v"]` | 以 v 結尾 | `a[href$=".pdf"]` |
| `[attr*="v"]` | 任意位置包含 v | `a[href*="example"]` |

```css
input[required] { outline: 1px solid orange; }
a[href$=".pdf" i] { color: crimson; } /* i：ASCII 不分大小寫 */
[data-state="OPEN" s] { color: green; } /* s：大小寫敏感；注意瀏覽器支援 */
```

屬性值預設是否區分大小寫會受 HTML 屬性定義與語言規則影響；`i`／`s` 是明確指定比較方式，不要假設全部屬性一律敏感。

## 4. 組合器（Combinators）

```html
<div class="box">
  <p id="a">A</p>
  <section><p id="b">B</p></section>
  <p id="c">C</p>
  <span>文字</span>
  <p id="d">D</p>
</div>
```

| CSS | 關係 | 選中的 p |
|---|---|---|
| `.box p` | 所有後代 | A、B、C、D |
| `.box > p` | 直接子元素 | A、C、D |
| `section + p` | 緊接在 section 後方、同父層的 p | C |
| `section ~ p` | section 後方、同父層的所有 p | C、D |

**補充 `||`（欄組合器）**：用來表達欄與儲存格之間的欄關係，屬較少使用的規格語法；瀏覽器支援情況須先查詢，不建議一般網頁切版依賴。

```css
/* 示意，使用前確認支援 */
col.selected || td { background: yellow; }
```

## 5. 偽類選擇器（Pseudo-classes）

### 5.1 使用者互動與連結

| 偽類 | 用途 |
|---|---|
| `:hover` | 指標停留 |
| `:active` | 元素啟用期間（如按下） |
| `:focus` | 取得焦點 |
| `:focus-visible` | 瀏覽器判定應顯示焦點指示時 |
| `:focus-within` | 本身或後代取得焦點 |
| `:link` | 尚未造訪的連結 |
| `:visited` | 已造訪連結（有隱私相關樣式限制） |
| `:any-link` | 可作為連結的元素 |
| `:target` | URL fragment 指向的元素 |

```css
button:hover { background: #ddd; }
button:focus-visible { outline: 3px solid royalblue; }
form:focus-within { border-color: blue; }
a:visited { color: purple; }
```

### 5.2 結構與位置

| 偽類 | 用途 |
|---|---|
| `:root` | 文件根元素，HTML 通常是 `html` |
| `:empty` | 無子節點內容的元素；空白文字節點的處理須留意規格／支援差異 |
| `:first-child`／`:last-child` | 第一／最後一個子元素 |
| `:only-child` | 唯一子元素 |
| `:nth-child(an+b)` | 依兄弟元素中的位置選取 |
| `:nth-last-child(an+b)` | 從後面計數 |
| `:first-of-type`／`:last-of-type` | 同類型標籤的第一／最後一個 |
| `:only-of-type` | 同類型標籤中唯一一個 |
| `:nth-of-type(an+b)` | 同標籤類型的第 n 個 |
| `:nth-last-of-type(an+b)` | 同標籤類型，從後面計數 |

```css
li:first-child { font-weight: bold; }
li:nth-child(odd) { background: #eee; }   /* 1,3,5... */
li:nth-child(even) { background: #fff; }  /* 2,4,6... */
li:nth-child(3n + 1) { color: red; }      /* 1,4,7... */
p:first-of-type { margin-top: 0; }
```

**重要**：`:nth-child(2)` 是「在所有兄弟元素中排行第 2」，不是「第二個 p」；`:nth-of-type(2)` 才是同標籤類型中的第 2 個。

### 5.3 表單與輸入狀態

| 偽類 | 用途 |
|---|---|
| `:enabled`／`:disabled` | 可用／停用 |
| `:checked` | 被勾選的 checkbox／radio 等 |
| `:indeterminate` | 不確定狀態 |
| `:required`／`:optional` | 必填／非必填 |
| `:valid`／`:invalid` | 驗證有效／無效 |
| `:in-range`／`:out-of-range` | 值在／不在限制範圍 |
| `:read-only`／`:read-write` | 不可／可編輯 |
| `:placeholder-shown` | placeholder 正在顯示 |
| `:default` | 預設選項／按鈕等 |
| `:user-valid`／`:user-invalid` | 考慮使用者互動後的驗證狀態 |

```css
input:invalid { border-color: red; }
input:focus-visible { outline: 2px solid blue; }
input:disabled { opacity: .5; }
input:checked { accent-color: green; }
```

### 5.4 函數型／邏輯偽類

```css
/* :not()：排除 */
button:not(.primary) { opacity: .7; }

/* :is()：符合任一選擇器；權重取參數中最高者 */
:is(h1, h2, h3) { line-height: 1.3; }

/* :where()：類似 :is()，但本身權重永遠為 0 */
:where(article, section) p { margin-block: 1em; }

/* :has()：依相關元素是否符合條件匹配 */
.card:has(> img) { padding-top: 0; }
form:has(input:invalid) { border-color: red; }
```

`:has()` 不是單純「選取父元素」的專用語法，也能根據兄弟等相對關係判斷；`:has()` 不能任意巢狀使用，參數中也有偽元素限制。

### 5.5 語言、方向與其他進階偽類

| 偽類 | 用途 |
|---|---|
| `:lang(zh)` | 語言匹配 |
| `:dir(rtl)` | 文字方向匹配 |
| `:scope` | 參照／作用範圍根元素 |
| `:defined` | 已定義的元素（包含已註冊自訂元素） |
| `:fullscreen` | 全螢幕狀態 |
| `:open` | 處於開啟狀態的特定元素 |
| `:modal` | 模態元素 |
| `:popover-open` | 顯示中的 popover |
| `:target-within` | 本身或後代為目標（留意支援） |
| `:picture-in-picture` | 畫中畫狀態 |
| `:playing`／`:paused` | 媒體播放狀態（留意支援） |

這不是所有規格草案與瀏覽器實驗性偽類的逐字列舉；實務上請查 MDN 相容性表。

## 6. 偽元素選擇器（Pseudo-elements）

通常使用雙冒號 `::`。歷史相容性上，部分早期偽元素也接受單冒號（如 `:before`），新程式碼建議使用雙冒號。

| 偽元素 | 用途 |
|---|---|
| `::before`／`::after` | 在元素內容前／後產生可樣式化部分，常配合 `content` |
| `::first-letter` | 第一個字母／字元 |
| `::first-line` | 第一行 |
| `::selection` | 選取反白部分 |
| `::placeholder` | 表單提示文字 |
| `::marker` | 清單標記 |
| `::file-selector-button` | 檔案輸入控制項的按鈕 |
| `::backdrop` | 全螢幕或 top layer 元素的背景層 |
| `::cue` | 影音字幕 cue |
| `::part(name)` | Shadow DOM 暴露的 part |
| `::slotted(selector)` | slot 中符合條件的元素（Shadow DOM） |
| `::highlight(name)` | CSS Custom Highlight API 定義的高亮 |
| `::view-transition-*` | View Transitions 相關部分 |

```css
.badge::before { content: "★ "; color: orange; }
p::first-letter { font-size: 2rem; }
li::marker { color: red; }
::selection { background: gold; color: black; }
input::placeholder { color: gray; }
```

偽元素不等於 HTML 中真的多出一個節點；可搭配哪些選擇器與可套用哪些 CSS 屬性，依各偽元素規則而異。

## 7. 選擇器的組合形式

```css
button.primary:hover { color: white; } /* Compound：同一元素 */
nav > ul li.active a { color: red; }   /* Complex：組合器連接 */
h1, h2, h3 { margin: 0; }             /* Selector list：逗號分隔 */
.card:has(> img) { padding: 0; }       /* Relative：> img 相對 .card */
```

**選擇器列表陷阱**：一般列表若包含無效選擇器，可能導致整個規則的選擇器列表無效；`:is()` 與 `:where()` 的參數使用 forgiving selector list，能忽略其中無效項目（具體仍依語法情境）。

命名空間範例：

```css
@namespace svg url("http://www.w3.org/2000/svg");
svg|circle { fill: red; }
```

## 8. 權重、層疊與常見陷阱

### 8.1 Specificity（權重）

可用三欄 `(ID, class/屬性/偽類, type/偽元素)` 理解：

| 選擇器 | 權重 |
|---|---|
| `p` | (0,0,1) |
| `.card`、`:hover`、`[type]` | (0,1,0) |
| `#main` | (1,0,0) |
| `div.card:hover` | (0,2,1) |
| `*`、`:where(.card)` | (0,0,0) |

- 組合器 `>`、`+`、`~`、空白不增加權重。
- `:is()`、`:not()`、`:has()` 自身不額外計分，取參數中最高的選擇器權重；`:where()` 權重為零。
- 行內 style 與 `!important` 不能簡化成上述三欄權重；`!important` 改變層疊優先順序。
- 最終結果還取決於來源、重要性、cascade layers、作用範圍及宣告順序，並非只比權重。

### 8.2 常見錯誤

```css
.box p {}     /* 後代：可隔多層 */
.box > p {}   /* 直接子元素：只隔一層 */
.a.b {}       /* 同一個元素同時有 a 和 b */
.a .b {}      /* .a 裡的後代 .b */
p:hover {}    /* 偽類 */
p::before {}  /* 偽元素 */
```

`:hover` 不保證觸控裝置能像滑鼠一樣操作，關鍵互動應兼顧鍵盤焦點與觸控。

## 9. 綜合實作與練習

HTML：

```html
<article class="card featured">
  <h2>CSS 筆記</h2>
  <p class="desc">學習選擇器</p>
  <a href="guide.pdf">下載</a>
  <button disabled>尚未開放</button>
</article>
```

CSS：

```css
.card { padding: 1rem; }
.card.featured { border: 2px solid teal; }
.card > h2 { margin-top: 0; }
.card .desc { color: #555; }
.card a[href$=".pdf"]::after { content: " (PDF)"; }
.card button:disabled { opacity: .5; }
.card:has(a[href$=".pdf"]) { background: #f4f9ff; }
```

### 自我測驗（先寫答案再看解析）

1. `.box p` 和 `.box > p` 差在哪？
2. `h2 + p` 和 `h2 ~ p` 差在哪？
3. `p:nth-child(2)` 和 `p:nth-of-type(2)` 差在哪？
4. `.card.active` 和 `.card .active` 差在哪？
5. `:hover` 是偽類還是偽元素？
6. `::before` 是偽類還是偽元素？
7. `[href^="https"]` 的 `^=` 代表什麼？
8. `:where()` 和 `:is()` 最重要的權重差異？
9. `:has(> img)` 裡面的 `> img` 是什麼？
10. `>` 會增加 specificity 嗎？

<details>
<summary>參考答案</summary>

1. 前者所有後代；後者僅直接子元素。
2. 前者緊接的下一個同父層 p；後者後續所有同父層 p。
3. 前者所有兄弟中第 2 個且必須是 p；後者同類型 p 中第 2 個。
4. 前者同一元素有兩個 class；後者後代關係。
5. 偽類。
6. 偽元素。
7. 屬性值以 https 開頭。
8. `:where()` 權重固定零；`:is()` 取參數最高權重。
9. 相對選擇器，要求直接子元素 img。
10. 不會。
</details>

## 10. 速查表與官方資料

**初學優先熟練**：`p`、`.class`、`#id`、`*`、`[attr]`、空白、`>`、`+`、`~`、`:hover`、`:focus-visible`、`:nth-child()`、`:not()`、`:is()`、`:where()`、`:has()`、`::before`、`::after`、`,`。

**學習順序**：基本 → 屬性 → 組合器 → 互動與結構偽類 → 偽元素 → 複合／複雜選擇器 → 權重與層疊 → 進階偽類／命名空間。

參考：
- MDN CSS selectors：https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors
- MDN CSS pseudo-classes：https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
- MDN CSS pseudo-elements：https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
- MDN Specificity：https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity
- W3C Selectors Level 4：https://www.w3.org/TR/selectors-4/

> 備註：此筆記以日常前端實務及 Selectors Level 4 重要語法為核心，並補充部分較新功能；規格持續演進，實驗性／瀏覽器專有選擇器與全部未普及語法不逐項收錄。使用新語法前請確認瀏覽器支援。
