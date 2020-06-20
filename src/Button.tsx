/*
 * @Author: your name
 * @Date: 2020-06-17 19:30:51
 * @LastEditTime: 2020-06-20 21:40:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fei_utils_lib/src/Button.js
 */
import * as React from "react";
// import PropTypes from "prop-types";

interface PropTypes {
  name: string;
}
interface State {
  isClick: boolean;
}

const hi = "hii";
class Button extends React.Component<PropTypes, State> {
  constructor(props: PropTypes) {
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
