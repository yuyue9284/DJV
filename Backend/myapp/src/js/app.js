import React from 'react';
import ReactDOM from "react-dom";
import _ from 'lodash';
import Add from './add';
import Displaystock from './displaystock';

var datafromserver = JSON.parse(document.getElementById("props").innerHTML);
const displaystocklist = datafromserver;
const visualize_open = [],
visualize_close = [],
visualize_volume = [];

export default class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			displaystocklist,
			visualize_open,
			visualize_close,
			visualize_volume
		}
	}

	render(){
		return(
			<div>
			<Add removestock = {this.removestock.bind(this)} update = {this.update.bind(this)} displaystocklist = {this.state.displaystocklist}/>
			<Displaystock {...this.props}{...this.state}/>
			</div>
			);
	}

	update(stockitemlist){
		let t_values_open =[];
		let t_values_close =[];
		let t_values_volume =[];		
		for (var i = stockitemlist.length - 1; i >=0; i--) {
			let t_date = new Date(stockitemlist[i].Date);
			t_values_open.push({x: t_date, y: parseFloat(stockitemlist[i].Open)});
			t_values_close.push({x: t_date, y: parseFloat(stockitemlist[i].Close)});
			t_values_volume.push({x: t_date, y: parseFloat(stockitemlist[i].Volume)/1000000})
		}
		this.state.visualize_open.push({
			label:stockitemlist[0].Code,
			values:t_values_open
		});
		this.state.visualize_close.push({
			label:stockitemlist[0].Code,
			values:t_values_close
		});
		this.state.visualize_volume.push({
			label:stockitemlist[0].Code,
			values:t_values_volume
		});
		console.log(this.state.visualize);
		this.setState({
			displaystocklist:this.state.displaystocklist.concat(stockitemlist),
			visualize_open:this.state.visualize_open,
			visualize_close:this.state.visualize_close,
			visualize_volume:this.state.visualize_volume

		});
	}
	
	removestock(code) {
		_.remove(this.state.displaystocklist, rm => rm.Code === code);
		_.remove(this.state.visualize_open, rm => rm.label === code);
		_.remove(this.state.visualize_close, rm => rm.label === code);
		_.remove(this.state.visualize_volume, rm => rm.label === code);
		this.setState({
			displaystocklist: this.state.displaystocklist,
			visualize_open: this.state.visualize_open,
			visualize_close: this.state.visualize_close,
			visualize_volume: this.state.visualize_volume

		});
	}
}





const app = document.getElementById('app');
ReactDOM.render(<App />, app);