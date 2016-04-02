import React from 'react';
import _ from 'lodash';

const url = 'http://localhost:3000/post';

export default class Add extends React.Component {
	render(){
		return(
			    <div>
				<form onSubmit = {this.handleSubmit.bind(this)}>
					<input type="text" placeholder="Stock code" ref="stockcode"/> 
					<input type="submit" ref = "submit" value="提交"/>
				</form>
				<form onSubmit = {this.delstock.bind(this)}>
					<input type="text" placeholder="DelStock code" ref="delstockcode"/> 
					<input type="submit" ref = "delsubmit" value="删除"/>
				</form>
				</div>
			);
	}

	delstock(event){
		event.preventDefault();
		let code = this.refs.delstockcode.value.toUpperCase();
		this.props.removestock(code);
	}

	handleSubmit(event) {

		event.preventDefault();
		let displaystocklist = this.props.displaystocklist;
		let code = this.refs.stockcode.value.toUpperCase();
		// let date = this.refs.inputDate.value;
		// let isvalidate = this.validate(displaystocklist, code, date);
		let isvalidate = this.validate(displaystocklist, code);
		let update = this.props.update;
		if (isvalidate) {
			// input compelete
			this.refs.stockcode.value = '';
			// this.refs.inputDate.value = '';
			var xhr = new XMLHttpRequest();
			xhr.open("POST", url, true);
			xhr.setRequestHeader("Content-type", "application/json");
			let datatosend = {
				// date: date,
				code: code
			};
			xhr.send(JSON.stringify(datatosend));
			xhr.responseType = 'text';

			xhr.onload = function() {
				if (xhr.readyState === xhr.DONE) {
					if (xhr.status === 200) {
						let  data = JSON.parse(xhr.response);
						if(data === null){
							alert('Not found');
						}
						else{
							update(data);
						}
					}
				}
			};


		} else {
			alert("Do nothing");
		}



	}

	validate(displaystocklist, code, date) {
		if (!(code)) {
			alert('Input not complete');
			return false;
		} else if (displaystocklist.length === 0) {
			return true;
		} else {
			let stockitem = _.find(displaystocklist, stockitem => stockitem.Code === code);
			if (!stockitem) {
				return true;
			} else {
				alert('Already exist');
				return false;
			}
		}
	}
}
