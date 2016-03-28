import React from 'react';
import _ from 'lodash';

export default class Add extends React.Component {
	render(){
		return(
				<form onSubmit = {this.handleSubmit.bind(this)}>
					<input type="date" placeholder="Date" ref="inputDate"/> 
					<input type="text" placeholder="Stock code" ref="stockcode"/> 
					<input type="submit" ref = "submit" value="提交"/>
				</form>
			);
	}

	handleSubmit(event) {
		event.preventDefault();
		const stocklist = this.props.stocklist;
		const stockcode = this.refs.stockcode.value;
		const date = this.refs.inputDate.value;
		var isvalidate = this.validate(stocklist, stockcode, date);

		if (isvalidate) {
			alert("find the stock");
			this.refs.stockcode.value = '';
			this.refs.inputDate.value = '';
			var stockitem = _.find(stocklist, stockitem => stockitem.code === stockcode && stockitem.date === date);
			if (_.find(this.props.displaystocklist, stockitem)) {
				alert("stock already exist");
			} else {
				this.props.update(stockitem);
			}

		} else {
			alert("Do nothing");
		}

		

	}

	validate(stocklist, stockcode, date){
		if (!(stockcode && date)){
			alert('Input not complete');
			return false;
		}
		else if (_.find(stocklist, 
			stockitem => stockitem.code === stockcode 
			&& stockitem.date === date)) {
			return true;
		} else {
			alert("Can't find the matching stock");
			return false;
		}
	}
	}
