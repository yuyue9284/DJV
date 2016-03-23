// TodolistItem

import React from 'react';

export default class TodolistItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isEditing: false
		};
	}

	renderTask(){
		const{ task, isComplete } = this.props;
		const taskStyle = {
			color: isComplete ?'green':'red',
			cursor:'pointer'
		};

		if (this.state.isEditing){
			return(
				<td>
					<from onSubmit = {this.onSaveClick.bind(this)}>
						<input type = "text" defaultValue = {task} ref = "editInput"></input>
				</from>
				</td>
		);
		}

		return(
			
			<td style = {taskStyle} onClick = {this.props.toggleTask.bind(this, task)}>
			{this.props.task}
			</td>


			);
	}
	


	renderActionsSection(){
		if (this.state.isEditing){
			return(
				<td>
					<button onClick = {this.onSaveClick.bind(this)}> Save</button>
					<button onClick = {this.onCancelClick.bind(this)}>Cancel</button>
				</td>
				);
		}

		return (
			<td>
				<button onClick = {this.onEditClick.bind(this)}>Edit</button>
				<button onClick = {this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
			</td>
		);
	}

	render() {
		return (
			<tr>
				{this.renderTask()}
				{this.renderActionsSection()}
			</tr>
		);
	}
	
	onEditClick(){
		this.setState({isEditing : true});
	}	

	onCancelClick(){
		this.setState({isEditing : false});
	}


	onSaveClick(event){
		event.preventDefault();
		const oldTask = this.props.task;
		const newTask = this.refs.editInput.value;
		this.props.saveTask(oldTask,newTask);
		this.setState({isEditing:false});
	}
}