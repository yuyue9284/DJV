import React from 'react';

export default class StockItem extends React.Component {
	render(){
		return(
				<tr>
					<td>{this.props.code}</td>
					<td>{this.props.date}</td>
					<td><button onClick={this.props.removestock.bind(this,this.props.code, this.props.date)}> 删除 </button></td>
				</tr>
			);

	}
		
}
