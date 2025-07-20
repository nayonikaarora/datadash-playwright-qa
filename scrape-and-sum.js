const { chromium } = require('playwright');

const urls = [
  'https://sanand0.github.io/tdsdata/js_table/?seed=80',
  'https://sanand0.github.io/tdsdata/js_table/?seed=81',
  'https://sanand0.github.io/tdsdata/js_table/?seed=82',
  'https://sanand0.github.io/tdsdata/js_table/?seed=83',
  'https://sanand0.github.io/tdsdata/js_table/?seed=84',
  'https://sanand0.github.io/tdsdata/js_table/?seed=85',
  'https://sanand0.github.io/tdsdata/js_table/?seed=86',
  'https://sanand0.github.io/tdsdata/js_table/?seed=87',
  'https://sanand0.github.io/tdsdata/js_table/?seed=88',
  'https://sanand0.github.io/tdsdata/js_table/?seed=89',
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  let total = 0;

  for (const url of urls) {
    await page.goto(url);
    const numbers = await page.$$eval('table td', tds =>
      tds.map(td => parseFloat(td.textContent)).filter(n => !isNaN(n))
    );
    total += numbers.reduce((sum, num) => sum + num, 0);
  }

  console.log(⁠ TOTAL SUM: ${total} ⁠);
  await browser.close();
})();
