/*
 * @Author: your name
 * @Date: 2020-06-16 10:10:47
 * @LastEditTime: 2020-06-20 21:46:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fei_utils_lib/rollup.config.build.js
 */

import pkg from "./package.json";
import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "@rollup/plugin-babel";
import rollupTypescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
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
    rollupTypescript(),
    commonjs({}),

    json(),
  ],
};
