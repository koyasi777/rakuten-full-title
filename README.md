# 楽天市場の商品名を強制全文表示

## 📌 概要
楽天市場の検索結果で、商品名が省略されて「…」になってしまう問題を完全に解決するユーザースクリプトです。

- 商品名が全文表示され、閲覧性が向上します
- ページ動的更新にも対応（Ajax・フィルター変更など）
- クラス名変更に強い柔軟なCSSセレクタを採用

## 🧩 対応サイト
- `https://search.rakuten.co.jp/*`

## ⚙️ インストール方法

1. Violentmonkey または Tampermonkey をブラウザに導入
2. 以下のスクリプトをインストール：  
   [rakuten-full-title.user.js](./rakuten-full-title.user.js)

## 🛠 技術的なポイント

- CSSで `text-overflow`, `white-space`, `max-height` などの省略設定を解除
- `MutationObserver` によって動的に表示される商品にも適用
- クラス名の厳密指定を避け、`[class*="title-link"]` のような部分一致で耐久性を確保

## 📜 ライセンス

MIT License  
自由に改変・再配布いただけますが、利用は自己責任でお願いします。

---

### ✨ Screenshots

Before | After
:--:|:--:
![before](./screenshot_before.png) | ![after](./screenshot_after.png)

---

> 楽天の商品名が「…」で消えて読めない？このスクリプトでストレスフリーに。
