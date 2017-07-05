import React, { Component } from 'react';
import { Shortcuts } from 'react-shortcuts';


export default class Calculator extends Component {
	constructor() {
		super();
		this.state = {
			display: '0',
			waiting: false,
			operator: null,
			hidden: '0',
			memory: 0,
		};
	}

	_handleShortcuts = (action, event) => {
		console.log(event);
    switch (action) {
      case 'PLUS':
        console.log('PLUS');
        break;
			default: console.log('DEFAULT CASE');
    }
  }

	clear() {
		this.setState({ display: '0', waiting: false, operator: null, hidden: '0' });
	}

	inputDigit(newValue) {
		const { display, waiting } = this.state;

		if (waiting) {
			this.setState({ display: String(newValue) });
			this.setState({ waiting: false });
		} else if (display === '0') {
			this.setState({ display: String(newValue) });
		} else if (display === '-0') {
			this.setState({ display: `-${ newValue }` });
		} else {
			this.setState({ display: display + newValue });
		}
	}

	percent() {
		const { display } = this.state;
		this.setState({ display: String(parseFloat(display) / 100) });
	}

	negative() {
		const { display } = this.state;

		if (display.indexOf('-') === 0) {
			this.setState({ display: display.substring(1) });
		} else {
			this.setState({ display: `-${ display }` });
		}
	}

	inputDot() {
		const { display, waiting } = this.state;

		if (waiting) {
			this.setState({ display: '.' });
			this.setState({ waiting: false });
		} else if (display.indexOf('.') === -1) {
			this.setState({ display: `${ display }.` });
		}
	}

	operation(inputOperator) {
		const { display, operator, hidden } = this.state;

		const operations = {
			'/': (hidden, display) => parseFloat(hidden) / parseFloat(display),
			'*': (hidden, display) => parseFloat(hidden) * parseFloat(display),
			'-': (hidden, display) => parseFloat(hidden) - parseFloat(display),
			'+': (hidden, display) => parseFloat(hidden) + parseFloat(display),
			'exponent': (hidden, display) => {
				let result = hidden;
				let i = 1;
				while (i < display) {
					result *= hidden;
					i++;
				}
				return result;
			},
		}
		if (inputOperator === '=') {
			const compute = operations[operator](hidden, display);
			this.setState({ display: String(compute) });
			this.setState({ waiting: false, operator: null, hidden: '0' });
		} else if (operator != null) {
			const compute = operations[operator](hidden, display);
			this.setState({ display: String(compute) });
			this.setState({ waiting: true, operator: inputOperator, hidden: String(compute) });
		} else {
			this.setState({ waiting: true, operator: inputOperator, hidden: display });
		}
	}

/* Sience mode */

	cleanMemory() {
		this.setState({ memory: 0 });
	}

	addToMemory() {
		const { display, memory } = this.state;
		this.setState({ memory: memory + parseFloat(display) });
	}

	subtracFromMemory() {
		const { display, memory } = this.state;
		this.setState({ memory: memory - parseFloat(display) });
	}

	reuseMemory() {
		const { memory } = this.state;
		this.setState({ display: memory });
	}

	squared() {
		const { display } = this.state;
		this.setState({ display: display * display });
	}

	trippled() {
		const { display } = this.state;
		this.setState({ display: display * display * display });
	}

	exponent() {
		const { display, hidden, waiting, operator } = this.state;
		this.setState({ hidden: display , display: display, waiting: true, operator: 'exponent' });
		this.operation('exponent');
	}

	e() {
		this.setState({ display: String(Math.E) });
	}

	pi() {
		this.setState({ display: String(Math.PI) });
	}

	random() {
		this.setState({ display: String(Math.random()) });
	}

	render() {
		return (
			<div className="calculatorBody" name='CALCULATOR' handler={ this._handleShortcuts }>
				<div className="viewport">
					<div className="display">{ this.state.display.toLocaleString() }</div>
				</div>
				<div className="keyboard">
					<div className="landscape">
						<button onClick={ () => this.operation('=') }>(</button>
						<button onClick={ () => this.operation('=') }>)</button>
						<button onClick={ () => this.cleanMemory() }>mc</button>
						<button onClick={ () => this.addToMemory() }>m+</button>
						<button onClick={ () => this.subtracFromMemory() }>m-</button>
						<button onClick={ () => this.reuseMemory() }>mr</button>
						<button className="second" onClick={ () => this.operation('=') }>
							<div>2</div>
							<div className="pushedUp" >nd</div>
						</button>
						<button className="second" onClick={ () => this.squared('=') }>
							<div>x</div>
							<div className="pushedUp" >2</div>
						</button>
						<button className="second" onClick={ () => this.trippled('=') }>
							<div>x</div>
							<div className="pushedUp" >3</div>
						</button>
						<button className="second" onClick={ () => this.exponent('=') }>
							<div>x</div>
							<div className="pushedUp" >y</div>
						</button>
						<button className="second not-working" onClick={ () => this.operation('=') }>
							<div>e</div>
							<div className="pushedUp" >x</div>
						</button>
						<button className="second not-working" onClick={ () => this.operation('=') }>
							<div>10</div>
							<div className="pushedUp" >x</div>
						</button>
						<button className="not-working" onClick={ () => this.operation('=') }>???</button>
						<button className="not-working" onClick={ () => this.operation('=') }>???</button>
						<button className="not-working" onClick={ () => this.operation('=') }>???</button>
						<button className="not-working" onClick={ () => this.operation('=') }>???</button>
						<button className="not-working" onClick={ () => this.operation('=') }>ln</button>
						<button className="second not-working" onClick={ () => this.operation('=') }>
							<div>log</div>
							<div className="pushedDown" >10</div>
						</button>
						<button className="not-working" onClick={ () => this.operation('=') }>x!</button>
						<button className="not-working" onClick={ () => this.operation('=') }>sin</button>
						<button className="not-working" onClick={ () => this.operation('=') }>cos</button>
						<button className="not-working" onClick={ () => this.operation('=') }>tan</button>
						<button onClick={ () => this.e() }>e</button>
						<button className="not-working" onClick={ () => this.operation('=') }>EE</button>
						<button className="not-working" onClick={ () => this.operation('=') }>Rad</button>
						<button className="not-working" onClick={ () => this.operation('=') }>sinh</button>
						<button className="not-working" onClick={ () => this.operation('=') }>cosh</button>
						<button className="not-working" onClick={ () => this.operation('=') }>tanh</button>
						<button onClick={ () => this.pi() }>π</button>
						<button onClick={ () => this.random() }>Rand</button>
					</div>
					<div className="classic-calc">
						<div className="cmd-operators" >
							<button className="cmd-operator" onClick={ () => this.clear() }>AC</button>
							<button className="cmd-operator" onClick={ () => this.negative() }>+/-</button>
							<button className="cmd-operator" onClick={ () => this.percent() }>%</button>
						</div>
						<div className="math-operators" >
							<button className="math-operator" onClick={ () => this.operation('/') }>/</button>
							<button className="math-operator" onClick={ () => this.operation('*') }>x</button>
							<button className="math-operator" onClick={ () => this.operation('-') }>—</button>
							<button className="math-operator" onClick={ () => this.operation('+') }>+</button>
							<button className="math-operator" onClick={ () => this.operation('=') }>=</button>
						</div>
						<div className="digits" >
							<button className="digit" onClick={ () => this.inputDigit(7) }>7</button>
							<button className="digit" onClick={ () => this.inputDigit(8) }>8</button>
							<button className="digit" onClick={ () => this.inputDigit(9) }>9</button>
							<button className="digit" onClick={ () => this.inputDigit(4) }>4</button>
							<button className="digit" onClick={ () => this.inputDigit(5) }>5</button>
							<button className="digit" onClick={ () => this.inputDigit(6) }>6</button>
							<button className="digit" onClick={ () => this.inputDigit(1) }>1</button>
							<button className="digit" onClick={ () => this.inputDigit(2) }>2</button>
							<button className="digit" onClick={ () => this.inputDigit(3) }>3</button>
							<button className="digit" onClick={ () => this.inputDigit(0) } size="2" >0</button>
							<button className="digit" onClick={ () => this.inputDot() }>●</button>
						</div>
					</div>
				</div>
			</div>
    );
  }
}
