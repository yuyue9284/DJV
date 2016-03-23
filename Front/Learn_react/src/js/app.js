import React from 'react';
import Todolist from './todolist';
import Create_todo from './create_todo'

const todos = [{
	task: 'todo',
	isComplete: true
}, 
{
	task: 'eat',
	isComplete: false
}]
export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			todos
		};
	}

	render() {
		return (
			<div>
				<h1>React Todolist</h1>
				<Create_todo />
				<Todolist todos = {this.state.todos}/>			
			</div>
		);
	}

}