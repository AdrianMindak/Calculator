import React, { Component } from 'react';

export default class Viewport extends Component {
	render() {
		return (
			<div className="viewport">
				<h1>{ this.props.viewportValue }</h1>
			</div>
    );
  }
}
