/*
 * @Author: your name
 * @Date: 2020-06-18 14:37:24
 * @LastEditTime: 2020-06-20 22:18:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fei_utils_lib/stories/1-Button.stories.js
 */

import React from "react";
import { action } from "@storybook/addon-actions";
// import { Button } from "@storybook/react/demo";
import Button from "../src/Button";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import markdown from "./index.md";

import {
  withLiveEditScope,
  withLiveEdit,
  addLiveSource,
} from "storybook-addon-react-live-edit";
import { addDecorator, addParameters, storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
// addDecorator({
// });
// <div style={{ textAlign: "center" }}>{storyFn()}</div>
// addParameters({
//   notes: { readme },
//   // notes: "pretty", // 方便搜索
// });

// storiesOf("Demo", module)
//   // .addDecorator(withLiveEditScope({ React, Button }))
//   .addLiveSource("demo", `return <Button name="hi" />`);

export default {
  title: "Button", // 唯一，即便是跨文件也需要唯一
  component: Button,
  // includeStories: [], // 没有包含在里面的story，设置针对单个组件或者单个story的decorators就不会生效了，设置addDecorator针对所有story的decorators还是会生效的。但针对单个组件或者单个story的decorators始终不会对mdx中的生效，要用全局的addDecorator
  decorators: [
    //   withKnobs,
    //   // withLiveEditScope({ React, Button }),
    withInfo,
    //   // (storyFn) => <div style={{ backgroundColor: "yellow" }}>{storyFn()}</div>,
  ],
  parameters: {
    // notes: { disabled: true },
    // notes: "pretty",
    // notes: { Introduction: markdown },
    info: { inline: true },
  },
};

console.log(111, Button);
export const Text = ({ name }) => (
  <Button name={"feifei"} onClick={action("clicked")} />
);

export const withAButton = () => (
  <button disabled={boolean("disabled", false)}>
    {text("label", "hello")}
  </button>
);

export const Emoji = () => (
  // <Button onClick={action("clicked")}>
  <span role="img" aria-label="so cool">
    😀 😎 👍 💯
  </span>
  // </Button>
);
Emoji.story = {
  // decorators: [
  //   // (storyFn) => <div style={{ border: "5px solid red" }}>{storyFn()}</div>,
  // ],
  parameters: {
    notes: { markdown: markdown },
  },
};
