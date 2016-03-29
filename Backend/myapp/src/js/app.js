import React from 'react';
import ReactDOM from "react-dom";
import _ from 'lodash';
import Add from './add';
import Displaystock from './displaystock';

var datafromserver = JSON.parse(document.getElementById("props").innerHTML);
const displaystocklist = datafromserver;

export default class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			displaystocklist
		}
	}

	render(){
		return(
			<div>
			<Add update = {this.update.bind(this)} displaystocklist = {this.state.displaystocklist}/>
			<Displaystock removestock = {this.removestock.bind(this)} displaystocklist = {this.state.displaystocklist}/>
			</div>
			);
	}

	update(stockitem){
		this.state.displaystocklist.push(stockitem);
		this.setState({
			displaystocklist:this.state.displaystocklist
		});
	}
	
	removestock(code, date) {
		_.remove(this.state.displaystocklist, rm => rm.Code === code && rm.Date === date);
		this.setState({
			displaystocklist: this.state.displaystocklist
		});
	}
}





const app = document.getElementById('app');
ReactDOM.render(<App />, app);