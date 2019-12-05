import React, { Component } from "react";
import Filter from "../../organisms/Filter";
import SortButton from "../../atoms/SortButton";
import ResetButton from "../../atoms/ResetButton";
import CharacterCards from "../../organisms/CharacterCards";
import { Spin } from "antd";
import Template from "../../template";

export default class MainPage extends Component {
  componentDidMount() {
    this.props.getAllCharacters();
  }
  render() {
    const {
      characterCards,
      filterState,
      isLoadingGetCharacters,
      sortByAlphabet,
      reset
    } = this.props;

    let data = characterCards;

    const filterByTabName = (cards, nameTab) => {
      if (!filterState[nameTab]) return cards;
      return cards.filter(card => {
        return card[nameTab] === filterState[nameTab];
      });
    };

    const filterByAge = (cards, number, lift) => {
      let newArr = [];

      if (!filterState[lift]) {
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
      return newArr;
    };

    function filterByStatusorCategory(option) {
      let cards = new Map();
      for (let card of characterCards) {
        if (!cards.has(card[option])) {
          cards.set(card[option], [card]);
        } else cards.get(card[option]).push(card);
      }
      const arr = Array.from(cards);

      return arr;
    }

    data = filterByTabName(characterCards, "status");
    data = filterByTabName(data, "category");
    data = filterByAge(data, filterState.minAge, "minAge");
    data = filterByAge(data, filterState.maxAge, "maxAge");

    const buttons = (
      <div>
        <Filter
          dataSource={this.props}
          arrForCategory={filterByStatusorCategory("category")}
          arrForStatus={filterByStatusorCategory("status")}
        />
        <SortButton sortByAlphabet={sortByAlphabet} />
        <ResetButton reset={reset} />
      </div>
    );
    return (
      <Template>
        {buttons}
        {isLoadingGetCharacters ? (
          <Spin size="large" />
        ) : (
          <CharacterCards data={data} />
        )}
      </Template>
    );
  }
}
