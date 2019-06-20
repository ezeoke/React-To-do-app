import React, {Component} from  'react';
import Header from './Header';
import TodoItems from './TodoItems';

class Todo extends Component {
render(){
 const todoItems = ['cook', 'eat', 'sleep', 'relax', 'born'];
 return (
  <div>
   <Header title='MY TODO TITLE'/>
  <h1>Welcome to my todo app</h1>
  <ul>
   {todoItems.map((item)=>{ return <TodoItems individualItems = {item}/>})}
  </ul>
  </div>
 )
}
}

export default Todo;