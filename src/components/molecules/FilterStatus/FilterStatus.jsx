import React, { Component } from "react";
import { Menu, Dropdown, Icon, Button } from "antd";
import "antd/dist/antd.css";

export default class FilterStatus extends Component {
  state = {
    selectedStatus: ""
  };

  render() {
    const { dataSource, arrForStatus } = this.props;
    const { filterState } = dataSource;
    const { status } = filterState;

    let keyfor = 0;

    const onClick = ({ key }) => {
      if (key === "10") {
        this.setState({
          selectedStatus: "All"
        });
        return dataSource.changeFilterStateStatus({
          key: key,
          allCategories: ""
        });
      } else
        this.setState({
          selectedStatus: arrForStatus[key][0]
        });
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
    const title = status ? status : "STATUS";

    return (
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button>
          {title} <Icon type="down" />
        </Button>
      </Dropdown>
    );
  }
}
