import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import styles from './example.module.css';

@inject('store')
@observer
class Counter extends Component {

  componentDidMount () {
    var map = new AMap.Map('mapbox');
  }

  render() {
    const { example } = this.props.store;
    return (
      <div>
        <p>You clicked {example.count} times</p>
        <button onClick={example.inc}>click</button>
        <div id="mapbox" className={styles.mapbox}></div>
      </div>
    );
  }
}

export default Counter;
