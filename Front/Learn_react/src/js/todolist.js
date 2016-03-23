import React from 'react';
import _ from 'lodash';
import TodolistItem from './todolistitem'
import Todolist_header from './todolist_header';

export default class Todolist extends React.Component {
	renderItems(){
		const props = _.omit(this.props, 'todos')
		return _.map(this.props.todos, (todo, index) => <TodolistItem key = {index}{...todo}{...props} />);
	}

	render() {
		return (
			<table>
				<Todolist_header />			
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		);
	}
}