import React, { Component } from "react";
import Filter from "../../organisms/Filter";
import SortButton from "../../atoms/SortButton";
import ResetButton from "../../atoms/ResetButton";
import CharacterCards from "../../organisms/CharacterCards";
import { Spin } from "antd";
// import ConnectCharacterCards from "../../../containers/ConnectCharacterCards";

export default class MainPage extends Component {
  componentDidMount() {
    this.props.getAllCharacters();
  }
  render() {
    const { characterCards, filterState, isLoadingGetCharacters } = this.props;

    let data = characterCards;

    const filterByTabName = (cards, nameTab) => {
      if (!filterState[nameTab]) return cards;
      return cards.filter(card => {
        return card[nameTab] === filterState[nameTab];
      });
    };

    const filterAge = (cards, age) => {
      return cards.filter(card => {
        return card.age < age;
      });
    };

    data = filterByTabName(characterCards, "status");
    data = filterByTabName(data, "category");

    return (
      <div>
        <Filter dataSource={this.props} />
        <SortButton />
        <ResetButton />
        <CharacterCards data={filterAge} />
      </div>
    );
  }
}
