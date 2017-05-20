import React, { Component, PropTypes } from 'react';
import { ShortcutManager } from 'react-shortcuts';
import keymap from './keymap';
import Calculator from '../../components/calculator/Calculator';


const shortcutManager = new ShortcutManager(keymap);

export default class App extends Component {
	getChildContext() {
    return { shortcuts: shortcutManager };
  }

	render() {
		return (
			<div className="App">
				<Calculator />
			</div>
    );
  }
}

App.childContextTypes = {
	shortcuts: PropTypes.object.isRequired,
};
