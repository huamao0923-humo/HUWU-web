'use client'

import React from 'react'
import { MOCKUP_COUNTS } from './mockup-data'

// ── Shared primitives ────────────────────────────────────────

const F = 'system-ui, -apple-system, sans-serif'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Chrome({ url }: { url: string }) {
  return <rect width="480" height="300" rx="8" fill="#f8fafc" />
}

function Sidebar({ items, active = 0, brand = 'SYSTEM' }: { items: string[]; active?: number; brand?: string }) {
  return (
    <>
      <rect x="0" y="0" width="70" height="300" fill="#0f172a" />
      <rect x="6" y="32" width="58" height="18" rx="3" fill="#1d4ed8" />
      <text x="11" y="44" fontSize="7" fill="white" fontWeight="bold" fontFamily={F}>{brand}</text>
      {items.map((item, i) => (
        <g key={i}>
          {i === active && <rect x="4" y={56 + i * 24} width="62" height="18" rx="3" fill="#1d4ed8" />}
          <circle cx="13" cy={65 + i * 24} r="3" fill={i === active ? 'white' : '#475569'} />
          <text x="20" y={69 + i * 24} fontSize="6.5" fill={i === active ? 'white' : '#94a3b8'} fontFamily={F}>{item}</text>
        </g>
      ))}
      <circle cx="35" cy="278" r="9" fill="#1e293b" />
      <circle cx="35" cy="274" r="4" fill="#475569" />
      <path d="M27,283 Q35,280 43,283" stroke="#475569" strokeWidth="1.5" fill="none" />
    </>
  )
}

// text line placeholder (simulates a row of text)
function TextRow({ x, y, w, fill = '#e2e8f0' }: { x: number; y: number; w: number; fill?: string }) {
  return <rect x={x} y={y} width={w} height="6" rx="3" fill={fill} />
}

// Table header
function TH({ x, y, cols }: { x: number; y: number; cols: { label: string; w: number }[] }) {
  let cx = x
  return (
    <>
      <rect x={x} y={y} width={cols.reduce((s, c) => s + c.w, 0)} height="16" fill="#f1f5f9" />
      {cols.map((col, i) => {
        const rx = cx; cx += col.w
        return <text key={i} x={rx + 4} y={y + 11} fontSize="6.5" fill="#6b7280" fontWeight="600" fontFamily={F}>{col.label}</text>
      })}
    </>
  )
}

// Table row
function TR({ x, y, cells, widths, alt }: { x: number; y: number; cells: string[]; widths: number[]; alt?: boolean }) {
  let cx = x
  return (
    <>
      <rect x={x} y={y} width={widths.reduce((s, w) => s + w, 0)} height="16" fill={alt ? '#f9fafb' : 'white'} />
      {cells.map((cell, i) => {
        const rx = cx; cx += widths[i]
        return <text key={i} x={rx + 4} y={y + 11} fontSize="6.5" fill="#374151" fontFamily={F}>{cell}</text>
      })}
    </>
  )
}

// Status pill
function Pill({ x, y, label, color, bg }: { x: number; y: number; label: string; color: string; bg: string }) {
  return (
    <>
      <rect x={x} y={y} width={label.length * 5 + 8} height="12" rx="6" fill={bg} />
      <text x={x + 4} y={y + 9} fontSize="6" fill={color} fontFamily={F}>{label}</text>
    </>
  )
}

// Bar chart bars
function Bars({ x, y, h, data, color = '#3b82f6' }: { x: number; y: number; h: number; data: number[]; color?: string }) {
  const max = Math.max(...data)
  return (
    <>
      {data.map((v, i) => {
        const bh = (v / max) * h
        return <rect key={i} x={x + i * 28} y={y + h - bh} width="20" height={bh} rx="2" fill={color} opacity={0.7 + i * 0.04} />
      })}
    </>
  )
}

// KPI card
function KpiCard({ x, y, w, h, label, value, sub, color }: { x: number; y: number; w: number; h: number; label: string; value: string; sub: string; color: string }) {
  return (
    <>
      <rect x={x} y={y} width={w} height={h} rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <rect x={x} y={y} width={4} height={h} rx="2" fill={color} />
      <text x={x + 10} y={y + 16} fontSize="7" fill="#6b7280" fontFamily={F}>{label}</text>
      <text x={x + 10} y={y + 34} fontSize="14" fill="#1e293b" fontWeight="bold" fontFamily={F}>{value}</text>
      <text x={x + 10} y={y + 46} fontSize="6" fill={color} fontFamily={F}>{sub}</text>
    </>
  )
}

// ── MAHJONG RESERVATION ──────────────────────────────────────

// ── Mahjong System — 真實 UI（深紅金色主題，手機優先）────────────

// 共用：麻將系統手機外框（350x620 viewport）
function MjPhone({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 手機殼 */}
      <rect x="65" y="0" width="350" height="300" rx="0" fill="#F5F0E0" />
      {/* 頂部 header bar */}
      <rect x="65" y="0" width="350" height="36" fill="#6B0000" />
      {children}
    </>
  )
}

function Mahjong0() {
  // 管理後台儀表板
  return (
    <>
      <defs>
        <linearGradient id="mjSidebar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A0A00" />
          <stop offset="100%" stopColor="#2D0000" />
        </linearGradient>
      </defs>
      {/* 深色左側導覽 */}
      <rect x="65" y="0" width="100" height="300" fill="url(#mjSidebar)" />
      {/* Logo */}
      <rect x="75" y="10" width="30" height="30" rx="6" fill="#6B0000" />
      <text x="82" y="30" fontSize="10" fontWeight="bold" fill="#D4AF37" fontFamily={F}>中</text>
      <text x="78" y="46" fontSize="5.5" fill="#D4AF37" fontFamily={F}>麻將館</text>
      <text x="74" y="54" fontSize="5" fill="#9CA3AF" fontFamily={F}>管理後台</text>
      {/* 選單 */}
      {[['儀表板',true],['預約管理',false],['會員管理',false],['入場確認',false],['維護管理',false],['帳務報表',false],['系統設定',false]].map(([label, active], i) => (
        <g key={i}>
          {active && <rect x="65" y={68+i*28} width="100" height="22" fill="#6B0000" />}
          <circle cx="82" cy={79+i*28} r="3" fill={active ? '#D4AF37' : '#4B5563'} />
          <text x="90" y={83+i*28} fontSize="6" fill={active ? '#D4AF37' : '#9CA3AF'} fontFamily={F}>{label as string}</text>
        </g>
      ))}
      {/* 主內容區 */}
      <rect x="165" y="0" width="315" height="300" fill="#F5F0E0" />
      <text x="178" y="18" fontSize="9" fontWeight="bold" fill="#3D0000" fontFamily={F}>儀表板</text>
      <text x="178" y="28" fontSize="6" fill="#9CA3AF" fontFamily={F}>2026/04/06</text>
      {/* KPI 卡片列 */}
      {[
        { label:'今日預約', val:'6', color:'#3D0000', bg:'white' },
        { label:'待確認',   val:'5', color:'#92400E', bg:'#FEF3C7' },
        { label:'今日收入', val:'NT$2400', color:'white',   bg:'#6B0000' },
        { label:'總會員數', val:'9', color:'#1E3A5F', bg:'white' },
      ].map((kpi, i) => (
        <g key={i}>
          <rect x={178+i*73} y="36" width="68" height="42" rx="6" fill={kpi.bg} />
          <text x={186+i*73} y="56" fontSize="12" fontWeight="bold" fill={kpi.color} fontFamily={F}>{kpi.val}</text>
          <text x={186+i*73} y="70" fontSize="5.5" fill={kpi.color === 'white' ? 'rgba(255,255,255,0.7)' : '#6B7280'} fontFamily={F}>{kpi.label}</text>
        </g>
      ))}
      {/* 今日預約清單 */}
      <rect x="175" y="85" width="295" height="16" rx="4" fill="#3D0000" />
      <text x="183" y="96" fontSize="7" fontWeight="bold" fill="#D4AF37" fontFamily={F}>📋 今日預約清單</text>
      <text x="440" y="96" fontSize="6" fill="#D4AF37" fontFamily={F}>共 6 筆</text>
      {[
        ['王小明','桌1・早場・2人','已入場'],
        ['陳雅婷','桌2・早場・3人','已確認'],
        ['林志遠','桌3・午場・4人','已確認'],
        ['黃美玲','桌4・午場・2人','待確認'],
        ['張大同','桌5・晚場・3人','待確認'],
        ['劉佳慧','桌6・晚場・4人','已確認'],
      ].map(([name, detail, status], i) => {
        const sc = status==='已入場'?{c:'#1d4ed8',bg:'#dbeafe'}:status==='已確認'?{c:'#166534',bg:'#dcfce7'}:{c:'#92400E',bg:'#FEF3C7'}
        return (
          <g key={i}>
            <rect x="175" y={102+i*30} width="295" height="26" fill={i%2===0?'white':'#FAF7F0'} />
            <circle cx="188" cy={115+i*30} r="7" fill="#6B0000" />
            <text x="185" y={118+i*30} fontSize="6" fill="#D4AF37" fontFamily={F}>{(name as string)[0]}</text>
            <text x="200" y={112+i*30} fontSize="6.5" fontWeight="bold" fill="#1F2937" fontFamily={F}>{name as string}</text>
            <text x="200" y={122+i*30} fontSize="5.5" fill="#9CA3AF" fontFamily={F}>{detail as string}</text>
            <rect x="415" y={107+i*30} width={status==='待確認'?28:28} height="12" rx="6" fill={sc.bg} />
            <text x="418" y={116+i*30} fontSize="5" fill={sc.c} fontFamily={F}>{status as string}</text>
          </g>
        )
      })}
    </>
  )
}

function Mahjong1() {
  // 會員端首頁 + 場次選擇
  return (
    <>
      <rect x="65" y="0" width="350" height="300" fill="#F5F0E0" />
      {/* 頂部 header */}
      <rect x="65" y="0" width="350" height="70" fill="#6B0000" />
      <text x="80" y="20" fontSize="7" fill="rgba(255,255,255,0.6)" fontFamily={F}>2026/04/06</text>
      <text x="80" y="38" fontSize="14" fontWeight="bold" fill="white" fontFamily={F}>歡 迎 回 來</text>
      <text x="80" y="52" fontSize="7" fill="#D4AF37" fontFamily={F}>測試會員</text>
      <text x="80" y="63" fontSize="6" fill="rgba(255,255,255,0.5)" fontFamily={F}>紅中棋藝館</text>
      {/* 今日開放時段 card */}
      <rect x="80" y="78" width="320" height="100" rx="10" fill="white" />
      <text x="100" y="96" fontSize="7.5" fontWeight="bold" fill="#3D0000" fontFamily={F}>📅 今日開放時段</text>
      {[
        { label:'早場', time:'09:00\n13:00', price:'NT$300', active:false },
        { label:'午場', time:'13:00\n17:30', price:'NT$350', active:false },
        { label:'晚場', time:'18:00\n23:00', price:'NT$400', active:true  },
      ].map((s, i) => (
        <g key={i}>
          <rect x={90+i*100} y="104" width="88" height="62" rx="8"
            fill={s.active ? '#6B0000' : 'white'}
            stroke={s.active ? '#D4AF37' : '#E5E0D0'} strokeWidth="1" />
          <text x={134+i*100} y="122" fontSize="7.5" fontWeight="bold"
            fill={s.active ? '#D4AF37' : '#3D0000'} textAnchor="middle" fontFamily={F}>{s.label}</text>
          <text x={134+i*100} y="135" fontSize="5.5"
            fill={s.active ? 'rgba(255,255,255,0.7)' : '#9CA3AF'} textAnchor="middle" fontFamily={F}>{s.time.split('\n')[0]}</text>
          <text x={134+i*100} y="144" fontSize="5.5"
            fill={s.active ? 'rgba(255,255,255,0.7)' : '#9CA3AF'} textAnchor="middle" fontFamily={F}>{s.time.split('\n')[1]}</text>
          <text x={134+i*100} y="157" fontSize="6"
            fill={s.active ? '#D4AF37' : '#6B0000'} textAnchor="middle" fontFamily={F}>{s.price}</text>
        </g>
      ))}
      {/* 立即預約按鈕 */}
      <rect x="80" y="185" width="320" height="32" rx="8" fill="#6B0000" />
      <text x="240" y="205" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle" fontFamily={F}>📋 立即預約桌位</text>
      {/* 最新公告 */}
      <rect x="80" y="225" width="320" height="65" rx="10" fill="white" />
      <text x="100" y="242" fontSize="7.5" fontWeight="bold" fill="#3D0000" fontFamily={F}>📢 最新公告</text>
      <text x="100" y="256" fontSize="6.5" fontWeight="bold" fill="#1F2937" fontFamily={F}>歡迎使用線上預約系統</text>
      <text x="100" y="266" fontSize="5.5" fill="#9CA3AF" fontFamily={F}>為方便管理，請提前預約桌位。</text>
      <text x="100" y="278" fontSize="6.5" fontWeight="bold" fill="#1F2937" fontFamily={F}>五月份優惠活動</text>
      <text x="100" y="288" fontSize="5.5" fill="#9CA3AF" fontFamily={F}>5/1～5/31 平場每桌享 85 折優票</text>
      {/* 底部 Nav */}
      <rect x="65" y="285" width="350" height="15" fill="white" />
      {['首頁','預約','我的預約','會員'].map((t, i) => (
        <text key={i} x={100+i*85} y="295" fontSize="5.5" fill={i===0?'#6B0000':'#9CA3AF'} textAnchor="middle" fontFamily={F}>{t}</text>
      ))}
    </>
  )
}

function Mahjong2() {
  // 線上選桌預約 — 桌況圖
  return (
    <>
      <rect x="65" y="0" width="350" height="300" fill="#F5F0E0" />
      {/* header */}
      <rect x="65" y="0" width="350" height="28" fill="#6B0000" />
      <text x="235" y="17" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle" fontFamily={F}>線上預約</text>
      {/* 步驟指示 */}
      <text x="90" y="40" fontSize="6" fill="#9CA3AF" fontFamily={F}>① 選日期時段</text>
      <text x="165" y="40" fontSize="6" fill="#9CA3AF" fontFamily={F}>—</text>
      <text x="185" y="40" fontSize="6.5" fontWeight="bold" fill="#6B0000" fontFamily={F}>② 選桌位</text>
      <text x="235" y="40" fontSize="6" fill="#9CA3AF" fontFamily={F}>—</text>
      <text x="255" y="40" fontSize="6" fill="#9CA3AF" fontFamily={F}>③ 確認</text>
      {/* 桌況圖 */}
      <rect x="80" y="48" width="300" height="175" rx="8" fill="#C8A96E" />
      <text x="230" y="62" fontSize="7" fill="rgba(255,255,255,0.7)" textAnchor="middle" fontFamily={F}>2026-04-06 · 早場</text>
      <text x="230" y="74" fontSize="7.5" fontWeight="bold" fill="white" textAnchor="middle" fontFamily={F}>選擇桌位</text>
      {/* 9 張桌子 3x3 */}
      {[0,1,2,3,4,5,6,7,8].map(i => {
        const col = i%3, row = Math.floor(i/3)
        const x = 98+col*87, y = 82+row*50
        const occupied = [0,1].includes(i)
        const selected = i===2
        return (
          <g key={i}>
            <rect x={x} y={y} width="75" height="40" rx="6"
              fill={occupied?'#5A1A1A':selected?'#D4AF37':'white'}
              stroke={selected?'#6B0000':'rgba(255,255,255,0.3)'} strokeWidth={selected?2:1} />
            <text x={x+37} y={y+17} fontSize="7.5" fontWeight="bold"
              fill={occupied?'rgba(255,255,255,0.5)':selected?'#3D0000':'#3D0000'}
              textAnchor="middle" fontFamily={F}>桌 {i+1}</text>
            <text x={x+37} y={y+30} fontSize="5.5"
              fill={occupied?'rgba(255,255,255,0.4)':selected?'#6B0000':'#9CA3AF'}
              textAnchor="middle" fontFamily={F}>{occupied?'已預約':selected?'已選擇':'4人'}</text>
          </g>
        )
      })}
      {/* 圖例 */}
      <circle cx="95" cy="232" r="4" fill="white" />
      <text x="102" y="235" fontSize="5.5" fill="#6B5A3E" fontFamily={F}>空桌</text>
      <circle cx="128" cy="232" r="4" fill="#D4AF37" />
      <text x="135" y="235" fontSize="5.5" fill="#6B5A3E" fontFamily={F}>已選擇</text>
      <circle cx="168" cy="232" r="4" fill="#5A1A1A" />
      <text x="175" y="235" fontSize="5.5" fill="#6B5A3E" fontFamily={F}>已預約</text>
      {/* 人數 */}
      <rect x="80" y="240" width="300" height="30" rx="8" fill="white" />
      <text x="105" y="258" fontSize="7.5" fontWeight="bold" fill="#3D0000" fontFamily={F}>👥 人數</text>
      <rect x="200" y="244" width="16" height="16" rx="4" fill="#F5F0E0" />
      <text x="208" y="255" fontSize="8" fill="#6B0000" textAnchor="middle" fontFamily={F}>−</text>
      <text x="228" y="257" fontSize="9" fontWeight="bold" fill="#3D0000" textAnchor="middle" fontFamily={F}>4</text>
      <rect x="238" y="244" width="16" height="16" rx="4" fill="#F5F0E0" />
      <text x="246" y="255" fontSize="8" fill="#6B0000" textAnchor="middle" fontFamily={F}>+</text>
      <text x="268" y="257" fontSize="6" fill="#9CA3AF" fontFamily={F}>人</text>
      {/* 按鈕 */}
      <rect x="200" y="275" width="170" height="22" rx="8" fill="#6B0000" />
      <text x="285" y="289" fontSize="7.5" fontWeight="bold" fill="white" textAnchor="middle" fontFamily={F}>下一步：確認 ›</text>
    </>
  )
}

function Mahjong3() {
  // 管理後台 — 預約管理列表
  return (
    <>
      <defs>
        <linearGradient id="mjSidebar2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A0A00" />
          <stop offset="100%" stopColor="#2D0000" />
        </linearGradient>
      </defs>
      <rect x="65" y="0" width="100" height="300" fill="url(#mjSidebar2)" />
      {/* Logo */}
      <rect x="75" y="10" width="30" height="30" rx="6" fill="#6B0000" />
      <text x="82" y="30" fontSize="10" fontWeight="bold" fill="#D4AF37" fontFamily={F}>中</text>
      <text x="74" y="46" fontSize="5" fill="#D4AF37" fontFamily={F}>管理後台</text>
      {/* 選單 */}
      {[['儀表板',false],['預約管理',true],['會員管理',false],['入場確認',false],['帳務報表',false]].map(([label, active], i) => (
        <g key={i}>
          {active && <rect x="65" y={56+i*28} width="100" height="22" fill="#6B0000" />}
          <circle cx="82" cy={67+i*28} r="3" fill={active ? '#D4AF37' : '#4B5563'} />
          <text x="90" y={71+i*28} fontSize="6" fill={active ? '#D4AF37' : '#9CA3AF'} fontFamily={F}>{label as string}</text>
        </g>
      ))}
      {/* 主內容 */}
      <rect x="165" y="0" width="315" height="300" fill="#F5F0E0" />
      <text x="178" y="16" fontSize="9" fontWeight="bold" fill="#3D0000" fontFamily={F}>預約管理</text>
      <text x="178" y="26" fontSize="5.5" fill="#9CA3AF" fontFamily={F}>今天 · 2026/04/06 · 共 6 筆</text>
      {/* 新增按鈕 */}
      <rect x="420" y="10" width="50" height="18" rx="5" fill="#6B0000" />
      <text x="445" y="22" fontSize="6" fill="white" textAnchor="middle" fontFamily={F}>＋ 新增預約</text>
      {/* 篩選 tabs */}
      {['今天','本週','雙週','本月','全部'].map((t, i) => (
        <g key={i}>
          <rect x={175+i*46} y="31" width="40" height="14" rx="7"
            fill={i===0?'#6B0000':'transparent'}
            stroke={i===0?'transparent':'#D0C8B8'} strokeWidth="0.5" />
          <text x={195+i*46} y="41" fontSize="5.5"
            fill={i===0?'white':'#9CA3AF'} textAnchor="middle" fontFamily={F}>{t}</text>
        </g>
      ))}
      {/* 表格 header */}
      <rect x="170" y="50" width="300" height="14" fill="#2D0000" />
      {['會員','桌位','時段','人數','狀態','費用','操作'].map((h, i) => (
        <text key={i} x={178+i*42} y="60" fontSize="5.5" fill="#D4AF37" fontFamily={F}>{h}</text>
      ))}
      {/* 表格 rows */}
      {[
        ['王小明','桌1','早場','2','已入場','NT$300'],
        ['陳雅婷','桌2','早場','3','已確認','NT$300'],
        ['林志遠','桌3','午場','4','已確認','NT$350'],
        ['黃美玲','桌4','午場','2','待確認','NT$350'],
        ['張大同','桌5','晚場','3','待確認','NT$400'],
        ['劉佳慧','桌6','晚場','4','已確認','NT$400'],
      ].map((row, i) => {
        const st = row[4]
        const sc = st==='已入場'?{c:'#1d4ed8',bg:'#dbeafe'}:st==='已確認'?{c:'#166534',bg:'#dcfce7'}:{c:'#92400E',bg:'#FEF3C7'}
        return (
          <g key={i}>
            <rect x="170" y={64+i*34} width="300" height="30" fill={i%2===0?'white':'#FAF7F0'} />
            {/* 頭像 */}
            <circle cx="185" cy={79+i*34} r="8" fill="#6B0000" />
            <text x="182" y={83+i*34} fontSize="6" fill="#D4AF37" fontFamily={F}>{(row[0] as string)[0]}</text>
            <text x="198" y={75+i*34} fontSize="6.5" fontWeight="bold" fill="#1F2937" fontFamily={F}>{row[0] as string}</text>
            <text x={222} y={79+i*34} fontSize="6" fill="#6B7280" fontFamily={F}>{row[1] as string}</text>
            <text x={264} y={79+i*34} fontSize="6" fill="#6B7280" fontFamily={F}>{row[2] as string}</text>
            <text x={306} y={79+i*34} fontSize="6" fill="#6B7280" fontFamily={F}>{row[3] as string}</text>
            {/* 狀態 pill */}
            <rect x={334} y={72+i*34} width={row[4]==='待確認'?28:28} height="12" rx="6" fill={sc.bg} />
            <text x={337} y={81+i*34} fontSize="4.5" fill={sc.c} fontFamily={F}>{row[4] as string}</text>
            <text x={376} y={79+i*34} fontSize="5.5" fill="#6B7280" fontFamily={F}>{row[5] as string}</text>
            {/* 入場 / 取消 按鈕 */}
            {st!=='已入場' && (
              <>
                <rect x={418} y={71+i*34} width="22" height="11" rx="3" fill="#dcfce7" />
                <text x={429} y={80+i*34} fontSize="4.5" fill="#166534" textAnchor="middle" fontFamily={F}>入場</text>
                <rect x={442} y={71+i*34} width="22" height="11" rx="3" fill="#fee2e2" />
                <text x={453} y={80+i*34} fontSize="4.5" fill="#991b1b" textAnchor="middle" fontFamily={F}>取消</text>
              </>
            )}
          </g>
        )
      })}
    </>
  )
}

// ── COURT RENTAL ─────────────────────────────────────────────

function Court0() {
  const slots = ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00']
  const courts = ['A 羽球場','B 羽球場','C 籃球場','D 桌球場']
  const booked: Record<string, boolean> = {
    'A-0':true,'A-2':true,'A-3':true,'A-5':true,'A-6':true,
    'B-1':true,'B-3':true,'B-4':true,'B-7':true,
    'C-0':true,'C-1':true,'C-2':true,'C-6':true,'C-7':true,'C-8':true,
    'D-2':true,'D-4':true,'D-5':true,
  }
  return (
    <>
      <Chrome url="booking.qmsports.com.tw/booking" />
      <Sidebar items={['儀表板', '訂位管理', '場地管理', '金流紀錄', '報表']} active={1} brand="全o運動" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>時段訂位總覽 — 2026/03/18</text>
      {/* Time header */}
      <rect x="110" y="52" width={slots.length*38} height="14" fill="#f1f5f9" />
      {slots.map((s,i)=>(
        <text key={i} x={114+i*38} y={62} fontSize="6" fill="#6b7280" fontFamily={F}>{s}</text>
      ))}
      {/* Court rows */}
      {courts.map((court, ci) => (
        <g key={ci}>
          <rect x="70" y={66+ci*40} width="40" height="40" fill="#f8fafc" />
          <text x="72" y={82+ci*40} fontSize="6" fill="#374151" fontFamily={F}>{court.split(' ')[0]}</text>
          <text x="72" y={92+ci*40} fontSize="5.5" fill="#9ca3af" fontFamily={F}>{court.split(' ')[1]}</text>
          {slots.map((_,si)=>{
            const key = `${court[0]}-${si}`
            const isBooked = booked[key]
            return (
              <rect key={si} x={110+si*38} y={67+ci*40} width="36" height="38"
                fill={isBooked ? '#dbeafe' : '#f0fdf4'}
                stroke={isBooked ? '#93c5fd' : '#86efac'}
                strokeWidth="0.5"
              />
            )
          })}
          {/* Sample booking labels */}
          {ci === 0 && <text x={112} y={81+ci*40} fontSize="5" fill="#1d4ed8" fontFamily={F}>陳o傑</text>}
          {ci === 1 && <text x={150} y={81+ci*40} fontSize="5" fill="#1d4ed8" fontFamily={F}>林o偉</text>}
        </g>
      ))}
      {/* Legend */}
      <rect x="78" y="232" width="12" height="8" rx="2" fill="#dbeafe" stroke="#93c5fd" strokeWidth="0.5" />
      <text x="94" y="239" fontSize="6.5" fill="#374151" fontFamily={F}>已訂</text>
      <rect x="122" y="232" width="12" height="8" rx="2" fill="#f0fdf4" stroke="#86efac" strokeWidth="0.5" />
      <text x="138" y="239" fontSize="6.5" fill="#374151" fontFamily={F}>可訂</text>
    </>
  )
}

function Court1() {
  return (
    <>
      <Chrome url="booking.qmsports.com.tw/checkout/B-2026040301" />
      <rect x="0" y="26" width="480" height="274" fill="#f8fafc" />
      <text x="80" y="60" fontSize="12" fontWeight="bold" fill="#1e293b" fontFamily={F}>確認訂單 & 付款</text>
      {/* Order summary card */}
      <rect x="76" y="68" width="200" height="140" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <text x="88" y="86" fontSize="8" fontWeight="bold" fill="#1e293b" fontFamily={F}>訂單明細</text>
      {[
        ['場地', 'B 羽球場'],['日期', '2026/04/10'],['時段', '10:00 - 12:00'],
        ['時數', '2 小時'],['單價', '$300/h'],['合計', '$600'],
      ].map(([k,v],i)=>(
        <g key={i}>
          <text x="88" y={102+i*17} fontSize="6.5" fill="#6b7280" fontFamily={F}>{k}</text>
          <text x="200" y={102+i*17} fontSize="6.5" fill="#1e293b" fontWeight={k==='合計'?'bold':'normal'} fontFamily={F}>{v}</text>
        </g>
      ))}
      {/* Payment method */}
      <rect x="76" y="215" width="200" height="70" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <text x="88" y="232" fontSize="8" fontWeight="bold" fill="#1e293b" fontFamily={F}>付款方式</text>
      {[['信用卡',true],['LINE Pay',false],['ATM 轉帳',false]].map(([m,sel],i)=>(
        <g key={i}>
          <circle cx="88" cy={247+i*14} r="4" fill={sel?'#1d4ed8':'white'} stroke={sel?'#1d4ed8':'#d1d5db'} strokeWidth="1.5" />
          {sel && <circle cx="88" cy={247+i*14} r="1.5" fill="white" />}
          <text x="96" y={250+i*14} fontSize="7" fill="#374151" fontFamily={F}>{m as string}</text>
        </g>
      ))}
      {/* Confirm button */}
      <rect x="76" y="290" width="200" height="24" rx="6" fill="#1d4ed8" />
      <text x="147" y="305" fontSize="8" fill="white" textAnchor="middle" fontFamily={F}>立即付款 $600</text>
      {/* QR mock - deterministic pattern */}
      <rect x="296" y="68" width="110" height="110" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="310" y="80" width="82" height="82" rx="4" fill="#1e293b" />
      {/* finder pattern top-left */}
      <rect x="314" y="84" width="18" height="18" rx="1" fill="white" />
      <rect x="316" y="86" width="14" height="14" rx="1" fill="#1e293b" />
      <rect x="318" y="88" width="10" height="10" rx="1" fill="white" />
      {/* finder pattern top-right */}
      <rect x="350" y="84" width="18" height="18" rx="1" fill="white" />
      <rect x="352" y="86" width="14" height="14" rx="1" fill="#1e293b" />
      <rect x="354" y="88" width="10" height="10" rx="1" fill="white" />
      {/* finder pattern bottom-left */}
      <rect x="314" y="120" width="18" height="18" rx="1" fill="white" />
      <rect x="316" y="122" width="14" height="14" rx="1" fill="#1e293b" />
      <rect x="318" y="124" width="10" height="10" rx="1" fill="white" />
      {/* data modules */}
      {[[338,84],[342,84],[346,84],[338,88],[346,92],[338,96],[342,100],[346,100],[338,104],[342,108],[346,108],[338,112],[342,84],[346,116],[338,120],[342,124],[346,128],[338,128],[342,132],[346,136],[338,136]].map(([x,y],k)=>(
        <rect key={k} x={x} y={y} width="4" height="4" fill="white" />
      ))}
      <text x="351" y="196" fontSize="7" fill="#6b7280" textAnchor="middle" fontFamily={F}>掃碼完成付款</text>
    </>
  )
}

function Court2() {
  return (
    <>
      <Chrome url="booking.qmsports.com.tw/venues" />
      <Sidebar items={['儀表板', '訂位管理', '場地管理', '金流紀錄', '報表']} active={2} brand="全o運動" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>場地管理</text>
      <rect x="380" y="29" width="85" height="16" rx="4" fill="#1d4ed8" />
      <text x="398" y="40" fontSize="7" fill="white" fontFamily={F}>+ 新增場地</text>
      {[
        { name:'A 羽球場', status:'正常', usage:'82%', maintenance:'2026/05/01', color:'#22c55e' },
        { name:'B 羽球場', status:'正常', usage:'76%', maintenance:'2026/05/01', color:'#22c55e' },
        { name:'C 籃球場', status:'維修中', usage:'0%', maintenance:'2026/04/10', color:'#ef4444' },
        { name:'D 桌球場', status:'正常', usage:'55%', maintenance:'2026/06/01', color:'#22c55e' },
        { name:'E 排球場', status:'正常', usage:'40%', maintenance:'2026/07/01', color:'#22c55e' },
      ].map((v,i)=>(
        <g key={i}>
          <rect x="78" y={52+i*44} width="395" height="40" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <circle cx="92" cy={72+i*44} r="8" fill={i===2?'#fca5a5':'#86efac'} />
          <text x="92" y={76+i*44} fontSize="7" fill={i===2?'#991b1b':'#166534'} fontWeight="bold" textAnchor="middle" fontFamily={F}>{i===2?'修':'場'}</text>
          <text x="108" y={67+i*44} fontSize="8" fontWeight="bold" fill="#1e293b" fontFamily={F}>{v.name}</text>
          <text x="108" y={80+i*44} fontSize="6.5" fill="#6b7280" fontFamily={F}>維護日期：{v.maintenance}</text>
          <text x="270" y={67+i*44} fontSize="7" fill="#374151" fontFamily={F}>使用率</text>
          <rect x="270" y={72+i*44} width="80" height="6" rx="3" fill="#e2e8f0" />
          <rect x="270" y={72+i*44} width={80*parseFloat(v.usage)/100} height="6" rx="3" fill={v.color} />
          <text x="355" y={78+i*44} fontSize="6" fill="#374151" fontFamily={F}>{v.usage}</text>
          <Pill x={375} y={63+i*44} label={v.status} color={v.color==='#22c55e'?'#166534':'#991b1b'} bg={v.color==='#22c55e'?'#dcfce7':'#fee2e2'} />
        </g>
      ))}
    </>
  )
}

function Court3() {
  return (
    <>
      <Chrome url="booking.qmsports.com.tw/orders" />
      <Sidebar items={['儀表板', '訂位管理', '場地管理', '金流紀錄', '報表']} active={3} brand="全o運動" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>金流紀錄</text>
      <TH x={78} y={50} cols={[{label:'編號',w:80},{label:'客戶',w:80},{label:'場地',w:70},{label:'時段',w:80},{label:'金額',w:60},{label:'付款方式',w:70},{label:'狀態',w:55}]} />
      {[
        ['#CT-0312','王建o','A羽球場','10:00-12:00','$600','信用卡','已付款'],
        ['#CT-0311','李o婷','D桌球場','14:00-16:00','$400','LINE Pay','已付款'],
        ['#CT-0310','陳o傑','B羽球場','09:00-10:00','$300','ATM','已付款'],
        ['#CT-0309','張o玲','A羽球場','16:00-18:00','$600','信用卡','退款中'],
        ['#CT-0308','林o偉','D桌球場','11:00-13:00','$400','信用卡','已付款'],
        ['#CT-0307','吳o穎','B羽球場','08:00-09:00','$300','LINE Pay','已付款'],
        ['#CT-0306','黃o翰','A羽球場','13:00-15:00','$600','信用卡','已付款'],
        ['#CT-0305','蔡o蓉','D桌球場','16:00-17:00','$200','ATM','待付款'],
        ['#CT-0304','劉o誠','B羽球場','15:00-17:00','$600','信用卡','已付款'],
      ].map(([id,c,f,t,a,m,s],i)=>{
        const sc = s==='已付款'?{c:'#166534',bg:'#dcfce7'}:s==='退款中'?{c:'#92400e',bg:'#fef9c3'}:{c:'#1d4ed8',bg:'#dbeafe'}
        return (
          <g key={i}>
            <TR x={78} y={66+i*17} cells={[id,c,f,t,a,m,'']} widths={[80,80,70,80,60,70,55]} alt={i%2===1} />
            <Pill x={438} y={70+i*17} label={s} color={sc.c} bg={sc.bg} />
          </g>
        )
      })}
    </>
  )
}

// ── HR MANAGEMENT ────────────────────────────────────────────

function HR0() {
  return (
    <>
      <Chrome url="hr.lianqun.com.tw/employees" />
      <Sidebar items={['儀表板', '員工管理', '薪資系統', '績效考核', '出勤管理', '系統設定']} active={1} brand="聯o人資" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>員工列表</text>
      <rect x="370" y="29" width="95" height="16" rx="4" fill="#1d4ed8" />
      <text x="388" y="40" fontSize="7" fill="white" fontFamily={F}>+ 新增員工</text>
      <TH x={78} y={50} cols={[{label:'員工',w:100},{label:'部門',w:80},{label:'職稱',w:80},{label:'出勤率',w:60},{label:'薪資',w:70},{label:'狀態',w:65}]} />
      {[
        ['王建o','業務部','業務經理','98%','$85,000','在職'],
        ['李o婷','研發部','前端工程師','95%','$72,000','在職'],
        ['陳o傑','財務部','財務專員','100%','$58,000','在職'],
        ['張o玲','人資部','人資主任','96%','$65,000','在職'],
        ['林o偉','業務部','業務專員','88%','$48,000','試用'],
        ['吳o穎','研發部','後端工程師','92%','$70,000','在職'],
        ['黃o翰','行政部','行政助理','97%','$42,000','在職'],
        ['蔡o蓉','研發部','UI設計師','90%','$60,000','在職'],
        ['劉o誠','業務部','業務專員','85%','$48,000','離職'],
      ].map(([n,d,t,a,s,st],i)=>{
        const sc = st==='在職'?{c:'#166534',bg:'#dcfce7'}:st==='試用'?{c:'#1d4ed8',bg:'#dbeafe'}:{c:'#991b1b',bg:'#fee2e2'}
        return (
          <g key={i}>
            <TR x={78} y={66+i*17} cells={[n,d,t,a,s,'']} widths={[100,80,80,60,70,65]} alt={i%2===1} />
            <Pill x={445} y={70+i*17} label={st} color={sc.c} bg={sc.bg} />
          </g>
        )
      })}
    </>
  )
}

function HR1() {
  return (
    <>
      <Chrome url="hr.lianqun.com.tw/payroll/2026-03" />
      <Sidebar items={['儀表板', '員工管理', '薪資系統', '績效考核', '出勤管理', '系統設定']} active={2} brand="聯o人資" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>薪資計算明細 — 2026年3月</text>
      {/* Summary cards */}
      {[
        { label:'本月薪資總額', val:'$1,248,000', color:'#1d4ed8' },
        { label:'已發放', val:'$1,248,000', color:'#059669' },
        { label:'員工人數', val:'24 人', color:'#7c3aed' },
      ].map((c,i)=>(
        <KpiCard key={i} x={78+i*138} y={50} w={130} h={52} label={c.label} value={c.val} sub="本月" color={c.color} />
      ))}
      <TH x={78} y={106} cols={[{label:'員工姓名',w:80},{label:'部門',w:70},{label:'底薪',w:70},{label:'加班費',w:70},{label:'獎金',w:60},{label:'扣款',w:60},{label:'實領',w:75}]} />
      {[
        ['王建o','業務部','$80,000','$5,000','$10,000','-$2,000','$93,000'],
        ['李o婷','研發部','$70,000','$2,800','$5,000','-$1,500','$76,300'],
        ['陳o傑','財務部','$55,000','$0','$3,000','-$1,200','$56,800'],
        ['張o玲','人資部','$62,000','$1,000','$3,000','-$1,400','$64,600'],
        ['林o偉','業務部','$45,000','$3,600','$2,000','-$1,000','$49,600'],
        ['吳o穎','研發部','$68,000','$4,200','$5,000','-$1,400','$75,800'],
        ['黃o翰','行政部','$40,000','$0','$1,000','-$900','$40,100'],
        ['蔡o蓉','研發部','$58,000','$1,500','$4,000','-$1,300','$62,200'],
      ].map(([n,d,b,o,bonus,ded,tot],i)=>(
        <TR key={i} x={78} y={122+i*17} cells={[n,d,b,o,bonus,ded,tot]} widths={[80,70,70,70,60,60,75]} alt={i%2===1} />
      ))}
    </>
  )
}

function HR2() {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const scores = [78, 82, 75, 88, 84, 90, 86, 92, 88, 94, 91, 96]
  return (
    <>
      <Chrome url="hr.lianqun.com.tw/performance" />
      <Sidebar items={['儀表板', '員工管理', '薪資系統', '績效考核', '出勤管理', '系統設定']} active={3} brand="聯o人資" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>績效考核圖表 — 2026年</text>
      {/* KPI row */}
      {[
        {label:'平均績效分數', val:'87.8', color:'#1d4ed8'},
        {label:'優秀員工佔比', val:'38%', color:'#059669'},
        {label:'待改善比例', val:'8%', color:'#f59e0b'},
      ].map((c,i)=>(
        <KpiCard key={i} x={78+i*138} y={50} w={130} h={46} label={c.label} value={c.val} sub="全部員工" color={c.color} />
      ))}
      {/* Bar chart */}
      <text x="78" y="115" fontSize="8" fontWeight="bold" fill="#1e293b" fontFamily={F}>月度平均績效趨勢</text>
      <rect x="78" y="120" width="390" height="110" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      {/* Chart grid lines */}
      {[0,25,50,75,100].map((v,i)=>(
        <g key={i}>
          <line x1="100" y1={215-i*18} x2="460" y2={215-i*18} stroke="#f1f5f9" strokeWidth="0.8" />
          <text x="82" y={219-i*18} fontSize="5" fill="#9ca3af" fontFamily={F}>{v}</text>
        </g>
      ))}
      {/* Bars */}
      {scores.map((s,i)=>(
        <g key={i}>
          <rect x={100+i*30} y={215-(s/100)*72} width="22" height={(s/100)*72} rx="2" fill="#3b82f6" opacity={0.7+i*0.02} />
          <text x={100+i*30+5} y={225} fontSize="5" fill="#9ca3af" fontFamily={F}>{months[i]}</text>
        </g>
      ))}
      {/* Department breakdown */}
      <text x="78" y="245" fontSize="8" fontWeight="bold" fill="#1e293b" fontFamily={F}>各部門績效</text>
      {[['業務部',92,'#3b82f6'],['研發部',88,'#8b5cf6'],['財務部',85,'#10b981'],['人資部',83,'#f59e0b'],['行政部',80,'#ef4444']].map(([d,v,c],i)=>(
        <g key={i}>
          <text x={78+i*80} y={265} fontSize="6.5" fill="#374151" fontFamily={F}>{d}</text>
          <rect x={78+i*80} y={270} width="72" height="8" rx="4" fill="#f1f5f9" />
          <rect x={78+i*80} y={270} width={72*(v as number)/100} height="8" rx="4" fill={c as string} />
          <text x={78+i*80} y={290} fontSize="7" fontWeight="bold" fill={c as string} fontFamily={F}>{v}</text>
        </g>
      ))}
    </>
  )
}

function HR3() {
  const days = ['一','二','三','四','五','六','日']
  const dateRow1 = [1,2,3,4,5,6,7]
  const dateRow2 = [8,9,10,11,12,13,14]
  const dateRow3 = [15,16,17,18,19,20,21]
  const dateRow4 = [22,23,24,25,26,27,28]
  const late = new Set([3,10,17])
  const absent = new Set([13,20])
  return (
    <>
      <Chrome url="hr.lianqun.com.tw/attendance/calendar" />
      <Sidebar items={['儀表板', '員工管理', '薪資系統', '績效考核', '出勤管理', '系統設定']} active={4} brand="聯o人資" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>出勤日曆 — 2026年3月</text>
      {/* Month nav */}
      <text x="350" y="41" fontSize="7" fill="#1d4ed8" fontFamily={F}>{'< 上月'}</text>
      <text x="395" y="41" fontSize="7" fill="#1d4ed8" fontFamily={F}>{'下月 >'}</text>
      {/* Day headers */}
      {days.map((d,i)=>(
        <g key={i}>
          <rect x={78+i*56} y="50" width="54" height="16" fill="#f1f5f9" />
          <text x={78+i*56+22} y="61" fontSize="7" fill={i>=5?'#ef4444':'#6b7280'} textAnchor="middle" fontFamily={F}>{d}</text>
        </g>
      ))}
      {/* Date grid */}
      {[dateRow1,dateRow2,dateRow3,dateRow4].map((row,ri)=>(
        row.map((d,di)=>{
          const isLate = late.has(d), isAbsent = absent.has(d), isWeekend = di>=5
          const bg = isAbsent?'#fee2e2':isLate?'#fef9c3':isWeekend?'#f9fafb':'white'
          const dot = isAbsent?'#ef4444':isLate?'#f59e0b':isWeekend?'transparent':'#22c55e'
          return (
            <g key={d}>
              <rect x={78+di*56} y={66+ri*42} width="54" height="40" fill={bg} stroke="#f1f5f9" strokeWidth="0.5" />
              <text x={78+di*56+4} y={80+ri*42} fontSize="9" fill={isAbsent?'#ef4444':isLate?'#f59e0b':isWeekend?'#9ca3af':'#1e293b'} fontWeight="500" fontFamily={F}>{d}</text>
              {!isWeekend && <circle cx={78+di*56+42} cy={72+ri*42} r="3" fill={dot} />}
              {isLate && <text x={78+di*56+4} y={96+ri*42} fontSize="5.5" fill="#f59e0b" fontFamily={F}>遲到</text>}
              {isAbsent && <text x={78+di*56+4} y={96+ri*42} fontSize="5.5" fill="#ef4444" fontFamily={F}>請假</text>}
              {!isLate&&!isAbsent&&!isWeekend && <text x={78+di*56+4} y={96+ri*42} fontSize="5.5" fill="#22c55e" fontFamily={F}>正常</text>}
            </g>
          )
        })
      ))}
    </>
  )
}

function HR4() {
  return (
    <>
      <Chrome url="hr.lianqun.com.tw/org-chart" />
      <Sidebar items={['儀表板', '員工管理', '薪資系統', '績效考核', '出勤管理', '系統設定']} active={1} brand="聯o人資" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>組織架構圖</text>
      {/* CEO */}
      <rect x="195" y="52" width="100" height="32" rx="5" fill="#1d4ed8" />
      <text x="245" y="66" fontSize="7" fill="white" textAnchor="middle" fontFamily={F}>董事長</text>
      <text x="245" y="78" fontSize="6.5" fill="rgba(255,255,255,0.8)" textAnchor="middle" fontFamily={F}>王慶明</text>
      {/* Line to GM */}
      <line x1="245" y1="84" x2="245" y2="96" stroke="#d1d5db" strokeWidth="1" />
      {/* GM */}
      <rect x="195" y="96" width="100" height="32" rx="5" fill="#3b82f6" />
      <text x="245" y="110" fontSize="7" fill="white" textAnchor="middle" fontFamily={F}>總經理</text>
      <text x="245" y="122" fontSize="6.5" fill="rgba(255,255,255,0.8)" textAnchor="middle" fontFamily={F}>李o婷</text>
      {/* Lines to depts */}
      <line x1="245" y1="128" x2="245" y2="140" stroke="#d1d5db" strokeWidth="1" />
      <line x1="105" y1="140" x2="385" y2="140" stroke="#d1d5db" strokeWidth="1" />
      {[['業務部','陳o傑',105],['研發部','張o玲',205],['財務部','林o偉',305],['行政部','吳o穎',380]].map(([dept,name,x],i)=>(
        <g key={i}>
          <line x1={x as number+40} y1="140" x2={x as number+40} y2="152" stroke="#d1d5db" strokeWidth="1" />
          <rect x={x as number} y="152" width="80" height="30" rx="4" fill="#7c3aed" />
          <text x={(x as number)+40} y="165" fontSize="6.5" fill="white" textAnchor="middle" fontFamily={F}>{dept}</text>
          <text x={(x as number)+40} y="176" fontSize="6" fill="rgba(255,255,255,0.8)" textAnchor="middle" fontFamily={F}>{name}</text>
          {/* Sub members */}
          {[0,1,2].map(j=>(
            <g key={j}>
              <line x1={(x as number)+40} y1="182" x2={(x as number)+40} y2="192" stroke="#d1d5db" strokeWidth="0.8" />
              <rect x={(x as number)+(j-1)*28} y="192" width="24" height="22" rx="3" fill="#ede9fe" />
              <text x={(x as number)+(j-1)*28+12} y="206" fontSize="5.5" fill="#7c3aed" textAnchor="middle" fontFamily={F}>員工</text>
            </g>
          ))}
        </g>
      ))}
    </>
  )
}

// ── WAREHOUSE ────────────────────────────────────────────────

function WH0() {
  return (
    <>
      <Chrome url="wms.yongsheng.com.tw/inventory" />
      <Sidebar items={['儀表板', '庫存管理', '入庫作業', '出庫作業', '盤點管理', '報表']} active={1} brand="永o WMS" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>庫存總覽</text>
      {/* Summary */}
      {[{l:'庫存品項',v:'1,248',c:'#1d4ed8'},{l:'低庫存警示',v:'23',c:'#f59e0b'},{l:'今日入庫',v:'156',c:'#059669'},{l:'今日出庫',v:'89',c:'#7c3aed'}].map((s,i)=>(
        <KpiCard key={i} x={78+i*100} y={50} w={92} h={46} label={s.l} value={s.v} sub="即時" color={s.c} />
      ))}
      <TH x={78} y={100} cols={[{label:'品號',w:80},{label:'品名',w:110},{label:'庫位',w:60},{label:'庫存量',w:60},{label:'安全庫存',w:70},{label:'狀態',w:75}]} />
      {[
        ['P-00124','不鏽鋼螺絲 M6','A-12-03','1,250','500','正常'],
        ['P-00125','六角螺帽 M8','A-12-04','280','300','低庫存'],
        ['P-00201','鋁合金外殼 A型','B-05-02','450','200','正常'],
        ['P-00202','鋁合金外殼 B型','B-05-03','820','400','正常'],
        ['P-00310','橡膠墊圈 Ø10','C-08-01','3,200','1,000','正常'],
        ['P-00401','電路板 Rev.3','D-02-05','0','50','缺貨'],
        ['P-00402','電路板 Rev.4','D-02-06','120','80','正常'],
        ['P-00501','絕緣膠帶 5m','E-01-02','560','200','正常'],
        ['P-00502','導電銀膠','E-01-03','45','80','低庫存'],
      ].map(([id,n,loc,qty,safe,st],i)=>{
        const sc = st==='正常'?{c:'#166534',bg:'#dcfce7'}:st==='低庫存'?{c:'#92400e',bg:'#fef9c3'}:{c:'#991b1b',bg:'#fee2e2'}
        return (
          <g key={i}>
            <TR x={78} y={116+i*17} cells={[id,n,loc,qty,safe,'']} widths={[80,110,60,60,70,75]} alt={i%2===1} />
            <Pill x={382} y={120+i*17} label={st} color={sc.c} bg={sc.bg} />
          </g>
        )
      })}
    </>
  )
}

function WH1() {
  return (
    <>
      <Chrome url="wms.yongsheng.com.tw/inbound/scan" />
      <Sidebar items={['儀表板', '庫存管理', '入庫作業', '出庫作業', '盤點管理', '報表']} active={2} brand="永o WMS" />
      <rect x="70" y="26" width="410" height="274" fill="#f8fafc" />
      <text x="90" y="56" fontSize="11" fontWeight="bold" fill="#1e293b" fontFamily={F}>入庫作業掃碼</text>
      {/* Scanner area */}
      <rect x="240" y="60" width="220" height="160" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <text x="350" y="98" fontSize="8" fill="#6b7280" textAnchor="middle" fontFamily={F}>掃描條碼</text>
      {/* Scanner frame */}
      <rect x="280" y="105" width="140" height="90" rx="4" fill="#f8fafc" stroke="#d1d5db" strokeWidth="1" />
      <line x1="280" y1="150" x2="420" y2="150" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" />
      {[0,0.2,0.4,0.6,0.8,1].map(t=>(
        <rect key={t} x={282+(t>0.5?(t-0.5)*280:t*280)} y={107+t*86} width={t*20+5} height="4" rx="2" fill="#1e293b" opacity="0.6" />
      ))}
      <text x="350" y="210" fontSize="7" fill="#9ca3af" textAnchor="middle" fontFamily={F}>或手動輸入條碼</text>
      <rect x="280" y="215" width="140" height="16" rx="8" fill="white" stroke="#d1d5db" strokeWidth="1" />
      {/* Info panel */}
      <rect x="82" y="60" width="148" height="200" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <text x="92" y="78" fontSize="7.5" fontWeight="bold" fill="#1e293b" fontFamily={F}>入庫資訊</text>
      {[
        {label:'入庫單號', val:'IN-20260318-089'},
        {label:'供應商', val:'台灣精密工業'},
        {label:'入庫日期', val:'2026/03/18'},
        {label:'經手人', val:'陳o傑'},
        {label:'品項數量', val:'8 項'},
        {label:'總件數', val:'1,240 件'},
      ].map(({label,val},i)=>(
        <g key={i}>
          <text x="92" y={98+i*22} fontSize="6" fill="#9ca3af" fontFamily={F}>{label}</text>
          <text x="92" y={110+i*22} fontSize="7" fill="#374151" fontFamily={F}>{val}</text>
        </g>
      ))}
      <rect x="92" y="235" width="118" height="18" rx="5" fill="#1d4ed8" />
      <text x="151" y="247" fontSize="7.5" fill="white" textAnchor="middle" fontFamily={F}>確認入庫</text>
    </>
  )
}

function WH2() {
  return (
    <>
      <Chrome url="wms.yongsheng.com.tw/outbound" />
      <Sidebar items={['儀表板', '庫存管理', '入庫作業', '出庫作業', '盤點管理', '報表']} active={3} brand="永o WMS" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>出庫記錄表</text>
      <TH x={78} y={50} cols={[{label:'出庫單號',w:90},{label:'品名',w:110},{label:'數量',w:50},{label:'庫位',w:55},{label:'出庫對象',w:80},{label:'日期',w:70},{label:'狀態',w:60}]} />
      {[
        ['OUT-0589','不鏽鋼螺絲 M6','500','A-12-03','生產線一','04/03 09:15','完成'],
        ['OUT-0588','橡膠墊圈 Ø10','1,200','C-08-01','生產線二','04/03 08:50','完成'],
        ['OUT-0587','鋁合金外殼 A型','100','B-05-02','組裝部門','04/02 16:30','完成'],
        ['OUT-0586','導電銀膠','20','E-01-03','研發部門','04/02 14:00','完成'],
        ['OUT-0585','電路板 Rev.4','50','D-02-06','生產線一','04/02 10:20','完成'],
        ['OUT-0584','絕緣膠帶 5m','100','E-01-02','維修部門','04/01 15:40','完成'],
        ['OUT-0583','六角螺帽 M8','200','A-12-04','生產線三','04/01 11:30','待出庫'],
        ['OUT-0582','鋁合金外殼 B型','50','B-05-03','組裝部門','04/01 09:00','待出庫'],
        ['OUT-0581','不鏽鋼螺絲 M6','300','A-12-03','生產線二','03/31 16:00','完成'],
      ].map(([id,n,q,loc,t,d,st],i)=>{
        const sc = st==='完成'?{c:'#166534',bg:'#dcfce7'}:{c:'#1d4ed8',bg:'#dbeafe'}
        return (
          <g key={i}>
            <TR x={78} y={66+i*17} cells={[id,n,q,loc,t,d,'']} widths={[90,110,50,55,80,70,60]} alt={i%2===1} />
            <Pill x={453} y={70+i*17} label={st} color={sc.c} bg={sc.bg} />
          </g>
        )
      })}
    </>
  )
}

function WH3() {
  const areas = [
    {name:'A 區（螺絲/螺帽）', total:120, done:112, pct:93},
    {name:'B 區（外殼零件）', total:80, done:68, pct:85},
    {name:'C 區（橡膠件）', total:60, done:60, pct:100},
    {name:'D 區（電子元件）', total:95, done:40, pct:42},
    {name:'E 區（耗材）', total:50, done:50, pct:100},
  ]
  return (
    <>
      <Chrome url="wms.yongsheng.com.tw/inventory/count" />
      <Sidebar items={['儀表板', '庫存管理', '入庫作業', '出庫作業', '盤點管理', '報表']} active={4} brand="永o WMS" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>盤點進度追蹤 — 2026年Q1</text>
      {/* Overall progress */}
      <rect x="78" y="52" width="395" height="60" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <text x="90" y="70" fontSize="8" fontWeight="bold" fill="#1e293b" fontFamily={F}>整體盤點進度</text>
      <text x="90" y="84" fontSize="7" fill="#6b7280" fontFamily={F}>已盤 330 / 總計 405 品項</text>
      <rect x="90" y="89" width="360" height="12" rx="6" fill="#f1f5f9" />
      <rect x="90" y="89" width={360*330/405} height="12" rx="6" fill="#1d4ed8" />
      <text x="440" y="99" fontSize="7" fill="#1d4ed8" fontFamily={F}>81.5%</text>
      {/* Area progress */}
      {areas.map(({name, total, done, pct}, i) => (
        <g key={i}>
          <rect x="78" y={120+i*30} width="395" height="26" rx="5" fill="white" stroke="#e2e8f0" strokeWidth="0.8" />
          <text x="90" y={136+i*30} fontSize="7" fill="#374151" fontFamily={F}>{name}</text>
          <text x="300" y={136+i*30} fontSize="6.5" fill="#6b7280" fontFamily={F}>{done}/{total}</text>
          <rect x="340" y={128+i*30} width="100" height="8" rx="4" fill="#f1f5f9" />
          <rect x="340" y={128+i*30} width={pct} height="8" rx="4" fill={pct===100?'#22c55e':pct>80?'#3b82f6':'#f59e0b'} />
          <text x="448" y={136+i*30} fontSize="6.5" fill="#374151" fontFamily={F}>{pct}%</text>
        </g>
      ))}
    </>
  )
}

// ── BI DASHBOARD ─────────────────────────────────────────────

function BI0() {
  return (
    <>
      <Chrome url="bi.fengde.com.tw/dashboard" />
      <Sidebar items={['總覽', '銷售分析', '趨勢圖表', '產品分析', '客戶分析', '設定']} active={0} brand="峰o BI" />
      <rect x="70" y="26" width="410" height="22" fill="#f8fafc" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>BI 商業智慧儀表板</text>
      <text x="380" y="41" fontSize="7" fill="#9ca3af" fontFamily={F}>更新：21:15</text>
      {/* KPI cards */}
      {[
        {l:'本月營收', v:'$12.4M', sub:'↑ 18.2%', c:'#1d4ed8'},
        {l:'訂單數量', v:'1,842', sub:'↑ 24.5%', c:'#059669'},
        {l:'平均客單價', v:'$6,740', sub:'↑ 3.1%', c:'#7c3aed'},
        {l:'毛利率', v:'38.2%', sub:'↑ 2.4pp', c:'#f59e0b'},
      ].map((c,i)=>(
        <KpiCard key={i} x={78+i*100} y={50} w={92} h={52} label={c.l} value={c.v} sub={c.sub} color={c.c} />
      ))}
      {/* Bar chart */}
      <rect x="78" y="108" width="200" height="100" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <text x="88" y="123" fontSize="7.5" fontWeight="bold" fill="#1e293b" fontFamily={F}>月銷售趨勢</text>
      <Bars x={88} y={127} h={70} data={[42,55,48,72,65,88,80,95,78,102,98,115]} color="#3b82f6" />
      {/* Line chart */}
      <rect x="284" y="108" width="190" height="100" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <text x="294" y="123" fontSize="7.5" fontWeight="bold" fill="#1e293b" fontFamily={F}>毛利率走勢</text>
      <polyline points="294,188 310,182 326,185 342,175 358,178 374,168 390,165 406,158 422,155 438,148 454,145 462,140"
        fill="none" stroke="#059669" strokeWidth="1.5" />
      <polyline points="294,188 310,182 326,185 342,175 358,178 374,168 390,165 406,158 422,155 438,148 454,145 462,140 462,200 294,200"
        fill="#059669" opacity="0.1" />
      {/* Table summary */}
      <rect x="78" y="214" width="395" height="62" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <text x="88" y="228" fontSize="7.5" fontWeight="bold" fill="#1e293b" fontFamily={F}>Top 產品銷售</text>
      <TH x={88} y={232} cols={[{label:'產品',w:120},{label:'銷售量',w:70},{label:'營收',w:80},{label:'佔比',w:70},{label:'趨勢',w:57}]} />
      {[['精密螺絲組','8,420','$2.1M','16.9%','↑'],['鋁合金外殼','3,200','$3.8M','30.6%','↑'],['電路板','1,560','$2.4M','19.4%','→']].map(([n,q,r,p,t],i)=>(
        <TR key={i} x={88} y={248+i*12} cells={[n,q,r,p,t]} widths={[120,70,80,70,57]} alt={i%2===1} />
      ))}
    </>
  )
}

function BI1() {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const data = [420,550,480,720,650,880,800,950,780,1020,980,1150]
  return (
    <>
      <Chrome url="bi.fengde.com.tw/sales" />
      <Sidebar items={['總覽', '銷售分析', '趨勢圖表', '產品分析', '客戶分析', '設定']} active={1} brand="峰o BI" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>銷售長條圖分析</text>
      <rect x="78" y="52" width="395" height="200" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <text x="90" y="68" fontSize="8" fontWeight="bold" fill="#1e293b" fontFamily={F}>2026年月度銷售額（萬元）</text>
      {/* Y axis */}
      {[0,200,400,600,800,1000,1200].map((v,i)=>(
        <g key={i}>
          <line x1="110" y1={230-i*22} x2="460" y2={230-i*22} stroke="#f1f5f9" strokeWidth="0.8" />
          <text x="82" y={234-i*22} fontSize="5" fill="#9ca3af" fontFamily={F}>{v}</text>
        </g>
      ))}
      {/* Bars */}
      {data.map((v,i)=>{
        const bh = (v/1200)*132
        return (
          <g key={i}>
            <rect x={112+i*30} y={230-bh} width="24" height={bh} rx="2"
              fill={i===months.indexOf('Dec')?'#1d4ed8':'#3b82f6'} opacity="0.8" />
            <text x={112+i*30+4} y={242} fontSize="5" fill="#9ca3af" fontFamily={F}>{months[i]}</text>
            {i===11 && <text x={112+i*30+12} y={230-bh-6} fontSize="6" fill="#1d4ed8" fontFamily={F}>最高</text>}
          </g>
        )
      })}
      {/* Stats */}
      {[{l:'年度總額', v:'$98.3M'},{l:'月均', v:'$8.2M'},{l:'最高月', v:'12月 $11.5M'},{l:'YoY成長', v:'↑ 23.4%'}].map((s,i)=>(
        <g key={i}>
          <rect x={78+i*100} y="258" width="92" height="36" rx="5" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <text x={86+i*100} y="272" fontSize="6.5" fill="#6b7280" fontFamily={F}>{s.l}</text>
          <text x={86+i*100} y="286" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>{s.v}</text>
        </g>
      ))}
    </>
  )
}

function BI2() {
  const pts = [240,220,250,210,230,200,215,190,205,185,180,170].map((y,i)=>({ x:90+i*33, y }))
  return (
    <>
      <Chrome url="bi.fengde.com.tw/trends" />
      <Sidebar items={['總覽', '銷售分析', '趨勢圖表', '產品分析', '客戶分析', '設定']} active={2} brand="峰o BI" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>月趨勢折線圖</text>
      <rect x="78" y="52" width="395" height="150" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <text x="90" y="68" fontSize="8" fontWeight="bold" fill="#1e293b" fontFamily={F}>多指標趨勢 — 2026年</text>
      {/* Grid */}
      {[0,1,2,3].map(i=>(
        <line key={i} x1="90" y1={80+i*36} x2="460" y2={80+i*36} stroke="#f1f5f9" strokeWidth="0.8" />
      ))}
      {/* Line 1 */}
      <polyline points={pts.map(p=>`${p.x},${p.y}`).join(' ')} fill="none" stroke="#3b82f6" strokeWidth="2" />
      {pts.map((p,i)=><circle key={i} cx={p.x} cy={p.y} r="3" fill="white" stroke="#3b82f6" strokeWidth="1.5" />)}
      {/* Line 2 */}
      <polyline points={pts.map((p,i)=>`${p.x},${p.y+30-i*3}`).join(' ')} fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 2" />
      {/* Legend */}
      <circle cx="90" cy="194" r="4" fill="#3b82f6" />
      <text x="98" y="197" fontSize="6.5" fill="#374151" fontFamily={F}>營收（萬元）</text>
      <circle cx="160" cy="194" r="4" fill="#10b981" />
      <text x="168" y="197" fontSize="6.5" fill="#374151" fontFamily={F}>毛利（萬元）</text>
      {/* Period selector */}
      {['月','季','年'].map((t,i)=>(
        <g key={i}>
          <rect x={360+i*36} y="189" width="32" height="14" rx="7" fill={i===0?'#1d4ed8':'#f1f5f9'} />
          <text x={369+i*36} y="199" fontSize="7" fill={i===0?'white':'#6b7280'} fontFamily={F}>{t}</text>
        </g>
      ))}
      {/* Comparison table */}
      <rect x="78" y="208" width="395" height="66" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <text x="88" y="222" fontSize="7.5" fontWeight="bold" fill="#1e293b" fontFamily={F}>同期比較</text>
      <TH x={88} y={226} cols={[{label:'指標',w:100},{label:'本月',w:80},{label:'上月',w:80},{label:'去年同月',w:90},{label:'YoY',w:57}]} />
      {[['營收','$8.2M','$7.6M','$6.7M','↑ 22.4%'],['訂單數','1,842','1,680','1,420','↑ 29.7%'],['毛利率','38.2%','36.8%','35.1%','+3.1pp']].map(([n,a,b,c,d],i)=>(
        <TR key={i} x={88} y={242+i*12} cells={[n,a,b,c,d]} widths={[100,80,80,90,57]} alt={i%2===1} />
      ))}
    </>
  )
}

function BI3() {
  return (
    <>
      <Chrome url="bi.fengde.com.tw/categories" />
      <Sidebar items={['總覽', '銷售分析', '趨勢圖表', '產品分析', '客戶分析', '設定']} active={3} brand="峰o BI" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>產品分類圓餅圖分析</text>
      {/* Pie chart */}
      <rect x="78" y="52" width="230" height="220" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <text x="90" y="68" fontSize="7.5" fontWeight="bold" fill="#1e293b" fontFamily={F}>各類別營收佔比</text>
      {/* Donut chart (SVG arcs) */}
      <circle cx="193" cy="155" r="68" fill="none" stroke="#3b82f6" strokeWidth="30" strokeDasharray="170 256" strokeDashoffset="0" />
      <circle cx="193" cy="155" r="68" fill="none" stroke="#10b981" strokeWidth="30" strokeDasharray="100 256" strokeDashoffset="-170" />
      <circle cx="193" cy="155" r="68" fill="none" stroke="#f59e0b" strokeWidth="30" strokeDasharray="60 256" strokeDashoffset="-270" />
      <circle cx="193" cy="155" r="68" fill="none" stroke="#ef4444" strokeWidth="30" strokeDasharray="30 256" strokeDashoffset="-330" />
      <circle cx="193" cy="155" r="38" fill="white" />
      <text x="193" y="150" fontSize="9" fontWeight="bold" fill="#1e293b" textAnchor="middle" fontFamily={F}>$98.3M</text>
      <text x="193" y="162" fontSize="6" fill="#6b7280" textAnchor="middle" fontFamily={F}>年度總額</text>
      {/* Legend */}
      {[['外殼零件','30.6%','#3b82f6'],['精密螺絲','22.4%','#10b981'],['電子元件','15.8%','#f59e0b'],['其他','31.2%','#ef4444']].map(([l,p,c],i)=>(
        <g key={i}>
          <rect x="90" y={234+i*9} width="8" height="6" rx="2" fill={c as string} />
          <text x="102" y={241+i*9} fontSize="6.5" fill="#374151" fontFamily={F}>{l} {p}</text>
        </g>
      ))}
      {/* Data table */}
      <rect x="316" y="52" width="157" height="220" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <text x="326" y="68" fontSize="7.5" fontWeight="bold" fill="#1e293b" fontFamily={F}>分類明細</text>
      {[['外殼零件','$30.1M','↑18%'],['精密螺絲','$22.0M','↑24%'],['電子元件','$15.5M','↑12%'],['橡膠件','$18.2M','↑8%'],['耗材','$8.1M','↑5%'],['其他','$4.4M','↓2%']].map(([n,v,t],i)=>(
        <g key={i}>
          <text x="326" y={86+i*27} fontSize="7" fontWeight="bold" fill="#1e293b" fontFamily={F}>{n}</text>
          <text x="326" y={98+i*27} fontSize="7.5" fill="#1d4ed8" fontFamily={F}>{v}</text>
          <text x="420" y={98+i*27} fontSize="7" fill={t.includes('↑')?'#059669':'#ef4444'} fontFamily={F}>{t}</text>
        </g>
      ))}
    </>
  )
}

function BI4() {
  return (
    <>
      <Chrome url="bi.fengde.com.tw/raw-data" />
      <Sidebar items={['總覽', '銷售分析', '趨勢圖表', '產品分析', '資料報表', '設定']} active={4} brand="峰o BI" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>原始資料報表</text>
      <rect x="370" y="29" width="90" height="16" rx="4" fill="#059669" />
      <text x="386" y="40" fontSize="7" fill="white" fontFamily={F}>匯出 Excel</text>
      <TH x={78} y={50} cols={[{label:'日期',w:65},{label:'訂單號',w:80},{label:'客戶',w:80},{label:'產品',w:90},{label:'數量',w:50},{label:'單價',w:55},{label:'金額',w:65}]} />
      {[
        ['04/03','ORD-8842','鴻盛貿易','精密螺絲組 M8','500','$42','$21,000'],
        ['04/03','ORD-8841','永豐實業','鋁合金外殼 B型','120','$320','$38,400'],
        ['04/02','ORD-8840','中信工業','電路板 Rev.4','80','$1,500','$120,000'],
        ['04/02','ORD-8839','大成製造','橡膠墊圈 Ø12','2,000','$12','$24,000'],
        ['04/01','ORD-8838','鴻盛貿易','不鏽鋼螺絲 M6','1,200','$28','$33,600'],
        ['04/01','ORD-8837','全盛科技','電路板 Rev.3','50','$1,200','$60,000'],
        ['03/31','ORD-8836','永豐實業','鋁合金外殼 A型','200','$280','$56,000'],
        ['03/31','ORD-8835','中信工業','導電銀膠','30','$850','$25,500'],
        ['03/30','ORD-8834','大成製造','六角螺帽 M10','800','$18','$14,400'],
        ['03/30','ORD-8833','全盛科技','絕緣膠帶 5m','500','$35','$17,500'],
      ].map(([d,id,c,p,q,u,a],i)=>(
        <TR key={i} x={78} y={66+i*17} cells={[d,id,c,p,q,u,a]} widths={[65,80,80,90,50,55,65]} alt={i%2===1} />
      ))}
    </>
  )
}

// ── BUSINESS ACCOUNTING ──────────────────────────────────────

function BA0() {
  return (
    <>
      <Chrome url="acc.fengde.com.tw/ranking" />
      <Sidebar items={['儀表板', '業績排行', '佣金計算', '帳務管理', '月結報表', '系統']} active={1} brand="峰o業務" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>業務業績排行榜 — 2026年3月</text>
      {/* Top 3 podium */}
      {[
        { rankNo:'1', name:'王建o', amt:'$2,450,000', pct:'18.2%', color:'#f59e0b', h:70 },
        { rankNo:'2', name:'李o婷', amt:'$1,980,000', pct:'14.7%', color:'#94a3b8', h:55 },
        { rankNo:'3', name:'陳o傑', amt:'$1,650,000', pct:'12.3%', color:'#c97932', h:45 },
      ].map(({rankNo,name,pct,color,h},i) => {
        const x = i===0?165:i===1?78:252
        return (
          <g key={i}>
            <rect x={x} y={120-h} width={82} height={h} rx="4 4 0 0" fill={color} opacity="0.2" />
            <rect x={x} y={120-h} width={82} height={h} rx="4 4 0 0" fill={color} opacity="0.4" />
            {/* Rank badge circle */}
            <circle cx={x+41} cy={106-h} r="11" fill={color} />
            <text x={x+41} y={110-h} fontSize="8.5" fill="white" fontWeight="bold" textAnchor="middle" fontFamily={F}>#{rankNo}</text>
            <text x={x+41} y={118-h} fontSize="6.5" fill="#1e293b" fontWeight="bold" textAnchor="middle" fontFamily={F}>{name}</text>
            <text x={x+41} y={126} fontSize="6.5" fill={color} fontWeight="bold" textAnchor="middle" fontFamily={F}>{pct}</text>
          </g>
        )
      })}
      {/* Full ranking table */}
      <TH x={78} y={130} cols={[{label:'排名',w:40},{label:'業務員',w:80},{label:'客戶數',w:60},{label:'成交數',w:60},{label:'業績金額',w:90},{label:'佔比',w:60},{label:'達成率',w:65}]} />
      {[
        ['1','王建o','24','18','$2,450,000','18.2%','122%'],
        ['2','李o婷','20','14','$1,980,000','14.7%','99%'],
        ['3','陳o傑','18','12','$1,650,000','12.3%','110%'],
        ['4','張o玲','16','10','$1,320,000','9.8%','88%'],
        ['5','林o偉','14','9','$1,180,000','8.8%','79%'],
        ['6','吳o穎','12','8','$980,000','7.3%','98%'],
        ['7','黃o翰','10','7','$820,000','6.1%','82%'],
        ['8','蔡o蓉','8','5','$650,000','4.8%','65%'],
      ].map(([r,n,c,d,a,p,pct],i)=>(
        <TR key={i} x={78} y={146+i*17} cells={[r,n,c,d,a,p,pct]} widths={[40,80,60,60,90,60,65]} alt={i%2===1} />
      ))}
    </>
  )
}

function BA1() {
  return (
    <>
      <Chrome url="acc.fengde.com.tw/commission/2026-03" />
      <Sidebar items={['儀表板', '業績排行', '佣金計算', '帳務管理', '月結報表', '系統']} active={2} brand="峰o業務" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>佣金分配計算 — 2026年3月</text>
      {/* Rate table */}
      <rect x="78" y="52" width="390" height="60" rx="6" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
      <text x="90" y="68" fontSize="7.5" fontWeight="bold" fill="#1d4ed8" fontFamily={F}>佣金費率設定</text>
      {[['業績等級','達成率','基礎佣金率','加乘獎勵'],['A級(超標20%+)','120%+','5.0%','+1.5%'],['B級(達標)','100-119%','4.0%','+0.5%'],['C級(未達標)','80-99%','2.5%','—'],['D級(嚴重未達)','<80%','1.0%','—']].map((row,i)=>(
        <g key={i}>
          {row.map((cell,j)=>(
            <text key={j} x={90+j*96} y={76+i*10} fontSize={i===0?6:6.5} fill={i===0?'#6b7280':'#374151'} fontWeight={i===0?'600':'normal'} fontFamily={F}>{cell}</text>
          ))}
        </g>
      ))}
      <TH x={78} y={116} cols={[{label:'業務員',w:70},{label:'業績',w:80},{label:'達成率',w:60},{label:'等級',w:40},{label:'佣金率',w:55},{label:'加乘',w:40},{label:'合計佣金',w:90}]} />
      {[
        ['王建o','$2,450,000','122%','A級','5.0%','+1.5%','$159,250'],
        ['李o婷','$1,980,000','99%','B級','4.0%','+0.5%','$89,100'],
        ['陳o傑','$1,650,000','110%','B級','4.0%','+0.5%','$74,250'],
        ['張o玲','$1,320,000','88%','C級','2.5%','—','$33,000'],
        ['林o偉','$1,180,000','79%','D級','1.0%','—','$11,800'],
        ['吳o穎','$980,000','98%','C級','2.5%','—','$24,500'],
        ['黃o翰','$820,000','82%','C級','2.5%','—','$20,500'],
        ['蔡o蓉','$650,000','65%','D級','1.0%','—','$6,500'],
      ].map(([n,a,r,g,c,b,t],i)=>(
        <TR key={i} x={78} y={132+i*17} cells={[n,a,r,g,c,b,t]} widths={[70,80,60,40,55,40,90]} alt={i%2===1} />
      ))}
    </>
  )
}

function BA2() {
  return (
    <>
      <Chrome url="acc.fengde.com.tw/reconciliation" />
      <Sidebar items={['儀表板', '業績排行', '佣金計算', '帳務管理', '月結報表', '系統']} active={3} brand="峰o業務" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>帳務對帳明細</text>
      {[{l:'應付總佣金', v:'$419,900', c:'#1d4ed8'},{l:'已付款', v:'$350,000', c:'#059669'},{l:'待付餘額', v:'$69,900', c:'#f59e0b'}].map((s,i)=>(
        <KpiCard key={i} x={78+i*135} y={50} w={127} h={48} label={s.l} value={s.v} sub="2026年3月" color={s.c} />
      ))}
      <TH x={78} y={102} cols={[{label:'業務員',w:70},{label:'應付佣金',w:80},{label:'付款日期',w:75},{label:'付款金額',w:80},{label:'付款方式',w:70},{label:'狀態',w:60}]} />
      {[
        ['王建o','$159,250','04/08','$159,250','銀行轉帳','已付款'],
        ['李o婷','$89,100','04/08','$89,100','銀行轉帳','已付款'],
        ['陳o傑','$74,250','04/08','$74,250','銀行轉帳','已付款'],
        ['張o玲','$33,000','—','—','—','待付款'],
        ['林o偉','$11,800','—','—','—','待付款'],
        ['吳o穎','$24,500','04/08','$24,500','銀行轉帳','已付款'],
        ['黃o翰','$20,500','—','—','—','待付款'],
        ['蔡o蓉','$6,500','04/08','$6,500','銀行轉帳','已付款'],
      ].map(([n,a,d,pa,pm,st],i)=>{
        const sc = st==='已付款'?{c:'#166534',bg:'#dcfce7'}:{c:'#92400e',bg:'#fef9c3'}
        return (
          <g key={i}>
            <TR x={78} y={118+i*17} cells={[n,a,d,pa,pm,'']} widths={[70,80,75,80,70,60]} alt={i%2===1} />
            <Pill x={380} y={122+i*17} label={st} color={sc.c} bg={sc.bg} />
          </g>
        )
      })}
    </>
  )
}

function BA3() {
  return (
    <>
      <Chrome url="acc.fengde.com.tw/monthly-report/2026-03" />
      <Sidebar items={['儀表板', '業績排行', '佣金計算', '帳務管理', '月結報表', '系統']} active={4} brand="峰o業務" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>月結報表 — 2026年3月</text>
      <rect x="380" y="29" width="85" height="16" rx="4" fill="#059669" />
      <text x="396" y="40" fontSize="7" fill="white" fontFamily={F}>下載 PDF</text>
      {/* Summary */}
      <rect x="78" y="52" width="395" height="80" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      <text x="90" y="70" fontSize="10" fontWeight="bold" fill="#1e293b" fontFamily={F}>月度摘要</text>
      {[{l:'全員總業績',v:'$13,470,000'},{l:'佣金支出',v:'$419,900'},{l:'佣金率(平均)',v:'3.12%'},{l:'業務人數',v:'8 人'}].map((s,i)=>(
        <g key={i}>
          <text x={90+i*100} y={90} fontSize="6" fill="#6b7280" fontFamily={F}>{s.l}</text>
          <text x={90+i*100} y={104} fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>{s.v}</text>
        </g>
      ))}
      {/* Trend bars */}
      <text x="78" y="148" fontSize="8" fontWeight="bold" fill="#1e293b" fontFamily={F}>近6月業績趨勢</text>
      <rect x="78" y="154" width="395" height="80" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      {[1120,980,1240,1050,1340,1347].map((v,i)=>{
        const bh=(v/1400)*58
        return (
          <g key={i}>
            <rect x={90+i*62} y={204-bh} width="48" height={bh} rx="2" fill="#3b82f6" opacity="0.75" />
            <text x={90+i*62+6} y="215" fontSize="5.5" fill="#9ca3af" fontFamily={F}>{['10月','11月','12月','1月','2月','3月'][i]}</text>
            <text x={90+i*62+4} y={200-bh} fontSize="5.5" fill="#1d4ed8" fontFamily={F}>{(v/100).toFixed(0)}萬</text>
          </g>
        )
      })}
      {/* Comparison */}
      <text x="78" y="246" fontSize="8" fontWeight="bold" fill="#1e293b" fontFamily={F}>與上月比較</text>
      {[{m:'業績',cur:'$13,470,000',prev:'$13,400,000',chg:'+0.5%'},{m:'佣金',cur:'$419,900',prev:'$398,000',chg:'+5.5%'},{m:'達標率',cur:'62.5%',prev:'75.0%',chg:'-12.5pp'}].map(({m,cur,prev,chg},i)=>(
        <g key={i}>
          <rect x={78+i*135} y={252} width="127" height="36" rx="5" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <text x={86+i*135} y={264} fontSize="6.5" fill="#6b7280" fontFamily={F}>{m}</text>
          <text x={86+i*135} y={276} fontSize="8" fontWeight="bold" fill="#1e293b" fontFamily={F}>{cur}</text>
          <text x={86+i*135} y={284} fontSize="6" fill={chg.startsWith('+')&&!chg.includes('-')?'#059669':'#ef4444'} fontFamily={F}>{chg} vs 上月</text>
        </g>
      ))}
    </>
  )
}

// ── MES REPORTING ────────────────────────────────────────────

function MES0() {
  const machines = [
    {id:'M-01',name:'CNC 加工機', status:'running', prod:'248/300', eff:'92%'},
    {id:'M-02',name:'雷射切割機', status:'running', prod:'182/200', eff:'91%'},
    {id:'M-03',name:'沖壓機 A', status:'error', prod:'0/150', eff:'0%'},
    {id:'M-04',name:'沖壓機 B', status:'running', prod:'198/200', eff:'99%'},
    {id:'M-05',name:'鑽孔機', status:'idle', prod:'80/150', eff:'53%'},
    {id:'M-06',name:'組裝線一', status:'running', prod:'320/350', eff:'91%'},
    {id:'M-07',name:'組裝線二', status:'running', prod:'285/350', eff:'81%'},
    {id:'M-08',name:'品管站', status:'running', prod:'410/500', eff:'82%'},
  ]
  const statusCfg: Record<string,{bg:string;border:string;text:string;label:string}> = {
    running: {bg:'#dcfce7',border:'#86efac',text:'#166534',label:'運行中'},
    error:   {bg:'#fee2e2',border:'#fca5a5',text:'#991b1b',label:'異常'},
    idle:    {bg:'#fef9c3',border:'#fde047',text:'#854d0e',label:'待機'},
  }
  return (
    <>
      <Chrome url="mes.hongtai.com.tw/floor" />
      <Sidebar items={['現場總覽', '工單管理', '產能報表', '異常管理', '維護排程', '設定']} active={0} brand="鴻o MES" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>現場機台狀態 — 即時</text>
      {/* Status summary */}
      {[{l:'運行中',v:'6',c:'#22c55e'},{l:'待機',v:'1',c:'#f59e0b'},{l:'異常',v:'1',c:'#ef4444'}].map((s,i)=>(
        <g key={i}>
          <circle cx={100+i*80} cy="56" r="5" fill={s.c} />
          <text x={110+i*80} y="59" fontSize="7" fill="#374151" fontFamily={F}>{s.l}: {s.v}台</text>
        </g>
      ))}
      {/* Machine grid */}
      {machines.map(({id,name,status,prod,eff},i)=>{
        const col=i%4, row=Math.floor(i/4)
        const x=78+col*100, y=68+row*60
        const c=statusCfg[status]
        return (
          <g key={id}>
            <rect x={x} y={y} width="92" height="54" rx="5" fill={c.bg} stroke={c.border} strokeWidth="1" />
            <text x={x+6} y={y+14} fontSize="6.5" fontWeight="bold" fill={c.text} fontFamily={F}>{id}</text>
            <text x={x+6} y={y+24} fontSize="5.5" fill={c.text} fontFamily={F}>{name}</text>
            <text x={x+6} y={y+36} fontSize="6" fill={c.text} fontFamily={F}>產量：{prod}</text>
            <text x={x+6} y={y+46} fontSize="6.5" fontWeight="bold" fill={c.text} fontFamily={F}>效率：{eff}</text>
            <circle cx={x+80} cy={y+10} r="5" fill={status==='running'?'#22c55e':status==='error'?'#ef4444':'#f59e0b'} />
          </g>
        )
      })}
    </>
  )
}

function MES1() {
  return (
    <>
      <Chrome url="mes.hongtai.com.tw/workorders" />
      <Sidebar items={['現場總覽', '工單管理', '產能報表', '異常管理', '維護排程', '設定']} active={1} brand="鴻o MES" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>工單進度追蹤</text>
      <TH x={78} y={50} cols={[{label:'工單號',w:75},{label:'產品',w:100},{label:'機台',w:65},{label:'目標',w:45},{label:'完成',w:45},{label:'進度',w:75},{label:'預計完成',w:60}]} />
      {[
        ['WO-2048','不鏽鋼螺絲 M6','M-01','1,200','1,080','90%','15:30'],
        ['WO-2047','鋁合金外殼 A型','M-02','500','420','84%','16:45'],
        ['WO-2046','電路板底座','M-03','300','0','0%','停工'],
        ['WO-2045','橡膠墊圈 Ø10','M-04','800','782','98%','14:20'],
        ['WO-2044','精密螺帽 M8','M-05','600','320','53%','18:30'],
        ['WO-2043','組裝件 A型','M-06','350','318','91%','15:00'],
        ['WO-2042','組裝件 B型','M-07','350','285','81%','16:00'],
        ['WO-2041','成品品管檢驗','M-08','500','410','82%','17:30'],
      ].map(([id,p,m,t,d,pct,et],i)=>{
        const v=parseInt(pct)
        const color=v===0?'#ef4444':v>=90?'#22c55e':v>=80?'#3b82f6':'#f59e0b'
        return (
          <g key={i}>
            <TR x={78} y={66+i*17} cells={[id,p,m,t,d,'',et]} widths={[75,100,65,45,45,75,60]} alt={i%2===1} />
            <rect x={237} y={69+i*17} width="70" height="8" rx="4" fill="#f1f5f9" />
            <rect x={237} y={69+i*17} width={70*Math.min(v,100)/100} height="8" rx="4" fill={color} />
            <text x={245} y={76+i*17} fontSize="6" fill={v<50?color:'white'} fontFamily={F}>{pct}</text>
          </g>
        )
      })}
    </>
  )
}

function MES2() {
  const data = [88,92,85,78,90,94,88,82,86,91,89,93,87,95,91,88,92,90,85,88,94,91,88,90]
  return (
    <>
      <Chrome url="mes.hongtai.com.tw/capacity" />
      <Sidebar items={['現場總覽', '工單管理', '產能報表', '異常管理', '維護排程', '設定']} active={2} brand="鴻o MES" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>即時產能趨勢</text>
      {/* KPIs */}
      {[{l:'目標產量',v:'2,250',c:'#6b7280'},{l:'實際產量',v:'2,083',c:'#1d4ed8'},{l:'平均效率',v:'88.4%',c:'#059669'},{l:'異常次數',v:'3 次',c:'#ef4444'}].map((s,i)=>(
        <KpiCard key={i} x={78+i*100} y={50} w={92} h={44} label={s.l} value={s.v} sub="今日" color={s.c} />
      ))}
      {/* Line chart */}
      <rect x="78" y="100" width="395" height="120" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <text x="90" y="116" fontSize="7.5" fontWeight="bold" fill="#1e293b" fontFamily={F}>產能效率（每小時） — 今日 00:00~24:00</text>
      {/* Grid */}
      {[60,70,80,90,100].map((v,i)=>(
        <g key={i}>
          <line x1="92" y1={207-i*16} x2="460" y2={207-i*16} stroke="#f1f5f9" strokeWidth="0.8" />
          <text x="78" y={211-i*16} fontSize="5" fill="#9ca3af" fontFamily={F}>{v}</text>
        </g>
      ))}
      {/* Target line */}
      <line x1="92" y1={207-0.8*64} x2="460" y2={207-0.8*64} stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 3" />
      {/* Actual line */}
      <polyline points={data.map((v,i)=>`${93+i*15},${207-(v-60)/40*64}`).join(' ')}
        fill="none" stroke="#3b82f6" strokeWidth="1.8" />
      {/* Time labels */}
      {['0h','4h','8h','12h','16h','20h','24h'].map((t,i)=>(
        <text key={i} x={93+i*61} y="215" fontSize="5" fill="#9ca3af" fontFamily={F}>{t}</text>
      ))}
      {/* Machine breakdown */}
      <text x="78" y="232" fontSize="8" fontWeight="bold" fill="#1e293b" fontFamily={F}>各機台產能</text>
      {[['M-01 CNC',92],['M-02 雷射',91],['M-04 沖壓B',99],['M-06 組裝一',91],['M-08 品管',82]].map(([n,v],i)=>(
        <g key={i}>
          <text x={78+i*82} y={248} fontSize="6" fill="#374151" fontFamily={F}>{n}</text>
          <rect x={78+i*82} y={252} width="76" height="8" rx="4" fill="#f1f5f9" />
          <rect x={78+i*82} y={252} width={76*(v as number)/100} height="8" rx="4" fill={v as number>=90?'#22c55e':'#3b82f6'} />
          <text x={78+i*82} y={272} fontSize="7" fontWeight="bold" fill={v as number>=90?'#059669':'#1d4ed8'} fontFamily={F}>{v}%</text>
        </g>
      ))}
    </>
  )
}

function MES3() {
  return (
    <>
      <Chrome url="mes.hongtai.com.tw/alerts" />
      <Sidebar items={['現場總覽', '工單管理', '產能報表', '異常管理', '維護排程', '設定']} active={3} brand="鴻o MES" />
      <rect x="70" y="26" width="410" height="22" fill="white" />
      <text x="78" y="41" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>異常通報紀錄</text>
      {/* Summary */}
      {[{l:'今日異常',v:'3',c:'#ef4444'},{l:'處理中',v:'1',c:'#f59e0b'},{l:'已解決',v:'2',c:'#22c55e'},{l:'平均處理',v:'24min',c:'#1d4ed8'}].map((s,i)=>(
        <KpiCard key={i} x={78+i*100} y={50} w={92} h={44} label={s.l} value={s.v} sub="今日" color={s.c} />
      ))}
      {/* Alert list */}
      {[
        {time:'09:42',machine:'M-03 沖壓機A',type:'機械異常',desc:'主軸震動過大，已停機',status:'處理中',lvl:'高'},
        {time:'13:15',machine:'M-05 鑽孔機',type:'產能偏低',desc:'實際產能低於目標40%',status:'已解決',lvl:'中'},
        {time:'16:30',machine:'M-01 CNC',type:'刀具磨耗',desc:'刀具壽命達閾值，需更換',status:'已解決',lvl:'低'},
        {time:'前日',machine:'M-07 組裝線二',type:'品質異常',desc:'不良率超過2%上限',status:'已解決',lvl:'高'},
        {time:'前日',machine:'M-02 雷射',type:'功率不穩',desc:'雷射功率波動超出容許範圍',status:'已解決',lvl:'中'},
      ].map(({time,machine,type,desc,status,lvl},i)=>{
        const lvlCfg = lvl==='高'?{c:'#991b1b',bg:'#fee2e2'}:lvl==='中'?{c:'#92400e',bg:'#fef9c3'}:{c:'#166534',bg:'#dcfce7'}
        const stCfg = status==='處理中'?{c:'#1d4ed8',bg:'#dbeafe'}:{c:'#166534',bg:'#dcfce7'}
        return (
          <g key={i}>
            <rect x="78" y={98+i*36} width="395" height="32" rx="5" fill={i===0?'#fff8f8':'white'} stroke={i===0?'#fca5a5':'#e2e8f0'} strokeWidth="1" />
            <text x="88" y={113+i*36} fontSize="6" fill="#9ca3af" fontFamily={F}>{time}</text>
            <text x="118" y={113+i*36} fontSize="7" fontWeight="bold" fill="#1e293b" fontFamily={F}>{machine}</text>
            <text x="118" y={124+i*36} fontSize="6.5" fill="#6b7280" fontFamily={F}>{desc}</text>
            <Pill x={290} y={106+i*36} label={type} color={lvlCfg.c} bg={lvlCfg.bg} />
            <Pill x={365} y={106+i*36} label={status} color={stCfg.c} bg={stCfg.bg} />
          </g>
        )
      })}
    </>
  )
}

// ── RESTAURANT WEBSITE ───────────────────────────────────────

function Restaurant0() {
  return (
    <>
      <Chrome url="xianweixuan.com.tw" />
      {/* Nav */}
      <rect x="0" y="26" width="480" height="28" fill="white" />
      <rect x="14" y="32" width="60" height="16" rx="3" fill="#c2410c" />
      <text x="20" y="44" fontSize="8" fontWeight="bold" fill="white" fontFamily={F}>鮮味軒</text>
      {['首頁','菜單','門市','預訂','關於我們'].map((t,i)=>(
        <text key={i} x={110+i*62} y="44" fontSize="7" fill={i===0?'#c2410c':'#374151'} fontFamily={F}>{t}</text>
      ))}
      <rect x="390" y="32" width="70" height="16" rx="8" fill="#c2410c" />
      <text x="413" y="43" fontSize="7" fill="white" fontFamily={F}>立即訂位</text>
      {/* Hero */}
      <defs>
        <linearGradient id="rg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>
      <rect x="0" y="54" width="480" height="120" fill="#7f1d1d" />
      <rect x="0" y="54" width="480" height="120" fill="url(#rg)" opacity="0.8" />
      <text x="30" y="90" fontSize="18" fontWeight="bold" fill="white" fontFamily={F}>鮮味軒餐飲集團</text>
      <text x="30" y="108" fontSize="9" fill="rgba(255,255,255,0.8)" fontFamily={F}>百年傳承，精緻滋味，從這一餐開始</text>
      <rect x="30" y="118" width="80" height="22" rx="11" fill="white" />
      <text x="57" y="132" fontSize="7" fill="#c2410c" fontWeight="bold" textAnchor="middle" fontFamily={F}>立即訂位</text>
      <rect x="120" y="118" width="80" height="22" rx="11" fill="transparent" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
      <text x="160" y="132" fontSize="7" fill="white" textAnchor="middle" fontFamily={F}>查看菜單</text>
      {/* Featured dishes */}
      <text x="30" y="196" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>本月特色料理</text>
      {['佛跳牆','紅燒獅子頭','清蒸魚'].map((_,i)=>(
        <g key={i}>
          <rect x={20+i*152} y="204" width="140" height="76" rx="8" fill={['#fef3c7','#fee2e2','#ecfdf5'][i]} />
          <rect x={20+i*152} y="204" width="140" height="42" rx="8 8 0 0" fill={['#f59e0b','#ef4444','#10b981'][i]} opacity="0.3" />
          {/* Dish icon — colored circle with Chinese char */}
          <circle cx={20+i*152+30} cy="226" r="13" fill={['#f59e0b','#ef4444','#10b981'][i]} opacity="0.85" />
          <text x={20+i*152+30} y="231" fontSize="9" fill="white" fontWeight="bold" textAnchor="middle" fontFamily={F}>{['燉','燒','鮮'][i]}</text>
          <text x={20+i*152+10} y="258" fontSize="8" fontWeight="bold" fill="#1e293b" fontFamily={F}>{_}</text>
          <text x={20+i*152+10} y="270" fontSize="6.5" fill="#6b7280" fontFamily={F}>主廚嚴選 · 限量供應</text>
        </g>
      ))}
    </>
  )
}

function Restaurant1() {
  return (
    <>
      <Chrome url="xianweixuan.com.tw/menu" />
      <rect x="0" y="26" width="480" height="28" fill="white" />
      <rect x="14" y="32" width="60" height="16" rx="3" fill="#c2410c" />
      <text x="20" y="44" fontSize="8" fontWeight="bold" fill="white" fontFamily={F}>鮮味軒</text>
      {['首頁','菜單','門市','預訂','關於我們'].map((t,i)=>(
        <text key={i} x={110+i*62} y="44" fontSize="7" fill={i===1?'#c2410c':'#374151'} fontFamily={F}>{t}</text>
      ))}
      <rect x="0" y="54" width="480" height="30" fill="#fef3c7" />
      <text x="240" y="74" fontSize="11" fontWeight="bold" fill="#7f1d1d" textAnchor="middle" fontFamily={F}>精選菜單</text>
      {/* Category tabs */}
      <rect x="0" y="84" width="480" height="20" fill="white" />
      {['全部','熱炒','燉品','海鮮','素食','甜點'].map((t,i)=>(
        <g key={i}>
          <rect x={20+i*68} y="86" width="62" height="16" rx="8" fill={i===0?'#c2410c':'transparent'} />
          <text x={20+i*68+31} y="97" fontSize="6.5" fill={i===0?'white':'#6b7280'} textAnchor="middle" fontFamily={F}>{t}</text>
        </g>
      ))}
      {/* Menu grid */}
      {[
        {name:'佛跳牆',price:'$1,280',tag:'招牌',char:'燉',bg:'#f59e0b'},
        {name:'紅燒獅子頭',price:'$480',tag:'熱門',char:'燒',bg:'#ef4444'},
        {name:'清蒸石斑',price:'時價',tag:'新鮮',char:'海',bg:'#0891b2'},
        {name:'三杯雞',price:'$380',tag:'',char:'雞',bg:'#d97706'},
        {name:'炒時蔬',price:'$180',tag:'',char:'蔬',bg:'#65a30d'},
        {name:'芋頭西米露',price:'$120',tag:'',char:'甜',bg:'#9333ea'},
      ].map(({name,price,tag,char,bg},i)=>{
        const col=i%3, row=Math.floor(i/3)
        return (
          <g key={i}>
            <rect x={14+col*154} y={108+row*80} width="146" height="74" rx="6" fill="white" stroke="#f1f5f9" strokeWidth="1" />
            <rect x={14+col*154} y={108+row*80} width="146" height="40" rx="6 6 0 0" fill={bg} opacity="0.15" />
            {/* Dish icon */}
            <circle cx={14+col*154+22} cy={128+row*80} r="12" fill={bg} opacity="0.85" />
            <text x={14+col*154+22} y={133+row*80} fontSize="9" fill="white" fontWeight="bold" textAnchor="middle" fontFamily={F}>{char}</text>
            {tag && (
              <>
                <rect x={134+col*154} y={112+row*80} width="24" height="12" rx="6" fill="#c2410c" />
                <text x={146+col*154} y={121+row*80} fontSize="6" fill="white" textAnchor="middle" fontFamily={F}>{tag}</text>
              </>
            )}
            <text x={24+col*154} y={160+row*80} fontSize="8" fontWeight="bold" fill="#1e293b" fontFamily={F}>{name}</text>
            <text x={24+col*154} y={172+row*80} fontSize="8" fill="#c2410c" fontWeight="bold" fontFamily={F}>{price}</text>
          </g>
        )
      })}
    </>
  )
}

function Restaurant2() {
  return (
    <>
      <Chrome url="xianweixuan.com.tw/locations" />
      <rect x="0" y="26" width="480" height="28" fill="white" />
      <rect x="14" y="32" width="60" height="16" rx="3" fill="#c2410c" />
      <text x="20" y="44" fontSize="8" fontWeight="bold" fill="white" fontFamily={F}>鮮味軒</text>
      {/* Map area */}
      <rect x="0" y="54" width="480" height="160" fill="#e5e7eb" />
      {/* Simulated map tiles */}
      {[0,1,2,3,4,5,6,7].map(i=><rect key={i} x={i*60} y={60} width="58" height="56" fill={i%2===0?'#f3f4f6':'#e5e7eb'} stroke="#d1d5db" strokeWidth="0.5" />)}
      {[0,1,2,3,4,5,6,7].map(i=><rect key={i} x={i*60} y={118} width="58" height="56" fill={i%2!==0?'#f3f4f6':'#e5e7eb'} stroke="#d1d5db" strokeWidth="0.5" />)}
      {/* Roads */}
      <rect x="0" y="100" width="480" height="18" fill="#d1d5db" />
      <rect x="180" y="54" width="18" height="160" fill="#d1d5db" />
      {/* Map pins */}
      {[[100,80,'台北信義店'],[280,130,'台北大安店'],[380,80,'新北板橋店']].map(([x,y,name],i)=>(
        <g key={i}>
          <circle cx={x as number} cy={y as number-8} r="10" fill="#c2410c" />
          <polygon points={`${(x as number)-5},${(y as number)+2} ${(x as number)+5},${(y as number)+2} ${x as number},${(y as number)+12}`} fill="#c2410c" />
          <text x={x as number} y={y as number-4} fontSize="8" fill="white" textAnchor="middle">🍜</text>
          <rect x={(x as number)-30} y={(y as number)+14} width="60" height="14" rx="4" fill="white" />
          <text x={x as number} y={(y as number)+24} fontSize="6" fill="#1e293b" textAnchor="middle" fontFamily={F}>{name}</text>
        </g>
      ))}
      {/* Store list */}
      <text x="14" y="232" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>門市資訊</text>
      {[{n:'台北信義店',a:'台北市信義區信義路五段7號',t:'(02) 2723-8899',h:'週一至日 11:00–21:00'},
        {n:'台北大安店',a:'台北市大安區忠孝東路四段181號',t:'(02) 2781-3366',h:'週一至日 11:30–21:30'}].map(({n,a,t,h},i)=>(
        <g key={i}>
          <rect x={14+i*228} y={240} width={218} height={48} rx="6" fill="white" stroke="#f1f5f9" strokeWidth="1" />
          <text x={24+i*228} y={255} fontSize="7.5" fontWeight="bold" fill="#c2410c" fontFamily={F}>{n}</text>
          <text x={24+i*228} y={265} fontSize="6" fill="#6b7280" fontFamily={F}>{a}</text>
          <text x={24+i*228} y={276} fontSize="6" fill="#6b7280" fontFamily={F}>{t} · {h}</text>
        </g>
      ))}
    </>
  )
}

function Restaurant3() {
  return (
    <>
      <Chrome url="xianweixuan.com.tw/booking" />
      <rect x="0" y="26" width="480" height="28" fill="white" />
      <rect x="14" y="32" width="60" height="16" rx="3" fill="#c2410c" />
      <text x="20" y="44" fontSize="8" fontWeight="bold" fill="white" fontFamily={F}>鮮味軒</text>
      <text x="240" y="80" fontSize="14" fontWeight="bold" fill="#7f1d1d" textAnchor="middle" fontFamily={F}>線上訂位</text>
      <text x="240" y="94" fontSize="7" fill="#6b7280" textAnchor="middle" fontFamily={F}>確認您的用餐計畫，我們期待您的到來</text>
      {/* Form */}
      <rect x="80" y="104" width="310" height="176" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      {[
        {label:'門市選擇', val:'台北信義店', y:118},
        {label:'用餐日期', val:'2026/04/10', y:148},
        {label:'用餐時段', val:'12:00 午餐', y:178},
        {label:'用餐人數', val:'4 位大人', y:208},
        {label:'聯絡人姓名', val:'林o琳', y:238},
        {label:'聯絡電話', val:'0928-651-374', y:268},
      ].map(({label,val,y})=>(
        <g key={y}>
          <text x="100" y={y-2} fontSize="6.5" fill="#6b7280" fontFamily={F}>{label}</text>
          <rect x="100" y={y+3} width="270" height="18" rx="5" fill="white" stroke="#d1d5db" strokeWidth="1" />
          <text x="108" y={y+15} fontSize="7.5" fill="#1e293b" fontFamily={F}>{val}</text>
        </g>
      ))}
      <rect x="100" y="282" width="270" height="22" rx="11" fill="#c2410c" />
      <text x="235" y="296" fontSize="8" fill="white" textAnchor="middle" fontFamily={F}>確認訂位</text>
    </>
  )
}

// ── LAW FIRM WEBSITE ─────────────────────────────────────────

function Law0() {
  return (
    <>
      <Chrome url="justicelaw.com.tw" />
      <rect x="0" y="26" width="480" height="26" fill="#1e293b" />
      <rect x="14" y="32" width="80" height="16" rx="3" fill="#1e40af" />
      <text x="20" y="43" fontSize="7" fontWeight="bold" fill="white" fontFamily={F}>正義聯合法律</text>
      {['首頁','服務項目','律師團隊','成功案例','聯絡我們'].map((t,i)=>(
        <text key={i} x={112+i*66} y="43" fontSize="6.5" fill={i===0?'#93c5fd':'#94a3b8'} fontFamily={F}>{t}</text>
      ))}
      <rect x="430" y="32" width="40" height="16" rx="4" fill="#1e40af" />
      <text x="450" y="43" fontSize="6" fill="white" textAnchor="middle" fontFamily={F}>諮詢</text>
      {/* Hero */}
      <rect x="0" y="52" width="480" height="130" fill="#0f172a" />
      {/* Subtle pattern */}
      {[0,1,2,3,4,5,6].map(i=><line key={i} x1={0} y1={52+i*22} x2={480} y2={52+i*22} stroke="#1e293b" strokeWidth="0.5" />)}
      <text x="40" y="92" fontSize="16" fontWeight="bold" fill="white" fontFamily={F}>正義，從選對律師開始</text>
      <text x="40" y="110" fontSize="7.5" fill="#94a3b8" fontFamily={F}>超過 500 件成功案例 · 跨越刑事、民事、商務各領域</text>
      <text x="40" y="124" fontSize="7.5" fill="#94a3b8" fontFamily={F}>讓專業守護您的每一個權益</text>
      <rect x="40" y="135" width="90" height="22" rx="5" fill="#1e40af" />
      <text x="85" y="149" fontSize="7.5" fill="white" textAnchor="middle" fontFamily={F}>免費諮詢</text>
      <rect x="140" y="135" width="90" height="22" rx="5" fill="transparent" stroke="#475569" strokeWidth="1" />
      <text x="185" y="149" fontSize="7.5" fill="#94a3b8" textAnchor="middle" fontFamily={F}>查看案例</text>
      {/* Stats */}
      <rect x="0" y="182" width="480" height="54" fill="#1e293b" />
      {[['500+','成功案件'],['20+','年執業經驗'],['8','位合夥律師'],['98%','客戶滿意度']].map(([v,l],i)=>(
        <g key={i}>
          <text x={50+i*110} y="204" fontSize="14" fontWeight="bold" fill="#93c5fd" fontFamily={F}>{v}</text>
          <text x={50+i*110} y="220" fontSize="7" fill="#64748b" fontFamily={F}>{l}</text>
        </g>
      ))}
      {/* Services preview */}
      <text x="20" y="252" fontSize="10" fontWeight="bold" fill="#1e293b" fontFamily={F}>服務領域</text>
      {['刑事辯護','民事訴訟','商務法律','勞資爭議'].map((s,i)=>(
        <g key={i}>
          <rect x={14+i*116} y="260" width="108" height="32" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <text x={14+i*116+8} y="280" fontSize="7.5" fill="#1e293b" fontWeight="bold" fontFamily={F}>{s}</text>
        </g>
      ))}
    </>
  )
}

function Law1() {
  return (
    <>
      <Chrome url="justicelaw.com.tw/services" />
      <rect x="0" y="26" width="480" height="26" fill="#1e293b" />
      <rect x="14" y="32" width="80" height="16" rx="3" fill="#1e40af" />
      <text x="20" y="43" fontSize="7" fontWeight="bold" fill="white" fontFamily={F}>正義聯合法律</text>
      {['首頁','服務項目','律師團隊','成功案例','聯絡我們'].map((t,i)=>(
        <text key={i} x={112+i*66} y="43" fontSize="6.5" fill={i===1?'#93c5fd':'#94a3b8'} fontFamily={F}>{t}</text>
      ))}
      <rect x="0" y="52" width="480" height="36" fill="#f8fafc" />
      <text x="240" y="68" fontSize="13" fontWeight="bold" fill="#1e293b" textAnchor="middle" fontFamily={F}>服務項目</text>
      <text x="240" y="82" fontSize="7" fill="#6b7280" textAnchor="middle" fontFamily={F}>專業法律服務，守護您的每一個權益</text>
      {[
        {char:'刑', title:'刑事辯護', desc:'偵查、起訴、審判全程陪同，有效保障您的司法權益'},
        {char:'民', title:'民事訴訟', desc:'侵權損害、契約糾紛、財產爭議，精準策略求償'},
        {char:'商', title:'商務法律', desc:'公司設立、合約審閱、股權安排、企業併購'},
        {char:'勞', title:'勞資爭議', desc:'不當解雇、薪資爭議、職業災害，保障勞工權益'},
        {char:'產', title:'不動產', desc:'地產買賣、租約糾紛、建設合約、土地法規諮詢'},
        {char:'際', title:'國際法務', desc:'跨境商務、外資設立、國際仲裁、涉外訴訟'},
      ].map(({char,title,desc},i)=>{
        const col=i%3, row=Math.floor(i/3)
        return (
          <g key={i}>
            <rect x={14+col*154} y={92+row*82} width="148" height="76" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
            {/* Service icon badge */}
            <rect x={24+col*154} y={96+row*82} width="22" height="22" rx="5" fill="#1e40af" />
            <text x={35+col*154} y={112+row*82} fontSize="10" fill="white" fontWeight="bold" textAnchor="middle" fontFamily={F}>{char}</text>
            <text x={24+col*154} y={134+row*82} fontSize="8" fontWeight="bold" fill="#1e293b" fontFamily={F}>{title}</text>
            <text x={24+col*154} y={146+row*82} fontSize="5.5" fill="#6b7280" fontFamily={F}>{desc.slice(0,20)}...</text>
            <text x={24+col*154} y={158+row*82} fontSize="6.5" fill="#1e40af" fontFamily={F}>了解更多 →</text>
          </g>
        )
      })}
    </>
  )
}

function Law2() {
  return (
    <>
      <Chrome url="justicelaw.com.tw/team" />
      <rect x="0" y="26" width="480" height="26" fill="#1e293b" />
      <rect x="14" y="32" width="80" height="16" rx="3" fill="#1e40af" />
      <text x="20" y="43" fontSize="7" fontWeight="bold" fill="white" fontFamily={F}>正義聯合法律</text>
      <rect x="0" y="52" width="480" height="32" fill="#f8fafc" />
      <text x="240" y="68" fontSize="13" fontWeight="bold" fill="#1e293b" textAnchor="middle" fontFamily={F}>律師團隊</text>
      <text x="240" y="80" fontSize="7" fill="#6b7280" textAnchor="middle" fontFamily={F}>8 位合夥律師，橫跨各法律專業領域</text>
      {[
        {name:'陳冠宇 律師',title:'合夥主持律師',spec:'刑事辯護、商務法律',exp:'20年'},
        {name:'林佳慧 律師',title:'合夥律師',spec:'民事訴訟、不動產',exp:'15年'},
        {name:'王承翰 律師',title:'合夥律師',spec:'勞資爭議、國際法',exp:'12年'},
        {name:'張宜芳 律師',title:'執行律師',spec:'刑事、家事',exp:'8年'},
      ].map(({name,title,spec,exp},i)=>{
        const col=i%2, row=Math.floor(i/2)
        return (
          <g key={i}>
            <rect x={14+col*232} y={88+row*90} width="222" height="84" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
            {/* Avatar */}
            <circle cx={46+col*232} cy={112+row*90} r="18" fill="#e2e8f0" />
            <circle cx={46+col*232} cy={106+row*90} r="7" fill="#94a3b8" />
            <path d={`M${28+col*232},${128+row*90} Q${46+col*232},${122+row*90} ${64+col*232},${128+row*90}`} fill="#94a3b8" />
            <text x={74+col*232} y={104+row*90} fontSize="8" fontWeight="bold" fill="#1e293b" fontFamily={F}>{name}</text>
            <text x={74+col*232} y={116+row*90} fontSize="6.5" fill="#1e40af" fontFamily={F}>{title}</text>
            <text x={74+col*232} y={128+row*90} fontSize="6" fill="#6b7280" fontFamily={F}>專長：{spec}</text>
            <text x={74+col*232} y={140+row*90} fontSize="6" fill="#6b7280" fontFamily={F}>執業年資：{exp}</text>
          </g>
        )
      })}
    </>
  )
}

function Law3() {
  return (
    <>
      <Chrome url="justicelaw.com.tw/contact" />
      <rect x="0" y="26" width="480" height="26" fill="#1e293b" />
      <rect x="14" y="32" width="80" height="16" rx="3" fill="#1e40af" />
      <text x="20" y="43" fontSize="7" fontWeight="bold" fill="white" fontFamily={F}>正義聯合法律</text>
      <rect x="0" y="52" width="480" height="32" fill="#f8fafc" />
      <text x="240" y="70" fontSize="13" fontWeight="bold" fill="#1e293b" textAnchor="middle" fontFamily={F}>聯絡我們</text>
      <text x="240" y="82" fontSize="7" fill="#6b7280" textAnchor="middle" fontFamily={F}>第一次諮詢免費 · 嚴格保密</text>
      {/* Contact info */}
      <rect x="14" y="92" width="200" height="190" rx="8" fill="#0f172a" />
      <text x="26" y="112" fontSize="8" fontWeight="bold" fill="white" fontFamily={F}>聯絡資訊</text>
      {[{icon:'📍',l:'台北市中正區博愛路12號8F'},{icon:'📞',l:'(02) 2388-5566'},{icon:'✉️',l:'info@justicelaw.tw'},{icon:'🕐',l:'週一至五 09:00-18:00'}].map(({icon,l},i)=>(
        <g key={i}>
          <text x="28" y={138+i*28} fontSize="10">{icon}</text>
          <text x="46" y={140+i*28} fontSize="6.5" fill="#94a3b8" fontFamily={F}>{l}</text>
        </g>
      ))}
      {/* Form */}
      <rect x="226" y="92" width="240" height="190" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <text x="238" y="110" fontSize="8" fontWeight="bold" fill="#1e293b" fontFamily={F}>預約諮詢</text>
      {[{l:'姓名',v:'許國強',y:118},{l:'聯絡電話',v:'0935-218-763',y:148},{l:'案件類型',v:'刑事辯護',y:178},{l:'簡述需求',v:'...',y:208}].map(({l,v,y})=>(
        <g key={y}>
          <text x="238" y={y} fontSize="6" fill="#6b7280" fontFamily={F}>{l}</text>
          <rect x="238" y={y+4} width="214" height={l==='簡述需求'?48:16} rx="5" fill="white" stroke="#d1d5db" strokeWidth="1" />
          {l!=='簡述需求' && <text x="244" y={y+16} fontSize="7" fill="#374151" fontFamily={F}>{v}</text>}
        </g>
      ))}
      <rect x="238" y="262" width="214" height="18" rx="5" fill="#1e40af" />
      <text x="345" y="274" fontSize="7.5" fill="white" textAnchor="middle" fontFamily={F}>送出諮詢申請</text>
    </>
  )
}

// ── MEDICAL CLINIC WEBSITE ───────────────────────────────────

function Medical0() {
  return (
    <>
      <Chrome url="kangen-medical.com.tw" />
      <rect x="0" y="26" width="480" height="26" fill="white" />
      <rect x="14" y="32" width="80" height="16" rx="3" fill="#0284c7" />
      <text x="20" y="43" fontSize="7" fontWeight="bold" fill="white" fontFamily={F}>康健醫療集團</text>
      {['首頁','科別介紹','醫師團隊','線上掛號','健康新知','關於我們'].map((t,i)=>(
        <text key={i} x={112+i*58} y="43" fontSize="6.5" fill={i===0?'#0284c7':'#374151'} fontFamily={F}>{t}</text>
      ))}
      <rect x="436" y="32" width="40" height="16" rx="8" fill="#0284c7" />
      <text x="456" y="43" fontSize="6.5" fill="white" textAnchor="middle" fontFamily={F}>掛號</text>
      {/* Hero */}
      <defs>
        <linearGradient id="mg2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <rect x="0" y="52" width="480" height="120" fill="#e0f2fe" />
      <rect x="0" y="52" width="480" height="120" fill="url(#mg2)" />
      <text x="30" y="92" fontSize="15" fontWeight="bold" fill="#0c4a6e" fontFamily={F}>以愛心守護您的健康</text>
      <text x="30" y="108" fontSize="7.5" fill="#0369a1" fontFamily={F}>康健醫療集團 — 專業・溫暖・值得信賴</text>
      <text x="30" y="120" fontSize="7" fill="#0369a1" fontFamily={F}>15 個科別 · 50 位專科醫師 · 全年無休急診</text>
      <rect x="30" y="128" width="80" height="22" rx="11" fill="#0284c7" />
      <text x="70" y="142" fontSize="7.5" fill="white" textAnchor="middle" fontFamily={F}>立即掛號</text>
      <rect x="118" y="128" width="80" height="22" rx="11" fill="white" />
      <text x="158" y="142" fontSize="7.5" fill="#0284c7" textAnchor="middle" fontFamily={F}>認識醫師</text>
      {/* Quick nav */}
      <rect x="0" y="172" width="480" height="46" fill="white" />
      {[['急','急診室','#dc2626'],['兒','兒科','#2563eb'],['心','心臟科','#e11d48'],['神','神經科','#7c3aed'],['牙','牙科','#0d9488'],['眼','眼科','#0284c7']].map(([char,name,color],i)=>(
        <g key={i}>
          <rect x={14+i*76} y="178" width="68" height="34" rx="6" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="1" />
          <circle cx={48+i*76} cy="191" r="9" fill={color as string} />
          <text x={48+i*76} y="195" fontSize="8" fill="white" fontWeight="bold" textAnchor="middle" fontFamily={F}>{char}</text>
          <text x={48+i*76} y="208" fontSize="6" fill="#0369a1" textAnchor="middle" fontFamily={F}>{name}</text>
        </g>
      ))}
      {/* News */}
      <text x="14" y="232" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>最新消息</text>
      {[{t:'防疫疫苗接種開始預約',d:'04/03'},{ t:'母親節健康檢查方案',d:'04/01'},{t:'新增胸腔科門診時間',d:'03/28'}].map(({t,d},i)=>(
        <g key={i}>
          <rect x={14+i*154} y="240" width="148" height="44" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <text x="24" y="259" fontSize="8" fill="#0c4a6e" fontFamily={F}>📢</text>
          <text x="38" y="259" fontSize="7" fontWeight="bold" fill="#1e293b" fontFamily={F}>{t}</text>
          <text x="24" y="276" fontSize="6" fill="#6b7280" fontFamily={F}>{d}</text>
        </g>
      ))}
    </>
  )
}

function Medical1() {
  return (
    <>
      <Chrome url="kangen-medical.com.tw/departments" />
      <rect x="0" y="26" width="480" height="26" fill="white" />
      <rect x="14" y="32" width="80" height="16" rx="3" fill="#0284c7" />
      <text x="20" y="43" fontSize="7" fontWeight="bold" fill="white" fontFamily={F}>康健醫療集團</text>
      <rect x="0" y="52" width="480" height="30" fill="#e0f2fe" />
      <text x="240" y="66" fontSize="12" fontWeight="bold" fill="#0c4a6e" textAnchor="middle" fontFamily={F}>科別介紹</text>
      <text x="240" y="78" fontSize="7" fill="#0369a1" textAnchor="middle" fontFamily={F}>15 個專業科別，一站式醫療服務</text>
      {[
        {char:'心',color:'#e11d48',name:'心臟科',desc:'心律不整、冠心病、高血壓',badge:'名額充足'},
        {char:'神',color:'#7c3aed',name:'神經科',desc:'頭痛、眩暈、失眠、中風',badge:'名額充足'},
        {char:'兒',color:'#2563eb',name:'小兒科',desc:'嬰幼兒健康、疫苗接種',badge:'名額有限'},
        {char:'牙',color:'#0d9488',name:'牙科',desc:'補牙、矯正、植牙、洗牙',badge:'名額充足'},
        {char:'眼',color:'#0284c7',name:'眼科',desc:'近視、白內障、眼底檢查',badge:'今日額滿'},
        {char:'急',color:'#dc2626',name:'急診室',desc:'24小時急診、外傷、急救',badge:'24H急診'},
      ].map(({char,color,name,desc,badge},i)=>{
        const col=i%3, row=Math.floor(i/3)
        const bc = badge==='今日額滿'?{c:'#991b1b',bg:'#fee2e2'}:badge==='名額有限'?{c:'#92400e',bg:'#fef9c3'}:{c:'#166534',bg:'#dcfce7'}
        return (
          <g key={i}>
            <rect x={14+col*154} y={88+row*84} width="148" height="78" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
            {/* Department icon */}
            <rect x={24+col*154} y={95+row*84} width="26" height="26" rx="6" fill={color} />
            <text x={37+col*154} y={113+row*84} fontSize="12" fill="white" fontWeight="bold" textAnchor="middle" fontFamily={F}>{char}</text>
            <text x={24+col*154} y={132+row*84} fontSize="9" fontWeight="bold" fill="#0c4a6e" fontFamily={F}>{name}</text>
            <text x={24+col*154} y={144+row*84} fontSize="5.5" fill="#6b7280" fontFamily={F}>{desc}</text>
            <rect x={24+col*154} y={150+row*84} width="64" height="13" rx="6.5" fill={bc.bg} />
            <text x={56+col*154} y={160+row*84} fontSize="6" fill={bc.c} textAnchor="middle" fontFamily={F}>{badge}</text>
          </g>
        )
      })}
    </>
  )
}

function Medical2() {
  return (
    <>
      <Chrome url="kangen-medical.com.tw/doctors" />
      <rect x="0" y="26" width="480" height="26" fill="white" />
      <rect x="14" y="32" width="80" height="16" rx="3" fill="#0284c7" />
      <text x="20" y="43" fontSize="7" fontWeight="bold" fill="white" fontFamily={F}>康健醫療集團</text>
      <rect x="0" y="52" width="480" height="28" fill="#e0f2fe" />
      <text x="240" y="66" fontSize="12" fontWeight="bold" fill="#0c4a6e" textAnchor="middle" fontFamily={F}>醫師團隊</text>
      <text x="240" y="78" fontSize="7" fill="#0369a1" textAnchor="middle" fontFamily={F}>50 位專科醫師，守護您的每一天</text>
      {[
        {name:'陳建志 醫師',dept:'心臟科主任',spec:'冠狀動脈疾病、心臟衰竭',exp:'25年'},
        {name:'林淑芬 醫師',dept:'神經科主任',spec:'腦中風、帕金森症',exp:'20年'},
        {name:'王聖傑 醫師',dept:'小兒科主任',spec:'新生兒照護、兒童發展',exp:'18年'},
        {name:'張慧玲 醫師',dept:'眼科醫師',spec:'白內障、青光眼手術',exp:'15年'},
      ].map(({name,dept,spec,exp},i)=>{
        const col=i%2, row=Math.floor(i/2)
        return (
          <g key={i}>
            <rect x={14+col*232} y={86+row*90} width="222" height="84" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
            {/* Doctor avatar */}
            <circle cx={46+col*232} cy={116+row*90} r="20" fill="#e0f2fe" />
            <circle cx={46+col*232} cy={109+row*90} r="7" fill="#0284c7" opacity="0.4" />
            <path d={`M${28+col*232},${132+row*90} Q${46+col*232},${125+row*90} ${64+col*232},${132+row*90}`} fill="#0284c7" opacity="0.4" />
            <text x={74+col*232} y={104+row*90} fontSize="8.5" fontWeight="bold" fill="#0c4a6e" fontFamily={F}>{name}</text>
            <text x={74+col*232} y={116+row*90} fontSize="7" fill="#0284c7" fontFamily={F}>{dept}</text>
            <text x={74+col*232} y={128+row*90} fontSize="6" fill="#6b7280" fontFamily={F}>專長：{spec}</text>
            <text x={74+col*232} y={140+row*90} fontSize="6" fill="#6b7280" fontFamily={F}>執醫年資：{exp}</text>
            <rect x={74+col*232} y={148+row*90} width="56" height="14" rx="7" fill="#0284c7" />
            <text x={102+col*232} y={158+row*90} fontSize="6.5" fill="white" textAnchor="middle" fontFamily={F}>預約掛號</text>
          </g>
        )
      })}
    </>
  )
}

function Medical3() {
  return (
    <>
      <Chrome url="kangen-medical.com.tw/booking" />
      <rect x="0" y="26" width="480" height="26" fill="white" />
      <rect x="14" y="32" width="80" height="16" rx="3" fill="#0284c7" />
      <text x="20" y="43" fontSize="7" fontWeight="bold" fill="white" fontFamily={F}>康健醫療集團</text>
      <rect x="0" y="52" width="480" height="28" fill="#e0f2fe" />
      <text x="240" y="66" fontSize="12" fontWeight="bold" fill="#0c4a6e" textAnchor="middle" fontFamily={F}>線上掛號</text>
      <text x="240" y="78" fontSize="7" fill="#0369a1" textAnchor="middle" fontFamily={F}>快速掛號，減少候診時間</text>
      {/* Step indicator */}
      {['選擇科別','選擇醫師','選擇時段','填寫資料','確認掛號'].map((s,i)=>(
        <g key={i}>
          <circle cx={60+i*88} cy="96" r="10" fill={i<2?'#0284c7':i===2?'#bae6fd':'#e2e8f0'} />
          <text x={60+i*88} y="100" fontSize="7" fill={i<2?'white':i===2?'#0284c7':'#9ca3af'} textAnchor="middle" fontFamily={F}>{i+1}</text>
          {i<4 && <line x1={70+i*88} y1="96" x2={148+i*88} y2="96" stroke={i<2?'#0284c7':'#e2e8f0'} strokeWidth="2" />}
          <text x={60+i*88} y="112" fontSize="5.5" fill={i===2?'#0284c7':'#9ca3af'} textAnchor="middle" fontFamily={F}>{s}</text>
        </g>
      ))}
      {/* Form */}
      <text x="20" y="132" fontSize="9" fontWeight="bold" fill="#1e293b" fontFamily={F}>選擇看診時段</text>
      {/* Calendar-style slot picker */}
      <rect x="14" y="140" width="290" height="140" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="14" y="140" width="290" height="22" rx="8 8 0 0" fill="#0284c7" />
      <text x="159" y="155" fontSize="7" fill="white" textAnchor="middle" fontFamily={F}>2026年4月</text>
      {['一','二','三','四','五','六','日'].map((d,i)=>(
        <text key={i} x={24+i*38} y="175" fontSize="6.5" fill="#6b7280" fontFamily={F}>{d}</text>
      ))}
      {[7,8,9,10,11,12,13].map((d,i)=>(
        <g key={d}>
          <rect x={18+i*38} y="180" width="32" height="22" rx="4" fill={d===10?'#0284c7':'#f8fafc'} stroke={d===10?'#0284c7':'#e2e8f0'} strokeWidth="0.8" />
          <text x={34+i*38} y="195" fontSize="7" fill={d===10?'white':'#374151'} textAnchor="middle" fontFamily={F}>{d}</text>
        </g>
      ))}
      {/* Time slots */}
      <text x="24" y="218" fontSize="7" fill="#6b7280" fontFamily={F}>可選時段</text>
      {['09:00','09:30','10:00','10:30','11:00','11:30'].map((t,i)=>{
        const col=i%3, row=Math.floor(i/3)
        const avail=[0,2,3].includes(i)
        return (
          <g key={t}>
            <rect x={18+col*90} y={225+row*22} width="82" height="18" rx="5"
              fill={avail?'#e0f2fe':'#f1f5f9'} stroke={avail?'#0284c7':'#d1d5db'} strokeWidth="0.8" />
            <text x={59+col*90} y={237+row*22} fontSize="7" fill={avail?'#0284c7':'#9ca3af'} textAnchor="middle" fontFamily={F}>{t} {avail?'可預約':'已額滿'}</text>
          </g>
        )
      })}
      {/* Info panel */}
      <rect x="316" y="140" width="150" height="140" rx="8" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="1" />
      <text x="326" y="158" fontSize="7.5" fontWeight="bold" fill="#0c4a6e" fontFamily={F}>看診提醒</text>
      {['✅ 看診前請攜帶健保卡','✅ 提早 15 分鐘到院','✅ 攜帶相關病歷資料','⏰ 到院後請至掛號台','📍 3F 心臟科候診區'].map((t,i)=>(
        <text key={i} x="326" y={174+i*14} fontSize="6.5" fill="#0369a1" fontFamily={F}>{t}</text>
      ))}
      <rect x="316" y="260" width="150" height="18" rx="6" fill="#0284c7" />
      <text x="391" y="272" fontSize="7.5" fill="white" textAnchor="middle" fontFamily={F}>確認掛號</text>
    </>
  )
}

// ── TECH STARTUP WEBSITE ──────────────────────────────────────

function Tech0() {
  return (
    <>
      <Chrome url="cloudwise.tech" />
      <rect x="0" y="26" width="480" height="26" fill="#030712" />
      <rect x="14" y="31" width="80" height="16" rx="4" fill="#4f46e5" />
      <text x="20" y="43" fontSize="7" fontWeight="bold" fill="white" fontFamily={F}>雲智 CloudWise</text>
      {['產品','解決方案','定價','關於','部落格'].map((t,i)=>(
        <text key={i} x={112+i*60} y="43" fontSize="6.5" fill="#9ca3af" fontFamily={F}>{t}</text>
      ))}
      <rect x="420" y="32" width="50" height="16" rx="8" fill="#4f46e5" />
      <text x="445" y="43" fontSize="6.5" fill="white" textAnchor="middle" fontFamily={F}>免費試用</text>
      {/* Hero */}
      <rect x="0" y="52" width="480" height="145" fill="#030712" />
      {/* Stars/particles */}
      {[20,50,80,120,160,200,250,300,340,380,420,460].map((x,i)=>(
        <circle key={i} cx={x} cy={60+i*8%80} r="1" fill="white" opacity={0.3+i*0.05} />
      ))}
      {/* Gradient glow */}
      <ellipse cx="240" cy="130" rx="160" ry="60" fill="#4f46e5" opacity="0.15" />
      <text x="240" y="98" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle" fontFamily={F}>用 AI 加速企業數位轉型</text>
      <text x="240" y="112" fontSize="7" fill="#9ca3af" textAnchor="middle" fontFamily={F}>整合 ERP、CRM、BI 的智慧雲端平台</text>
      <text x="240" y="124" fontSize="7" fill="#9ca3af" textAnchor="middle" fontFamily={F}>讓資料驅動每一個商業決策</text>
      <rect x="160" y="134" width="90" height="22" rx="11" fill="#4f46e5" />
      <text x="205" y="148" fontSize="7.5" fill="white" textAnchor="middle" fontFamily={F}>免費 14 天試用</text>
      <rect x="258" y="134" width="70" height="22" rx="11" fill="transparent" stroke="#374151" strokeWidth="1" />
      <text x="293" y="148" fontSize="7.5" fill="#9ca3af" textAnchor="middle" fontFamily={F}>了解更多</text>
      {/* Feature pills */}
      <rect x="0" y="197" width="480" height="36" fill="#0a0f1e" />
      {['AI 智慧分析','即時資料同步','企業級安全','自訂儀表板','多語系支援'].map((t,i)=>(
        <g key={i}>
          <rect x={16+i*92} y="204" width="84" height="22" rx="11" fill="#1e293b" />
          <text x={58+i*92} y="219" fontSize="6.5" fill="#94a3b8" textAnchor="middle" fontFamily={F}>{t}</text>
        </g>
      ))}
      {/* Stats */}
      <rect x="0" y="233" width="480" height="50" fill="#0f172a" />
      {[['1,200+','企業客戶'],['99.9%','系統穩定率'],['< 0.5s','平均響應'],['24/7','技術支援']].map(([v,l],i)=>(
        <g key={i}>
          <text x={40+i*110} y="255" fontSize="13" fontWeight="bold" fill="#818cf8" fontFamily={F}>{v}</text>
          <text x={40+i*110} y="272" fontSize="6" fill="#64748b" fontFamily={F}>{l}</text>
        </g>
      ))}
    </>
  )
}

function Tech1() {
  return (
    <>
      <Chrome url="cloudwise.tech/features" />
      <rect x="0" y="26" width="480" height="26" fill="#030712" />
      <rect x="14" y="31" width="80" height="16" rx="4" fill="#4f46e5" />
      <text x="20" y="43" fontSize="7" fontWeight="bold" fill="white" fontFamily={F}>雲智 CloudWise</text>
      <rect x="0" y="52" width="480" height="30" fill="#0a0f1e" />
      <text x="240" y="65" fontSize="13" fontWeight="bold" fill="white" textAnchor="middle" fontFamily={F}>產品功能特點</text>
      <text x="240" y="78" fontSize="7" fill="#6b7280" textAnchor="middle" fontFamily={F}>整合 AI 的企業級雲端平台，一站式解決所有需求</text>
      <rect x="0" y="82" width="480" height="200" fill="#030712" />
      {[
        {char:'AI',color:'#6366f1',title:'AI 智慧分析',desc:'機器學習自動分析業務數據，提前預測趨勢'},
        {char:'同步',color:'#8b5cf6',title:'即時資料同步',desc:'跨系統即時同步，消除資料孤島'},
        {char:'BI',color:'#3b82f6',title:'自訂儀表板',desc:'拖拽式儀表板設計，不需工程師介入'},
        {char:'SEC',color:'#10b981',title:'企業級安全',desc:'SOC 2 Type II、ISO 27001 雙重認證'},
        {char:'i18n',color:'#0891b2',title:'多語系支援',desc:'支援中英日韓等 12 種語言，全球部署'},
        {char:'API',color:'#f59e0b',title:'API 整合',desc:'開放 RESTful API，輕鬆串接現有系統'},
      ].map(({char,color,title,desc},i)=>{
        const col=i%3, row=Math.floor(i/3)
        return (
          <g key={i}>
            <rect x={14+col*154} y={88+row*92} width="148" height="86" rx="8" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
            {/* Feature icon badge */}
            <rect x={24+col*154} y={96+row*92} width="32" height="18" rx="4" fill={color} />
            <text x={40+col*154} y={109+row*92} fontSize="6.5" fill="white" fontWeight="bold" textAnchor="middle" fontFamily={F}>{char}</text>
            <text x={24+col*154} y={128+row*92} fontSize="8" fontWeight="bold" fill="white" fontFamily={F}>{title}</text>
            <text x={24+col*154} y={140+row*92} fontSize="5.5" fill="#6b7280" fontFamily={F}>{desc.slice(0,18)}...</text>
            <text x={24+col*154} y={158+row*92} fontSize="6" fill="#818cf8" fontFamily={F}>了解更多 →</text>
          </g>
        )
      })}
    </>
  )
}

function Tech2() {
  return (
    <>
      <Chrome url="cloudwise.tech/pricing" />
      <rect x="0" y="26" width="480" height="26" fill="#030712" />
      <rect x="14" y="31" width="80" height="16" rx="4" fill="#4f46e5" />
      <text x="20" y="43" fontSize="7" fontWeight="bold" fill="white" fontFamily={F}>雲智 CloudWise</text>
      <rect x="0" y="52" width="480" height="30" fill="#0a0f1e" />
      <text x="240" y="65" fontSize="13" fontWeight="bold" fill="white" textAnchor="middle" fontFamily={F}>定價方案</text>
      <text x="240" y="78" fontSize="7" fill="#6b7280" textAnchor="middle" fontFamily={F}>靈活訂閱，隨企業規模成長</text>
      <rect x="0" y="82" width="480" height="200" fill="#030712" />
      {[
        {name:'Starter',price:'$2,900/月',tag:'',color:'#1e293b',border:'#334155',tc:'white',features:['5 位用戶','基礎儀表板','標準 API','Email 支援']},
        {name:'Business',price:'$8,900/月',tag:'最受歡迎',color:'#4f46e5',border:'#6366f1',tc:'white',features:['30 位用戶','進階 AI 分析','完整 API','24/7 支援']},
        {name:'Enterprise',price:'洽詢報價',tag:'',color:'#1e293b',border:'#334155',tc:'white',features:['無限用戶','專屬 AI 模型','客製整合','專屬客戶成功']},
      ].map(({name,price,tag,color,border,tc,features},i)=>(
        <g key={i}>
          <rect x={14+i*154} y={88} width="148" height="188" rx="10" fill={color} stroke={border} strokeWidth={i===1?2:1} />
          {tag && (
            <>
              <rect x={68+i*154} y="82" width="46" height="12" rx="6" fill="#818cf8" />
              <text x={91+i*154} y="91" fontSize="6" fill="white" textAnchor="middle" fontFamily={F}>{tag}</text>
            </>
          )}
          <text x={88+i*154} y="114" fontSize="10" fontWeight="bold" fill={tc} textAnchor="middle" fontFamily={F}>{name}</text>
          <text x={88+i*154} y="130" fontSize="10" fontWeight="bold" fill={i===1?'#a5b4fc':tc} textAnchor="middle" fontFamily={F}>{price}</text>
          {features.map((f,j)=>(
            <g key={j}>
              <text x={28+i*154} y={152+j*18} fontSize="8" fill="#22c55e">✓</text>
              <text x={40+i*154} y={152+j*18} fontSize="6.5" fill={i===1?'#c7d2fe':'#94a3b8'} fontFamily={F}>{f}</text>
            </g>
          ))}
          <rect x={24+i*154} y={222} width="116" height="18" rx="9" fill={i===1?'white':'#334155'} />
          <text x={82+i*154} y={234} fontSize="7" fill={i===1?'#4f46e5':'#94a3b8'} textAnchor="middle" fontFamily={F}>開始使用</text>
        </g>
      ))}
    </>
  )
}

function Tech3() {
  return (
    <>
      <Chrome url="cloudwise.tech/en" />
      <rect x="0" y="26" width="480" height="26" fill="#030712" />
      <rect x="14" y="31" width="80" height="16" rx="4" fill="#4f46e5" />
      <text x="20" y="43" fontSize="7" fontWeight="bold" fill="white" fontFamily={F}>CloudWise</text>
      {['Products','Solutions','Pricing','About','Blog'].map((t,i)=>(
        <text key={i} x={112+i*62} y="43" fontSize="6.5" fill="#9ca3af" fontFamily={F}>{t}</text>
      ))}
      <rect x="415" y="32" width="60" height="16" rx="8" fill="#4f46e5" />
      <text x="445" y="43" fontSize="6.5" fill="white" textAnchor="middle" fontFamily={F}>Free Trial</text>
      {/* Hero */}
      <rect x="0" y="52" width="480" height="150" fill="#030712" />
      <ellipse cx="240" cy="130" rx="160" ry="60" fill="#4f46e5" opacity="0.12" />
      <text x="240" y="90" fontSize="7.5" fontWeight="bold" fill="#818cf8" textAnchor="middle" fontFamily={F}>ENTERPRISE AI PLATFORM</text>
      <text x="240" y="108" fontSize="13" fontWeight="bold" fill="white" textAnchor="middle" fontFamily={F}>Accelerate Your</text>
      <text x="240" y="122" fontSize="13" fontWeight="bold" fill="#818cf8" textAnchor="middle" fontFamily={F}>Digital Transformation</text>
      <text x="240" y="136" fontSize="7" fill="#6b7280" textAnchor="middle" fontFamily={F}>Unified AI cloud platform for ERP, CRM, and BI</text>
      <rect x="165" y="146" width="90" height="22" rx="11" fill="#4f46e5" />
      <text x="210" y="160" fontSize="7" fill="white" textAnchor="middle" fontFamily={F}>Start Free Trial</text>
      <rect x="263" y="146" width="68" height="22" rx="11" fill="transparent" stroke="#374151" strokeWidth="1" />
      <text x="297" y="160" fontSize="7" fill="#9ca3af" textAnchor="middle" fontFamily={F}>Watch Demo</text>
      {/* Logos */}
      <rect x="0" y="202" width="480" height="36" fill="#0a0f1e" />
      <text x="240" y="215" fontSize="6.5" fill="#4b5563" textAnchor="middle" fontFamily={F}>TRUSTED BY LEADING COMPANIES</text>
      {['台達電子','緯創資通','廣達電腦','研華科技','英業達'].map((t,i)=>(
        <text key={i} x={42+i*88} y="232" fontSize="8" fontWeight="bold" fill="#374151" textAnchor="middle" fontFamily={F}>{t}</text>
      ))}
      {/* Features brief */}
      <rect x="0" y="238" width="480" height="44" fill="#030712" />
      {[['Real-time Sync','Instant data across all systems'],['AI Analytics','ML-powered insights'],['Enterprise Security','SOC 2 & ISO 27001'],['Open API','Connect any tool']].map(([t,d],i)=>(
        <g key={i}>
          <text x={14+i*118} y="254" fontSize="7.5" fontWeight="bold" fill="white" fontFamily={F}>{t}</text>
          <text x={14+i*118} y="266" fontSize="5.5" fill="#4b5563" fontFamily={F}>{d}</text>
        </g>
      ))}
    </>
  )
}

// ── SCREEN REGISTRY ──────────────────────────────────────────

const SCREENS: Record<string, (() => React.JSX.Element)[]> = {
  'mahjong-reservation':    [Mahjong0, Mahjong1, Mahjong2, Mahjong3],
  'court-rental':           [Court0,   Court1,   Court2,   Court3],
  'hr-management':          [HR0,      HR1,      HR2,      HR3,     HR4],
  'warehouse-management':   [WH0,      WH1,      WH2,      WH3],
  'bi-dashboard':           [BI0,      BI1,      BI2,      BI3,     BI4],
  'business-accounting':    [BA0,      BA1,      BA2,      BA3],
  'mes-reporting':          [MES0,     MES1,     MES2,     MES3],
  'restaurant-chain-website': [Restaurant0, Restaurant1, Restaurant2, Restaurant3],
  'law-firm-website':       [Law0,     Law1,     Law2,     Law3],
  'medical-clinic-website': [Medical0, Medical1, Medical2, Medical3],
  'tech-startup-website':   [Tech0,    Tech1,    Tech2,    Tech3],
}

// ── MAIN COMPONENT ───────────────────────────────────────────

interface PortfolioMockupProps {
  slug: string
  index?: number
  size?: 'card' | 'hero'
}

export default function PortfolioMockup({ slug, index = 0, size = 'card' }: PortfolioMockupProps) {
  const screens = SCREENS[slug] ?? Object.values(SCREENS)[0]
  const Screen = screens[Math.min(index, screens.length - 1)]

  return (
    <div className={`w-full h-full overflow-hidden ${size === 'hero' ? 'bg-gray-50' : 'bg-gray-50'}`}>
      <svg
        viewBox="0 0 480 300"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Screen />
      </svg>
    </div>
  )
}