"use strict";

const { merge } = require("webpack-merge");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = require("./webpack.common.js");
const PATHS = require("./paths");

// Merge webpack configuration files
const config = (env, argv) =>
  merge(common, {
    entry: {
      popup: path.join(PATHS.src, "ts", "popup.tsx"),
      contentScript: path.join(PATHS.src, "ts", "contentScript.ts"),
      background: path.join(PATHS.src, "ts", "background.ts"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "popup.html",
        template: "src/pages/popup.html",
        chunks: ["popup"],
      }),
    ],
    devtool: argv.mode === "production" ? false : "source-map",
  });

module.exports = config;
