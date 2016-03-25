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
		const props = _.omit(this.props, 'displaystocklist');
		return _.map(this.props.displaystocklist, (stockitem, index) => <StockItem key = {index} {...stockitem}{...props}/>)
	}
}
