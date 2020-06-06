const withCss = require("@zeit/next-css");
const withImages = require("next-images");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

const withPlugins = require("next-compose-plugins");

const nextConfig = {
  // distDir: "build",
  webpack: (config) => {
    return config;
  }
};

module.exports = withPlugins([
  [withCss],
  [withImages],
], withBundleAnalyzer(nextConfig));
