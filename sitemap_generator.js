const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://levkovich.dev/',
  ignoredPaths: ['admin'],
  pagesDirectory: __dirname + "\\pages",
  targetDirectory : 'dist/',
  nextConfigPath: __dirname + "\\next.config.js",
  ignoredExtensions: [
    'png',
    'jpg'
  ],
});
