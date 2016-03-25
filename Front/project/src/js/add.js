import React from 'react';
import _ from 'lodash';

export default class Add extends React.Component {
	render(){
		return(
				<form onSubmit = {this.handleSubmit.bind(this)}>
					<input type="date" ref="inputDate"/> 日期 <br/>
					<input type="text" ref="stockcode"/> 股票代码 <br/>
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

		} else {
			alert("do nothing");
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