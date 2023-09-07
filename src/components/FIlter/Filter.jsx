import React, { Component } from "react";

import { categories } from "../../data/categories";

import "./filter.scss";

export class Filter extends Component {
  render() {
    const { handleSearch, search, category, handleCategory } = this.props;
    return (
      <section>
        <div className="search">
          <input
            value={search}
            onChange={handleSearch}
            type="text"
            className="searchInput"
            placeholder="Searching . . ."
          />
          <i className="fa-solid fa-magnifying-glass searchicon"></i>
          <select value={category} onChange={handleCategory}>
            <option value="All">All</option>
            {categories.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
        </div>
      </section>
    );
  }
}

export default Filter;
