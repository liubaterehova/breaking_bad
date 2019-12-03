import React, { Component } from "react";
import { Menu, Dropdown, Icon } from "antd";
import "antd/dist/antd.css";

export default class FilterStatus extends Component {
  render() {
    const menu = (
      <Menu onClick={() => console.log("click")}>
        <Menu.Item key="1">All</Menu.Item>
        <Menu.Item key="2">DEAD</Menu.Item>
        <Menu.Item key="3">UNDEFINED</Menu.Item>
        <Menu.Item key="3">ALIVE</Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">
          STATUS <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}
