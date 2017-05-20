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

	render() {
		return (
			<Shortcuts className="calculatorBody" name='CALCULATOR' handler={ this._handleShortcuts }>
				<div className="viewport">
					<div className="display">{ this.state.display.toLocaleString() }</div>
				</div>
				<div className="keyboard">
					<div className="landscape">
						<button onClick={ () => this.operation('=') }>(</button>
						<button onClick={ () => this.operation('=') }>)</button>
						<button onClick={ () => this.operation('=') }>mc</button>
						<button onClick={ () => this.operation('=') }>m+</button>
						<button onClick={ () => this.operation('=') }>m-</button>
						<button onClick={ () => this.operation('=') }>mr</button>
						<button onClick={ () => this.operation('=') }>???</button>
						<button onClick={ () => this.operation('=') }>???</button>
						<button onClick={ () => this.operation('=') }>???</button>
						<button onClick={ () => this.operation('=') }>???</button>
						<button onClick={ () => this.operation('=') }>???</button>
						<button onClick={ () => this.operation('=') }>???</button>
						<button onClick={ () => this.operation('=') }>???</button>
						<button onClick={ () => this.operation('=') }>???</button>
						<button onClick={ () => this.operation('=') }>???</button>
						<button onClick={ () => this.operation('=') }>???</button>
						<button onClick={ () => this.operation('=') }>ln</button>
						<button onClick={ () => this.operation('=') }>???</button>
						<button onClick={ () => this.operation('=') }>x!</button>
						<button onClick={ () => this.operation('=') }>sin</button>
						<button onClick={ () => this.operation('=') }>cos</button>
						<button onClick={ () => this.operation('=') }>tan</button>
						<button onClick={ () => this.operation('=') }>e</button>
						<button onClick={ () => this.operation('=') }>EE</button>
						<button onClick={ () => this.operation('=') }>Rad</button>
						<button onClick={ () => this.operation('=') }>sinh</button>
						<button onClick={ () => this.operation('=') }>cosh</button>
						<button onClick={ () => this.operation('=') }>tanh</button>
						<button onClick={ () => this.operation('=') }>???</button>
						<button onClick={ () => this.operation('=') }>Rand</button>
					</div>
					<div className="classic-calc">
						<div className="left-input-keys">
							<div className="function-keys">
								<button onClick={ () => this.clear() }>AC</button>
								<button onClick={ () => this.negative() }>+/-</button>
								<button onClick={ () => this.percent() }>%</button>
							</div>
							<div className="digit-keys">
								<button onClick={ () => this.inputDigit(9) }>9</button>
								<button onClick={ () => this.inputDigit(8) }>8</button>
								<button onClick={ () => this.inputDigit(7) }>7</button>
								<button onClick={ () => this.inputDigit(6) }>6</button>
								<button onClick={ () => this.inputDigit(5) }>5</button>
								<button onClick={ () => this.inputDigit(4) }>4</button>
								<button onClick={ () => this.inputDigit(3) }>3</button>
								<button onClick={ () => this.inputDigit(2) }>2</button>
								<button onClick={ () => this.inputDigit(1) }>1</button>
								<button onClick={ () => this.inputDigit(0) } size="2" >0</button>
								<button onClick={ () => this.inputDot() }>●</button>
							</div>
						</div>
						<div className="operator-keys">
							<button onClick={ () => this.operation('/') }>/</button>
							<button onClick={ () => this.operation('*') }>x</button>
							<button onClick={ () => this.operation('-') }>—</button>
							<button onClick={ () => this.operation('+') }>+</button>
							<button onClick={ () => this.operation('=') }>=</button>
						</div>
					</div>
				</div>
			</Shortcuts>
    );
  }
}
