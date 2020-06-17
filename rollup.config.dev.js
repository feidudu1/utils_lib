/*
 * @Author: your name
 * @Date: 2020-06-16 10:01:06
 * @LastEditTime: 2020-06-17 16:02:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fei_utils_lib/rollup.config.dev.js
 */

import pkg from "./package.json";
import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/main.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      // globals: {
      //   lodash: "_",
      // },
    },
    {
      file: pkg.module,
      format: "es",
      // globals: {
      //   lodash: "_",
      // },
    },
  ],

  plugins: [
    // resolve({
    //   customResolveOptions: {
    //     moduleDirectory: "node_modules",
    //   },
    // }),
    commonjs(),
    json(),
  ],
  // external: ["lodash"],
};
