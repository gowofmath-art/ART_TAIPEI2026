# ART TAIPEI 2026｜個人觀展指南

*A Personal Exhibition Guide*

一個非官方、以個人興趣出發的 ART TAIPEI 2026 精選觀展網站。從曾經喜歡的畫廊到想進一步認識的藝術家，整理十一間畫廊的展位、簡介、作品與關注緣由，作為觀展時的參考，也分享給同樣喜愛藝術的人。V1.1 保留原有五間畫廊的資料、文案與圖片，新增六間畫廊。

這份指南不是畫廊排行榜，也不是完整參展名錄。

## 畫廊精選

- **Must Visit｜必逛（6 間）**：白石畫廊、藍騎士藝術、artkake、亞洲藝術中心、貝浩登、Kaikai Kiki Gallery。
- **Interested｜有興趣（5 間）**：共感画廊、GALLERY ETHER、Gana Art、伊日藝術計劃、也趣藝廊。

十一間畫廊的欄位名稱統一為「藝術家」，沿用白石畫廊的標題字體、名單樣式及間距。藝術家超過五位時，名單可展開與收合。前端不顯示名單狀態或來源提示段落，資料中的原始備註與來源仍保留；標題統一不代表名單均已確認參展。藍騎士藝術仍為個人關注名單，共感画廊的原始名單為空，本次均未新增或更改姓名。版面支援桌面與手機，圖片保留完整構圖及原始比例；缺圖或讀取失敗時顯示佔位區域。

## 開啟網站

下載或複製整個專案，保留原有檔案結構，直接雙擊 **[index.html](index.html)**，即可使用瀏覽器開啟。請保持 JavaScript 啟用。

不需要安裝套件、啟動本機伺服器或執行建置；檔案使用相對路徑，也適合透過 GitHub Pages 發布。

## 檔案結構

以 HTML5、CSS3 與原生 JavaScript 製作的單頁靜態網站，無後端或資料庫。

```text
ART_TAIPEI2026/
├── index.html   # 頁面結構與展覽介紹
├── style.css    # 視覺設計與響應式排版
├── data.js      # 展覽資訊、畫廊資料及圖片路徑
├── app.js       # 畫廊呈現、圖片載入與名單展開／收合
├── images/     # 作品與展覽圖片
└── README.md
```

## 更新內容與圖片

**畫廊資料**：編輯 [data.js](data.js) 的 `galleries`，即可更新名稱、展位、簡介、藝術家、關注緣由與連結。`group` 使用 `must-visit` 或 `interested` 決定分類；各分類內依資料陣列順序顯示。展期、地點與官方展覽連結則位於 `event`。

所有卡片沿用白石畫廊的共用版型：作品圖像／佔位區、編號與展位、名稱、簡短背景、藝術家、「為何關注」與官方連結。`artworks` 保留原有作品資料，不另設「重點作品」區塊；個人觀展期待保留於 `reason`，統一以「為何關注」顯示。分類數量依資料自動計算，首頁介紹、搜尋摘要及無 JavaScript 提示中的總數需同步維護。

### 官方圖錄參展藝術家

六間新增畫廊以 ART TAIPEI 2026 官方電子圖錄的 **Participating Artists／參展藝術家** 為來源，未混入 **Represented Artists／代理藝術家**。`artistSource` 記錄頁碼與網址，卡片保留官方圖錄連結；`artistNote` 僅留於資料，不在藝術家區塊顯示。圖錄列名不保證現場一定展示，實際展出仍以畫廊公告為準。超過五位時先顯示前五位，其餘沿用原有展開／收合功能。

| 畫廊 | 圖錄 | 列名人數 |
| --- | --- | --- |
| 亞洲藝術中心 | [P.34](https://www.webebook.com.tw/art-taipei.com/ArtTaipei2026/#p=34) | 12 |
| 貝浩登 | [P.176](https://www.webebook.com.tw/art-taipei.com/ArtTaipei2026/#p=176) | 18 |
| Kaikai Kiki Gallery | [P.116](https://www.webebook.com.tw/art-taipei.com/ArtTaipei2026/#p=116) | 6 |
| Gana Art | [P.88](https://www.webebook.com.tw/art-taipei.com/ArtTaipei2026/#p=88) | 3 |
| 伊日藝術計劃 | [P.258–259](https://www.webebook.com.tw/art-taipei.com/ArtTaipei2026/#p=258) | 18 |
| 也趣藝廊 | [P.22](https://www.webebook.com.tw/art-taipei.com/ArtTaipei2026/#p=22) | 6 |
| **合計** | | **63** |

來源差異與處理：

- 貝浩登 P.176「參展藝術家」另列 Oli Epp、Maria Taniguchi、Qi Xie，較初始提供名單多三位。已依本次使用者明確確認補入，該畫廊由 15 位改為 18 位，六間總數由 51 位改為 54 位；保留原提供名單順序，三位補於其後。
- 伊日 P.258–259「參展藝術家」續欄另列 Xavier Wei、Eko Bintang、Grip Face、Toni Hamel、Yuichi Hirako、Naufal Abshar、Hongchuan Ong、Kyoko Shindo、Guim Tió，右側另有「代理藝術家」欄。已依使用者確認「以參展藝術家為主，代理的不算」補入九位，伊日由 9 位改為 18 位，六間總數由 54 位改為 63 位；保留原提供名單順序，九位補於其後。
- 亞洲藝術中心[官網參展介紹](https://asiaartcenter.org/art-fairs/54/overview/)列 11 位，圖錄 P.34 列 12 位，多出楊英風；依本次指定的圖錄來源保留 12 位。
- Kaikai Kiki Gallery 的 Mr. 列於 P.117「代理藝術家」，未加入 P.116 的參展名單。
- Instagram 只採畫廊官網直接連出的帳號，來源：[亞洲藝術中心](https://asiaartcenter.org/)、[貝浩登](https://www.perrotin.com/en)、[Gana Art](https://www.ganaart.com/)、[伊日藝術計劃](https://yiriarts.com.tw/contact/)、[也趣藝廊](https://www.galleryaki.com/)。Kaikai Kiki Gallery 尚未確認畫廊專用帳號，未使用其首頁其他展覽的 Instagram。

**替換圖片**：將圖片放入 [images/](images/)，再修改對應畫廊的圖片欄位，例如白石畫廊：

```js
image: "images/whitestone-01.png",
imageAlt: "描述圖片內容的替代文字",
imageCaption: "作品名稱或圖像來源（可留空）",
```

請使用實際檔名與副檔名，並保持大小寫一致。每間畫廊目前顯示一張主圖；圖片路徑留空時會保留佔位設計。儲存修改後，重新整理或重新開啟網頁即可查看。

### V1.1 代表圖片（已完成）

更新日期：2026-10-29。十一張使用者提供的圖片均已存在於既有 `images/` 資料夾，已依下表引用；沒有缺圖、搬移、改名、轉檔、修改原圖或另行下載素材。

| 畫廊 | 圖片相對路徑 |
| --- | --- |
| 白石畫廊 | `images/whitestone-01.png` |
| 藍騎士藝術 | `images/bluerider-01.png` |
| artkake | `images/artkake-01.jpg` |
| 亞洲藝術中心 | `images/asia-art-center-01.png` |
| 貝浩登 | `images/perrotin-01.png` |
| Kaikai Kiki Gallery | `images/kaikai-kiki-01.png` |
| 共感画廊 | `images/empathy-01.png` |
| GALLERY ETHER | `images/ether-01.jpg` |
| Gana Art | `images/gana-art-01.png` |
| 伊日藝術計劃 | `images/yiri-arts-01.png` |
| 也趣藝廊 | `images/aki-gallery-01.png` |

十一間共用 5:4 圖片容器，以 CSS `object-fit: contain` 完整呈現圖像；橫幅與直幅圖片均保留原始比例，空白處沿用原有底色。既有五張圖的替代文字保留，新圖依實際畫面撰寫替代文字，並補上簡短圖像說明。

代表圖片可能不同於個人關注的藝術家或作品。既有 `artworks` 資料保留，未自動套用為新圖標題；圖像說明僅描述可見畫面，未推測作品名稱或作者。圖片讀取失敗時仍保留原有佔位處理。

## V1.1 檢查紀錄（2026-10-29）

- 已確認共 11 間，必逛 6 間、有興趣 5 間，分類內順序與展位符合更新清單。
- 欄位簡化已確認十一個標題均為「藝術家」，使用相同字體、標題間距及名單排版，藝術家區塊無提示段落；原始姓名、資料備註與來源均保留。共感画廊保留空名單，未補入姓名。
- 六間圖錄名單逐名比對通過：12／18／6／3／18／6，共 63 位，無重複或遺漏；貝浩登及伊日的補列依使用者確認處理。
- 本次圖片更新保留十一間畫廊的名稱、順序、分類、參展藝術家、簡介、「為何關注」及外部連結；`app.js`、`index.html` 及十一張原始圖片檔均未修改。
- 白石畫廊與亞洲藝術中心的卡片資訊結構一致；六間沒有獨立「重點作品」或「重點藝術家」區塊，原作品資料完整保留。
- 已實測白石、藍騎士、亞洲藝術中心、貝浩登、Kaikai Kiki Gallery、伊日及也趣的展開／收合：預設前五位、展開全部、收合回五位及 `aria-expanded` 狀態均正確。Gana Art 的三位完整顯示，不產生展開按鈕。
- JavaScript 語法及差異格式檢查通過；本機 HTTP 預覽確認十一張代表圖片載入、與畫廊一一對應，無圖片載入失敗或可見佔位區。
- 已檢查 320、390、768、1440px 視窗寬度，卡片、標題、藝術家名單、連結與分類標頭無橫向溢出，並目視檢查桌面卡片與手機完整名單。
- 靜態相容性檢查確認 HTML、腳本與圖片使用相對路徑；無模組載入、資料請求、伺服器或本機儲存 API 依賴。未推送或部署。
- 檢查工具禁止導覽至 `file://`，因此未實測雙擊 `index.html`；本機 HTTP 預覽僅用於檢查，網站本身仍採原有直接開啟的靜態結構。

## 參考來源

- [ART TAIPEI 官方網站](https://2026.art-taipei.com/taipei/tw/)
- [ART TAIPEI 2026 電子圖錄（第 16 頁起）](https://www.webebook.com.tw/art-taipei.com/ArtTaipei2026/#p=16)

## 非官方聲明與著作權

本網站為個人觀展整理，與 ART TAIPEI 主辦單位及各畫廊無隸屬關係，亦不代表其官方立場。參展藝術家、展位與展覽資訊，請以主辦單位及畫廊最新公告為準。

網站內藝術作品、圖片、標誌及相關素材的著作權與其他權利，歸各藝術家、畫廊或原權利人所有。公開存放於 GitHub 不代表可自由重製、轉載或商業使用；使用前請確認素材的授權條件，必要時取得權利人同意。

本專案未附加 MIT License 或其他開源授權，也未授予第三方圖片及藝術作品的再利用權。
