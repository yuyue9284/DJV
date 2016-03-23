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
				<Create_todo createtask = {this.createtask.bind(this)}/>
				<Todolist todos = {this.state.todos}/>			
			</div>
		);
	}

	createtask(task){
		this.state.todos.push({
			task,
			isComplete:false
			}
			);
		this.setState({todos: this.state.todos});
	}
}