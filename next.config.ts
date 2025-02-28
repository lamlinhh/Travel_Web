/**
 * @type {import('next').NextConfig}
 */
require("dotenv").config();
const withPugins = require("next-compose-plugins");
const moment = require("moment-timezone");
const withImages = require("next-images");

const modifiedDate = moment()
  .tz("Asia/Ho_Chi_Minh")
  .format("DD/MM/YYYY HH:mm:ss");

const nextConfig = {
  i18n: {
    locales: ["en", "vi"], // Supported languages
    defaultLocale: "vi", // Default language
  },
  reactStrictMode: false,
  publicRuntimeConfig: {
    modifiedDate,
  },
  images: {
    disableStaticImages: true,
    dangerouslyAllowSVG: true,
  },
  output: "standalone",
};

const plugins = [withImages];
module.exports = withPugins(plugins, nextConfig);
