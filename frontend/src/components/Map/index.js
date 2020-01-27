import React from 'react';
import { Toast } from 'antd-mobile';

class Map extends React.Component {
  componentDidMount() {
    this.initMap()
  }

  initMap () {
    const map = this.__zhaoximap = new AMap.Map(this.refs.zhaoximapbox, {
      // 武汉中心经纬度hard coding
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
    return <div ref='zhaoximapbox' style={{ width: '100%', height: '100%' }}></div>;
  }
}

export default Map;
