import React, { Component } from "react";
import { Menu, Dropdown, Icon } from "antd";
import "antd/dist/antd.css";

export default class FilterCategory extends Component {
  render() {
    const { characterCards } = this.props.dataSource;
    let cards = new Map();
    for (let card of characterCards) {
      if (!cards.has(card.category)) {
        cards.set(card.category, [card]);
      } else cards.get(card.category).push(card);
    }

    const arrForCategory = Array.from(cards);
    console.log("arrForCategory", arrForCategory);
    let keyfor = 0;

    const onClick = ({ key }) => {
      console.log("key", key);
      if (key === "10") {
        return this.props.dataSource.changeFilterCategoryStatus({
          key: key,
          allCategories: ""
        });
      }
      return this.props.dataSource.changeFilterCategoryStatus({
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
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">
          CATEGORY <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}
