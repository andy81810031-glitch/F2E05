# Git 與 GitHub 完整操作教學

適用環境：Windows 11、VS Code、Git Bash。範例儲存庫：`html-homework`。

## 一、先認識 Git 與 GitHub
- **Git**：安裝在電腦上的版本控制工具。
- **GitHub**：線上存放 Git 儲存庫的平台。
- **本機儲存庫**：電腦上的專案資料夾與 `.git` 版本紀錄。
- **遠端儲存庫**：GitHub 上的專案。
- `add` 暫存變更、`commit` 建立本機版本、`push` 上傳版本、`pull` 下載並整合更新、`clone` 第一次複製儲存庫。

## 二、第一次安裝 Git（每台電腦各做一次）
1. 到官方網站 https://git-scm.com/downloads/win 下載 Windows 版 Git。
2. 執行安裝程式。初學者大部分選項可保持預設；確認 Git Bash 已安裝。若詢問預設編輯器，可選 VS Code（需先安裝）。
3. 開啟 **Git Bash**，執行：
   ```bash
   git --version
   ```
   出現版本號表示安裝成功。
4. 設定提交者身分（兩台電腦可使用相同資訊）：
   ```bash
   git config --global user.name "你的名稱"
   git config --global user.email "你的GitHub信箱或GitHub提供的noreply信箱"
   git config --global init.defaultBranch main
   git config --global --list
   ```
   `user.name` / `user.email` 是 commit 作者資訊，**不是 GitHub 登入驗證**。
5. 在 VS Code 選「終端機 → 新增終端機」，可選 Git Bash，或直接使用 PowerShell（Git 指令相同）。

## 三、建立 GitHub 帳號與連結驗證（每台電腦各做一次）
1. 到 https://github.com/ 註冊或登入。
2. 推薦新手使用 **HTTPS + Git Credential Manager**。Windows 版 Git 通常包含 Git Credential Manager。
3. 首次執行 `git push` 或需要驗證的 `git clone` 時，依提示在瀏覽器登入 GitHub 並授權；成功後通常可儲存認證。
4. GitHub 已不接受一般帳號密碼作為 Git HTTPS 操作的密碼。若使用其他認證方式，請依 GitHub 官方文件設定 personal access token 或 SSH 金鑰。**不要把 token、密碼或私鑰提交到儲存庫。**
5. HTTPS 遠端網址格式：`https://github.com/你的帳號/html-homework.git`。

## 四、已有本機專案：第一次上傳到 GitHub
1. 先在 GitHub 按 **New repository**，命名 `html-homework`。若本機已有完整專案，建議建立**空白儲存庫**，暫不勾選 README、.gitignore、License，以免產生不同的初始歷史。
2. 在 VS Code 開啟本機專案資料夾，開啟終端機；確認目前位於正確的專案資料夾：
   ```bash
   pwd
   git status
   ```
3. 如果 `git status` 提示不是 Git 儲存庫，才執行：
   ```bash
   git init
   git branch -M main
   ```
4. **排除不應上傳的檔案：建立 `.gitignore`（建議在 `git add .` 之前完成）**

   在 VS Code 的專案根目錄（與 `package.json` 同一層）建立新檔案，檔名必須是 **`.gitignore`**，沒有額外副檔名，例如不要取成 `.gitignore.txt`。

   貼上以下內容：

   ```gitignore
   node_modules/
   dist/
   .env
   .env.*
   !.env.example
   ```

   | 規則 | 用途 |
   |---|---|
   | `node_modules/` | 排除 npm 安裝的套件；其他電腦可使用 `npm install` 重新安裝 |
   | `dist/` | 排除 Vite 等工具產生的建置輸出；可重新執行建置 |
   | `.env` | 排除常用來放 API 金鑰、密碼或設定值的環境變數檔 |
   | `.env.*` | 排除 `.env.local`、`.env.production` 等環境設定檔 |
   | `!.env.example` | 允許提交不含真實密鑰的設定範本（選用） |

   **注意：**`.gitignore` 本身應該提交到 GitHub，讓其他電腦共用相同規則。`package.json` 和 `package-lock.json` 通常要上傳，不要把它們一起排除。

   **檢查規則是否生效：**

   ```bash
   git status
   git check-ignore -v node_modules/ dist/ .env
   ```

   `git check-ignore` 可顯示符合哪一條忽略規則；指定檔案或資料夾不存在時可能沒有輸出。

   **如果檔案在建立 `.gitignore` 之前已被 Git 追蹤：**

   ```bash
   git rm -r --cached node_modules dist
   git rm --cached .env
   git add .gitignore
   git commit -m "設定 Git 忽略規則"
   ```

   上述指令是依實際已追蹤的檔案**分別執行**；不存在或未追蹤的路徑會報錯，請略過。`--cached` 只從 Git 追蹤清單移除，不刪除本機實體檔案。若敏感資料曾經提交或推送，`.gitignore` 無法清除歷史紀錄，應立即撤銷或更換洩漏的密鑰，必要時再處理 Git 歷史。

5. 暫存與提交：
   ```bash
   git status
   git add .
   git commit -m "Initial commit"
   ```
6. 綁定 GitHub 遠端（將網址換成自己的）：
   ```bash
   git remote add origin https://github.com/你的帳號/html-homework.git
   git remote -v
   git push -u origin main
   ```
7. 首次上傳時完成瀏覽器驗證，回 GitHub 網頁重新整理，確認檔案已出現。

> 如果 `git remote add origin ...` 顯示 `remote origin already exists`，先用 `git remote -v` 檢查；若網址錯誤，使用 `git remote set-url origin 正確網址`。若專案原本已有 `.git`，**不要重新初始化或刪除 `.git`**。

## 五、主電腦日常修改後上傳最新版
在**專案資料夾**執行：
```bash
git status
git add .
git commit -m "完成今日練習"
git push
```
- `git status`：查看修改狀態。
- `git add .`：把目前資料夾下的新增、修改、刪除納入暫存。
- `git commit -m "..."`：在本機記錄一個版本。
- `git push`：將已提交的版本上傳到 GitHub。
- 沒有變更時，Git 可能顯示 `nothing to commit`，不必硬做 commit。
- **push 前**如果其他電腦已上傳更新，先 `git pull --rebase`（確認工作區乾淨），處理可能的衝突後再 `git push`。

## 六、另一台電腦第一次下載專案（clone）
1. 在另一台電腦安裝 Git、設定 `user.name` 與 `user.email`，並準備 GitHub 認證。
2. 到 GitHub 專案頁 → 綠色 **Code** → **HTTPS** → 複製網址。
3. 在終端機切換到想放專案的**上層資料夾**，例如：
   ```bash
   cd ~/Documents
   git clone https://github.com/你的帳號/html-homework.git
   cd html-homework
   git status
   code .
   ```
4. `git clone` 會建立 `html-homework` 資料夾、下載版本歷史並設定 `origin`；**不必再 `git init` 或 `git remote add origin`**。
5. `code .` 需要 VS Code 的命令列功能可用；也可以手動從 VS Code 開啟資料夾。

## 七、主電腦上傳後，另一台電腦如何更新
1. 主電腦：
   ```bash
   git add .
   git commit -m "更新作業"
   git push
   ```
2. 另一台電腦開啟**已 clone 的專案資料夾**，先確認沒有未處理的修改：
   ```bash
   git status
   git pull
   ```
3. 完成後即可取得 GitHub 最新的 `main` 版本。
4. 另一台電腦若也有修改，應先 `git add .`、`git commit -m "..."`，再 `git pull --rebase`，確認沒有衝突後 `git push`。若有未提交變更，不要直接強制覆蓋；先提交或使用 `git stash` 保存。
5. 回到主電腦繼續工作前，也先 `git pull`，避免兩邊版本分岔。

### 兩台電腦的完整循環
```text
主電腦：修改 → git add . → git commit -m "..." → git push
                                ↓
                           GitHub 最新版
                                ↓
另一台：進入已 clone 的專案 → git pull → 修改 → add → commit → push
                                ↓
主電腦：git pull → 取得另一台的更新
```
**每次換電腦，先 `git status`、`git pull`，再開始修改。** 這是建立在工作區乾淨、沒有衝突的情況下。

## 八、常見錯誤與排除
| 情況 | 原因與處理 |
|---|---|
| `fatal: not a git repository` | 沒進入 Git 專案資料夾；先 `cd` 到正確位置。 |
| `remote origin already exists` | 已設定遠端；用 `git remote -v` 查看，必要時 `git remote set-url origin 網址`。 |
| `src refspec main does not match any` | 尚未建立 commit，或目前分支不是 main；檢查 `git status`、`git branch`，先提交。 |
| `rejected (non-fast-forward)` | 遠端有本機沒有的提交；先同步（例如工作區乾淨時 `git pull --rebase`），解決衝突再 push。 |
| `Authentication failed` | 登入或權限問題；檢查 GitHub 登入、憑證與儲存庫權限，不要使用 GitHub 帳號密碼當作 Git HTTPS 密碼。 |
| `nothing to commit, working tree clean` | 目前沒有可提交的變更，屬正常訊息。 |
| `CONFLICT` | 兩邊修改同一段內容；打開衝突檔，決定保留哪些內容，移除衝突標記，`git add` 後依提示繼續 merge/rebase。 |
| `git pull` 被未提交變更阻擋 | 先 commit，或使用 `git stash` 暫存、pull 後再 `git stash pop`，並處理可能衝突。 |

### rebase 衝突時
```bash
git status
# 手動修改有衝突的檔案
git add 有衝突的檔案
git rebase --continue
```
如果要放棄此次 rebase：`git rebase --abort`。**不要隨意用 `git push --force`、`git reset --hard`，可能覆蓋或遺失變更。**

## 九、必背指令速查表
| 指令 | 用途 |
|---|---|
| `git --version` | 確認 Git 已安裝 |
| `git config --global user.name "..."` | 設定作者名稱 |
| `git config --global user.email "..."` | 設定作者信箱 |
| `git init` | 將現有資料夾初始化為儲存庫（只做一次） |
| `git status` | 查看檔案與分支狀態 |
| `git add .` | 暫存目前資料夾的變更 |
| `git commit -m "訊息"` | 建立本機版本 |
| `git branch -M main` | 將目前分支命名為 main |
| `git remote add origin 網址` | 設定遠端（只做一次） |
| `git remote -v` | 查看遠端網址 |
| `git push -u origin main` | 首次推送並設定上游分支 |
| `git push` | 上傳本機已提交版本 |
| `git clone 網址` | 第一次下載完整儲存庫 |
| `git pull` | 更新已 clone 的專案 |
| `git log --oneline -5` | 查看最近五次提交 |

## 十、最短記憶版
**第一次安裝**：下載 Git → `git --version` → `git config` → 登入 GitHub。

**本機專案第一次上傳**：GitHub 建空 repo → `git init` → `.gitignore` → `git add .` → `git commit -m "Initial commit"` → `git branch -M main` → `git remote add origin 網址` → `git push -u origin main`。

**以後上傳**：`git status` → `git add .` → `git commit -m "說明"` → `git push`。

**另一台第一次下載**：`git clone 網址` → `cd 專案名稱`。

**另一台更新**：`cd 專案名稱` → `git status` → `git pull`。

**官方參考**：https://git-scm.com/book/zh-tw/v2 、https://docs.github.com/en/get-started/getting-started-with-git 、https://docs.github.com/en/authentication
