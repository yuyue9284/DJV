import React from 'react';

export default class StockItem extends React.Component {
	render(){
		return(
				<tr>
					<td>{this.props.code}</td>
					<td>{this.props.date}</td>
				</tr>
			);

	}
		
}
