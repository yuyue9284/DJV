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
		return(
			
			<td style = {taskStyle} onClick = {this.props.toggleTask.bind(this, task)}>
			{this.props.task}
			</td>


			);
	}
	
	toggleTask(task){
		const foundtodo = _.find(this.state.todos, todo => todo.task === task)
	}

	renderActionsSection(){
		if (this.state.isEditing){
			return(
				<td>
					<button>Save</button>
					<button onClick = {this.onSaveClick.bind(this)}>Cancel</button>
				</td>
				);
		}

		return (
			<td>
				<button onClick = {this.onEditClick.bind(this)}>Edit</button>
				<button>Delete</button>
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
	onSaveClick(){
		this.setState({isEditing: false});
	}
}