/*
 * @Author: your name
 * @Date: 2020-06-17 19:30:51
 * @LastEditTime: 2020-06-19 14:59:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fei_utils_lib/src/Button.js
 */
import React, { PureComponent, Component } from "react";

const hi = "hii";
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClick: false,
    };
  }
  click() {
    this.setState((state) => {
      isClick: !state.isClick;
    });
  }
  render() {
    return (
      <div onClick={() => this.click()}>
        {this.props.name} + {String(this.state.isClick)}
      </div>
    );
  }
}

export default Button;
