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
				<Todolist 
				todos = {this.state.todos}
				toggleTask = {this.toggleTask.bind(this)}
				/>			
			</div>
		);
	}

	toggleTask(task){
		const foundtodo = _.find(this.state.todos, todo => todo.task === task);
		foundtodo.isComplete = ! foundtodo.isComplete;
		this.setState({todos: this.state.todos})
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