/*
 * @Author: your name
 * @Date: 2020-06-17 19:30:51
 * @LastEditTime: 2020-06-19 00:35:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fei_utils_lib/src/Button.js
 */
import React, { PureComponent, Component } from "react";

const hi = "hii";
class Sayhi extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.name}</div>;
  }
}

export default Sayhi;
