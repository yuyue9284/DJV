import React from 'react';

export default class StockItem extends React.Component {
	render(){
		return(
			<tr>
			<td>{this.props.Code}</td>
			<td>{this.props.Date}</td>
			<td>{this.props.Open}</td>
			<td>{this.props.High}</td>
			<td>{this.props.Low}</td>
			<td>{this.props.Close}</td>
			<td>{this.props.Volume}</td>
			<td><button onClick={this.props.removestock.bind(this,this.props.Code)}> 删除 </button></td>
			</tr>
			);

	}

	renderprops(){
		
	}

}

