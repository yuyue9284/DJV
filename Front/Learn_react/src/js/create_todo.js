
import React from 'react';

export default class Create_todo extends React.Component {
	render() {
		return (
				<form>
					<input type = "text" palceholder = "what to do"/>
					<button>Create</button>
				</form>
		);
	}

}