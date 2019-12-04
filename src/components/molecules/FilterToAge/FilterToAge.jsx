import React, { Component } from "react";
import { Slider, Menu, Dropdown, Icon } from "antd";
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
    const { dataSource } = this.props;
    const { reverse } = this.state;
    const onChange = value => {
      console.log("agethatWeClick", value);
      if (value <= dataSource.filterState.minAge) {
        return;
      }
      dataSource.changeMaxAge(value);
    };
    const min = () => {
      if (dataSource.filterState.minAge) {
        return dataSource.filterState.minAge;
      }
      return 0;
    };
    const menu = (
      <Menu>
        <Menu.Item key="1">
          <Slider
            min={min()}
            style={style}
            defaultValue={70}
            reverse={reverse}
            onAfterChange={onChange}
          />{" "}
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu}>
        <span>
          AGE TO
          <Icon type="down" />
        </span>
      </Dropdown>
    );
  }
}
