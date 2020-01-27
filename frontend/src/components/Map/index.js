import React from 'react';
import styles from './map.component.css';
import { Toast } from 'antd-mobile';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const map = this.__zhaoximap = new AMap.Map('zhaoximapbox', {
      center: [114.31, 30.58],
      zoom: 10
    });
    Toast.loading('初始化...')
    map.on('complete', () => {
      Toast.hide()
    })
  }

  componentWillUnmount() {
    if (this.__zhaoximap) {
      this.__zhaoximap.destory()
    }
  }

  render() {
    return <div id='zhaoximapbox'></div>;
  }
}

export default Map;
