import React, { Component } from 'react';

import Key from '../key/Key';

export default class Keyboard extends Component {
	render() {
		return (
			<div className="keyboard">
				<div className="keyboard-row">
					<Key kind="operator" character="C" />
					<Key kind="operator" character="SV" />
					<Key kind="operator" character="%" />
					<Key kind="operator" character="/" />
				</div>
				<div className="keyboard-row">
					<Key kind="number" character="9" />
					<Key kind="number" character="8" />
					<Key kind="number" character="7" />
					<Key kind="operator" character="*" />
				</div>
				<div className="keyboard-row">
					<Key kind="number" character="6" />
					<Key kind="number" character="5" />
					<Key kind="number" character="4" />
					<Key kind="operator" character="-" />
				</div>
				<div className="keyboard-row">
					<Key kind="number" character="3" />
					<Key kind="number" character="2" />
					<Key kind="number" character="1" />
					<Key kind="operator" character="+" />
				</div>
				<div className="keyboard-row">
					<Key kind="number" character="0" size="sizeH2" />
					<Key kind="operator" character="." />
					<Key kind="operator" character="=" />
				</div>
			</div>
    );
  }
}
