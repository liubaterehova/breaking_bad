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
    const onClick = () => {
      console.log("AlphabetdataSourse", this.props.dataSource);
      this.props.dataSource.sortByAlphabet();
    };

    const { size } = this.state;
    return (
      <Button
        type="primary"
        size={size}
        style={{ margin: 10 + "px" }}
        onClick={onClick}
      >
        Sort by Alphabet
      </Button>
    );
  }
}
