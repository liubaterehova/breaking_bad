import React, { Component } from "react";
import { Slider, Menu, Dropdown, Icon } from "antd";
import "antd/dist/antd.css";

export default class FilterFromAge extends Component {
  render() {
    const style = {
      display: "inline-block",
      width: 100,
      marginLeft: 10
    };
    const menu = (
      <Menu onClick={() => console.log("click")}>
        <Menu.Item key="1">
          <Slider style={style} defaultValue={30} />{" "}
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">
          AGE FROM
          <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}
