import React, { Component } from 'react';

import Viewport from '../viewport/Viewport';
import Keyboard from '../keyboard/Keyboard';

export default class Calculator extends Component {
	constructor(){
		super();
		this.state = {
			viewportValue: '0'
		};
	}

	updateViewport(newValue) {
		this.setState({ newValue });
	}

	render() {
		return (
			<div className="calculatorBody">
				<Viewport viewportValue={this.state.viewportValue} />
				<Keyboard onClick={ this.updateViewport.bind(this) }/>
			</div>
    );
  }
}
