import React, { Component } from "react";
import Filter from "../../organisms/Filter";
import SortButton from "../../atoms/SortButton";
import ResetButton from "../../atoms/ResetButton";
import CharacterCards from "../../organisms/CharacterCards";
// import ConnectCharacterCards from "../../../containers/ConnectCharacterCards";

export default class MainPage extends Component {
  componentDidMount() {
    this.props.getAllCharacters();
  }
  render() {
    const { characterCards, filterState } = this.props;
    let data = characterCards;

    const filterByTabName = (cards, nameTab) => {
      console.log("nameTab", nameTab);
      console.log("cards", cards);
      return cards.filter(card => {
        return card[nameTab] === filterState[nameTab];
      });
    };
    // const filterStatus = cards => {
    //   return cards.filterByTabName(card => {
    //     return card.status === filterState.status;
    //   });
    // };

    // const filterCategory = cards => {
    //   return cards.filterByTabName(card => {
    //     return card.category === filterState.category;
    //   });
    // };

    if (filterState.status === "" && filterState.category === "") {
      data = characterCards;
    } else if (filterState.status === "") {
      data = filterByTabName(characterCards, "category");
      debugger;
    } else if (filterState.category === "") {
      data = filterByTabName(characterCards, "status");
    } else {
      let newArr = filterByTabName(characterCards, "status");
      data = filterByTabName(newArr, "category");
    }

    console.log("this.propsinMainPage", this.props);
    return (
      <div>
        <Filter dataSource={this.props} />
        <SortButton />
        <ResetButton />
        <CharacterCards data={data} />
      </div>
    );
  }
}
