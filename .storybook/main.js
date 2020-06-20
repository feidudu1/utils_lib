/*
 * @Author: your name
 * @Date: 2020-06-17 20:15:04
 * @LastEditTime: 2020-06-20 16:26:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fei_utils_lib/.storybook/main.js
 */
const path = require("path");
module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.md$/,
      // use: [
      //   {
      //     loader: "html-loader",
      //   },
      //   {
      //     loader: "markdown-loader",
      //   },
      // ],
      use: ["html-loader", "markdown-loader"],
    });
    return config;
  },
  // webpackFinal: (config) => console.dir(config, { depth: null }) || config,
  stories: ["../stories/**/*.stories.@(js|jsx|mdx)"],
  addons: [
    "@storybook/addon-docs",
    // {
    // name: "@storybook/addon-docs",
    // options: {
    //   configureJSX: true,
    //   babelOptions: {},
    //   sourceLoaderOptions: null,
    // },
    // },
    "@storybook/addon-storysource",
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions/register",
    "@storybook/addon-notes/register",
    // "@storybook/addon-notes/register-panel",
    "@storybook/addon-links",
  ],
};
