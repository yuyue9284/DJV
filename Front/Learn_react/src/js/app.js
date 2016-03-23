import React from 'react';
import Todolist from './todolist';


const todos = [{
	task: 'todo',
	isComplete: true
}, {
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
				<Todolist todos = {this.state.todos}/>			
			</div>
		);
	}

}