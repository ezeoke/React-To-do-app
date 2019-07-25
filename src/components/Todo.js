import React, { Component } from "react";
import Header from "./Header";
import TodoItems from "./TodoItems";

class Todo extends Component {
  state = {
    todoItems: [],
    newTodo: ""
  };

  handleChange = e => {
    this.setState({ newTodo: e.target.value });
    console.log(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();

    const duplicateItem = this.state.todoItems.filter(todoItem => {
      if (isNaN(todoItem)) {
        return todoItem.toUpperCase() === this.state.newTodo.toUpperCase();
      } else {
        return todoItem == this.state.newTodo;
      }
    });

    if (this.state.newTodo && duplicateItem.length == 0) {
      this.setState(prevState => {
        return {
          todoItems: prevState.todoItems.concat(this.state.newTodo),
          newTodo: (this.state.newTodo = "")
        };
      });
    }
  };

  handleRemoveOneItem = itemToBeRemoved => {
    this.setState(prevState => ({
      todoItems: prevState.todoItems.filter(
        todoItem => todoItem !== itemToBeRemoved
      )
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoItems.length !== this.state.todoItems.length) {
      const jsonState = JSON.stringify(this.state.todoItems);
      localStorage.setItem("todoItems", jsonState);
    }
  }

  componentDidMount() {
    if (localStorage.getItem("todoItems") !== null) {
      const jsonState = JSON.parse(localStorage.getItem("todoItems"));
      this.setState(() => {
        return {
          todoItems: jsonState
        };
      });
    }
  }

  RemoveAll = () => {
    this.setState({
      todoItems: []
    });
  };

  render() {
    return (
      <div>
        <Header title="MY TODO TITLE" />
        <h1>Welcome to my todo app</h1>

        <form onSubmit={this.handleSubmit}>
          <label>Todo Items</label>
          <br />
          <input
            type="text"
            name="todo-item"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <br />
          <button>submit</button>
        </form>
        <button
          style={{
            display: this.state.todoItems.length == 0 ? "none" : "block"
          }}
          onClick={this.RemoveAll}
        >
          Remove All
        </button>

        {this.state.todoItems.map(item => {
          return (
            <TodoItems
              individualItems={item}
              key={item}
              handleRemoveOneItem={this.handleRemoveOneItem}
            />
          );
        })}
      </div>
    );
  }
}

export default Todo;
