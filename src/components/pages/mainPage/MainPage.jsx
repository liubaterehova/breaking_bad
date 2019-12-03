import React, { Component } from "react";
import Filter from "../../organisms/Filter";
import SortButton from "../../atoms/SortButton";
import ResetButton from "../../atoms/ResetButton";
import CharacterCards from "../../organisms/CharacterCards";
// import ConnectCharacterCards from "../../../containers/ConnectCharacterCards";

export default class MainPage extends Component {
  render() {
    console.log("this.propsinMainPage", this.props);
    return (
      <div>
        <Filter dataSource={this.props} />
        <SortButton />
        <ResetButton />
        <CharacterCards dataSource={this.props} />
      </div>
    );
  }
}
