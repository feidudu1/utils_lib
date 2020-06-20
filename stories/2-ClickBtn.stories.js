/*
 * @Author: your name
 * @Date: 2020-06-18 14:37:24
 * @LastEditTime: 2020-06-19 15:54:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fei_utils_lib/stories/1-Button.stories.js
 */

import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import { withInfo } from "@storybook/addon-info";
// import ClickBtn from "../src/ClickBtn";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import markdown from "./index.md";

import {
  withLiveEditScope,
  withLiveEdit,
  addLiveSource,
} from "storybook-addon-react-live-edit";
import { addDecorator, addParameters, storiesOf } from "@storybook/react";
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

// export default {
//   title: "Demo", // 唯一，即便是跨文件也需要唯一
//   component: ClickBtn,
//   // includeStories: [], // 没有包含在里面的story，设置针对单个组件或者单个story的decorators就不会生效了，设置addDecorator针对所有story的decorators还是会生效的。但针对单个组件或者单个story的decorators始终不会对mdx中的生效，要用全局的addDecorator
// };
console.log(999, Button);
storiesOf("Demo", module)
  .addDecorator(withLiveEditScope({ React, Button, action }))
  .addDecorator(withInfo)
  .addParameters({
    info: {
      inline: false,
      text: `用户基础信息展示，可进行上下翻页。`,
    },
  })
  .addLiveSource(
    "demo",
    `return <Button onClick={action('clicked')}>hihi</Button>`
  );
