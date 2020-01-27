import React from 'react';
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

class Navigator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'map',
			tabs: [
				{ title: '地图', key: 'map', path: '/', icon: 'icon-map' },
				{ title: '示例', key: 'example', path: '/example', icon: 'icon-me' }
			]
		};
	}

	render() {
		const { history } = this.props;
		return (
			<TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" tabBarPosition="bottom">
				{this.state.tabs.map(({ title, key, icon, path }) => (
					<TabBar.Item
						icon={<span class={`iconfont ${icon}`} />}
						selectedIcon={<span class={`iconfont ${icon}`} />}
						title={title}
						key={key}
						selected={this.state.selectedTab === key}
						onPress={() => {
							this.setState({
								selectedTab: key
							});
							history.replace({
								pathname: path
							});
						}}
					/>
				))}
			</TabBar>
		);
	}
}

export default withRouter(Navigator);
