// ==UserScript==
// @name         楽天市場の商品名を強制全文表示
// @namespace    https://github.com/koyasi777/rakuten-full-title
// @version      1.0
// @description  楽天市場で商品名が「…」で省略される問題を解消し、全文表示します。Ajax対応、見やすさ重視。
// @author       koyasi777
// @match        https://search.rakuten.co.jp/*
// @grant        none
// @license      MIT
// @homepageURL  https://github.com/koyasi777/rakuten-full-title
// @supportURL   https://github.com/koyasi777/rakuten-full-title/issues
// ==/UserScript==

(function () {
  'use strict';

  const css = `
/* 商品タイトルリンクの省略解除 */
a[class*="title-link"] {
  display: block !important;
  white-space: normal !important;
  overflow: visible !important;
  text-overflow: unset !important;
  max-height: none !important;
  height: auto !important;
  line-height: 1.5 !important;
}

/* タイトル全体を囲むh2やdivの制限を解除 */
[class*="title-link-wrapper"],
[class*="title--"],
[class*="title-link-wrapper-grid"] {
  display: block !important;
  white-space: normal !important;
  max-height: none !important;
  height: auto !important;
  overflow: visible !important;
}

/* Flexbox の幅制限を解除 */
.searchresultitem, .searchresultitem * {
  min-width: 0 !important;
}
`;

  // スタイル挿入
  if (typeof GM_addStyle !== 'undefined') {
    GM_addStyle(css);
  } else {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }

  // 再描画にも対応（変更されていない要素だけ処理）
  const applyFix = () => {
    const links = document.querySelectorAll('a[class*="title-link"]:not([data-fulltitle])');
    links.forEach(link => {
      link.style.whiteSpace = 'normal';
      link.style.overflow = 'visible';
      link.style.textOverflow = 'unset';
      link.style.maxHeight = 'none';
      link.style.height = 'auto';
      link.setAttribute('data-fulltitle', 'true');
    });
  };

  const observer = new MutationObserver(applyFix);

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // 初回実行
  applyFix();
})();
