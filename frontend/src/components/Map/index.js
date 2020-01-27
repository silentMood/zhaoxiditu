import React from 'react';
import styles from './map.component.css';
import { Toast } from 'antd-mobile';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initMap()
  }

  initMap () {
    const map = this.__zhaoximap = new AMap.Map('zhaoximapbox', {
      center: [114.31, 30.58],
      zoom: 9
    });
    Toast.loading('初始化...')
    map.on('complete', () => {
      // lock area at wuhan
      map.setLimitBounds(map.getBounds());
      Toast.hide()
    })

    map.on('click', (info) => {
      console.log(info, 'click position')
    })

    map.on('dblclick', (info) => {
      console.log(info, 'dblclick position')
    })

    map.on('zoomend', () => {
      const bounds = map.getBounds()
      console.log(bounds, 'zoom end')
    })

    map.on('moveend', () => {
      const bounds = map.getBounds()
      console.log(bounds, 'move end')
    })

    map.on('dragend', () => {
      const bounds = map.getBounds()
      console.log(bounds, 'drag end')
    })
  }

  // addMarker 数据结构

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
