import React, { Component } from "react";
import { Menu, Dropdown, Icon, Button } from "antd";
import "antd/dist/antd.css";

export default class FilterCategory extends Component {
  render() {
    const menu = (
      <Menu onClick={() => console.log("click")}>
        <Menu.Item key="1">All</Menu.Item>
        <Menu.Item key="2">BREAKING BAD</Menu.Item>
        <Menu.Item key="3">BETTER CALL SAUL</Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">
          CATEGORY <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}
