/*
 * @Author: your name
 * @Date: 2020-06-17 19:30:51
 * @LastEditTime: 2020-06-19 16:03:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fei_utils_lib/src/Button.js
 */
import React, { PureComponent, Component } from "react";
import PropTypes from "prop-types";

const hi = "hii";
class Button extends Component {
  static propTypes = {
    name: PropTypes.string,
  };

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
