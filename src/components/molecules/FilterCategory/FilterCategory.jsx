import React, { Component } from "react";
import { Menu, Dropdown, Icon, Button } from "antd";
import "antd/dist/antd.css";

export default class FilterCategory extends Component {
  render() {
    const { arrForCategory, dataSource } = this.props;
    let keyfor = 0;

    const onClick = ({ key }) => {
      if (key === "10") {
        return dataSource.changeFilterCategoryStatus({
          key: key,
          allCategories: ""
        });
      }
      return dataSource.changeFilterCategoryStatus({
        key: arrForCategory[key][0]
      });
    };
    const menu = (
      <Menu onClick={onClick}>
        <Menu.Item key={10}>All</Menu.Item>
        {arrForCategory.map(arr => (
          <Menu.Item key={keyfor++}>{arr[0]}</Menu.Item>
        ))}
      </Menu>
    );

    return (
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button>
          CATEGORY <Icon type="down" />
        </Button>
      </Dropdown>
    );
  }
}
