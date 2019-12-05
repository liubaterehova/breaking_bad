import React, { Component } from "react";
import { Slider, Menu, Dropdown, Icon, Button } from "antd";
import "antd/dist/antd.css";

export default class FilterFromAge extends Component {
  render() {
    const { maxAge, changeMinAge } = this.props;

    const style = {
      display: "inline-block",
      width: 100,
      marginLeft: 10
    };

    let max = maxAge ? maxAge : 100;

    const menu = (
      <Menu>
        <Menu.Item key="1">
          <Slider
            style={style}
            defaultValue={0}
            onAfterChange={changeMinAge}
            max={max}
          />
        </Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button>
          AGE FROM <Icon type="down" />
        </Button>
      </Dropdown>
    );
  }
}
