import React, { Component } from "react";
import { Forminput } from "../components/Form/form";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { Container } from "react-bootstrap";
import Item from "../components/Item/Item";
import Filter from "../components/FIlter/Filter";

export class HomePage extends Component {
  state = {
    todos: [
      {
        id: 0,
        firsname: "JON",
        lastName: "Jons",
        categories: "Family",
        phone: "samsung",
        done: false,
      },
      {
        id: 1,
        firsname: "maykl",
        lastName: "Jons",
        categories: "Friends",
        phone: "Honor",
        done: false,
      },
      {
        id: 2,
        firsname: "Hearo",
        lastName: "fors",
        categories: "Relatives",
        phone: "Iphone",
        done: false,
      },
    ],
    todo: {
      firsname: "",
      lastName: "",
      categories: "Select categories",
      phone: "",
    },
    search: "",
  };
  render() {
    let { todos, search, categories, todo } = this.state;
    todos = todos.filter((todo) =>
      todo.firsname.toLowerCase().includes(search)
    );

    if (categories !== "All") {
      todos = todos.filter((todo) => todo.categories === categories);
    }
    const doneTodos = todos.filter((todo) => todo.done);

    let handleSearch = (e) => {
      this.setState({ search: e.target.value.trim().toLowerCase() });
    };

    const handleCategory = (e) => {
      this.setState({ categories: e.target.value });
    };

    const submit = (e) => {
      e.preventDefault();
      let newTodos = [...todos, todo];
      this.setState({
        todos: newTodos,
        todo: { firsname: "", lastName: "", categories: "", phone: "" },
      });
    };

    const handlTodoSubmit = (e) => {
      let newTodo = { ...todo, [e.target.id]: e.target.value };
      this.setState({ todo: newTodo });
    };

    const doneTodo = (id) => {
      console.log(id);
      let newTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.done = true;
        }
        return todo;
      });
      this.setState({ todos: newTodos });
    };

    return (
      <Container>
        <Forminput
          todo={todo}
          handlTodoSubmit={handlTodoSubmit}
          submit={submit}
        />
        <Filter
          handleCategory={handleCategory}
          search={search}
          handleSearch={handleSearch}
        />
        <Tabs
          defaultActiveKey="All"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="All" title="All">
            {todos.map((todo, i) => (
              <Item doneTodo={doneTodo} key={i} N={i + 1} {...todo} />
            ))}
          </Tab>
          <Tab eventKey="Favourite" title="Favourite">
            {doneTodos.map((todo, i) => (
              <Item doneTodo={doneTodo} key={i} N={i + 1} {...todo} />
            ))}
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default HomePage;
