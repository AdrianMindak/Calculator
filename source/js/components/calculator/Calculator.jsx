import React, { Component } from 'react';

import Viewport from '../viewport/Viewport';
import Keyboard from '../keyboard/Keyboard';

export default class Calculator extends Component {
	render() {
		return (
			<div className="calculatorBody">
				<Viewport />
				<Keyboard />
			</div>
    );
  }
}
