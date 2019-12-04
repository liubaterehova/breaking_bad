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

    const filterByAge = (cards, number, lift) => {
      let newArr = [];
      console.log("lift", lift);

      if (!filterState[lift]) {
        console.log("no", lift);
        return cards;
      }
      if (lift === "minAge")
        newArr = cards.filter(card => {
          if (card.age === "Unknown") return true;
          return card.age > number;
        });
      if (lift === "maxAge") {
        newArr = cards.filter(card => {
          if (card.age === "Unknown") return true;
          return card.age < number;
        });
      }
      console.log("filteredByAge", newArr);
      return newArr;
    };

    data = filterByTabName(characterCards, "status");
    data = filterByTabName(data, "category");
    data = filterByAge(data, filterState.minAge, "minAge");
    data = filterByAge(data, filterState.maxAge, "maxAge");
    console.log("dataAfterAllFilters", data);
    return (
      <div>
        <Filter dataSource={this.props} />
        <SortButton dataSource={this.props} />
        <ResetButton dataSource={this.props} />
        <CharacterCards data={data} />
      </div>
    );
  }
}
