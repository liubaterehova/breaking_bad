import { Button } from "antd";
import React, { Component } from "react";

export default class ResetButton extends Component {
  state = {
    size: "large"
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <Button type="primary" size={size}>
        Reset
      </Button>
    );
  }
}
