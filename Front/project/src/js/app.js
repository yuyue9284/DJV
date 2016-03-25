import React from 'react';
import ReactDOM from "react-dom";
import _ from 'lodash';
import Add from './add';
import Displaystock from './displaystock';

const stocklist = [
{
	code:'apple',
	date:'2016-03-25',
},
{
	code:'microsoft',
	date:'2015-01-04',
},
]

const displaystocklist = []

export default class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			stocklist,
			displaystocklist
		}
	}

	render(){
		return(
			<div>
			<Add stocklist = {this.state.stocklist} update = {this.update.bind(this)} displaystocklist = {this.state.displaystocklist}/>
			<Displaystock removestock = {this.removestock.bind(this)} displaystocklist = {this.state.displaystocklist}/>
			</div>
			);
	}

	update(stockitem){
		this.state.displaystocklist.push(stockitem);
		this.setState({displaystocklist:this.state.displaystocklist});
	}

	removestock(code, date) {
		_.remove(this.state.displaystocklist, rm => rm.code === code && rm.date === date);
		this.setState({
			displaystocklist: this.state.displaystocklist
		});
	}
}





const app = document.getElementById('app');
ReactDOM.render(<App />, app);