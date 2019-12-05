import React, { Component } from "react";
import { Menu, Dropdown, Icon, Button } from "antd";
import "antd/dist/antd.css";

export default class FilterStatus extends Component {
  render() {
    const { dataSource, arrForStatus } = this.props;

    let keyfor = 0;

    const onClick = ({ key }) => {
      console.log("key", key);
      if (key === "10") {
        return dataSource.changeFilterStateStatus({
          key: key,
          allCategories: ""
        });
      } else
        return dataSource.changeFilterStateStatus({
          key: arrForStatus[key][0]
        });
    };

    const menu = (
      <Menu onClick={onClick}>
        <Menu.Item key={10}>All</Menu.Item>
        {arrForStatus.map(arr => {
          return <Menu.Item key={keyfor++}>{arr[0]}</Menu.Item>;
        })}
      </Menu>
    );

    return (
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button>
          STATUS <Icon type="down" />
        </Button>
      </Dropdown>
    );
  }
}
