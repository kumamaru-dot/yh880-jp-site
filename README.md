# YH880シリーズ 日本向けプロモーションサイト

四川咏輝環境保護科技有限公司の環境配慮型水系洗浄剤「YH880シリーズ」を、日本の商社・販売店・工場に向けて紹介する引き合い獲得用サイトです。

- フレームワーク: Astro（静的サイト生成）
- 言語: 日本語（英語版は将来追加可能な構成）
- 外部CDN依存なし（フォントは self-host）

## 起動方法

```bash
npm install       # 初回のみ
npm run dev       # 開発サーバー起動 → http://localhost:4321/
npm run build     # 本番ビルド（dist/ に出力）
npm run preview   # ビルド結果をローカル確認
```

## 公開前に必ず対応すること

| 対応内容 | 該当ファイル |
|---|---|
| 問い合わせフォームの送信先設定 | `src/components/ContactForm.astro` |
| 販売元の会社情報（【要確認】箇所） | `src/components/CompanyInfo.astro` |
| 構造化データ内の会社情報 | `src/layouts/BaseLayout.astro` |
| フッターの社名・年表記 | `src/components/Footer.astro` |
| 本番公開URL（`site`） | `astro.config.mjs` |
| 画像プレースホルダーの差し替え | `public/images/` |
| 製品カタログPDFの設置とリンク | `public/documents/` + `src/components/ContactForm.astro` |

## テキストの差し替え方法

主要なコンテンツは `src/data/` にデータとして切り出してあります。文言の修正はここを編集すれば全体に反映されます。

| ファイル | 内容 |
|---|---|
| `src/data/products.ts` | YH880-1/2/3 の型番・名称・用途 |
| `src/data/features.ts` | 「選ばれる理由」の9つの特長と数値 |
| `src/data/comparisonTable.ts` | 比較表の全行データ |
| `src/data/caseStudies.ts` | 導入事例の業界・タイトル・説明 |

上記以外のセクション見出しやリード文は、各コンポーネント（`src/components/*.astro`）のフロントマター（`---` で囲まれた部分）または HTML 部分を直接編集してください。

### 表現に関する注意

日本の景品表示法を意識し、性能値には「※自社試験による参考値」等の注記を添えています。数値や表現を変更する際も、断定的な保証表現にならないよう注記を維持してください。「無毒」等の強い表現は使わず、「低刺激」「有害重金属不使用」など根拠のある表現に統一しています。

## 画像の差し替え方法

`public/images/` 内の同名ファイルを実画像に置き換えてください（拡張子を変える場合は参照元のパスも修正が必要です）。現在はすべてラベル付きの SVG プレースホルダーです。

### 画像プレースホルダー一覧

| ファイル名 | 入れるべき画像 | 参照元 | 推奨サイズ |
|---|---|---|---|
| `logo-placeholder.svg` | ロゴ（構造化データ用） | `BaseLayout.astro` | 240×80 |
| `ogp-placeholder.svg` | SNSシェア用OGP画像 | `BaseLayout.astro` | 1200×630 |
| `hero-placeholder.svg` | ヒーロー画像（工場・洗浄シーン） | `Hero.astro` | 1200×900 |
| `product-yh880-1.svg` | YH880-1（金属用）製品写真 | `data/products.ts` | 600×450 |
| `product-yh880-2.svg` | YH880-2（工業用）製品写真 | `data/products.ts` | 600×450 |
| `product-yh880-3.svg` | YH880-3（機械設備用）製品写真 | `data/products.ts` | 600×450 |
| `case-oilfield.svg` | 油田リグ Before/After | `data/caseStudies.ts` | 600×400 |
| `case-machining.svg` | 機械加工工場 Before/After | `data/caseStudies.ts` | 600×400 |
| `case-railway.svg` | 鉄道機関車 Before/After | `data/caseStudies.ts` | 600×400 |
| `case-subway.svg` | 地下鉄設備 Before/After | `data/caseStudies.ts` | 600×400 |
| `case-special-vehicle.svg` | 特殊車両 Before/After | `data/caseStudies.ts` | 600×400 |
| `case-coldregion.svg` | 寒冷地(-3℃) Before/After | `data/caseStudies.ts` | 600×400 |
| `video-placeholder.svg` | 現場動画のサムネイル | `CaseStudies.astro` | 800×450 |
| `blind-test-placeholder.svg` | ブラインド比較試験の画像 | `CaseStudies.astro` | 800×450 |
| `smart-line-placeholder.svg` | スマート洗浄ライン設備写真 | `Solutions.astro` | 600×400 |
| `manual-line-placeholder.svg` | 手作業洗浄ソリューション写真 | `Solutions.astro` | 600×400 |
| `certificate-1.svg` 〜 `-4.svg` | 試験報告書・認定証・RoHS適合証明 | `Certifications.astro` | 420×560 |
| `founder-placeholder.svg` | 何法 博士の顔写真 | `CompanyInfo.astro` | 320×320 |

`public/favicon.svg` はファビコンです。差し替える場合は同じパスに配置してください。

### 事例画像の Before/After について

`CaseStudies.astro` の各カードは1枚の画像の下に「Before / After」ラベルを重ねています。**左右に Before / After を並べた1枚の画像**を用意すると、ラベルと位置が揃います。

### 動画の埋め込み

`src/components/CaseStudies.astro` の「現場洗浄の様子（動画）」ブロックに、差し替え用の `iframe` サンプルをコメントで残しています。プレースホルダー画像の `<img>` をコメント内の `iframe` に置き換えてください。

## 問い合わせフォームの送信先設定

現在フォームは送信先が未設定です（`action="#"`）。`src/components/ContactForm.astro` 内の `TODO:` コメント直下の `<form>` タグを編集します。

```astro
<!-- 変更前 -->
<form class="contact-form" action="#" method="POST">

<!-- 変更後（例） -->
<form class="contact-form" action="https://example.com/api/contact" method="POST">
```

送信先の選択肢は主に次の3通りです。

1. **既存の自社バックエンド／CMSのフォームエンドポイント** — 送信先URLを `action` に設定するだけで動作します。
2. **外部フォームサービス** — サービスが発行するエンドポイントURLを `action` に設定します。サービスによっては hidden フィールドの追加が必要です。
3. **ホスティング先のフォーム機能** — 静的ホスティングサービスがフォーム受信機能を持つ場合、その仕様に沿った属性を `<form>` に追加します。

設定後は必ず以下を確認してください。

- 全項目が送信先に届くか（`name` 属性: `company` / `department` / `name` / `email` / `tel` / `industry` / `inquiryType` / `message`）
- 「お問い合わせ種別」はチェックボックスのため、複数選択が配列として受け取れるか
- 送信完了後の遷移先（サンクスページ）
- 自動返信メールの文面

送信テストが完了したら、フォーム下部の「※現在フォームの送信先設定が未完了です」という注記を削除してください。

### プライバシーポリシー

`ContactForm.astro` にプライバシーポリシーへのリンク用 TODO コメントがあります。ポリシーページを用意したらリンクを設定してください。

## カタログPDFの設置

1. PDFを `public/documents/yh880-catalog.pdf` として配置
2. `src/components/ContactForm.astro` の「資料ダウンロード」ブロックにある TODO コメントに従い、`href` を `/documents/yh880-catalog.pdf` に変更し `aria-disabled` 属性と「（準備中）」表記を削除

## デザインの変更

配色・余白・フォントは `src/styles/global.css` の `:root` にある CSS 変数で一元管理しています。

```css
--color-accent: #1b5e43;      /* アクセント（ディープグリーン） */
--color-bg-soft: #f7f6f3;     /* セクション交互の背景色 */
--container-width: 1180px;    /* コンテンツ最大幅 */
```

スクロール時のフェードイン演出は、要素に `fade-in` クラスを付けることで有効になります（`src/scripts/fade-in.ts`）。`prefers-reduced-motion` を尊重する実装です。

## 英語版（i18n）を追加する場合

現在は日本語ページのみですが、以下の手順で追加できる構成にしています。

1. `src/pages/index.astro` を `src/pages/en/index.astro` としてコピー
2. `src/data/*.ts` の各配列を言語別に分離（例: `products.ja.ts` / `products.en.ts`）、またはオブジェクトに `ja` / `en` キーを持たせる
3. `BaseLayout.astro` の `lang` 属性と meta 情報を props で切り替え可能にする
4. `Header.astro` に言語切り替えリンクを追加

## ディレクトリ構成

```
src/
  layouts/BaseLayout.astro      head・OGP・構造化データ・共通スクリプト
  components/
    Header.astro                アンカーナビ、モバイルメニュー
    Hero.astro                  ヒーロー、信頼バッジ
    ProblemSection.astro        市場背景・課題
    ProductLineup.astro         YH880シリーズ 3グレード
    FeatureGrid.astro           選ばれる理由（9特長）
    ComparisonTable.astro       比較表（横スクロール対応）
    CaseStudies.astro           導入事例、動画枠、ブラインド比較試験
    Solutions.astro             洗浄設備、洗浄時間の目安
    Certifications.astro        試験項目、証明書ギャラリー
    CompanyInfo.astro           メーカー情報、販売元情報
    ContactForm.astro           問い合わせフォーム、資料導線
    Footer.astro                フッター
    Icon.astro                  インラインSVGアイコン
  data/                         テキストコンテンツ（上記表を参照）
  styles/global.css             デザイントークン、共通スタイル
  scripts/fade-in.ts            スクロール連動フェードイン
  pages/index.astro             トップページ（全セクションを組み立て）
public/
  images/                       画像プレースホルダー
  documents/                    カタログPDF設置先
  favicon.svg
```
