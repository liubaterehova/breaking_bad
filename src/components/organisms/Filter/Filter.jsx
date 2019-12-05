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
        <FilterStatus
          dataSource={dataSource}
          arrForStatus={this.props.arrForStatus}
        />
        <FilterCategory
          dataSource={dataSource}
          arrForCategory={this.props.arrForCategory}
        />
        <FilterFromAge
          maxAge={dataSource.filterState.maxAge}
          changeMinAge={dataSource.changeMinAge}
          minAge={dataSource.filterState.minAge}
        />
        <FilterToAge
          minAge={dataSource.filterState.minAge}
          changeMaxAge={dataSource.changeMaxAge}
          maxAge={dataSource.filterState.maxAge}
        />
      </div>
    );
  }
}
