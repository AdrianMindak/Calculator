import React, { Component } from 'react';

export default class Keyboard extends Component {
	updateViewport(e) {
		const newValue = e.target.innerHTML;
		this.props.updateViewport(newValue);
	}
	render() {
		return (
			<div className="keyboard">
				<div className="keyboard-row">
					<button className="operator" onClick={ this.updateViewport.bind(this) }>c</button>
					<button className="operator" onClick={ this.updateViewport.bind(this) }>+/-</button>
					<button className="operator" onClick={ this.updateViewport.bind(this) }>%</button>
					<button className="operator" onClick={ this.updateViewport.bind(this) }>/</button>
				</div>
				<div className="keyboard-row">
					<button className="number"  onClick={ this.updateViewport.bind(this) }>9</button>
					<button className="number"  onClick={ this.updateViewport.bind(this) }>8</button>
					<button className="number"  onClick={ this.updateViewport.bind(this) }>7</button>
					<button className="operator" onClick={ this.updateViewport.bind(this) }>*</button>
				</div>
				<div className="keyboard-row">
					<button className="number"  onClick={ this.updateViewport.bind(this) }>6</button>
					<button className="number"  onClick={ this.updateViewport.bind(this) }>5</button>
					<button className="number"  onClick={ this.updateViewport.bind(this) }>4</button>
					<button className="operator" onClick={ this.updateViewport.bind(this) }>-</button>
				</div>
				<div className="keyboard-row">
					<button className="number"  onClick={ this.updateViewport.bind(this) }>3</button>
					<button className="number"  onClick={ this.updateViewport.bind(this) }>2</button>
					<button className="number"  onClick={ this.updateViewport.bind(this) }>1</button>
					<button className="operator" onClick={ this.updateViewport.bind(this) }>+</button>
				</div>
				<div className="keyboard-row">
					<button className="number sizeH2"  size="2" onClick={ this.updateViewport.bind(this) }>0</button>
					<button className="operator" onClick={ this.updateViewport.bind(this) }>.</button>
					<button className="operator" onClick={ this.updateViewport.bind(this) }>=</button>
				</div>
			</div>
    );
  }
}
