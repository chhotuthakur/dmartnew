import scrape from 'website-scraper'; // only as ESM, no CommonJS
const options = {
  urls: ['https://dmartsale.in/discounts/'],
  directory: 'E:/Websites/NodeJS/wecop/discount'
};

// with async/await
const result = await scrape(options);

// with promise
scrape(options).then((result) => {});