import React from 'react';
import styles from './index.module.css';
import Navigator from 'components/Navigator'

class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }

  render () {
    const props = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {props.children}
        </div>
        <div className={styles.navigator}>
          <Navigator></Navigator>
        </div>
      </div>
    );
  } 
}

export default BasicLayout;
