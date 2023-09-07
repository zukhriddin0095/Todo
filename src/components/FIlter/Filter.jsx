
import React, { Component } from 'react'
import { categories } from '../../data/categories';


import "./filter.scss"

export class Filter extends Component {
  render() {
    const { handleSearch, search, handleCategory } = this.props;
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
          <i class="fa-solid fa-magnifying-glass searchicon"></i>
          <select onChange={handleCategory} >
            <option value="All">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </section>
    );
  }
}

export default Filter