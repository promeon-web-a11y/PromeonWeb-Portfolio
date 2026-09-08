# DESIGN.md — ノースリフォーム様 Webサイト デザインシステム

このドキュメントは **このフォルダ（`samples/01-north-reform/`）のノースリフォーム様サイト専用** のデザインシステムです。
このフォルダの外（他のサンプル、`po-forio` のポートフォリオ本体 `index.html` / `_ds/modernist-*`）には適用しません。別系統であり、混在させません。

- ヒアリングシート・サイト診断・参考サイト分析（筑波工芸 / M.t studio / たてのリフォーム / フジモト装飾 / 坂野設備）に基づいて策定。
- このファイルに定義されていない色・radius・shadow・フォントサイズを、ページ単位で勝手に追加しないこと。
- 迷ったら「装飾を足す」のではなく「写真・余白・罫線・グリッド」で解決する。

---

## 1. Design Concept

### コンセプト
**「清潔で見やすく、相談しやすい、地域のリフォーム店」**
白を基調に淡いグリーンを1色だけ添え、大きな写真と広い余白で「人柄と仕事への姿勢」を伝える。
軸は **清潔感 × 丁寧さ × 柔軟な個人対応**。

### ユーザーに与える印象
- 開いた瞬間に「清潔感のあるリフォーム会社だ」と分かる
- 「怖い職人ではない」「家の中を任せても大丈夫そう」「相談しやすそう」
- 「丁寧に仕事をしてくれそう」（施工技術だけでなく整理整頓・清掃まで）
- 「誰が来るのか分かる」安心感（代表本人が対応）
- 大手にはない柔軟さ、地域密着

### ブランドキーワード
清潔感 / 丁寧 / 明るい / シンプル / 見やすい / 親しみやすい / 信頼感 / 地域密着 / 落ち着き / 柔軟 / 代表が直接対応 / 小さな工事から / 無料相談

### 避ける印象（デザイン）
- 黒・濃色を多用した重厚感／建設会社的な"硬さ"
- 派手なグラデーション、原色、多色使い
- 文字が小さい、情報量が多すぎる、詰め込み
- 動きが激しい、演出過多
- 営業感が強い、安売り前面（「激安」「最安」「絶対」は文言としても使わない）

---

## 2. Color System

色数は最小限。ブランド色は **グリーン1系統のみ**。原色・グラデーション・黒ベタ面は使わない。

| Token | HEX | 用途 |
|---|---|---|
| **Primary** | `#2F6B4F` | ダークグリーン。1次CTA塗り、見出しのアクセント線、STEP番号、インラインリンク、フォーカスリング |
| **Secondary** | `#5B9E7A` | 中間グリーン。アイコン塗り、タグ、罫線アクセント、装飾的な小要素（※本文テキストには使わない＝コントラスト不足） |
| **Accent** | `#E8F0E9` | 淡グリーンの面。交互セクション背景・カード地・FAQ・CTA帯の"1つだけの色味"。ポップな差し色ではなく「静かな面」として使う |
| **Background** | `#FFFFFF` | ページ基本背景 |
| **Surface** | `#F7F9F7` | オフホワイト。交互セクション、フッター、入力欄、テーブルヘッダ |
| **Text Primary** | `#2B2E2B` | 本文・見出し（ほぼ黒に近いダークグレー） |
| **Text Secondary** | `#6B726B` | キャプション、補助文、ラベル、メタ情報 |
| **Border** | `#E3E7E3` | ヘアライン区切り、カード外周、テーブル行罫線 |

### 状態色 / 例外（新規追加不可）
| Token | HEX | 用途 |
|---|---|---|
| Primary Hover | `#255840` | Primaryボタン hover |
| Primary Active | `#1F4A36` | Primaryボタン active |
| LINE Brand | `#06C755` | **LINEボタン専用**。他要素に流用しない |

### 使い分けルール
- 面積比の目安：白 8割 / Surface・Accent の淡色 約2割 / Primary はページの数% のみ。
- **アクセント（Primary/Secondary）は「操作」と「要点」だけ**：CTA、見出しの符牒線、STEP番号、アイコン、リンク、CTA帯背景。
- 背景一面をグリーンで塗るのは **FV帯** と **CTA直前バナー** のみ（それも `Accent` の淡さで）。
- **本文・長文をグリーンで組まない。** 強調は色ではなく `font-weight: 500` ＋前後の余白で。
- インラインリンクは `Primary` ＋アンダーラインで、色だけに依存しない。

### `:root` トークン
```css
:root {
  --color-primary:        #2F6B4F;
  --color-primary-hover:   #255840;
  --color-primary-active:  #1F4A36;
  --color-secondary:      #5B9E7A;
  --color-accent:         #E8F0E9;
  --color-bg:             #FFFFFF;
  --color-surface:        #F7F9F7;
  --color-text:           #2B2E2B;
  --color-text-sub:       #6B726B;
  --color-border:         #E3E7E3;
  --color-line-brand:     #06C755; /* LINEボタン専用 */
}
```

---

## 3. Typography

### フォント
- **日本語**：`"Noto Sans JP"`
  fallback: `"Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "YuGothic", Meiryo, sans-serif`
- **英字・数字**：`"Inter"`
  fallback: `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`
  用途は限定：英語ラベル（`SERVICE` 等）、`STEP 01`、電話番号、価格・築年数などの数値。見出し・本文は日本語フォントで統一。
- **明朝は使わない。**
- 読み込むウェイトは **400 / 500 / 700 の3種のみ**。900（極太）は使わない。
- 全体に `font-feature-settings: "palt" 1;`（約物アキ詰め）。

### スケール

| Token | PC `font-size` | SP `font-size` | `clamp()` 推奨 | `font-weight` | `line-height` | `letter-spacing` |
|---|---|---|---|---|---|---|
| **H1**（FVキャッチ） | 44px | 28px | `clamp(28px, 5.2vw, 44px)` | 700 | 1.35 | 0.04em |
| **H2**（セクション見出し） | 30px | 22px | `clamp(22px, 3.4vw, 30px)` | 700 | 1.4 | 0.04em |
| **H3**（カード見出し・小項目） | 20px | 18px | `clamp(18px, 2vw, 20px)` | 700 | 1.5 | 0.03em |
| **H4**（小見出し・強調行） | 17px | 16px | `clamp(16px, 1.6vw, 17px)` | 700 | 1.6 | 0.02em |
| **Body** | 16px | 15.5px | `clamp(15.5px, 1.4vw, 16px)` | 400 | 1.9 | 0.02em |
| **Small**（補助文・キャプション） | 14px | 13.5px | — | 400 | 1.8 | 0.02em |
| **Caption**（画像キャプション・注記） | 12.5px | 12px | — | 500 | 1.7 | 0.06em |
| **Label**（英語ラベル・STEP） | 12.5px | 11.5px | — | 700 | 1.0 | 0.14em（`text-transform: uppercase`、色は Primary か Text Secondary） |

### ルール
- 見出しと本文で**書体を変えない**。階層は **サイズ＋太さ** だけで作る。
- ジャンプ率は中庸（隣接段で概ね 1.25〜1.5倍）。H3 と Body の差を詰めすぎない。
- 本文 `font-size` は **15px 未満にしない**（SP 15.5px 基準 / 入力欄は iOS ズーム防止で 16px）。
- 強調は `font-weight: 500`（＋必要なら `--color-primary`）。下線・極太・背景ハイライトは使わない。
- 段落の `margin-bottom` は `16px`（1em相当）以上。

### `:root` トークン
```css
:root {
  --font-ja: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "YuGothic", Meiryo, sans-serif;
  --font-en: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;

  --fs-h1: clamp(28px, 5.2vw, 44px);
  --fs-h2: clamp(22px, 3.4vw, 30px);
  --fs-h3: clamp(18px, 2vw, 20px);
  --fs-h4: clamp(16px, 1.6vw, 17px);
  --fs-body: clamp(15.5px, 1.4vw, 16px);
  --fs-small: 14px;
  --fs-caption: 12.5px;
  --fs-label: 12.5px;

  --lh-heading: 1.4;
  --lh-body: 1.9;
}
```

---

## 4. Layout

### Spacing スケール（この9値のみ。新規の数値を足さない）
```
4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 120
```
`4` はアイコンと文字の隙間など極小用途のみ。基本は `8` の倍数で考える。

### コンテナ幅
| Token | 値 | 用途 |
|---|---|---|
| `--container-max` | `1120px` | 標準セクションの中央寄せ幅 |
| `--container-narrow` | `680px` | 読み物（代表挨拶、強みの説明文、FAQ回答、ご依頼の流れ本文）。1行約35〜42字 |
| `--container-wide` | `1280px` | 施工事例グリッドなど写真主体のセクション（任意） |
| FV / 全幅写真バンド / CTA帯 | 全幅（100vw） | コンテナ制約なし |

### 左右 padding
- Desktop / Tablet：`24px`
- Mobile：`20px`

### セクション上下余白（`padding-block`）
| Token | Desktop | Tablet | Mobile | 用途 |
|---|---|---|---|---|
| `--section-y` | `96px` | `72px` | `56px` | 標準セクション |
| `--section-y-lg` | `120px` | `96px` | `64px` | FV隣接・区切りを強めたい所（多用しない） |
| `--section-y-sm` | `64px` | `48px` | `40px` | 全幅写真バンド・CTA帯 |

`clamp(56px, 10vw, 96px)` で可変にしてよい。

### 主要 gap
| Token | 値 | 用途 |
|---|---|---|
| `--gap-col` | Desktop `56px` / Mobile `32px` | 2カラム（写真↔テキスト）の左右間隔 |
| `--gap-card` | Desktop `32px` / Mobile `20px` | カードグリッドの gap |
| `--gap-stack` | `16px` | 見出し→本文、段落間 |
| `--gap-block` | `32px` | サブブロック間 |
| `--gap-cta` | `40px` | 本文→CTA の間隔 |

### `:root` トークン
```css
:root {
  --space-4: 4px;   --space-8: 8px;   --space-16: 16px; --space-24: 24px;
  --space-32: 32px; --space-48: 48px; --space-64: 64px; --space-96: 96px; --space-120: 120px;

  --container-max: 1120px;
  --container-narrow: 680px;
  --container-wide: 1280px;
  --pad-inline: 24px;          /* mobile: 20px */

  --section-y: 96px;           /* tablet 72 / mobile 56 */
  --section-y-lg: 120px;       /* tablet 96 / mobile 64 */
  --section-y-sm: 64px;        /* tablet 48 / mobile 40 */

  --gap-col: 56px;             /* mobile 32 */
  --gap-card: 32px;            /* mobile 20 */
  --gap-stack: 16px;
  --gap-block: 32px;
  --gap-cta: 40px;
}
```

---

## 5. Grid

### 1カラム
- **使用条件**：モバイル全般／読み物ブロック（`--container-narrow` 680px）／FVキャッチ／ご依頼の流れの各STEP本文／対応エリアのテキスト。
- 中央寄せにするのは「セクション英語ラベル」「セクション見出し」「CTA帯」だけ。本文・小見出しは**左寄せ**。

### 2カラム（`1fr 1fr` / `--gap-col`）
- **使用条件**：「ノースリフォームの強み」（清掃・清潔感／柔軟な個人対応／代表が直接対応／小さな工事OK）、サービス詳細、代表者紹介。
- **写真↔テキストの左右交互**（1つ目は写真左、2つ目は写真右…）。**これがサイトの背骨。**
- Mobile：縦積み。順序は **写真 → テキスト**。
- Tablet：内容が少なければ2カラム維持（gap 40px）、多ければ縦積み。

### 3カラム（`repeat(auto-fit, minmax(280px, 1fr))`）
- **使用条件**：**サービス一覧のみ**（写真カード：写真上＋タイトル＋補足1行＋リンク）。
- Tablet：2カラム。Mobile：1カラム。

### 2〜3カラム（`repeat(auto-fit, minmax(300px, 1fr))`）
- **使用条件**：施工事例グリッド（写真主役、ビフォーアフター）。初回公開3〜6件。

### 反復禁止ルール
- **同じ3カラムカード構成を連続させない。** 3カラム系は最大2箇所（サービス一覧／施工事例）まで。
- その2つの間に必ず**異なる型のセクション**（代表者紹介＝2カラム交互、または全幅写真バンド）を挟む。
- セクションごとに「型」を変える：全幅写真＋重ねテキスト → 2カラム交互 → カードグリッド → 番号付き縦ステップ → 開閉FAQ → 全幅CTA帯。
- 背景色も交互（`--color-bg` / `--color-surface` または `--color-accent`）、2カラムの写真位置も交互。

### 推奨セクション順（参考：たてのリフォーム / 坂野設備）
1. FV（全幅写真＋キャッチ）
2. お客様の悩み（悩みの列挙 →「それ、ノースリフォームにご相談ください」）
3. ノースリフォームの強み（2カラム左右交互 ×3〜4）
4. サービス紹介（写真カード 3カラム）
5. 施工事例（2〜3カラム、ビフォーアフター）
6. 代表者紹介（3:4写真＋本人の言葉）
7. ご依頼の流れ（STEP 01〜07、番号付き縦ステップ）
8. 対応エリア（札幌＋江別・北広島・石狩など）
9. よくある質問（アコーディオン）
10. CTA帯（`--color-accent` 全幅／電話・フォーム・LINE）
11. フッター（会社情報・エリア・LINE）

---

## 6. Images

| 用途 | 推奨アスペクト比 | 表示方法 | `object-fit` |
|---|---|---|---|
| **Hero** | PC `16:9` ／ SP `4:5`（`<picture>` でアート出し分け） | 全幅。テキストは左下の白パネル or 上部の `--color-primary` 半透明帯に載せて可読性確保。動きはフェードインのみ | `cover` / `object-position: center` |
| **About（会社・現場）** | `3:2` | 2カラムの片側、幅100%、`--radius`(6px) | `cover` |
| **Service** | `3:2` | 写真カード上部、幅100%、`--radius` | `cover` |
| **Works（施工事例）** | `4:3`。ビフォーアフターは**同比率ペア**（横並び or 縦並び） | グリッド。写真の隅に「施工前 / 施工後」ラベル（`Small` / `--color-text-sub`） | `cover` |
| **Staff（代表単体）** | `3:4` 縦 | 幅 `320〜400px`、左寄せ。`--radius` | `cover` / `object-position: center top` |
| **その他：全幅写真バンド** | `21:9`（PC）／`16:9`（SP） | 全幅、`--radius-none`(0)、単調さを断つ区切りとして | `cover` |
| **その他：本文中写真（工具・素材など）** | `3:2` | カラム内、幅100%、`--radius` | `cover` |

### 共通ルール
- すべて `object-fit: cover; object-position: center;`（人物のみ `center top` 可）。
- 角丸は画像も **`--radius`(6px) に統一**。全幅バンドのみ `0`。
- `width` / `height` 属性を必ず付与（CLS防止）。FV以外は `loading="lazy"`、`decoding="async"`。
- **モノクロ・セピア加工しない。** 彩度を上げすぎない自然な色調（清潔感・明るさ優先）。
- 写真がページ面積の **40〜55%** を占めるよう意識。テキストのみのセクションを2つ以上連続させない。
- 「完成写真」偏重を避け、**養生・清掃・代表の作業中**など"どう働くか"が分かる写真を優先。

---

## 7. Buttons / CTA

### Primary Button
| 項目 | 値 |
|---|---|
| height | `52px`（最小）。SPは全幅 |
| padding | `16px 28px`（SP `16px 24px`） |
| radius | `--radius`（6px） |
| font | `--fs-body`(16px) / `font-weight: 700` / `letter-spacing: 0.04em` / 日本語フォント |
| color | `#FFFFFF` |
| background | `--color-primary`（#2F6B4F） |
| border | なし |
| hover | `background: var(--color-primary-hover)`（#255840）。`transition: background .2s ease`。**影・拡大なし** |
| active | `background: var(--color-primary-active)`（#1F4A36） |
| focus-visible | `outline: 2px solid var(--color-primary); outline-offset: 2px` |

### Secondary Button
| 項目 | 値 |
|---|---|
| height / padding / radius / font | Primary と同じ |
| color | `--color-primary` |
| background | `--color-bg`（#FFFFFF） |
| border | `1.5px solid var(--color-primary)` |
| hover | `background: var(--color-accent)`（#E8F0E9）。border 色は変えない |
| focus-visible | Primary と同じ |

### LINE Button（任意・変則）
- `background: var(--color-line-brand)`（#06C755）/ `color: #fff` / LINEアイコン付き / radius・font は共通。
- **LINE導線以外に使わない。**

### Text Link
| 項目 | 値 |
|---|---|
| color | `--color-primary` |
| decoration | `underline`、`text-underline-offset: 3px`（本文インラインリンクは必ず下線） |
| hover | `color: var(--color-primary-hover)`。装飾は変えない |
| カード内リンク（「詳細はこちら →」） | 下線なし可。矢印付き。hover で色変化＋矢印 `transform: translateX(2px)` |

### CTA 配置ルール
- CTAブロックは**共通コンポーネント化**し、`①お客様の悩みの後 ②強みの後 ③施工事例の後 ④フッター直前` の計4回、自然な位置に反復。
- CTA直前に必ず不安を下げる1〜2文（例：「まだ工事するか決まっていなくても大丈夫です。写真を送っていただければ、費用感の目安をお伝えします。」）。
- 3導線（電話 / お問い合わせフォーム / LINE）を**均等な横並びボタン**で。**LINEを最優先**（位置または塗りで）。
- 文言は「無料相談する」「無料見積もりを依頼する」「LINEで相談する」。
- SP：**画面下固定のCTAバー**（電話｜LINE｜フォームの3分割）を常時表示。

---

## 8. Border / Radius / Shadow

### Radius（使用可能な値を限定。これ以外を新規追加しない）
```css
--radius-none: 0;      /* 全幅写真バンド、罫線区切り、テーブル */
--radius: 6px;         /* 画像・カード・ボタン・入力欄・アコーディオン ほぼ全て */
--radius-sm: 4px;      /* タグ / チップ のみ */
```
- **禁止**：pill（`999px` / `50%` の角丸ボタン）、`8px` を超える radius、要素ごとに違う radius。

### Border
```css
--border: 1px solid var(--color-border);           /* 区切り線・カード外周・テーブル行 */
--border-strong: 1.5px solid var(--color-primary); /* Secondaryボタン・強調のみ */
```
- **禁止**：二重線、`2px` 以上の太罫線、点線・破線、装飾用の色付き太線。

### Shadow（必要最小限。これ以外を新規追加しない）
```css
--shadow-none: none;                                  /* 既定。奥行きは余白と罫線で出す */
--shadow-card: 0 2px 8px rgba(20, 40, 25, 0.05);      /* カードに付ける場合のみ・1段だけ */
--shadow-header: 0 1px 0 rgba(0, 0, 0, 0.06);         /* stickyヘッダーのスクロール後の下境界のみ */
```
- カードは **「`--border` か `--shadow-card` のどちらか一方」**。両方は使わない。
- **禁止**：色付き影、多重影、`0 10px 30px` 級の強い影、hover で影を強める演出、ページ独自の shadow 追加。

### 原則
- **新しい color / radius / shadow / font-size をページ単位で足さない。** 必要になったらまずこの DESIGN.md を更新し、レビューしてから使う。

---

## 9. Animation

### 使用する
| 対象 | 内容 | duration | easing |
|---|---|---|---|
| スクロールイン | `opacity: 0→1` ＋ `translateY: 16px→0`。`IntersectionObserver` で**初回1回のみ**。**セクション見出し＋主要ブロック単位**に付与（全要素に一律で付けない） | `500ms` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| ホバー | `background` / `color` / `transform: translate(X/Y, 2px)` | `200ms` | `ease` |
| アコーディオン（FAQ） | `grid-template-rows` または `max-height` | `250ms` | `ease` |
| ハンバーガーメニュー開閉 | `transform` / `opacity` | `200ms` | `ease` |
| ページ内アンカー | `scroll-behavior: smooth` | — | — |

### 使用しない
- パララックス、スクロール連動の拡大・移動・回転
- カウントアップ数字
- 自動再生カルーセル / スライダー
- ループする常時アニメーション（点滅・バウンス・浮遊）
- **全要素への一律 `fade-in`**
- `duration > 600ms` の演出、ページ遷移アニメーション

### 共通
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
  /* スクロールインは opacity:1 / transform:none で即表示 */
}
```
- トークン：`--dur-fast: 200ms; --dur-base: 250ms; --dur-enter: 500ms; --ease-enter: cubic-bezier(0.16, 1, 0.3, 1);`

---

## 10. Responsive

### Breakpoints
```css
/* Desktop : >= 1024px  （基準） */
/* Tablet  : 768px – 1023px */
/* Mobile  : <= 767px   （<= 480px でさらに微調整） */
```

| 項目 | Desktop (≥1024) | Tablet (768–1023) | Mobile (≤767) |
|---|---|---|---|
| 左右 padding | `24px` | `24px` | `20px` |
| section 上下 | `96px`（帯 `64px`） | `72px`（帯 `48px`） | `56px`（帯 `40px`） |
| Body 文字 | `16px` | `16px` | `15.5px`（最小15px / 入力欄16px） |
| H1 | `44px` | `clamp` 約36px | `28px` |
| コンテナ | `1120px` 中央、超過分は左右余白のみ増やす | `100%`（padリング） | `100%` |
| 2カラム交互 | `1fr 1fr` / gap `56px` | `1fr 1fr` / gap `40px`（要素多→縦積み） | 1カラム（**写真→テキスト**の順） |
| 3カラムカード | 3列 | 2列 | 1列 |
| ナビゲーション | 横並び＋「無料相談」ボタン常設 | 横並び or ハンバーガー | ハンバーガー。ヘッダーに電話/LINEアイコン常設＋**画面下固定CTAバー** |
| Hero 高さ | `80–92vh` | `80vh` | `72–80vh`（スクロールで2番目の要素がすぐ見える） |
| 画像 | アスペクト比通り | 同左 | Hero のみ `4:5` に出し分け可 |

### レイアウト変更ルール
- ブレークポイントは上記3つ（＋480）のみ。中途半端な独自 BP を増やさない。
- 崩れは「要素を小さくする」より「縦積みにする」で解決。
- SP で**文字を縮小しすぎない**。問い合わせ導線を常に画面内に置く（下固定CTAバー）。

---

## 11. Japanese Typography Rules

- **不自然な改行を避ける**：見出しは意味の区切りで手動改行（`<br>`）。意図しない位置で折れる語のまとまりは `<span style="white-space: nowrap">…</span>` で保護。
- **1〜2文字だけ次行に残さない**（孤立・禁則）：本文に `text-wrap: pretty;` ＋ `word-break: auto-phrase;`、見出しに `text-wrap: balance;`。
- **見出しの改行位置を調整**：レビュー時に PC / Tablet / Mobile それぞれで折り返しを目視確認。3行以上に割れる見出しは文言を短くする。
- **文章の横幅を広げすぎない**：本文カラムは `--container-narrow`（680px、約35〜42字/行）を上限。
- **本文を小さくしすぎない**：`font-size` は SP 15.5px / PC 16px 基準。15px 未満禁止。`line-height: 1.9`。
- `font-feature-settings: "palt" 1;`（約物アキ詰め）、本文に `line-break: strict;`。
- 数字・英字・記号は半角。三点リーダは `……`、波ダッシュは `〜`。
- 感嘆符・多重約物（！！）を多用しない（営業感の回避）。
- カタカナ語の連続を避け、専門用語には括弧で短い言い換えを添える（法律・建材用語など）。
- 1段落は3行以内、箇条書きは6項目以内を目安に。

---

## 12. Anti-AI Design Rules

### やらないこと
- 紫〜青系グラデーションを安易に使わない（**グラデーション自体を使わない**。面は `--color-accent` / `--color-surface` のフラット塗りのみ）
- 不要なカードUIを量産しない（カードは「サービス一覧」「施工事例」に限定。強み・理由をカードで並べない）
- 全セクションを中央揃えにしない（本文・小見出しは**左寄せ**。中央寄せはセクション英語ラベル / セクション見出し / CTA帯のみ）
- box-shadow を乱用しない（`--shadow-card` / `--shadow-header` の2つだけ。奥行きは**余白と罫線**で）
- 巨大な border-radius を乱用しない（`0 / 6px / 4px` のみ。pill・8px超・要素ごとに違う値は禁止）
- アイコンを装飾目的だけで使わない（線アイコン単色を **電話・LINE・メール・エリア・矢印・チェック** の機能用途のみ。強みはアイコンで並べず**写真＋見出し**）
- 3カラムカードを何度も繰り返さない（3カラム系は最大2箇所。間に必ず別の型のセクションを挟む）
- 意味のない英語ラベルを乱用しない（英語は各セクションの符牒＝`SERVICE` `WORKS` `FLOW` `FAQ` `CONTACT` 程度を `Label` サイズで最小限。キャッチ・本文は日本語）
- pill 型 UI を乱用しない（ボタンは長方形＋`6px`。タグのみ `4px`。`999px` 禁止）
- 全要素に fade-in を付けない（スクロールインは**セクション見出し＋主要ブロック単位**、初回1回）
- 情報を詰め込みすぎない（1セクション＝1メッセージ、1画面の要素4つまで、段落3行以内、箇条書き6項目以内）

### 代わりに優先すること
**写真 / タイポグラフィ（サイズ＋太さの階層）/ 余白 / グリッド（2カラム交互の背骨）/ 罫線（1px ヘアライン）/ 背景切り替え（白 ↔ 淡色の交互）/ レイアウトの強弱（型の切り替え・写真位置の交互・全幅バンド）**

---

## 付録：`:root` 統合トークン（実装時の起点）

```css
:root {
  /* Color */
  --color-primary: #2F6B4F;
  --color-primary-hover: #255840;
  --color-primary-active: #1F4A36;
  --color-secondary: #5B9E7A;
  --color-accent: #E8F0E9;
  --color-bg: #FFFFFF;
  --color-surface: #F7F9F7;
  --color-text: #2B2E2B;
  --color-text-sub: #6B726B;
  --color-border: #E3E7E3;
  --color-line-brand: #06C755;

  /* Type */
  --font-ja: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "YuGothic", Meiryo, sans-serif;
  --font-en: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --fs-h1: clamp(28px, 5.2vw, 44px);
  --fs-h2: clamp(22px, 3.4vw, 30px);
  --fs-h3: clamp(18px, 2vw, 20px);
  --fs-h4: clamp(16px, 1.6vw, 17px);
  --fs-body: clamp(15.5px, 1.4vw, 16px);
  --fs-small: 14px;
  --fs-caption: 12.5px;
  --fs-label: 12.5px;
  --lh-heading: 1.4;
  --lh-body: 1.9;

  /* Spacing (4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 120) */
  --space-4: 4px;   --space-8: 8px;   --space-16: 16px; --space-24: 24px;
  --space-32: 32px; --space-48: 48px; --space-64: 64px; --space-96: 96px; --space-120: 120px;

  /* Layout */
  --container-max: 1120px;
  --container-narrow: 680px;
  --container-wide: 1280px;
  --pad-inline: 24px;
  --section-y: 96px;
  --section-y-lg: 120px;
  --section-y-sm: 64px;
  --gap-col: 56px;
  --gap-card: 32px;
  --gap-stack: 16px;
  --gap-block: 32px;
  --gap-cta: 40px;

  /* Border / Radius / Shadow */
  --radius-none: 0;
  --radius: 6px;
  --radius-sm: 4px;
  --border: 1px solid var(--color-border);
  --border-strong: 1.5px solid var(--color-primary);
  --shadow-none: none;
  --shadow-card: 0 2px 8px rgba(20, 40, 25, 0.05);
  --shadow-header: 0 1px 0 rgba(0, 0, 0, 0.06);

  /* Motion */
  --dur-fast: 200ms;
  --dur-base: 250ms;
  --dur-enter: 500ms;
  --ease-enter: cubic-bezier(0.16, 1, 0.3, 1);
}

@media (max-width: 767px) {
  :root {
    --pad-inline: 20px;
    --section-y: 56px;
    --section-y-lg: 64px;
    --section-y-sm: 40px;
    --gap-col: 32px;
    --gap-card: 20px;
  }
}
```
