/*
 * @Author: your name
 * @Date: 2020-06-18 14:37:45
 * @LastEditTime: 2020-06-18 15:22:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fei_utils_lib/stories/0-Welcome.stories.js
 */

import React from "react";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";

export default {
  title: "Welcome",
  component: Welcome,
};

export const ToStorybook = () => <Welcome showApp={linkTo("Button")} />;

ToStorybook.story = {
  name: "to Storybook",
};
