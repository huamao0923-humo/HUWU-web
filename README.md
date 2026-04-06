# 華宇資訊科技官網 (HUWUWEB)

> 使用 Next.js 14 + Payload CMS 3.x 建置的企業官方網站

## 技術堆疊

| 技術 | 版本 | 說明 |
|------|------|------|
| Next.js | 14 | App Router + Server Components |
| TypeScript | 5 | 完整型別安全 |
| Tailwind CSS | 3 | 樣式框架 |
| Payload CMS | 3 | 內建於 Next.js 的 CMS 後台 |
| SQLite | - | 開發用資料庫（生產用 PostgreSQL）|
| Resend | 3 | 電子郵件發送（已預留介面）|

---

## 本地開發啟動

### 1. 前置需求
- Node.js >= 18.20.2
- npm / yarn / pnpm

### 2. Clone 並安裝依賴

```bash
cd HUWUWEB
npm install
```

### 3. 設定環境變數

```bash
cp .env.example .env.local
```

編輯 `.env.local`，至少填入：

```env
PAYLOAD_SECRET=your-super-secret-at-least-32-chars
DATABASE_URI=file:./dev.db
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### 4. 啟動開發伺服器

```bash
npm run dev
```

- 前台網站：http://localhost:3000
- Payload 後台：http://localhost:3000/admin

### 5. 建立第一個管理員帳號

首次訪問 http://localhost:3000/admin 時，Payload 會引導您建立第一個管理員帳號。

---

## 專案結構

```
src/
├── app/
│   ├── (frontend)/          # 前台頁面
│   │   ├── page.tsx         # 首頁
│   │   ├── about/           # 關於我們
│   │   ├── services/        # 服務項目
│   │   ├── portfolio/       # 成功案例 + [slug]
│   │   ├── pricing/         # 方案報價
│   │   ├── contact/         # 聯絡我們
│   │   └── blog/            # 部落格 + [slug]
│   ├── (payload)/           # Payload CMS 路由
│   │   ├── admin/           # 後台管理介面
│   │   └── api/             # Payload REST API
│   └── api/
│       └── contact/         # 聯絡表單 API
├── collections/             # Payload CMS Collections
│   ├── Services.ts
│   ├── Portfolio.ts
│   ├── Team.ts
│   ├── BlogPosts.ts
│   ├── Testimonials.ts
│   ├── Inquiries.ts
│   └── Media.ts
├── components/
│   ├── layout/              # Navbar, Footer
│   ├── home/                # 首頁各 Section
│   └── contact/             # 聯絡表單
├── lib/
│   └── payload.ts           # Payload Client 初始化
└── payload.config.ts        # Payload 主設定
```

---

## 後台 CMS 說明

### Collections（資料集合）
| Collection | 說明 |
|------------|------|
| Services | 服務項目管理 |
| Portfolio | 成功案例管理 |
| Team | 團隊成員管理 |
| BlogPosts | 部落格文章管理 |
| Testimonials | 客戶見證管理 |
| Inquiries | 聯絡表單收件（唯讀+狀態）|
| Media | 媒體檔案管理 |
| Users | 後台使用者管理 |

### Globals（全域設定）
| Global | 說明 |
|--------|------|
| site-settings | 公司資訊、SEO、社群連結 |
| pages-home | 首頁文案與數字設定 |

---

## 初始化建議步驟

1. 啟動開發伺服器
2. 進入後台 http://localhost:3000/admin
3. 建立管理員帳號
4. 前往「全站設定」填寫公司資訊
5. 前往「首頁設定」調整首頁文案
6. 新增 3 項服務（勾選「在首頁顯示」）
7. 新增成功案例（勾選「首頁精選」）
8. 新增客戶見證
9. （可選）新增團隊成員
10. （可選）發布第一篇部落格文章

---

## 部署到 Vercel

### 1. 設定環境變數

在 Vercel 專案設定中加入以下環境變數：

```
PAYLOAD_SECRET=（生產用強密鑰）
DATABASE_URI=（PostgreSQL 連線字串）
NEXT_PUBLIC_SERVER_URL=https://your-domain.com
RESEND_API_KEY=（Resend API Key）
RESEND_FROM_EMAIL=noreply@your-domain.com
RESEND_NOTIFY_EMAIL=info@your-domain.com
```

### 2. 資料庫

生產環境建議使用：
- **Vercel Postgres** - 最簡單，直接在 Vercel 整合
- **Neon** - 免費額度慷慨的 PostgreSQL
- **Supabase** - 開源替代，含儲存功能

### 3. 媒體儲存

生產環境建議將媒體儲存改為雲端：
- **UploadThing** - 已預裝 `@payloadcms/storage-uploadthing`
- **AWS S3** / **Cloudflare R2**

在 `payload.config.ts` 中取消 UploadThing plugin 的注解並設定 API Key。

---

## 自訂設計

### 主色系調整
編輯 `tailwind.config.ts` 中的 `brand` 色彩：

```ts
colors: {
  brand: {
    500: '#2B7BE5',   // 主色
    600: '#1E5CB3',   // 深色
    // ...
  }
}
```

### 字型替換
在 `app/layout.tsx` 中引入 Google Fonts 並更新 `tailwind.config.ts` 的 `fontFamily`。

---

## 授權

© 2024 華宇資訊科技 All Rights Reserved.
