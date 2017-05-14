import React, { Component } from 'react';

import Key from '../key/Key';

const keys = [];
for (let i = 0; i < 16; i++) {
	keys.push(<Key />);
}

export default class Keyboard extends Component {
	render() {
		return (
			<div className="keyboard">
				{ keys }
			</div>
    );
  }
}
