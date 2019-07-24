import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Likes from '../components/Likes';
import Todo from '../components/Todo';
import NotFoundPage from '../components/NotFoundPage';

const TodoRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Todo} />
				<Route path="/likesApp" component={Likes} />
				<Route component={NotFoundPage} />
			</Switch>
		</BrowserRouter>
	);
};

export default TodoRouter;
