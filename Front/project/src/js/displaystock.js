import React from 'react';
import _ from 'lodash';
import StockItem from './stockitem';
export default class DisplayStock extends React.Component {
	render(){
		return(
				<table>
					<tbody>
						{this.renderItems()}
					</tbody>
				</table>
			);

	}

	renderItems(){
		return _.map(this.props.displaystocklist, (stockitem, index) => <StockItem key = {index} {...stockitem}/>)
	}
}
