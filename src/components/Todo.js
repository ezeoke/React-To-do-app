import React, {Component} from  'react';
import Header from './Header';
import TodoItems from './TodoItems';

class Todo extends Component {
state = {
  todoItems: ['cook', 'eat', 'sleep', 'relax', 'born']
}

render(){
 
 return (
  <div>
   <Header title='MY TODO TITLE'/>
  <h1>Welcome to my todo app</h1>
  <ul>
   {this.state.todoItems.map((item)=>{ return <TodoItems individualItems = {item}/>})}
  </ul>
  </div>
 )
}}

export default Todo;