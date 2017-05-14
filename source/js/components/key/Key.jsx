import React, { Component } from 'react';

export default class Key extends Component {
	constructor() {
		super();
		this.state = { defaultKey: 'Kay' };
	}
	render() {
		setTimeout(() => { this.setState({ defaultKey: 'lol' }); }, 3000);
		return (
			<div className={`key ${this.props.size}`}>
				<div className={ this.props.kind }>
					<h1>{ this.props.character }</h1>
				</div>
			</div>
    );
  }
}
