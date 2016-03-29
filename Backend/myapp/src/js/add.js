import React from 'react';
import _ from 'lodash';

const url = 'http://localhost:3000/post';

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

		// event.preventDefault();
		let displaystocklist = this.props.displaystocklist;
		let code = this.refs.stockcode.value;
		let date = this.refs.inputDate.value;
		let isvalidate = this.validate(displaystocklist, code, date);

		if (isvalidate) {
			// input compelete
			this.refs.stockcode.value = '';
			this.refs.inputDate.value = '';
			var xhr = new XMLHttpRequest();
			xhr.open("POST", url, true);
			xhr.setRequestHeader("Content-type", "application/json");
			let datatosend = [{
				date: date,
				code: code
			}].concat(displaystocklist);
			xhr.send(JSON.stringify(datatosend));
			// xhr.responseType = 'text';

			// xhr.onload = function() {
			// 	if (xhr.readyState === xhr.DONE) {
			// 		if (xhr.status === 200) {
			// 			console.log(xhr.response);
			// 			console.log(xhr.responseText);
			// 		}
			// 	}
			// };


		} else {
			alert("Do nothing");
		}



	}

	validate(displaystocklist, code, date) {
		if (!(code && date)) {
			alert('Input not complete');
			return false;
		} else if (displaystocklist.length === 0) {
			return true;
		} else {
			let stockitem = _.find(displaystocklist, stockitem => stockitem.code === code && stockitem.date === date);
			if (stockitem === null) {
				return true;
			} else {
				alert('Already exist');
				return false;
			}
		}
	}
}
