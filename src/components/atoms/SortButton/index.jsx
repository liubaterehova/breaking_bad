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
    const { sortByAlphabet } = this.props;
    console.log("this.propsInAtom", this.props);
    console.log("sortByAlphabetInAtom", sortByAlphabet);
    return (
      <Button
        type="primary"
        size={size}
        style={{ margin: 10 + "px" }}
        onClick={sortByAlphabet}
      >
        Sort by Alphabet
      </Button>
    );
  }
}
