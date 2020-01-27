import React from 'react';
import styles from './map.component.css';
import {
  Provider,
  KeepAlive
} from 'react-keep-alive';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.zhaoximap = new AMap.Map('zhaoximapbox');
  }

  render() {
    return <div id='zhaoximapbox'></div>;
  }
}

export default Map;
