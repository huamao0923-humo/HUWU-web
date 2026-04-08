export type StaticPortfolioItem = {
  id: string
  slug: string
  title: string
  client: string
  category: 'website' | 'system' | 'api'
  shortDescription: string
  fullDescription: string
  techTags: { tag: string }[]
  results: { metric: string; value: string; description?: string }[]
  websiteUrl?: string
  featured: boolean
  publishedAt: string
  // 未來擴充欄位
  demoAvailable?: boolean
  demoUrl?: string
  uiManualUrl?: string
  coverImage?: { url: string; alt?: string }
  images?: { image: { url: string; alt?: string } }[]
}

export const STATIC_PORTFOLIO: StaticPortfolioItem[] = [
  {
    id: 'static-mahjong-reservation',
    slug: 'mahjong-reservation',
    title: '麻將館線上預約管理系統',
    client: '禧o麻將休閒館',
    category: 'system',
    shortDescription: '整合 LINE 登入、線上選桌預約與管理後台的全方位麻將館管理平台，有效消除電話訂位混亂，提升座位利用率與回客率。',
    fullDescription: `客戶原本的作法是用一本紙本訂位簿加上前台用 LINE 群組廣播桌況，假日下午四點前後那段時間最難處理——電話同時打進來、LINE 訊息也在跳，前台要一邊接電話一邊在群組回覆，偶爾還是會訂到同一張桌。這個專案最核心的需求其實不是「做一套系統」，而是讓前台能騰出手來。

系統採用手機優先設計，會員以 LINE 帳號一鍵登入後，即可選擇早午晚場次、在互動式桌況圖中挑選空桌並完成預約。管理後台提供即時儀表板（今日預約數、待確認、今日收入）、預約管理列表（含入場確認功能）以及會員管理，讓前台工作人員不需要開電腦，手機就能掌握全場狀況。

桌位衝突問題透過資料庫層級的原子操作解決，不再依賴口頭確認。會員管理頁面記錄每位客人的歷史預約與未到場次數，方便前台識別常客與管理黑名單。上線約三個月後，前台反映電話訂位比例掉了近六成，尖峰時段幾乎都是顧客自己線上完成。`,
    techTags: [
      { tag: 'Next.js 16' },
      { tag: 'Prisma ORM' },
      { tag: 'PostgreSQL' },
      { tag: 'NextAuth v5' },
      { tag: 'Railway' },
    ],
    results: [
      { metric: '電話訂位比例', value: '↓ 58%', description: '顧客自助完成線上預約' },
      { metric: '重複訂位事故', value: '0 件/月', description: '資料庫原子操作鎖定桌號' },
      { metric: '前台作業時間', value: '↓ 70%', description: '入場確認一鍵完成' },
    ],
    featured: true,
    publishedAt: '2025-03-01',
    demoAvailable: true,
    demoUrl: 'https://majung-system-production.up.railway.app/t/default/login',
    images: [
      { image: { url: '/screenshots/mahjong/mahjong-03-reserve.jpg', alt: '線上選桌預約流程' } },
    ],
  },
  {
    id: 'static-court-rental',
    slug: 'court-rental',
    title: '球場租借管理平台',
    client: '全o運動館',
    category: 'system',
    shortDescription: '支援多場地時段訂位、線上刷卡付款與場地維護排程，大幅降低行政人員的作業負擔。',
    fullDescription: `客戶有五種場地、每天 08:00 到 22:00 共十四個時段，換算下來一天理論上有七十個訂位格，但他們只有兩個行政人員，假日根本接不完電話。更麻煩的是收款——ATM 轉帳沒有對帳機制，常常有人說轉了但查不到，最後還是得電話確認，白費工。

最初報價時金流串接沒有包在裡面，客戶覺得太貴想省掉。做到一半他們自己反悔了，說沒有線上收款根本解決不了對帳問題，所以中途追加了綠界信用卡與 ATM 虛擬帳號。加入這塊之後整個流程才算真正閉環——訂位成功、付款完成、確認信寄出，行政不需要再介入。

場地維護排程是後來使用後才新增的小功能，某次 C 籃球場地板整修，沒有在系統上標注，結果被訂走了還要打電話一一取消。這件事之後他們才說需要這個，我們兩天內就加上去了。`,
    techTags: [{ tag: 'React' }, { tag: 'Node.js' }, { tag: 'MySQL' }, { tag: '綠界金流' }],
    results: [
      { metric: '收款對帳', value: '全自動', description: '虛擬帳號逐筆對應' },
      { metric: '行政人力', value: '↓ 63%', description: '電話與手動確認全免' },
      { metric: '場地使用率', value: '↑ 41%', description: '閒置時段可視化後增加促銷' },
    ],
    featured: true,
    publishedAt: '2024-07-20',
    demoAvailable: false,
  },
  {
    id: 'static-hr-management',
    slug: 'hr-management',
    title: '人資管理系統',
    client: '聯o實業有限公司',
    category: 'system',
    shortDescription: '涵蓋出勤考核、薪資自動計算與績效管理的集團級人資平台，支援跨公司組織架構。',
    fullDescription: `這個案子的起點是客戶的人資主管說她每個月 25 號開始就不敢請假，因為要花兩天把三家子公司的 Excel 薪資表合併、核對、修錯、再傳給財務。每次都有幾筆加班費或全勤獎金算錯，被員工問到就要重算，月結截止前是最痛苦的一週。

三家子公司的薪資規則不太一樣——A 公司有全勤獎金、B 公司是責任制不算加班、C 公司部分人員有業績抽成。這些邏輯全部要在系統裡設定成可以獨立設定的規則，不能硬編碼，因為規則每年都會改。串接門禁系統的部分比預期花更多時間，對方的系統沒有 API，最後是用定時撈取 CSV 匯出的方式處理，雖然不漂亮但穩定跑了一年沒出問題。

現在月結日人資主管說大約一個小時以內可以跑完確認，她終於可以在 25 號請假了。`,
    techTags: [{ tag: 'Vue.js' }, { tag: 'Laravel' }, { tag: 'PostgreSQL' }, { tag: 'Docker' }],
    results: [
      { metric: '月結作業時間', value: '2天 → 1小時', description: '薪資引擎自動計算三家規則' },
      { metric: '計算錯誤件數', value: '↓ 94%', description: '規則化後不需人工核對' },
      { metric: '考勤異常回應', value: '當日通知', description: 'LINE Bot 推播主管確認' },
    ],
    featured: true,
    publishedAt: '2024-05-10',
    demoAvailable: false,
  },
  {
    id: 'static-warehouse-management',
    slug: 'warehouse-management',
    title: '倉儲管理系統',
    client: '全o倉儲物流行',
    category: 'system',
    shortDescription: '完整的入出庫管理、庫位追蹤與盤點報表系統，支援條碼掃描與手機端操作。',
    fullDescription: `客戶的倉庫大概兩千坪，存了三家電商品牌的商品。以前的作法是入庫時紙本登記貨位，出庫前揀貨員拿著 Excel 印出來的揀貨單走，找不到就打電話問主管，主管再去查「記憶裡的」貨位。一個月大約會有五到八筆客訴說出錯貨或短缺，基本上都跟這個流程有關。

我們刻意不採購專用的手持掃碼機——那個東西採購週期長、壞了要找原廠、員工還要額外學習。整套系統做成 PWA，員工用自己的 Android 手機開瀏覽器就能跑，Android 原生支援相機條碼掃描，效果夠用。庫位地圖這塊是設計上花最多時間的部分，要讓揀貨路徑盡量不走回頭路，和倉庫主任確認了好幾次貨架配置才定稿。

季度盤點原本要三天，現在一天半以內完成。更重要的是出錯率，前三個月的數據是零客訴，這才是他們最在乎的事。`,
    techTags: [{ tag: 'React' }, { tag: 'FastAPI' }, { tag: 'PostgreSQL' }, { tag: 'PWA 條碼掃描' }],
    results: [
      { metric: '出貨錯誤客訴', value: '↓ 97%', description: '掃碼核對取代人工記憶' },
      { metric: '盤點天數', value: '3天 → 1.5天', description: '分區掃碼加上差異自動標記' },
      { metric: '設備導入成本', value: '$0', description: '員工個人手機直接使用' },
    ],
    featured: false,
    publishedAt: '2024-03-05',
    demoAvailable: false,
  },
  {
    id: 'static-bi-dashboard',
    slug: 'bi-dashboard',
    title: 'BI 商業智慧報表平台',
    client: '鴻o貿易行',
    category: 'system',
    shortDescription: '串接 ERP 資料，提供即時銷售儀表板與 KPI 追蹤，讓管理層一眼掌握全局。',
    fullDescription: `客戶用的 ERP 是十幾年前的舊系統，沒有對外 API，資料庫是 MSSQL 2008，我們最後是透過唯讀帳號直接接資料庫，寫 Python 排程每五分鐘同步一次到分析用的 PostgreSQL。做這件事之前花了快兩週在清洗資料——同一個客戶在 ERP 裡有四五個不同的名稱寫法，產品代碼有些有前綴有些沒有，這些問題不處理的話儀表板的數字會對不起來。

原本客戶說要「做一個 Dashboard」，但真正坐下來問清楚需求後，發現每個主管想看的維度都不一樣——業務主管要看各業務員的業績達成率，財務主管要看應收帳款的帳齡，老闆要看整體毛利率走勢。我們把這些做成不同的看板頁面，用角色權限控制誰能看哪些數字。

上線第二個月，老闆在對帳時發現其中一條產品線的毛利率明顯低於同期——這在以前翻 Excel 是不可能注意到的，後來追查是倉儲成本分攤的設定有問題，估計少算了幾個月的成本。`,
    techTags: [{ tag: 'React' }, { tag: 'Python' }, { tag: 'PostgreSQL' }, { tag: 'MSSQL 串接' }],
    results: [
      { metric: '資料同步延遲', value: '< 6 分鐘', description: '排程輪詢舊版 MSSQL' },
      { metric: '月報製作時間', value: '↓ 88%', description: '財務部從 2 天縮至 2 小時' },
      { metric: '成本異常偵測', value: '即時可見', description: '上線 2 個月發現漏算成本' },
    ],
    featured: false,
    publishedAt: '2024-01-18',
    demoAvailable: false,
  },
  {
    id: 'static-business-accounting',
    slug: 'business-accounting',
    title: '業務分配記帳系統',
    client: '泓o顧問工作室',
    category: 'system',
    shortDescription: '多層級業績分配、佣金自動計算與帳務對帳系統，支援複雜的業務獎金結構。',
    fullDescription: `這個案子比較特殊——客戶一開始沒有告訴我們完整的分潤邏輯，說「跟你們解釋很難說清楚，你們先做一個基本版，之後再調整」。結果基本版做完之後我們才知道，他們的分潤有四層：個人業績、直屬主管抽成、區域主管再抽、公司保留，而且不同等級的業務比率不一樣，季度達標還有額外的超標獎金。這些規則全部要做成可設定的，不能寫死。

最麻煩的不是計算邏輯，是稽核軌跡。客戶說以前有幾次財務算完之後業務不認帳，說「你算錯了我的業績」，但因為是 Excel，算完就覆蓋掉了，沒辦法重現過程。所以這次每一筆計算快照、每次規則修改、每次人工調整都要記錄是誰在什麼時間做的，還要能還原當時的計算過程。

UAT 階段發現了一個邊界條件的計算 bug——當業務剛好達標 100% 時，超標獎金的邏輯判斷有個 off-by-one，會算成沒有超標。那個版本沒有上線，修掉才過。`,
    techTags: [{ tag: 'Next.js' }, { tag: 'Prisma' }, { tag: 'PostgreSQL' }, { tag: 'Excel 匯出' }],
    results: [
      { metric: '月結天數', value: '3天 → 半天', description: '規則引擎自動跑完四層分潤' },
      { metric: '帳務爭議件數', value: '↓ 83%', description: '計算過程可還原追溯' },
      { metric: '業務查詢頻率', value: '每人每週 3 次+', description: '即時查到預期獎金才安心' },
    ],
    featured: false,
    publishedAt: '2023-11-22',
    demoAvailable: false,
  },
  {
    id: 'static-mes-reporting',
    slug: 'mes-reporting',
    title: 'MES 現場報工系統',
    client: '桓o精密加工廠',
    category: 'system',
    shortDescription: '工單追蹤、即時產能監控與異常通報整合平台，協助工廠實現智慧製造轉型。',
    fullDescription: `工廠現場的環境比辦公室複雜多了——噪音大、操作員戴手套、燈光不均勻，畫面要看得到、按鈕要按得準，這些在開發環境完全感受不到，要到現場跑幾次才知道。我們第一次去現場 demo 時，操作員說手套沒辦法觸控，畫面上的按鈕也太小，後來我們把所有互動元素改成至少 48px 高、加了靜電手套的觸控測試，才勉強過關。

設備那端，客戶的 CNC 機台有兩種不同品牌，一種支援 MQTT、另一種只能輸出 RS-232 串列訊號。RS-232 那台我們加了一個工業用網關轉成 MQTT，這樣兩條線路就能統一進同一個 broker 處理。InfluxDB 用來存時序數據，主要是機台的轉速、溫度、良率，每秒一筆，一天下來資料量不小，但查詢起來快。

異常通報這塊，客戶原本說直接推 LINE 就好，但測試下來發現如果機台停機推播太頻繁，工程師會直接關靜音。後來改成第一次推、五分鐘未確認再推、再十分鐘未確認才升級通知主管，這樣工程師才不會無視。`,
    techTags: [{ tag: 'React' }, { tag: 'Node.js' }, { tag: 'MQTT' }, { tag: 'InfluxDB' }],
    results: [
      { metric: '工單進度可視化', value: '即時', description: '從手寫報工改為掃碼上報' },
      { metric: '異常平均響應時間', value: '↓ 67%', description: '升級推播取代口頭通報' },
      { metric: '停機未通報事件', value: '↓ 91%', description: '三個月統計' },
    ],
    featured: false,
    publishedAt: '2023-09-08',
    demoAvailable: false,
  },
  {
    id: 'static-restaurant-chain-website',
    slug: 'restaurant-chain-website',
    title: '連鎖餐飲品牌官網',
    client: '鮮o軒台式料理',
    category: 'website',
    shortDescription: '質感呈現品牌形象的連鎖餐飲官網，整合門市查詢、線上訂位與最新活動公告。',
    fullDescription: `客戶的舊網站是五年前找學生做的，手機版幾乎無法使用，圖片也很小張，他們的料理其實視覺很好看，但在網路上完全呈現不出來。更實際的問題是他們沒有辦法自己更新內容——改個菜單要找工程師，一等就是好幾天。

設計稿改了兩輪。第一版我們做了偏現代極簡的風格，客戶說「太冷了，我們的東西是暖的」，然後拿出一疊食物攝影和餐廳照片讓我們參考。第二版加了更多暖色系、手感材質的背景紋理，他們看了才說 OK。門市地圖那塊整合了 Google Maps Embed API，支援點擊直接開啟導航，這個功能是我們自己提議加的，因為外縣市的顧客找店最常需要的就是這個。

後台用 Payload CMS，行銷人員自己試用了半天就上手了，菜單更新、活動公告、門市資訊全部自己來，不用再找我們。`,
    techTags: [{ tag: 'Next.js' }, { tag: 'Payload CMS' }, { tag: 'Tailwind CSS' }],
    results: [
      { metric: '自然搜尋流量', value: '↑ 124%', description: '三個月 SEO 累積' },
      { metric: '官方線上訂位', value: '月均 800+', description: '串接既有訂位系統 API' },
      { metric: '跳出率', value: '72% → 34%', description: '行動版體驗重做後' },
    ],
    featured: true,
    publishedAt: '2024-08-30',
    demoAvailable: false,
  },
  {
    id: 'static-law-firm-website',
    slug: 'law-firm-website',
    title: '法律事務所官方網站',
    client: '正o法律事務所',
    category: 'website',
    shortDescription: '專業沉穩的法律事務所形象網站，完整呈現服務項目、律師團隊與成功案例。',
    fullDescription: `法律事務所的官網有一個很難拿捏的地方：太活潑顯得不專業，太硬又沒有人想看。客戶說他們的競爭對手大多是黑底金字的傳統風格，他們想要「有質感但不死板」，這句話我們來回討論了大概半小時才對齊到同一個畫面。

內容結構是這個案子最花時間的部分。律師們大多不擅長寫自我介紹，給我們的初稿都是履歷格式。我們重新訪談了三位律師，把他們各自的案件故事用第三人稱整理成段落，加入他們的思考角度，這樣閱讀起來才有說服力。SEO 這塊我們先做了關鍵字調查，「台北商事律師」的搜尋量不高但意圖很強，鎖定這類長尾詞比搶「律師」這個大詞實際多了。

聯絡表單整合了 Resend，填完直接寄到事務所和對應律師的信箱，詢問不漏接。上線半年後他們說諮詢量大概增加了九成，主要來源是 Google 自然搜尋，沒有另外買廣告。`,
    techTags: [{ tag: 'Next.js' }, { tag: 'Sanity CMS' }, { tag: 'Tailwind CSS' }, { tag: 'Resend' }],
    results: [
      { metric: '諮詢量', value: '↑ 91%', description: '六個月後統計，無投放廣告' },
      { metric: '核心關鍵字排名', value: 'Top 3', description: '商事律師相關長尾詞' },
      { metric: '平均停留時間', value: '3分42秒', description: '律師個人頁面最高' },
    ],
    featured: true,
    publishedAt: '2024-06-12',
    demoAvailable: false,
  },
  {
    id: 'static-medical-clinic-website',
    slug: 'medical-clinic-website',
    title: '醫療診所形象網站',
    client: '康o家醫診所',
    category: 'website',
    shortDescription: '溫暖專業的醫療診所形象網站，提供診別介紹、醫師團隊與線上掛號整合入口。',
    fullDescription: `這個案子特別要求行動版要先做好，因為他們的患者年齡偏大，大多用手機搜尋診所、查看診次，如果手機版體驗差，很可能直接放棄。設計師做第一稿的時候是桌機先做，我們要求反過來——從 375px 的手機版開始，確認字體夠大、按鈕夠好按，再往上延伸到桌機版。

掛號入口這塊比預期複雜。客戶的 HIS 系統有提供 API，但文件很舊、欄位定義不清楚，測試了大概一週才搞清楚哪些欄位是必填、時段的格式怎麼解析。最後做的是單向整合：官網只負責顯示可預約時段和引導患者填單，實際建檔還是在 HIS 完成，這樣萬一 HIS 那端有問題，我們的官網不會跟著當機。

有一件事值得一提：皮膚科的掛號頁面本來放了幾張前後對比的患者照片，上線後被患者反映不舒服、感覺暗示自己的狀況很嚴重。我們把那些照片換成了診所環境照，問題就消失了。`,
    techTags: [{ tag: 'Next.js' }, { tag: 'Payload CMS' }, { tag: 'Tailwind CSS' }, { tag: 'HIS API 串接' }],
    results: [
      { metric: '線上掛號轉換率', value: '↑ 57%', description: '行動版流程簡化後' },
      { metric: '「找不到資訊」客訴', value: '↓ 73%', description: '診別與出診時段重新整理' },
      { metric: '新患者佔比', value: '↑ 28%', description: '搜尋導流三個月數據' },
    ],
    featured: true,
    publishedAt: '2024-04-25',
    demoAvailable: false,
  },
  {
    id: 'static-pm-pilot',
    slug: 'pm-pilot',
    title: '專案管理系統',
    client: 'Humo 自建 SaaS 產品',
    category: 'system',
    shortDescription: '專為 3–10 人小型團隊設計的智能專案協作中樞，整合會議記錄、檔案版控、看板任務與 AI 語意問答，讓溝通到執行不再斷層。',
    fullDescription: `這個系統的起點是一個很常見的問題——我們自己團隊在跑多個專案的時候，決議總是散在 LINE 群組、會議記錄丟在各人的 Word，任務在誰身上、進度到哪了，每次追問都要多開幾個視窗才能拼出完整答案。我們試過 Notion、Trello、Asana，每一個單獨用都不錯，但組合起來反而多了一堆要手動同步的縫隙。

決定自己做的那天，我們設了一個前提：所有東西要在同一個地方關聯起來——會議裡的決議要能直接變成任務，任務要能掛上里程碑，里程碑要能知道進度，檔案的每一次更版要有 commit message 可以追。這條鏈不能斷。

智慧會議室是整個系統的起點。以前的痛點不是沒有記錄，是記錄完之後那份 Word 就死了，決議跟行動完全脫節。現在在會議記錄裡直接建立 Action Item，系統會自動轉成任務並指派負責人，任務卡片上也標記了來源會議，任何人點進去都能回溯當天的討論脈絡。

檔案版控這塊我們參考了 Git 的概念。上傳同名檔案時系統不覆蓋，而是把舊版封存成 v1、新版標為 v2（Current），並強制填寫更新摘要。這個強制很關鍵——有了 commit message 之後，AI 才能讀這些脈絡自動生成週報。Audit Log 記錄每一筆操作，主管可以在行事曆熱點圖上一眼看出哪幾天團隊最活躍、哪個時段有異常沉寂。

AI 的部分我們刻意放到最後才做，因為 AI 需要養分。先把會議、檔案、任務的資料都跑起來之後，再用 pgvector 做語意搜尋，讓成員可以問「上次討論 API 串接是哪次會議？」、「這個月設計稿改了幾個版本？」——系統直接定位，不用翻歷史紀錄。`,
    techTags: [
      { tag: 'Next.js 14' },
      { tag: 'TypeScript' },
      { tag: 'Supabase' },
      { tag: 'Tailwind CSS' },
      { tag: 'Shadcn UI' },
      { tag: 'OpenAI API' },
      { tag: 'pgvector' },
    ],
    results: [
      { metric: '決議執行追蹤率', value: '↑ 90%', description: '會議 Action Items 自動轉任務，不再遺漏' },
      { metric: '跨工具切換次數', value: '↓ 75%', description: '會議、檔案、任務全在同一平台' },
      { metric: '週報產出時間', value: '2小時 → 10分鐘', description: 'AI 自動彙整，人工微調即完成' },
    ],
    featured: true,
    publishedAt: '2025-03-20',
    demoAvailable: true,
    demoUrl: 'https://pm-pilot.up.railway.app',
    coverImage: { url: '/screenshots/pm-pilot/dashboard.jpg', alt: 'PM Pilot 專案管理系統 - 戰情總覽' },
    images: [
      { image: { url: '/screenshots/pm-pilot/dashboard.jpg', alt: '戰情總覽 Dashboard' } },
      { image: { url: '/screenshots/pm-pilot/meetings.jpg', alt: '智慧會議室' } },
      { image: { url: '/screenshots/pm-pilot/meeting-records.jpg', alt: 'Action Items 轉任務' } },
      { image: { url: '/screenshots/pm-pilot/files.jpg', alt: '檔案版控稽核' } },
      { image: { url: '/screenshots/pm-pilot/tasks.jpg', alt: '看板任務管理' } },
      { image: { url: '/screenshots/pm-pilot/reports.jpg', alt: '報表與 AI 分析' } },
    ],
  },
  {
    id: 'static-tech-startup-website',
    slug: 'tech-startup-website',
    title: '科技新創企業官網',
    client: '雲o科技',
    category: 'website',
    shortDescription: '充滿科技感的新創企業官網，清楚傳達產品價值主張，支援中英雙語切換。',
    fullDescription: `客戶說他們去拜訪投資人的時候，對方打開官網，停頓了一下說「先跳過這個」。那個瞬間讓他們決定要重做。目標很清楚：官網要在前十秒讓人看懂他們在做什麼，以及為什麼值得投資。

中英雙語是從一開始就要設計進去的，不是做完再翻譯，因為兩個語言的排版邏輯不一樣——中文習慣看密一點的資訊、英文讀者更喜歡留白和短句。i18n 的設定用的是 next-intl，每個語言有獨立的 metadata 和 OG 圖片，Google 才能正確索引兩個版本。

動畫是這個案子最容易變成負擔的地方。第一版做了很多視差滾動效果，在開發用的 MacBook 上很順，但在中階 Android 手機上跑起來很卡，Core Web Vitals 直接噴紅。後來把大部分動畫改成 CSS transition 而不是 JS 驅動，只留幾個關鍵位置用 Framer Motion，效能才過。上線之後他們說接到的投資人 cold email 回覆率明顯提高了，雖然沒有辦法直接歸因，但他們自己感覺得到差異。`,
    techTags: [{ tag: 'Next.js' }, { tag: 'Framer Motion' }, { tag: 'Tailwind CSS' }, { tag: 'next-intl' }],
    results: [
      { metric: 'Core Web Vitals', value: '全綠', description: '動畫改 CSS-driven 後通過' },
      { metric: '國際流量佔比', value: '38%', description: '英文版上線兩個月後' },
      { metric: '投資人主動詢問', value: '↑ 2.4倍', description: '對比舊版三個月數據' },
    ],
    featured: false,
    publishedAt: '2024-02-14',
    demoAvailable: false,
  },
]

export function getStaticPortfolioBySlug(slug: string): StaticPortfolioItem | undefined {
  return STATIC_PORTFOLIO.find((item) => item.slug === slug)
}

export function getStaticFeaturedPortfolio(limit = 3): StaticPortfolioItem[] {
  return STATIC_PORTFOLIO.filter((item) => item.featured).slice(0, limit)
}
