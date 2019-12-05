import React, { Component } from "react";
import { Slider, Menu, Dropdown, Icon, Button } from "antd";
import "antd/dist/antd.css";

export default class FilterFromAge extends Component {
  state = {
    reverse: true
  };

  handleReverseChange = reverse => {
    this.setState({ reverse });
  };
  render() {
    const style = {
      display: "inline-block",
      width: 100,
      marginLeft: 10
    };
    const { minAge, changeMaxAge } = this.props;
    const { reverse } = this.state;

    const onChange = value => {
      if (value <= minAge) {
        return;
      }
      changeMaxAge(value);
    };
    const min = minAge ? minAge : 0;

    const menu = (
      <Menu>
        <Menu.Item key="1">
          <Slider
            min={min}
            style={style}
            defaultValue={70}
            reverse={reverse}
            onAfterChange={onChange}
          />{" "}
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button>
          AGE TO <Icon type="down" />
        </Button>
      </Dropdown>
    );
  }
}
