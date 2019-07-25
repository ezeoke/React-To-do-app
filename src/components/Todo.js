import React, { Component } from 'react';
import Header from './Header';
import TodoItems from './TodoItems';

class Todo extends Component {
  state = {
    todoItems: [],
    newTodo: ''
  }

  handleChange = (e) => {
    this.setState({ newTodo: e.target.value })
    console.log(e.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.newTodo)
    this.setState((prevState) => {
      return {
        todoItems: prevState.todoItems.concat(this.state.newTodo),
        newTodo: this.state.newTodo = ''
      }
    });

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoItems.length !== this.state.todoItems.length) {
 const jsonState = JSON.stringify(this.state.todoItems);
 localStorage.setItem('todoItems', jsonState)
    }
  }

  componentDidMount(){
    if(localStorage.getItem('todoItems') !== null){
    const jsonState = JSON.parse(localStorage.getItem('todoItems'));
     this.setState(()=>{
       return {
         todoItems: jsonState
       }
     })
  }}

  render() {

  return(
      <div>
  <Header title='MY TODO TITLE' />
  <h1>Welcome to my todo app</h1>
        { this.state.todoItems.map((item) => { return <TodoItems individualItems={item} /> }) }
<form onSubmit={this.handleSubmit}>
  <label>Todo Items</label><br></br>
  <input type="text" name="todo-item"
    value={this.state.newTodo}
    onChange={this.handleChange} >
  </input><br></br>
  <button>submit</button>
</form>
      </div >
    )
  }
}

export default Todo; 
