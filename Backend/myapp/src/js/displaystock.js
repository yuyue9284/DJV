import React from 'react';
import _ from 'lodash';
import ReactD3 from "react-d3-components";
import d3 from "d3";

var format = d3.time.format("%m-%d");

var LineChart = ReactD3.LineChart;

var tooltipLine_open = function(label, data) {
	return label + " Date: " + format(data.x) + " Open: " + data.y;
}
var tooltipLine_close = function(label, data) {
	return label + " Date: " + format(data.x) + " Close: " + data.y;
}
var tooltipLine_volume = function(label, data) {
	return label + " Date: " + format(data.x) + " Volume: " + data.y;
}

export default class DisplayStock extends React.Component {

	render(){
		if( this.props.visualize_open.length === 0){
			return(
				<div></div>
				);
		}
		else{
			return(
				<div>
				<h1>Open</h1>
				<LineChart
				data={this.props.visualize_open}
				width={800}
				height={400}
				tooltipHtml={tooltipLine_open}
				margin={{top: 10, bottom: 50, left: 50, right: 20}}
				xAxis={{tickFormat: d3.time.format("%m/%d")}}
				/>
				<h1>Close</h1>
				<LineChart
				data={this.props.visualize_close}
				width={800}
				height={400}
				tooltipHtml={tooltipLine_close}
				margin={{top: 10, bottom: 50, left: 50, right: 20}}
				xAxis={{tickFormat: d3.time.format("%m/%d")}}
				/>
				<h1>Volume(Million)</h1>
				<LineChart
				data={this.props.visualize_volume}
				width={800}
				height={400}
				tooltipHtml={tooltipLine_volume}
				margin={{top: 10, bottom: 50, left: 50, right: 20}}
				xAxis={{tickFormat: d3.time.format("%m/%d")}}
				/>
				</div>
				);
		}

	}

}
