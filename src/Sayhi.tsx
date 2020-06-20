/*
 * @Author: your name
 * @Date: 2020-06-17 19:30:51
 * @LastEditTime: 2020-06-20 21:45:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fei_utils_lib/src/Button.js
 */
import * as React from "react";

export interface Props {
  name: string;
}
const hi = "hii";
class Sayhi extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return <div>{this.props.name}</div>;
  }
}

export default Sayhi;
