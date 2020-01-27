import React from 'react';
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

class Navigator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'map'
		};
	}

	render() {
		const { history } = this.props;
		return (
			<TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" tabBarPosition="bottom">
				<TabBar.Item
					icon={<span class="iconfont icon-map" />}
					selectedIcon={<span class="iconfont icon-map" />}
					title="地图"
					key="map"
					selected={this.state.selectedTab === 'map'}
					onPress={() => {
						this.setState({
							selectedTab: 'map'
						});
						history.push({
							pathname: '/'
						});
					}}
				/>
				<TabBar.Item
					icon={<span class="iconfont icon-me" />}
					selectedIcon={<span class="iconfont icon-me" />}
					title="示例"
					key="example"
					selected={this.state.selectedTab === 'example'}
					onPress={() => {
						this.setState({
							selectedTab: 'example'
						});
						history.push({
							pathname: '/example'
						});
					}}
				/>
			</TabBar>
		);
	}
}

export default withRouter(Navigator);
