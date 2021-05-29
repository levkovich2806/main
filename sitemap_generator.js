const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://levkovich.dev/',
  pagesDirectory: __dirname + "\\pages",
  targetDirectory : 'out/',
  nextConfigPath: __dirname + "\\next.config.js",
  ignoredExtensions: [
    'png',
    'jpg'
  ],
});
