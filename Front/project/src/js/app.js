import React from 'react';
import ReactDOM from "react-dom";

import Add from './add'

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

export default class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			stocklist
		}
	}

	render(){
		return(
			<div>
			<Add stocklist = {this.state.stocklist}/>
			</div>
			);
	}
}





const app = document.getElementById('app');
ReactDOM.render(<App />, app);