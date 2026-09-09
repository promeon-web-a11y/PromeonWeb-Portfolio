# DESIGN.md — 株式会社北翠園 Webサイト デザインシステム

このドキュメントは **このフォルダ（`samples/02-hokusuien/`）の北翠園様サイト専用** のデザインシステムです。
このフォルダの外（他のサンプル、`po-forio` のポートフォリオ本体 `index.html` / `_ds/modernist-*`、`samples/01-north-reform/`）には適用しません。別系統であり、混在させません。

- ヒアリングシート（Standardプラン想定）・参考サイト分析（AUREA / 森造園 / 道央緑化 / 南香園 / 高重造園）・会社情報・サイトの目的・ターゲットに基づいて策定。
- このファイルに定義されていない 色 / radius / shadow / フォントサイズ / breakpoint を、ページ単位で勝手に追加しないこと。
- 迷ったら「装飾を足す」のではなく「写真・余白・罫線・グリッド・背景切り替え」で解決する。
- 参考サイトの役割分担：**構成＝森造園 / FV・写真・タイポ・動き＝AUREA / サービス・FAQ・導線＝道央緑化 / 人・地域・歴史＝南香園 / 歴史の見せ方＝高重造園**。

## ファイル構成（Standardプラン：5ページ）

```
samples/02-hokusuien/
├─ index.html      … トップページ
├─ service.html    … 事業内容
├─ works.html      … 施工事例
├─ about.html      … 私たちについて
├─ company.html    … 会社案内・お問い合わせ（会社概要 / アクセス / FAQ / フォーム）
└─ assets/
   ├─ style.css    … 全ページ共通のスタイル（トークン・コンポーネント）
   └─ app.js       … 全ページ共通のスクリプト（メニュー・スクロールイン・FV・フォーム）
```

- **CSS / JS は `assets/` の共通ファイル1本ずつに集約**する。ページごとに `<style>` / `<script>` を書き分けない。ビルドツールは使わない（素の HTML / CSS / JS）。
- **ヘッダー / フッター / 画面下固定 CTA バーは全ページで同一マークアップ**（インクルード機構がないので各 HTML に複製）。ナビの現在地は `aria-current="page"` で示す。
- 各ページの `<title>` `<meta name="description">` はページ内容に合わせて個別に書く（§ SEO）。`robots` は `noindex`（ポートフォリオ用サンプルのため）。

---

## 1. Design Concept

### コンセプト
**「地域で昔から信頼されてきた造園会社を、いまの時代の見やすさで表現するサイト」**
温かみのあるオフホワイトを基調に、深く沈んだ緑を1色だけ添える。大きな写真と広い一定の余白で「真面目な仕事ぶり」と「人の気配」を伝える。
軸は **地域密着 × 長年の信頼 × 人とのつながり × 庭を長く守る**。
「オシャレな造園会社」ではなく「地域で昔から信頼されてきた会社を、現代的な見やすさで見せる」。

### ユーザーに与える印象
- 開いた瞬間に「札幌の造園会社だ」「自然で、落ち着いた、ちゃんとした会社だ」と分かる
- 「昔から地域にある、ちゃんとした会社なんだな」
- 「職人さんの雰囲気も分かって安心できる」
- 「大きな工事だけじゃなく、剪定くらいでも相談できそう」「一度庭を見てもらおうかな」
- 「作って終わりではなく、長く付き合ってくれそう」
- 価格の安さではなく「安心して長く付き合える造園会社」という印象

### ブランドキーワード
地域密着 / 長年の信頼 / 人とのつながり / 職人の顔が見える / 庭を長く守る / 地域とともに歩む / 自然 / 落ち着き / 清潔感 / 温かみ / 誠実 / 少し歴史を感じる / 現代的 / 相談しやすい / 庭木1本から

### 避ける印象（デザイン）
- 派手／動きが激しすぎる／演出過多
- 高級感が強すぎる・前衛的すぎる（AUREAをそのまま真似ない／高級住宅専門の造園会社のようにしない）
- 黒の多用／都会的すぎる／若者向けすぎる
- 英語が多すぎる（対訳ラベルの羅列）
- 何をしている会社か分かりにくい／写真より装飾が目立つ／文字が小さい
- 営業色が強い（「今すぐ申し込む」「限定」「キャンペーン」「激安」「絶対」、感嘆符の多用は文言としても使わない）
- 金・和柄による重厚感／建設会社的な硬さ
- 明朝の全面採用による古臭さ（明朝は §3 の限定用途のみ）
- ビビッドな緑・原色・グラデーション・多色使い／情報の詰め込み

### FV / Hero レイアウト原則（厳守。参考サイト実測に基づく）

参考5サイト（森造園・AUREA・道央緑化・南香園・高重造園）の FV は **例外なく「全面写真＋その写真の上に直接テキスト」**。
白色・半透明の大きなカードで写真を隠す構成は **1つも無い**。よって当サイトも下記に倣う。

**採用＝パターンB（全面写真型）— このサイトの既定**
- 全幅の FV 写真（庭＋そこで働く職人が伝わる1枚）。
- テキスト（英字エセ見出し → メインコピー → 説明3行 → CTA1つ）は **写真の上に直接、中央寄せ**で置く（森造園・AUREA・高重造園と同じ。道央緑化のみ左寄せ）。
- 可読性は **薄い暗色グラデーション（上→下で 0 →約35%）** のみで確保する。白い長方形・パネル・`backdrop-filter` は使わない。
- メインコピーの背後に **淡いウォーターマーク語**（`HOKUSUIEN`）を薄く1つ置いてよい（AUREA "AUREA" / 森造園 "MORI" に倣う）。多用しない＝ FV と SINCE 1989 のみ。
- 右下に小さく `SCROLL` の合図、上部に小さく `SAPPORO / SINCE 1989` の帯。
- CTA は緑の Primary ボタン1つ（AUREA・道央緑化と同じ）。

**禁止（前回の逸脱）**
- 全面背景写真 ＋ 大型の白いテキストボックス／`backdrop-filter: blur` のパネル
- 写真の 30% 以上を不透明な面で隠す／可読性確保のためだけに白い長方形を置く
- 参考サイトに無い独自の FV レイアウト（左右分割など）を推測で追加する

**その他**
- SP：写真は `4:5` で全幅、その上に同じ順でテキストを中央寄せ（各社の SP と同様）。写真が暗く出ない場合はグラデーションを一段強める。
- 下層ページ（service/works/about/company）の先頭は **写真を使わない `.page-head`**（`--color-surface` のフラット面に英字ラベル＋H1＋リード）。FV演出はトップのみ。

---

## 2. Color System

色数は最小限。ブランド色は **緑1系統のみ**。原色・グラデーション・黒ベタ面は使わない。全体に彩度を1段落とし、暖色寄りの無彩色でまとめる。

| Token | HEX | 用途 |
|---|---|---|
| **Primary** | `#2E4A37` | 深いモミ緑。1次CTA塗り、見出し左の符牒線、`POINT 01` の番号、`1989` の数字、インラインリンク、フォーカスリング |
| **Secondary** | `#6E7F63` | セージ／オリーブ。アイコン塗り、タグ、罫線アクセント、装飾的な小要素（※本文テキストには使わない＝コントラスト不足） |
| **Accent** | `#E7EBE0` | 淡い緑の面。FV帯・CTA直前バナーの"1つだけの色味"。ポップな差し色ではなく「静かな面」。多用しない |
| **Background** | `#FBFAF6` | ページ基本背景。温かみのあるオフホワイト（紙っぽさ） |
| **Surface** | `#F1EEE4` | 温かいグレージュ。交互セクション、ページヘッダ、フッター、入力欄、テーブルヘッダ |
| **Text Primary** | `#26261F` | 本文・見出し。純黒にしない暖かいダークグレー |
| **Text Secondary** | `#6A695C` | キャプション、補助文、ラベル、メタ情報（14px以上で使用） |
| **Border** | `#E2DDD0` | ヘアライン区切り、カード外周、テーブル行罫線 |

### 状態色 / 例外（新規追加不可）
| Token | HEX | 用途 |
|---|---|---|
| Primary Hover | `#243B2C` | Primaryボタン hover |
| Primary Active | `#1D3123` | Primaryボタン active |
| Earth（アクセント最小） | `#8A7856` | 樹皮／枯草。`1989` の下線、歴史セクションのヘアラインアクセント等、**面ではなく線でごく少量**。CTA・本文には使わない |
| LINE Brand | `#06C755` | **LINEボタン専用**。他要素に流用しない |

### 使い分けルール
- 面積比の目安：Background 約8割 / Surface・Accent の淡色 約2割 / Primary はページの数% のみ。
- **アクセント（Primary/Secondary）は「操作」と「要点」だけ**：CTA、見出しの符牒線、`POINT` 番号、アイコン、リンク、`1989`。
- 背景一面を緑で塗るのは **FV帯** と **CTA直前バナー** のみ（それも `Accent` の淡さ）。
- **本文・長文を緑で組まない。** 強調は色ではなく `font-weight: 500` ＋前後の余白で。
- インラインリンクは `Primary` ＋アンダーラインで、色だけに依存しない。
- グラデーションは使わない。面は `Background` / `Surface` / `Accent` のフラット塗りのみ。

### `:root` トークン
```css
:root {
  --color-primary:        #2E4A37;
  --color-primary-hover:   #243B2C;
  --color-primary-active:  #1D3123;
  --color-secondary:      #6E7F63;
  --color-accent:         #E7EBE0;
  --color-bg:             #FBFAF6;
  --color-surface:        #F1EEE4;
  --color-text:           #26261F;
  --color-text-sub:       #6A695C;
  --color-border:         #E2DDD0;
  --color-earth:          #8A7856; /* 線のアクセント最小用途のみ */
  --color-line-brand:     #06C755; /* LINEボタン専用 */
}
```

---

## 3. Typography

### フォント
- **日本語（基本）**：`"Noto Sans JP"`
  fallback: `"Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "YuGothic", Meiryo, sans-serif`
  見出し・本文はすべてこれで統一する。
- **日本語（限定：ディスプレイ明朝）**：`"Zen Old Mincho"`
  fallback: `"Shippori Mincho", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif`
  **使用箇所は次の3つだけ**：①FV／各ページヘッダーのメインコピー ②「SINCE 1989」歴史セクションの見出し ③大きな数字 `1989`。
  それ以外（H2〜本文、他セクション見出し）には使わない。太さは 500〜600 に留め、極細・極太にしない。
- **英字・数字**：`"Inter"`
  fallback: `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`
  用途は限定：英語ラベル（`SERVICE` `WORKS` 等）、`POINT 01`、`STEP 01`、`SINCE 1989`、電話番号、年数・件数などの数値。見出し・本文は日本語フォント。
- 読み込むウェイトは **Noto Sans JP 400/500/700 ＋ Zen Old Mincho 500/600 ＋ Inter 400/500** のみ。**900（極太）は使わない。**
- 全体に `font-feature-settings: "palt" 1;`（約物アキ詰め）。本文に `line-break: strict;`。

### スケール

| Token | PC `font-size` | SP `font-size` | `clamp()` 推奨 | `font-weight` | `line-height` | `letter-spacing` |
|---|---|---|---|---|---|---|
| **Display**（数字 `1989`） | 140px | 68px | `clamp(68px, 14vw, 140px)` | 500（明朝 or Inter） | 1.0 | 0.02em |
| **H1**（FV／ページヘッダーのコピー） | 56px | 32px | `clamp(32px, 6vw, 56px)` | 600（明朝） | 1.3 | 0.04em |
| **H2**（セクション見出し） | 30px | 22px | `clamp(22px, 3.6vw, 30px)` | 700 | 1.4 | 0.04em |
| **H3**（カード見出し・小項目） | 20px | 18px | `clamp(18px, 2vw, 20px)` | 700 | 1.5 | 0.02em |
| **H4**（小見出し・強調行） | 17px | 16px | `clamp(16px, 1.6vw, 17px)` | 700 | 1.6 | 0.02em |
| **Body** | 16px | 15.5px | `clamp(15.5px, 1.4vw, 16px)` | 400 | 1.9 | 0.02em |
| **Small**（補助文・キャプション文） | 14px | 13.5px | — | 400 | 1.8 | 0.02em |
| **Caption**（画像キャプション・注記） | 12.5px | 12px | — | 500 | 1.7 | 0.06em |
| **Label**（英語ラベル・`POINT 01`） | 12.5px | 11.5px | — | 700 | 1.0 | 0.14em（`text-transform: uppercase`、色は Primary か Text Secondary） |

### ルール
- 見出しと本文で**基本の書体を変えない**（明朝は上記3箇所の限定用途のみ）。階層は **サイズ＋太さ** で作る。
- ジャンプ率は中庸（隣接段で概ね 1.25〜1.5倍）。H3 と Body の差を詰めすぎない。
- 本文 `font-size` は **15px 未満にしない**（SP 15.5px 基準 / 入力欄は iOS ズーム防止で 16px）。
- 強調は `font-weight: 500`（＋必要なら `--color-primary`）。下線・極太・背景ハイライト・袋文字は使わない。
- 段落の `margin-bottom` は `16px`（1em相当）以上。
- 英字ラベルは各セクションに **英字1語＋日本語見出し** の組でのみ使う（`SERVICE` ／ 事業内容）。対訳の羅列や、意味のない英文コピーは置かない。

### `:root` トークン
```css
:root {
  --font-ja:        "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "YuGothic", Meiryo, sans-serif;
  --font-ja-mincho: "Zen Old Mincho", "Shippori Mincho", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif;
  --font-en:        "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;

  --fs-display: clamp(68px, 14vw, 140px);
  --fs-h1: clamp(32px, 6vw, 56px);
  --fs-h2: clamp(22px, 3.6vw, 30px);
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
`4` はアイコンと文字の隙間など極小用途のみ。基本は `8` の倍数で考える。**余白は「広く・一定に」。** 余白の一貫性がプロっぽさの最大要因。

### コンテナ幅
| Token | 値 | 用途 |
|---|---|---|
| `--container-max` | `1120px` | 標準セクションの中央寄せ幅 |
| `--container-narrow` | `680px` | 読み物（代表挨拶、強みの説明文、歴史の本文、FAQ回答、法人向け説明、依頼の流れ、対応エリア） |
| `--container-wide` | `1280px` | 施工事例グリッドなど写真主体のセクション（任意） |
| FV / ページヘッダー / 全幅写真バンド / CTA帯 / 歴史セクション背景 | 全幅（100vw） | コンテナ制約なし |

### 左右 padding
- Desktop / Tablet：`24px`
- Mobile：`20px`

### セクション上下余白（`padding-block`）
| Token | Desktop | Tablet | Mobile | 用途 |
|---|---|---|---|---|
| `--section-y` | `96px` | `72px` | `56px` | 標準セクション |
| `--section-y-lg` | `120px` | `96px` | `64px` | FV隣接・歴史セクション・区切りを強めたい所（多用しない） |
| `--section-y-sm` | `64px` | `48px` | `40px` | 全幅写真バンド・CTA帯・ページヘッダー |

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

## 5. Grid & Page Composition

### 1カラム
- **使用条件**：モバイル全般／読み物ブロック（`--container-narrow` 680px）／FV・ページヘッダーのコピー／歴史（`1989`＋短文）／悩みの列挙の導入文／対応エリアのテキスト／依頼の流れ／FAQ。
- 中央寄せにするのは「セクション英字ラベル」「セクション見出し」「CTA帯」「歴史セクション」「ページヘッダー」だけ。本文・小見出しは**左寄せ**。

### 2カラム（`1fr 1fr` / `--gap-col`）
- **使用条件**：「私たちについて（About）」、代表者挨拶、**強み POINT**、法人・施設向け植栽管理、事業内容の各サービス詳細。
- **写真↔テキストの左右交互**（1つ目は写真左、2つ目は写真右…）。**これがサイトの背骨。**
- Mobile：縦積み。順序は **写真 → テキスト**。
- Tablet：内容が少なければ2カラム維持（gap 40px）、多ければ縦積み。

### 3カラム（`repeat(auto-fit, minmax(260px, 1fr))`）
- **使用条件**：**事業内容（サービス一覧）** と **依頼の流れの補足**程度。1ページ内で3カラムカードは1回まで。
- Tablet：2カラム。Mobile：1カラム。

### 2〜3カラム（`repeat(auto-fit, minmax(300px, 1fr))`）
- **使用条件**：施工事例グリッド（写真主役、`No.001`＋地域＋用途＋年）。
- スタッフ紹介（3:4写真、代表＋現場責任者＋ベテラン＋若手の3〜5名）。
- 地域とのつながり（清掃・祭り・植樹の写真2〜3枚）。

### 反復禁止ルール
- **同じ3カラムカード構成を1ページ内で連続させない。** 3カラム系は「事業内容」「施工事例」「スタッフ」「地域活動」に限定し、**隣り合わせない**。必ず間に別の型（2カラム交互／全幅写真バンド／歴史／番号付き縦リスト）を挟む。
- セクションごとに「型」を変える：全幅写真＋重ねコピー → 悩みリスト → 3カラムカード → 全幅写真バンド → 2カラム交互 → 番号付きPOINT → 全幅・歴史 → 3カラム人物 → 3カラム地域 → 2カラム法人 → 番号付きの流れ → 開閉FAQ → 全幅CTA帯。
- 背景色も交互（`--color-bg` / `--color-surface`、FV帯とCTA帯とページヘッダーのみ `--color-accent` / `--color-surface`）、2カラムの写真位置も交互。

### 共通パーツ（全ページ）
- **ヘッダー**：ロゴ（`北翠園`＋業種）／ナビ／電話＋「相談する」ボタン。`position: sticky`。1023px 以下でハンバーガー。現在ページは `aria-current="page"`。
  ナビ項目は **日本語＋小さな英字サブラベル**の2段（AUREA `CONCEPT/理念` に倣う）：事業内容 `SERVICE` ／ 施工事例 `WORKS` ／ 私たちについて `ABOUT` ／ 会社案内・お問い合わせ `COMPANY`。
- **フッター**：会社名・事業一覧・対応エリア・電話・全ページへのリンク・ポートフォリオへ戻る導線。
- **画面下固定 CTA バー（SP のみ）**：電話｜LINE｜フォーム の3分割。`company.html#contact` へ。
- **CTA ブロック（`.cta-inline` / `.cta-band`）**：各ページの区切りとフッター直前に反復。文言は §7。

### ページ構成とセクション順

**1. index.html（トップ）** — 構成の基準＝森造園、分かりやすさ＝道央緑化
1. FV（全面写真型＝§1 パターンB：全幅写真の上に中央寄せで 英字帯 →「この街の緑を、これからも。」→ サブコピー3行 → CTA1つ。薄い暗色グラデーションのみ・白カード禁止・背後に淡い `HOKUSUIEN`・右下 `SCROLL`）
2. 会社紹介（2カラム：大写真＋短い会社紹介文＋`私たちについて`へのリンク）
3. こんなお悩みありませんか（悩み列挙 →「庭木1本からご相談ください」＋CTA）
4. 事業内容 / SERVICE（7サービスを3カラムカードで一覧 →`事業内容`へ）
5. 全幅写真バンド
6. 施工事例 / WORKS（抜粋3〜6件 →`施工事例`へ）＋CTA
7. 私たちの強み / POINT 01〜03（2カラム左右交互 ×3）
8. SINCE 1989（全幅・大きな数字＋短文、動き最小 →`私たちについて`へ）
9. 地域とのつながり / COMMUNITY（写真2〜3枚をstaggerで）
10. よくある質問 / FAQ（抜粋4〜5問 →`会社案内`のFAQへ）
11. CTA帯（`--color-accent` 全幅／電話・フォーム・LINE）
12. フッター

**2. service.html（事業内容）**
1. ページヘッダー（`SERVICE` / 事業内容 / リード文）
2. サービス詳細 ×7（2カラム左右交互：写真＋見出し＋説明＋「こんなときに」箇条書き）
   剪定／伐採・抜根／庭づくり・リフォーム／外構・エクステリア／年間庭園管理／法人・施設向け植栽管理／冬囲い
3. 全幅写真バンド
4. 対応エリア（`--container-narrow` のテキスト＋簡単な一覧：札幌市内＋石狩市・江別市・北広島市ほか）
5. ご依頼の流れ / FLOW（番号付き縦リスト：お問い合わせ →現地確認・お見積り →ご契約・日程調整 →作業 →お引き渡し・お支払い →その後の管理）
6. CTA帯
7. フッター

**3. works.html（施工事例）**
1. ページヘッダー（`WORKS` / 施工事例 / リード文＋「事例は順次追加します」）
2. 施工事例グリッド（6〜8件、写真主役、カードに `No.001`＋地域＋施工内容＋年、`ご相談`／`対応`の短い2行）
   ※将来 事例を増やせるよう、カードは同一マークアップの繰り返しで構成
3. 全幅写真バンド
4. CTA帯
5. フッター

**4. about.html（私たちについて）** — 参考＝南香園・高重造園
1. ページヘッダー（`ABOUT` / 私たちについて）
2. 会社紹介（2カラム：大写真＋文。何をしている会社か）
3. SINCE 1989（全幅・歴史。創業〜現在を短く。動き最小）
4. 大切にしていること（`--container-narrow` の読み物：庭をつくることより、その後のお付き合い）
5. 代表挨拶（`.owner-word` 引用＋代表写真）
6. 私たちの強み / POINT 01〜06（2カラム左右交互 or 番号付きリスト）
7. スタッフ紹介 / STAFF（3:4写真、代表＋現場責任者＋ベテラン＋若手、3〜5名、staggerフェード）
8. 地域とのつながり / COMMUNITY（活動リスト＋写真2〜3枚）
9. CTA帯
10. フッター

**5. company.html（会社案内・お問い合わせ）** — 参考＝道央緑化
1. ページヘッダー（`COMPANY` / 会社案内・お問い合わせ）
2. 会社概要（`dl.profile`：会社名・創業・代表者・従業員数・所在地・事業内容・対応エリア・営業時間・電話）
3. アクセス（住所＋Googleマップ埋め込み枠＋最寄り／駐車場などの補足）
4. お問い合わせ / CONTACT（3導線カード：電話・LINE・フォーム ＋ フォーム本体：名前・電話番号・メールアドレス・相談内容の4項目中心）
5. よくある質問 / FAQ（8問、アコーディオン）
6. CTA帯
7. フッター

---

## 6. Images

| 用途 | 推奨アスペクト比 | 表示方法 | `object-fit` |
|---|---|---|---|
| **Hero（トップFV）** | 全幅。高さ PC `clamp(560px, 82vh, 800px)` ／ SP `4:5` 相当 | **全面写真型（§1 パターンB）**：写真の上に直接、中央寄せでテキスト。薄い暗色グラデーションのみ（白カード禁止）。背後に淡いウォーターマーク `HOKUSUIEN`。写真の読み込みは `opacity 0→1`＋`scale 1.03→1`（1回） | `cover` / `object-position: center` |
| **ページヘッダー（下層）** | 背景写真は使わず `--color-surface` のフラット面でよい（使う場合 `21:9`／淡いオーバーレイ） | 全幅、`--section-y-sm`〜`--section-y`。英字ラベル＋H1＋リード | — |
| **About（会社・現場・引きの庭）** | `3:2` | 2カラムの片側、幅100%、`--radius`(6px) | `cover` |
| **Service（事業内容の各サービス）** | `3:2` | 2カラムの片側、幅100%、`--radius` | `cover` |
| **Works（施工事例）** | `4:3`。作業前/後は**同比率ペア**（横並び or 縦並び） | グリッド。写真の隅に「施工前 / 施工後」ラベル（`Small` / `--color-text-sub`）。カードに `No.001` ＋地域＋用途＋年 | `cover` |
| **Staff（人物・代表）** | `3:4` 縦 | 幅 `240〜360px`、左寄せ。`--radius`。名前＋役割＋一言 | `cover` / `object-position: center top` |
| **Community（地域活動）** | `3:2` | 2〜3枚を横並び or 千鳥、`--radius` | `cover` |
| **全幅写真バンド** | `21:9`（PC）／`16:9`（SP） | 全幅、`--radius-none`(0)、単調さを断つ区切りとして | `cover` |
| **歴史（SINCE 1989 背景）** | `21:9` 前後 | 全幅、淡くオーバーレイ（`--color-surface` 70〜85%）して数字・文を重ねる。動き最小 | `cover` |

### 共通ルール
- すべて `object-fit: cover; object-position: center;`（人物のみ `center top` 可）。
- 角丸は画像も **`--radius`(6px) に統一**。全幅バンド・歴史背景のみ `0`。
- `width` / `height` 属性を必ず付与（CLS防止）。FV以外は `loading="lazy"`、`decoding="async"`。
- **モノクロ・セピア加工しない。** 彩度を上げすぎない自然な色調（清潔感・落ち着き優先）。
- 写真がページ面積の **45〜55%** を占めるよう意識。テキストのみのセクションを2つ以上連続させない。
- **「完成した庭」偏重を避ける。** 剪定作業・職人の手元・複数スタッフの作業風景・打合せ・お客様と話す様子・集合写真・地域活動など、**人が写っている写真**を施工写真と同量以上に使う（依頼の核）。
- 写真は差し替え前提のプレースホルダー。`<img>` の雛形コメントと推奨比率をマークアップに残す。

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
| background | `--color-primary`（#2E4A37） |
| border | なし |
| hover | `background: var(--color-primary-hover)`（#243B2C）。`transition: background .2s ease`。**影・拡大・跳ねなし** |
| active | `background: var(--color-primary-active)`（#1D3123） |
| focus-visible | `outline: 2px solid var(--color-primary); outline-offset: 2px` |

### Secondary Button
| 項目 | 値 |
|---|---|
| height / padding / radius / font | Primary と同じ |
| color | `--color-primary` |
| background | `--color-bg`（#FBFAF6） |
| border | `1.5px solid var(--color-primary)` |
| hover | `background: var(--color-accent)`（#E7EBE0）。border 色は変えない |
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
| カード内・セクション末リンク（「事業内容を見る →」） | 下線なし可。矢印付き。hover で色変化＋矢印 `transform: translateX(2px)` |

### CTA 配置ルール
- CTAブロックは**共通コンポーネント化**し、各ページで `セクションの区切り` と `フッター直前` に反復（1ページあたり2〜4回）。
- 文言は **「庭のお悩みを相談する」** を中心に。補助で「無料でお見積り相談」「庭木1本からご相談ください」「無料で相談する」。**「今すぐ申し込む」「限定」「キャンペーン」など営業色の強い表現・価格訴求・感嘆符は使わない。**
- CTA直前に必ず不安を下げる1〜2文（例：「工事するか決まっていなくても大丈夫です。まずは庭を見せていただくところからで構いません。」）。
- 3導線（電話 / お問い合わせフォーム / LINE）を**均等な横並びボタン**で。個人客はスマホからが多い前提で **電話と LINE を押しやすく**。フォームは `company.html#contact`。
- SP：**画面下固定のCTAバー**（電話｜LINE｜フォームの3分割）を全ページ常時表示。

---

## 8. Border / Radius / Shadow

### Radius（使用可能な値を限定。これ以外を新規追加しない）
```css
--radius-none: 0;      /* 全幅写真バンド、歴史背景、罫線区切り、テーブル */
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
- 奥行きは **余白と1pxヘアライン** で出す。

### Shadow（必要最小限。これ以外を新規追加しない）
```css
--shadow-none: none;                                  /* 既定。 */
--shadow-card: 0 2px 8px rgba(30, 40, 25, 0.05);      /* カードに付ける場合のみ・1段だけ */
--shadow-header: 0 1px 0 rgba(0, 0, 0, 0.06);         /* stickyヘッダーのスクロール後の下境界のみ */
```
- カードは **「`--border` か `--shadow-card` のどちらか一方」**。両方は使わない。
- **禁止**：色付き影、多重影、`0 10px 30px` 級の強い影、hover で影を強める演出、ページ独自の shadow 追加。

### 原則
- **新しい color / radius / shadow / font-size をページ単位で足さない。** 必要になったらまずこの DESIGN.md を更新し、レビューしてから使う。

---

## 9. Animation

方針：AUREAの現代的な演出を参考にしつつ**全体的に抑制**する。「派手なサイト」ではなく「昔から地域にある会社を、現代的に見せるサイト」。動きは**1種類のフェードアップに統一**し、必要な場所だけに限定する。全ページで同じ動き。

### 使用する
| 対象 | 内容 | duration | easing |
|---|---|---|---|
| スクロールイン | `opacity: 0→1` ＋ `translateY: 20px→0`。`IntersectionObserver` で**初回1回のみ**。**セクション見出し＋主要ブロック単位**に付与（全要素に一律で付けない）。複数要素は **120〜150ms ずつ stagger** | `700ms`（0.6〜0.9sの範囲） | `cubic-bezier(0.16, 1, 0.3, 1)` |
| FV 読み込み（トップのみ） | FV写真（左右分割の写真領域）`opacity: 0→1` ＋ `scale: 1.03→1`（1回のみ）。その後、会社名 → メインコピー → サブコピー → CTA を 120〜160ms ずらしてフェードアップ。全体を約1〜1.5秒に収める | 写真 `1000ms` / 各テキスト `700ms` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| ページヘッダー（下層） | 英字ラベル → H1 → リード の軽い stagger フェードアップ（FVの簡易版、写真ズームなし） | `700ms` | 同上 |
| 施工事例カード hover | 写真のみ `transform: scale(1.02〜1.04)`（ゆっくり）。`overflow: hidden` のマスク内で拡大 | `400ms` | `ease` |
| その他のホバー | `background` / `color` / 矢印 `transform: translateX(2px)` | `200ms` | `ease` |
| アコーディオン（FAQ） | `grid-template-rows` または `max-height` | `250ms` | `ease` |
| ハンバーガーメニュー開閉 | `transform` / `opacity` | `200ms` | `ease` |
| ページ内アンカー | `scroll-behavior: smooth` | — | — |

### 使用しない
- 大きな回転、スクロール連動の拡大・移動・回転、激しいパララックス
- カウントアップ数字（`1989` も静的に置く）
- 自動再生カルーセル / スライダー
- ループする常時アニメーション（点滅・バウンス・浮遊）
- ボタンが跳ねる演出
- **全要素への一律 `fade-in`**、意味のない文字アニメーション
- 大量の横スクロール、過度な3D表現
- `duration > 900ms` の演出（FV写真を除く）、ページ遷移アニメーション
- **セクションごと・ページごとに違うアニメーション**（動きは1種類で統一）

### 歴史セクション（SINCE 1989）
- 数字・見出しの**静かなフェードのみ**。移動量も小さく（10px程度）。派手なスクロール演出を避ける。

### 共通
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
  /* スクロールインは opacity:1 / transform:none で即表示 */
}
```
- トークン：`--dur-fast: 200ms; --dur-base: 250ms; --dur-enter: 700ms; --dur-hero: 1000ms; --ease-enter: cubic-bezier(0.16, 1, 0.3, 1);`

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
| section 上下 | `96px`（帯 `64px` / 強調 `120px`） | `72px`（帯 `48px` / 強調 `96px`） | `56px`（帯 `40px` / 強調 `64px`） |
| Body 文字 | `16px` | `16px` | `15.5px`（最小15px / 入力欄16px） |
| H1（FVコピー） | `56px` | `clamp` 約44px | `32px` |
| Display（`1989`） | `140px` | `clamp` 約100px | `68px` |
| コンテナ | `1120px` 中央、超過分は左右余白のみ増やす | `100%`（padリング） | `100%` |
| 2カラム交互 | `1fr 1fr` / gap `56px` | `1fr 1fr` / gap `40px`（要素多→縦積み） | 1カラム（**写真→テキスト**の順） |
| 3カラムカード | 3列 | 2列 | 1列 |
| ナビゲーション | 横並び＋「相談する」ボタン常設 | 横並び or ハンバーガー | ハンバーガー。ヘッダーに電話/LINEアイコン常設＋**画面下固定CTAバー** |
| Hero 高さ | `80–88vh` | `80vh` | `72–80vh`（スクロールで2番目の要素がすぐ見える） |
| 画像 | アスペクト比通り | 同左 | Hero のみ `4:5` に出し分け |

### レイアウト変更ルール
- ブレークポイントは上記3つ（＋480）のみ。中途半端な独自 BP を増やさない。
- 崩れは「要素を小さくする」より「縦積みにする」で解決。
- SP で**文字を縮小しすぎない**。問い合わせ導線を常に画面内に置く（下固定CTAバー）。
- 個人客はスマホ閲覧が多い前提（㉓）。文字サイズ・改行・写真サイズ・問い合わせボタン・メニュー・電話・LINE の使いやすさを最優先で確認する。

---

## 11. Japanese Typography Rules

- **不自然な改行を避ける**：見出しは意味の区切りで手動改行（`<br>`）。意図しない位置で折れる語のまとまりは `<span style="white-space: nowrap">…</span>` で保護。
- **1〜2文字だけ次行に残さない**（孤立・禁則）：本文に `text-wrap: pretty;` ＋ `word-break: auto-phrase;`、見出しに `text-wrap: balance;`。
- **見出しの改行位置を調整**：レビュー時に PC / Tablet / Mobile それぞれで折り返しを目視確認。3行以上に割れる見出しは文言を短くする。特にFVコピー「この街の緑を、これからも。」は各BPで改行位置を確認。
- **文章の横幅を広げすぎない**：本文カラムは `--container-narrow`（680px、約35〜42字/行）を上限。
- **本文を小さくしすぎない**：`font-size` は SP 15.5px / PC 16px 基準。15px 未満禁止。`line-height: 1.9`。
- `font-feature-settings: "palt" 1;`（約物アキ詰め）、本文に `line-break: strict;`。
- 数字・英字・記号は半角。三点リーダは `……`、波ダッシュは `〜`。
- 感嘆符・多重約物（！！）を多用しない（営業感の回避）。
- 専門用語には括弧で短い言い換えを添える（例：「支柱（冬囲い）」「抜根（切り株の撤去）」）。カタカナ語の連続を避ける。
- 1段落は3行以内、箇条書きは6項目以内を目安に。
- 個人客向けの文（悩み・剪定・管理）と法人客向けの文（年間管理・植栽管理）を同一段落に混ぜない。
- SEOのキーワード（札幌 造園／剪定／伐採／庭 リフォーム／冬囲い／植栽管理 等）は、`<title>` `meta` と見出し・本文に**自然な範囲で**織り込む。不自然な語の羅列にしない（㉒）。

---

## 12. Anti-AI Design Rules

### やらないこと
- **紫〜青系グラデーションを安易に使わない**（グラデーション自体を使わない。面は `--color-accent` / `--color-surface` のフラット塗りのみ）
- **不要なカードUIを量産しない**（カードは「事業内容」「施工事例」「スタッフ」「地域活動」に限定。強み・悩み・歴史・挨拶・流れをカードで並べない）
- **全セクションを中央揃えにしない**（本文・小見出しは**左寄せ**。中央寄せは 英字ラベル / セクション見出し / CTA帯 / 歴史セクション / ページヘッダー のみ）
- **box-shadow を乱用しない**（`--shadow-card` / `--shadow-header` の2つだけ。奥行きは**余白と罫線**で）
- **巨大な border-radius を乱用しない**（`0 / 6px / 4px` のみ。pill・8px超・要素ごとに違う値は禁止）
- **アイコンを装飾目的だけで使わない**（線アイコン単色を **電話・LINE・メール・アクセス・矢印・チェック・FAQ開閉** の機能用途のみ。強み・悩み・歴史・流れはアイコンで並べず**写真＋見出し**または**番号＋見出し**）
- **3カラムカードを1ページ内で繰り返さない**（3カラム系を隣り合わせない。間に必ず別の型のセクションを挟む）
- **意味のない英語ラベルを乱用しない**（英語は各セクションの符牒＝`SERVICE` `WORKS` `ABOUT` `COMPANY` `POINT` `STEP` `STAFF` `COMMUNITY` `FAQ` `CONTACT` `SINCE 1989` 程度を `Label` サイズで最小限。対訳の羅列・英文コピーは置かない。キャッチ・本文は日本語）
- **pill 型 UI を乱用しない**（ボタンは長方形＋`6px`。タグのみ `4px`。`999px` 禁止）
- **全要素に fade-in を付けない**（スクロールインは**セクション見出し＋主要ブロック単位**、初回1回。動きは1種類）
- **情報を詰め込みすぎない**（1セクション＝1メッセージ、1画面の要素4つまで、段落3行以内、箇条書き6項目以内）
- 明朝を全面採用しない（古臭さの回避。明朝は §3 の3箇所限定）

### 代わりに優先すること
**写真（人が写ったもの含む）/ タイポグラフィ（サイズ＋太さの階層）/ 余白（広く・一定）/ グリッド（2カラム交互の背骨）/ 罫線（1px ヘアライン）/ 背景切り替え（Background ↔ Surface の交互）/ レイアウトの強弱（型の切り替え・写真位置の交互・全幅バンド・歴史セクション）**

---

## 付録：`:root` 統合トークン（実装時の起点 / `assets/style.css` の先頭に置く）

```css
:root {
  /* Color */
  --color-primary: #2E4A37;
  --color-primary-hover: #243B2C;
  --color-primary-active: #1D3123;
  --color-secondary: #6E7F63;
  --color-accent: #E7EBE0;
  --color-bg: #FBFAF6;
  --color-surface: #F1EEE4;
  --color-text: #26261F;
  --color-text-sub: #6A695C;
  --color-border: #E2DDD0;
  --color-earth: #8A7856;
  --color-line-brand: #06C755;

  /* Type */
  --font-ja: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "YuGothic", Meiryo, sans-serif;
  --font-ja-mincho: "Zen Old Mincho", "Shippori Mincho", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif;
  --font-en: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --fs-display: clamp(68px, 14vw, 140px);
  --fs-h1: clamp(32px, 6vw, 56px);
  --fs-h2: clamp(22px, 3.6vw, 30px);
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
  --shadow-card: 0 2px 8px rgba(30, 40, 25, 0.05);
  --shadow-header: 0 1px 0 rgba(0, 0, 0, 0.06);

  /* Motion */
  --dur-fast: 200ms;
  --dur-base: 250ms;
  --dur-enter: 700ms;
  --dur-hero: 1000ms;
  --ease-enter: cubic-bezier(0.16, 1, 0.3, 1);

  --header-h: 68px;
}

@media (max-width: 767px) {
  :root {
    --pad-inline: 20px;
    --section-y: 56px;
    --section-y-lg: 64px;
    --section-y-sm: 40px;
    --gap-col: 32px;
    --gap-card: 20px;
    --header-h: 60px;
  }
}
```
