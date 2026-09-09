# 写真素材の仕様書 — 株式会社北翠園 サンプルサイト

このフォルダに、各ページで使う写真を用途別サブフォルダに分けて置きます。
現状サイトはすべて差し替え前提のプレースホルダー（`.media__ph`）です。写真を用意したら、
該当スロットを `<img src="assets/img/<folder>/<file>" width="..." height="..." alt="..." loading="lazy" decoding="async">` に差し替えます。
（ヒーローのみ `loading="lazy"` を付けない。PC/SP の出し分けは `<picture>` を使う）

合計 34 枚（＋アクセスの地図は Google マップの `<iframe>` 埋め込みのため画像不要）。

**適用済み（2026-09-09）**：34枚を全ページの `<img>`（ヒーローは `<picture>` で PC/SP 出し分け）に反映。
受領時は中身が PNG（拡張子のみ `.webp`）で 1枚あたり約2〜3.5MB・合計約95MB あったため、
品質80で本物の WebP に変換（合計 約11MB / 1枚 113〜489KB）。差し替える場合は同じファイル名・比率で上書きしてください。

---

## 共通ルール

- 形式：`.webp`（用意できなければ `.jpg`）。sRGB・自然な色調。**モノクロ／セピア／強い彩度加工はしない**（DESIGN.md §6）。
- 文字・ロゴ・日付の焼き込みなし。
- CSS 側で `object-fit: cover` により自動トリミングされる。**被写体は中央寄り・四隅に重要な要素を置かない。**
  特に `hero/` と `band/` は上下・左右が大きく切られる。
- **完成した庭に偏らせず、人が写っている写真（作業・打合せ・地域活動）を施工写真と同量以上**に。
- 容量目安：一般 200〜300KB／ヒーロー・バンド 350〜450KB。
- 長辺のピクセルは下記（Retina 想定。実表示サイズはおおむねその半分）。

## 比率とサイズの早見表

| フォルダ | 比率 | 推奨px（長辺基準） | 使う場所 |
|---|---|---|---|
| `hero/` | 16:9（PC）／4:5（SP） | 2400×1350 ／ 1200×1500 | トップFV |
| `about/` | 3:2 | 1600×1067 | 会社紹介の2カラム写真 |
| `history/` | 21:9 | 2000×860 | SINCE 1989 の背景（薄く敷く） |
| `service/` | 3:2 | 1600×1067 | 事業内容ページ 各サービス |
| `works/` | 4:3 | 1600×1200 | 施工事例カード |
| `staff/` | 3:4（縦） | 900×1200 | 代表・スタッフの人物 |
| `point/` | 3:2 | 1600×1067 | 「私たちについて」強みPOINT |
| `community/` | 3:2 | 1600×1067 | 地域とのつながり（トップ・私たちについてで共用） |
| `band/` | 21:9 | 2400×1029 | 全幅写真バンド（区切りの帯） |
| `company/` | 4:3 | 1600×1200 | 会社案内の写真 |

各フォルダの `README.txt` に、そのフォルダのファイル名と「どんな写真が好ましいか」を記載しています。

---

## ファイル一覧（34枚）

### hero/（2）
- `hero.webp` … 16:9 / 2400×1350
- `hero-sp.webp` … 4:5 / 1200×1500

### about/（2）
- `intro-home.webp` … トップの会社紹介
- `intro-about.webp` … 「私たちについて」冒頭

### history/（1）
- `history-bg.webp` … SINCE 1989 背景

### service/（7）
- `service-01-pruning.webp` 剪定
- `service-02-felling.webp` 伐採・抜根
- `service-03-garden.webp` 庭づくり・リフォーム
- `service-04-exterior.webp` 外構・エクステリア
- `service-05-annual.webp` 年間庭園管理
- `service-06-business.webp` 法人・施設向け植栽管理
- `service-07-winter.webp` 冬囲い

### works/（8）
- `works-001.webp` 戸建て・庭リフォーム
- `works-002.webp` 戸建て・庭木剪定
- `works-003.webp` 戸建て・伐採＋抜根（前後対比）
- `works-004.webp` 玄関まわりの植栽
- `works-005.webp` 店舗の外構・植栽帯
- `works-006.webp` マンション共用部の植栽
- `works-007.webp` 福祉施設の緑地
- `works-008.webp` 冬囲い

### staff/（4）
- `staff-owner.webp` 代表（代表挨拶と一覧で共用）
- `staff-manager.webp` 現場責任者
- `staff-senior.webp` ベテラン職人
- `staff-young.webp` 若手スタッフ

### point/（3）
- `point-01.webp` 地域で長く営業
- `point-02.webp` 長いお付き合い
- `point-03.webp` ベテランと若手

### community/（3）
- `community-01-cleanup.webp` 町内清掃・美化活動
- `community-02-festival.webp` お祭り・イベント
- `community-03-planting.webp` 植樹活動

### band/（3）
- `band-home.webp` トップ用
- `band-service.webp` 事業内容用
- `band-works.webp` 施工事例用
（3ページで別カットが理想。共用も可）

### company/（1）
- `company-exterior.webp` 会社の外観・作業車・スタッフ集合
