import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import styles from './example.page.css';

@inject('store')
@observer
class Counter extends Component {
	render() {
		const { example } = this.props.store;
		return (
			<div>
				<p>You clicked {example.count} times</p>
				<button onClick={example.inc}>click</button>
			</div>
		);
	}
}

export default Counter;
