const Parser = require('rss-parser');
const parser = new Parser();

(async () => {
  try {
    const feed = await parser.parseURL('https://rotter.net/rss/rotternews.xml');
    console.log(feed);
  } catch (err) {
    console.error(err);
  }
})();