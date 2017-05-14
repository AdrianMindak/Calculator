import React, { Component } from 'react';

import Viewport from '../viewport/Viewport';
import Keyboard from '../keyboard/Keyboard';

export default class Calculator extends Component {
	constructor(){
		super();
		this.state = {
			viewportValue: '0',
			hiddenCalculation: 0,
			lastOperator: '+',
		};
	}

	updateViewport(newValue) {
		switch (newValue) {
			case "c":
				this.setState({ viewportValue: "0", hiddenCalculation:"0", lastOperator: "+" });
				break;
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
			case "0":
				this.setState({ viewportValue: this.state.viewportValue === '0' ? newValue : `${ this.state.viewportValue }${ newValue }` });
				break;
			case ".":
				if (this.state.viewportValue.indexOf('.') === -1) {
					this.setState({ viewportValue: `${ this.state.viewportValue }${ newValue }` });
				}
				break;
				case "+":
					switch (this.state.lastOperator) {
						case "+":
							this.setState({ viewportValue: this.state.hiddenCalculation + this.state.viewportValue.parseInt() });
							break;
						case "-":
							this.setState({ viewportValue: this.state.hiddenCalculation - this.state.viewportValue });
							break;
						case "*":
							this.setState({ viewportValue: this.state.hiddenCalculation * this.state.viewportValue });
							break;
						case "/":
							this.setState({ viewportValue: this.state.viewportValue !== 0 ? this.state.hiddenCalculation / this.state.viewportValue : 'LOGICAL ERROR' });
							break;
						default:
					}
					this.setState({ lastOperator: '+' });
					break;
			default:

		}
	}

	render() {
		return (
			<div className="calculatorBody">
				<Viewport viewportValue={this.state.viewportValue} />
				<Keyboard updateViewport={ this.updateViewport.bind(this) }/>
			</div>
    );
  }
}
