import React from 'react';
import styles from './map.component.css';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.zhaoximap = new AMap.Map('zhaoximapbox');
  }

  render() {
    return <div id="zhaoximapbox" className={styles.mapbox}></div>;
  }
}

export default Map;
