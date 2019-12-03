import React, { Component } from "react";
import FilterStatus from "../../molecules/FilterStatus";
import FilterCategory from "../../molecules/FilterCategory";
import FilterFromAge from "../../molecules/FilterFromAge";
import FilterToAge from "../../molecules/FilterToAge";

export default class Filter extends Component {
  render() {
    const { dataSource } = this.props;
    return (
      <div>
        <FilterStatus dataSource={dataSource} />
        <FilterCategory dataSource={dataSource} />
        <FilterFromAge dataSource={dataSource} />
        <FilterToAge dataSource={dataSource} />
      </div>
    );
  }
}
