import React, { Component } from "react";

import "./form.scss";
import { categories } from "../../data/categories";

export class Forminput extends Component {
  render() {
    const { submit, handlTodoSubmit, todo } = this.props;
    return (
      <form onSubmit={submit}>
        <div className="field">
          <label>
            <i className="far fa-user"></i>First Name
          </label>
          <input
            value={todo.firsname}
            id="firsname"
            onChange={handlTodoSubmit}
            type="text"
            placeholder="First Name"
            required
          />
        </div>

        <div className="field">
          <label>
            <i className="far fa-user"></i>Last Name
          </label>

          <input
            value={todo.lastName}
            onChange={handlTodoSubmit}
            type="text"
            placeholder="last Name"
            id="lastName"
          />
        </div>

        <div className="field">
          <label>
            <i className="fa-solid fa-hand-pointer"></i>Select ...
          </label>
          <select value={todo.categories} id="categories" onChange={handlTodoSubmit}>
            <option value="Select categories">Select categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label>
            <i className="fa-solid fa-phone"></i>phone
          </label>
          <input
            value={todo.phone}
            id="phone"
            onChange={handlTodoSubmit}
            type="text"
            placeholder="Phone"
          />
        </div>
        <button className="form__btn" type="submit">
          Add to
        </button>
      </form>
    );
  }
}

export default Forminput;
