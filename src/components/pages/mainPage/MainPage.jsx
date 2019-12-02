import React, { Component } from "react";
import Filter from "../../organisms/Filter";
import SortButton from "../../atoms/SortButton";
import ResetButton from "../../atoms/ResetButton";
import ConnectCharacterCards from "../../../containers/ConnectCharacterCards";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Filter />
        <SortButton />
        <ResetButton />
        <ConnectCharacterCards />
      </div>
    );
  }
}
