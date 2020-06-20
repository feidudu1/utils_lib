/*
 * @Author: your name
 * @Date: 2020-06-17 20:15:04
 * @LastEditTime: 2020-06-20 23:31:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fei_utils_lib/.storybook/main.js
 */
const path = require("path");
module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.css$/,
      exclude: /node_modules(?!\/@storybook\/addon-info)/,
      use: ["style-loader", "css-loader"],
    });
    config.module.rules.push({
      test: /\.md$/,
      use: ["html-loader", "markdown-loader"],
    });
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: ["ts-loader", "react-docgen-typescript-loader"],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
  stories: ["../stories/**/*.stories.@(js|jsx|mdx|tsx|ts)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-storysource",
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions/register",
    "@storybook/addon-notes/register",
    // "@storybook/addon-notes/register-panel",
    "@storybook/addon-links",
  ],
};
