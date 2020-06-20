/*
 * @Author: your name
 * @Date: 2020-06-17 19:30:51
 * @LastEditTime: 2020-06-20 21:27:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fei_utils_lib/src/Button.js
 */
import * as React from "react";

export interface Props {
  name: string;
}
export interface State {
  isClicked: boolean;
}
const hi = "hii";
class Button extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  click() {
    this.setState((state: any) => ({
      isClicked: !state.isClicked,
    }));
  }

  render() {
    return (
      <div onClick={() => this.click()}>
        {this.props.name} + {String(this.state.isClicked)}
      </div>
    );
  }
}

export default Button;
