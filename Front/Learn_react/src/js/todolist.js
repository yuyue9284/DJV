import React from 'react';
import _ from 'lodash';
import TodolistItem from './todolistitem'
import Todolist_header from './todolist_header';

export default class Todolist extends React.Component {
	renderItems(){
		return _.map(this.props.todos, (todo, index) => <TodolistItem key = {index}{...todo} />);
	}

	render() {
		return (
			<table>
				<Todolist_header />			
				<tbody>{this.renderItems()}</tbody>
			</table>
		);
	}

}