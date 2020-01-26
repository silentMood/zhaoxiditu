import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Counter extends Component {
  render() {
    const { store } = this.props;
    return (
      <div>
        <p>You clicked {store.example.count} times</p>
        <button onClick={store.example.inc}>click</button>
      </div>
    );
  }
}

export default Counter;
