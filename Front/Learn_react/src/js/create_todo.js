
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
		this.props.createtask(this.refs.createinput.value);
		this.refs.createinput.value = '';
	}

}