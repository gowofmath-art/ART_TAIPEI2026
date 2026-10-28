/*
 * 網站內容集中於此，儲存後重新開啟或重新整理 index.html 即可更新。
 * 圖片：將檔案放進 images/，再將 image 改成相對路徑，例如：
 * image: "images/whitestone.jpg"
 * imageAlt：描述實際圖片內容；imageCaption：可選的作品名稱／圖像來源。
 * image 留空或圖片讀取失敗時，網站會顯示佔位區域。
 * group 決定分區；陣列順序決定顯示順序。
 * artworks：保留的作品資料，不另設版面區塊。
 * artistSource：官方圖錄「參展藝術家」來源，不含「代理藝術家」。
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
      imageCaption: "雙眼形象與 ART TAIPEI 展覽視覺",
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
      imageCaption: "灰底上的細密白色線條",
      description: "以國際當代藝術為特色，介紹多位歐美及亞洲藝術家的作品。",
      artistLabel: "藝術家",
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
      imageCaption: "夜色中的樹木小島",
      description: "來自日本名古屋的畫廊，本屆聚焦佐藤花菜的創作。",
      artistLabel: "藝術家",
      artists: ["佐藤花菜"],
      reason: "對佐藤花菜具有特色的作品風格相當感興趣。",
      links: [
        { label: "官方網站", url: "https://www.artkake.co.jp/art-taipei-2026" }
      ]
    },
    {
      id: "asia-art-center",
      group: "must-visit",
      name: "亞洲藝術中心",
      internationalName: "Asia Art Center",
      location: "",
      booth: "D01",
      image: "images/asia-art-center-01.png",
      imageAlt: "亞洲藝術中心作品圖像：金褐色底面上，斜向光線穿過黑色枝葉與大片綠色葉片。",
      imageCaption: "植物、葉影與斜向光線",
      description: "關注亞洲現代與當代藝術，呈現華人與國際藝術家的創作。",
      artistLabel: "藝術家",
      artistNote: "依官方圖錄 P.34「參展藝術家」列名；現場展出以畫廊公告為準。",
      artistSource: { page: 34, url: "https://www.webebook.com.tw/art-taipei.com/ArtTaipei2026/#p=34" },
      artists: [
        "卜茲", "董小蕙", "李重重", "李真", "朱銘", "簡喬倩（Tobe Kan）",
        "Charlotte Keates", "沈勤", "David Brian Smith", "Bernar Venet", "楊英風", "葉子奇"
      ],
      artworks: ["《222.5° Arc x 5》", "《Vertical Disorder: 11 Arcs》"],
      reason: "期待欣賞 Bernar Venet 的幾何結構與大型雕塑如何在實體空間中呈現張力，同時探索畫廊其他藝術家的作品。",
      links: [
        { label: "官方展覽", url: "https://asiaartcenter.org/art-fairs/54/overview/" },
        { label: "官方圖錄", url: "https://www.webebook.com.tw/art-taipei.com/ArtTaipei2026/#p=34" },
        { label: "Instagram", url: "https://www.instagram.com/asiaartcenter/" }
      ]
    },
    {
      id: "perrotin",
      group: "must-visit",
      name: "貝浩登",
      internationalName: "Perrotin",
      location: "",
      booth: "B04",
      image: "images/perrotin-01.png",
      imageAlt: "貝浩登作品圖像：白色背景前，一件以紅色花朵與多彩笑臉組成的圓形作品。",
      imageCaption: "紅色花朵與多彩笑臉的圓形作品",
      description: "於巴黎起步、在多個城市設有空間的當代藝術畫廊。",
      artistLabel: "藝術家",
      artistNote: "依官方圖錄 P.176「參展藝術家」列名；現場展出以畫廊公告為準。",
      artistSource: { page: 176, url: "https://www.webebook.com.tw/art-taipei.com/ArtTaipei2026/#p=176" },
      artists: [
        "Hans Hartung", "Wang Yancheng", "Takashi Murakami", "Vivian Greven", "Lee Bae",
        "Jason Boyd Kinsella", "Jean-Michel Othoniel", "Susumu Kamijo", "Mehdi Ghadyanloo",
        "Danielle Orchard", "Chen Fei", "Christiane Pooley", "Hernan Bas", "Marty Schnapf",
        "Kelly Beeman", "Oli Epp", "Maria Taniguchi", "Qi Xie"
      ],
      artworks: ["《Untitled》（2026）"],
      reason: "對 Mehdi Ghadyanloo 超現實的空間構圖、光影與孤獨氛圍十分感興趣，期待實際欣賞作品的細節與視覺表現。",
      links: [
        { label: "官方展覽", url: "https://2026.art-taipei.com/taipei/en/perrotin/" },
        { label: "官方圖錄", url: "https://www.webebook.com.tw/art-taipei.com/ArtTaipei2026/#p=176" },
        { label: "Instagram", url: "https://www.instagram.com/perrotin/" }
      ]
    },
    {
      id: "kaikai-kiki",
      group: "must-visit",
      name: "Kaikai Kiki Gallery",
      internationalName: "",
      location: "",
      booth: "D09",
      image: "images/kaikai-kiki-01.png",
      imageAlt: "Kaikai Kiki Gallery 作品圖像：山丘與藍綠色天空前，一隻大型藍色角色身旁有沙漏與小型生物。",
      imageCaption: "藍色角色與沙漏",
      description: "位於日本東京元麻布，透過展覽介紹日本與國際藝術家的畫廊。",
      artistLabel: "藝術家",
      artistNote: "依官方圖錄 P.116「參展藝術家」列名；現場展出以畫廊公告為準。",
      artistSource: { page: 116, url: "https://www.webebook.com.tw/art-taipei.com/ArtTaipei2026/#p=116" },
      artists: ["Shoko Nakazawa", "Otani Workshop", "Hideki Maekawa", "Saori Nagata", "Haruka Kawakami", "Alison Friend"],
      artworks: ["《The Obedient People》（2025）"],
      reason: "關注 Shoko Nakazawa 如何結合日本角色文化、怪物造型與當代藝術，期待探索角色創作如何形成獨特的藝術語言。",
      links: [
        { label: "官方展覽", url: "https://2026.art-taipei.com/taipei/en/kaikai-kiki-gallery/" },
        { label: "官方圖錄", url: "https://www.webebook.com.tw/art-taipei.com/ArtTaipei2026/#p=116" }
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
      imageCaption: "植物與室內景象的展覽視覺",
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
      imageCaption: "多彩抽象畫作與展位資訊",
      description: "來自日本東京的當代藝術畫廊，呈現多位藝術家的創作。",
      artistLabel: "藝術家",
      artists: ["ネルソン・ホー", "サンドロ・バッキ", "青木正太"],
      reason: "展出作品的視覺風格給人相當強烈的第一印象。",
      links: [
        { label: "官方網站", url: "https://www.galleryether.com/ja/exhibitions/art-taipei" }
      ]
    },
    {
      id: "gana-art",
      group: "interested",
      name: "Gana Art",
      internationalName: "",
      location: "",
      booth: "D07",
      image: "images/gana-art-01.png",
      imageAlt: "Gana Art 作品圖像：粉紅、紅與白色的粗筆觸交織成有機形態，底部帶有橙黃及深色線條。",
      imageCaption: "粉紅色筆觸與有機形態",
      description: "來自韓國首爾的畫廊，介紹韓國與國際藝術家的多元創作。",
      artistLabel: "藝術家",
      artistNote: "依官方圖錄 P.88「參展藝術家」列名；現場展出以畫廊公告為準。",
      artistSource: { page: 88, url: "https://www.webebook.com.tw/art-taipei.com/ArtTaipei2026/#p=88" },
      artists: ["Oh Sufan", "Liu Fengzhi", "Rikako Kawauchi"],
      artworks: ["《Up to a point》（2025）"],
      reason: "對 Rikako Kawauchi 表現生命、身體與有機形態的方式感到好奇，希望透過原作理解藝術家的筆觸、色彩與創作語言。",
      links: [
        { label: "官方展覽", url: "https://2026.art-taipei.com/taipei/en/gana-art/" },
        { label: "官方圖錄", url: "https://www.webebook.com.tw/art-taipei.com/ArtTaipei2026/#p=88" },
        { label: "Instagram", url: "https://www.instagram.com/ganaart__official/" }
      ]
    },
    {
      id: "yiri-arts",
      group: "interested",
      name: "伊日藝術計劃",
      internationalName: "YIRI ARTS",
      location: "",
      booth: "D04",
      image: "images/yiri-arts-01.png",
      imageAlt: "伊日藝術計劃作品圖像：明亮窗前，多個彩色樹木與長角角色造型，排列在書本及幾何底座上。",
      imageCaption: "窗前的多彩立體裝置",
      description: "以台北及雅加達為據點，呈現當代藝術創作的畫廊。",
      artistLabel: "藝術家",
      artistNote: "依官方圖錄 P.258–259「參展藝術家」列名；現場展出以畫廊公告為準。",
      artistSource: { page: 258, pages: [258, 259], url: "https://www.webebook.com.tw/art-taipei.com/ArtTaipei2026/#p=258" },
      artists: [
        "陳松志", "陳雲", "邱懷萱", "江孟禧", "耿傑生", "林世雍", "時永駿", "蔡咅璟", "王冠蓁",
        "Xavier Wei", "Eko Bintang", "Grip Face", "Toni Hamel", "Yuichi Hirako",
        "Naufal Abshar", "Hongchuan Ong", "Kyoko Shindo", "Guim Tió"
      ],
      artworks: ["《影。執手相伴於沙海尋記憶沃州》（2025）"],
      reason: "關注陳雲如何透過多幅畫面、記憶與敘事的重組，形成不同於傳統單幅繪畫的表現。",
      links: [
        { label: "官方展覽", url: "https://2026.art-taipei.com/taipei/tw/yiri-arts/" },
        { label: "官方圖錄", url: "https://www.webebook.com.tw/art-taipei.com/ArtTaipei2026/#p=258" },
        { label: "Instagram", url: "https://www.instagram.com/yiri.arts/" }
      ]
    },
    {
      id: "aki-gallery",
      group: "interested",
      name: "也趣藝廊",
      internationalName: "AKI Gallery",
      location: "",
      booth: "C13",
      image: "images/aki-gallery-01.png",
      imageAlt: "也趣藝廊作品圖像：深藍月夜與粉紅雪景中，上下排列兩個白色動物形象，周圍有樹木與枝條。",
      imageCaption: "月夜雪景中的動物形象",
      description: "位於台北的當代藝術畫廊，介紹台灣與國際藝術家的創作。",
      artistLabel: "藝術家",
      artistNote: "依官方圖錄 P.22「參展藝術家」列名；現場展出以畫廊公告為準。",
      artistSource: { page: 22, url: "https://www.webebook.com.tw/art-taipei.com/ArtTaipei2026/#p=22" },
      artists: ["范揚宗", "劉昕穎", "吳逸寒", "土屋仁應", "Chris Berens", "Willy Verginer"],
      artworks: ["《PM 5.30》（2026）"],
      reason: "對范揚宗精確的繪畫邊界、鮮明色彩與泳池系列題材感到興趣，期待在現場觀察畫面質感及細部技法。",
      links: [
        { label: "官方展覽", url: "https://2026.art-taipei.com/taipei/tw/aki-gallery/" },
        { label: "官方圖錄", url: "https://www.webebook.com.tw/art-taipei.com/ArtTaipei2026/#p=22" },
        { label: "Instagram", url: "https://www.instagram.com/akigallery/" }
      ]
    }
  ]
};
