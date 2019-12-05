import React, { Component } from "react";
import { Menu, Dropdown, Icon, Button } from "antd";
import "antd/dist/antd.css";

export default class FilterCategory extends Component {
  state = {
    selectedCategory: ""
  };
  render() {
    const { arrForCategory, dataSource } = this.props;
    let keyfor = 0;

    const onClick = ({ key }) => {
      if (key === "10") {
        this.setState({
          selectedCategory: "All"
        });
        return dataSource.changeFilterCategoryStatus({
          key: key,
          allCategories: ""
        });
      } else {
        this.setState({
          selectedCategory: arrForCategory[key][0]
        });
        return dataSource.changeFilterCategoryStatus({
          key: arrForCategory[key][0]
        });
      }
    };
    const menu = (
      <Menu onClick={onClick}>
        <Menu.Item key={10}>All</Menu.Item>
        {arrForCategory.map(arr => (
          <Menu.Item key={keyfor++}>{arr[0]}</Menu.Item>
        ))}
      </Menu>
    );
    const title = this.state.selectedCategory
      ? this.state.selectedCategory
      : "CATEGORY";

    return (
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button>
          {title} <Icon type="down" />
        </Button>
      </Dropdown>
    );
  }
}
