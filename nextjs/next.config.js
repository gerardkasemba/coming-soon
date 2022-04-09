// next.config.js;
const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withTM = require('next-transpile-modules')([
  '@deadline/common',
  '@deadline/components',
]);

// next.js configuration
const nextConfig = {
  webpack5: false,
  env: { SENDGRID_API_KEY: `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` }
};

module.exports = withPlugins(
  [
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 90,
        },
        webp: {
          preset: 'default',
          quality: 90,
        },
      },
    ],
    withTM,
  ],
  nextConfig
);
