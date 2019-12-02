import React, { Component } from "react";
import CharacterCards from "../organisms/CharacterCards";
import Filter from "../organisms/Filter";
import SortButton from "../atoms/SortButton";
import ResetButton from "../atoms/ResetButton";

class Template extends Component {
  render() {
    return (
      <div>
        <Filter />
        <SortButton />
        <ResetButton />
        <CharacterCards />
      </div>
    );
  }
}
export default Template;
