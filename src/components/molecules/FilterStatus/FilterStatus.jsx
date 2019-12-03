import React, { Component } from "react";
import { Menu, Dropdown, Icon } from "antd";
import "antd/dist/antd.css";

export default class FilterStatus extends Component {
  render() {
    const { characterCards } = this.props.dataSource;

    let cards = new Map();

    for (let card of characterCards) {
      if (!cards.has(card.status)) {
        cards.set(card.status, [card]);
      } else cards.get(card.status).push(card);
    }
    const arrForStatus = Array.from(cards);
    console.log("arrForStatus", arrForStatus);
    let keyfor = 0;

    const onClick = ({ key }) => {
      console.log("key", key);
      if (key === "10") {
        return this.props.dataSource.changeFilterStateStatus({
          key: key,
          allCategories: ""
        });
      } else
        return this.props.dataSource.changeFilterStateStatus({
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
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">
          STATUS <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}
