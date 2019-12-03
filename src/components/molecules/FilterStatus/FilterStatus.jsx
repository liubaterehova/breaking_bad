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
      console.log("searchFor", arrForStatus[key]);
      console.log("searchFor", arrForStatus[key][1]);
      this.props.changeCharacterCards(arrForStatus[key][1]);
    };

    const menu = (
      <Menu onClick={onClick}>
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
