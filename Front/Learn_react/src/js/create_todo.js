
import React from 'react';

export default class Create_todo extends React.Component {
	render() {
		return (
				<form onSubmit = {this.handleCreate.bind(this)}>
					<input type = "text" placeholder ="what to do?" ref = "createinput"/>
					<button>Create</button>
				</form>
		);
	}
	
	handleCreate(event){
		event.preventDefault();
		const createinput = this.refs.createinput;
		const task = createinput.value;
		const validate = this.validate(task); 
		if (validate === null){
			this.props.createtask(this.refs.createinput.value);
		}
		this.refs.createinput.value = '';
	}

	validate(task){
		if (!task){
			return alert('No input')
		}
		else if (_.find(this.props.todos, todo=>todo.task === task)){
			return alert("Task already exist")
		}
		else{
			return null;
		}
	}
}