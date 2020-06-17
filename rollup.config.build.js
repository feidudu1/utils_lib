/*
 * @Author: your name
 * @Date: 2020-06-16 10:10:47
 * @LastEditTime: 2020-06-17 21:00:25
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
  // globals: { react: "React", "react-dom": "ReactDOM" },
  plugins: [
    // resolve(),
    babel({ babelHelpers: "bundled" }), // 必须放在commonjs前面，否则不能正确解析jsx

    commonjs({}),

    json(),
  ],
};
