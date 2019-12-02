import React, { Component } from "react";
import { Slider, Menu, Dropdown, Icon } from "antd";
import "antd/dist/antd.css";

export default class FilterFromAge extends Component {
  state = {
    reverse: true
  };

  handleReverseChange = reverse => {
    this.setState({ reverse });
  };
  render() {
    const style = {
      display: "inline-block",
      width: 100,
      marginLeft: 10
    };
    const { reverse } = this.state;

    const menu = (
      <Menu onClick={() => console.log("click")}>
        <Menu.Item key="1">
          <Slider style={style} defaultValue={70} reverse={reverse} />{" "}
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">
          AGE TO
          <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}
