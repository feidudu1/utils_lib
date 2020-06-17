/*
 * @Author: your name
 * @Date: 2020-06-16 10:10:47
 * @LastEditTime: 2020-06-17 20:00:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fei_utils_lib/rollup.config.build.js
 */

import pkg from "./package.json";
import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],

  plugins: [commonjs(), babel({ babelHelpers: "bundled" }), json()],
};
