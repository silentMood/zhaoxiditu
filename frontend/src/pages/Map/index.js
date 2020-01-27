import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Map from 'components/Map';
import { KeepAlive } from 'react-keep-alive';
import styles from './map.page.css';

@inject('store')
@observer
class MapPage extends Component {
	render() {
		return (
			<KeepAlive name="zhaoximap">
				<Map />
			</KeepAlive>
		);
	}
}

export default MapPage;
