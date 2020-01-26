import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Counter extends Component {
  render() {
    const { store } = this.props;
    return (
      <div>
        <p>You clicked {store.count} times</p>
      </div>
    );
  }
}

export default Counter;
