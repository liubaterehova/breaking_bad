import { Button } from "antd";
import React, { Component } from "react";

export default class SortButton extends Component {
  state = {
    size: "large"
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <Button type="primary" size={size} style={{ margin: 10 + "px" }}>
        Sort by Alphabet
      </Button>
    );
  }
}
