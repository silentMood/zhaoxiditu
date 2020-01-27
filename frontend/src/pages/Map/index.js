import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Map from 'components/Map';

import styles from './map.page.css';

@inject('store')
@observer
class MapPage extends Component {
	render() {
		return <Map />;
	}
}

export default MapPage;
