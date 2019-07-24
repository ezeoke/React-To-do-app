import React, { Component } from 'react';
import Header from './Header';
import TodoItems from './TodoItems';

class Todo extends Component {

	handleRemoveOneItem = (itemToBeRemoved) => {
		console.log(this.handleRemoveOneItem)
		this.setState(pvevState => ({
			todoItems: prevState.todoItems.filter(
				todoItem  => todoItem !== itemToBeRemoved
			)
			}))
	}

	render() {
		const todoItems = [ 'cook', 'eat', 'sleep', 'relax', 'born' ];
		return (
			<div>
				<Header title="MY TODO TITLE" />
				<h1>Welcome to my todo app</h1>
				<ul>
					{todoItems.map((item) => {
						return <TodoItems individualItems={item} 
						handleRemoveOneItem = {this.handleRemoveOneItem}
						/>;
					})}
				</ul>
			</div>
		);
	}
}

export default Todo;
