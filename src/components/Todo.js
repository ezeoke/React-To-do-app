import React, { Component } from 'react';
import Header from './Header';
import TodoItems from './TodoItems';

class Todo extends Component {
  state = {
    todoItems: ['cook', 'eat', 'sleep', 'relax', 'born'],
    newTodo: ''
  }

  handleChange = (e) => {
    this.setState({ newTodo: e.target.value })
    console.log(e.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.newTodo)
  }

  render() {

    return (
      <div>
        <Header title='MY TODO TITLE' />
        <h1>Welcome to my todo app</h1>

        {this.state.todoItems.map((item) => { return <TodoItems individualItems={item} /> })}

        <form onSubmit={this.handleSubmit}>
          <label>Todo Items</label><br></br>
          <input type="text" name="todo-item"
            value={this.state.newTodo}
            onChange={this.handleChange}
          ></input><br></br>
          <button>submit</button>
        </form>
      </div>
    )
  }
}

export default Todo;