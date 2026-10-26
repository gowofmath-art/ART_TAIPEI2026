/*
 * 網站內容集中於此，儲存後重新開啟或重新整理 index.html 即可更新。
 * 圖片：將檔案放進 images/，再將 image 改成相對路徑，例如：
 * image: "images/whitestone.jpg"
 * imageAlt：描述實際圖片內容；imageCaption：可選的作品名稱／圖像來源。
 * image 留空或圖片讀取失敗時，網站會顯示佔位區域。
 * group 決定分區；陣列順序決定顯示順序。
 */
window.exhibitionGuide = {
  event: {
    date: "2026.10.30 — 11.02",
    venue: "台北世界貿易中心一館",
    // 展期與地點來源：ART TAIPEI 官方展會資訊。
    url: "https://2026.art-taipei.com/taipei/tw/visit/"
  },
  groups: [
    { id: "must-visit", title: "Must Visit", label: "必逛" },
    { id: "interested", title: "Interested", label: "有興趣" }
  ],
  galleries: [
    {
      id: "whitestone",
      group: "must-visit",
      name: "白石畫廊",
      internationalName: "Whitestone Gallery",
      location: "",
      booth: "A17",
      image: "images/whitestone-01.png",
      imageAlt: "白石畫廊作品圖像：鮮明色彩與黑白線條交織的雙眼形象，左下附 ART TAIPEI 展覽文字。",
      imageCaption: "",
      description: "起源於日本的當代藝術畫廊，介紹亞洲與國際藝術家的多元創作。",
      artistLabel: "藝術家",
      artists: ["篠田桃紅", "田中敦子", "李禹煥", "水島哲雄", "權純益", "努里婭・莫拉", "金丸悠兒", "MANE", "李載賢", "小松美羽", "京森康平", "黃品彤", "寺倉京古", "克拉蘇塔", "原澤亨輔"],
      reason: "曾參觀過的畫廊，喜歡其展覽氛圍，也期待欣賞小松美羽、原澤亨輔、田中敦子等藝術家的作品。",
      links: [
        { label: "官方展覽", url: "https://www.whitestone-gallery.com/zh-hant/blogs/art-fair/art-taipei-2026" },
        { label: "Instagram", url: "https://www.instagram.com/whitestonegallery_taipei/" }
      ]
    },
    {
      id: "bluerider",
      group: "must-visit",
      name: "藍騎士藝術",
      internationalName: "Bluerider ART",
      location: "",
      booth: "A04",
      image: "images/bluerider-01.png",
      imageAlt: "藍騎士藝術作品圖像：灰色底面上交疊的細密白色線條與網格。",
      imageCaption: "",
      description: "以國際當代藝術為特色，介紹多位歐美及亞洲藝術家的作品。",
      artistLabel: "關注藝術家",
      artistNote: "以下為個人關注名單，並非已確認參展名單。",
      artists: [
        "Willi Siber 威利．希伯",
        "Reinoud Oudshoorn 雷諾．奧德霍恩",
        "Josep Riera i Aragó 喬瑟普．里埃拉．伊．阿拉貢",
        "Christiane Grimm 克里斯蒂安．格琳",
        "Heiner Geisbe 海納．蓋斯貝",
        "Eberhard Ross 艾伯哈德．羅斯",
        "Dirk Salz 迪爾克．薩爾茲",
        "Marck 馬克",
        "Sven Drühl 斯芬．杜爾",
        "Thierry Feuz 西瑞．菲茲",
        "François Bonnel 弗朗索瓦．邦內爾",
        "Angela Glajcar 安格拉．格萊扎",
        "Wolfgang Flad 沃夫岡．福拉德",
        "Janna Watson 珍娜．華生",
        "Chingltu 青格樂圖",
        "Dai Yinglun 代英倫",
        "Bay Tang Jiaxin 湯嘉欣",
        "Zhang Meng 張蒙"
      ],
      reason: "想認識這間以歐美當代藝術家為主要特色的畫廊。",
      links: [
        { label: "官方網站", url: "https://blueriderart.com/tw/" },
        { label: "Instagram", url: "https://www.instagram.com/blueriderarttpsh/" }
      ]
    },
    {
      id: "artkake",
      group: "must-visit",
      name: "artkake",
      internationalName: "",
      location: "日本／名古屋",
      booth: "B27",
      image: "images/artkake-01.jpg",
      imageAlt: "artkake 作品圖像：深藍夜空與海面之間，一座由多彩樹木組成的小島。",
      imageCaption: "",
      description: "來自日本名古屋的畫廊，本屆聚焦佐藤花菜的創作。",
      artistLabel: "藝術家",
      artists: ["佐藤花菜"],
      reason: "對佐藤花菜具有特色的作品風格相當感興趣。",
      links: [
        { label: "官方網站", url: "https://www.artkake.co.jp/art-taipei-2026" }
      ]
    },
    {
      id: "empathy",
      group: "interested",
      name: "共感画廊",
      internationalName: "Empathy Gallery",
      location: "日本／東京",
      booth: "A02",
      image: "images/empathy-01.png",
      imageAlt: "共感画廊展覽圖像：植物、花瓶與黃燈構成的室內畫作，附畫廊名稱與 A02 展位資訊。",
      imageCaption: "",
      description: "來自日本東京的畫廊。",
      artistLabel: "藝術家",
      artists: [],
      reason: "想藉由這次博覽會認識更多日本畫廊。",
      links: [
        { label: "官方網站", url: "https://www.empathygallery.jp/" }
      ]
    },
    {
      id: "ether",
      group: "interested",
      name: "GALLERY ETHER",
      internationalName: "",
      location: "日本／東京",
      booth: "B14",
      image: "images/ether-01.jpg",
      imageAlt: "GALLERY ETHER 展覽圖像：橙黃、藍與粉紅色交織的抽象畫作，附 ART TAIPEI 與 B14 展位資訊。",
      imageCaption: "",
      description: "來自日本東京的當代藝術畫廊，呈現多位藝術家的創作。",
      artistLabel: "藝術家",
      artists: ["ネルソン・ホー", "サンドロ・バッキ", "青木正太"],
      reason: "展出作品的視覺風格給人相當強烈的第一印象。",
      links: [
        { label: "官方網站", url: "https://www.galleryether.com/ja/exhibitions/art-taipei" }
      ]
    }
  ]
};
