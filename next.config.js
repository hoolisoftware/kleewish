const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["kleewish.hoolisoftware.xyz", "picsum.photos"],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias["@mixins"] = path.join(
      __dirname,
      "src/scss/mixins.scss"
    );
    return config;
  },
};

module.exports = nextConfig;
