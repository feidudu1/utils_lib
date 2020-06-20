/*
 * @Author: your name
 * @Date: 2020-06-19 14:15:51
 * @LastEditTime: 2020-06-20 23:29:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fei_utils_lib/.storybook/config.js
 */
import { setAddon, addDecorator } from "@storybook/react";
import LiveEdit, {
  setOptions,
  withLiveEditScope,
} from "storybook-addon-react-live-edit";
// import Button from "../src/Button";
import { withInfo } from "@storybook/addon-info";

setOptions({ theme: "darcula", presets: ["react"] });

setAddon(LiveEdit);
// addDecorator(withLiveEditScope({ Button }), withInfo);
