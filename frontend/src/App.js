import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BasicLayout from './layouts';
import ErrorBoundary from './components/ErrorBoundary';
import { Provider } from 'mobx-react';
import store from './store';

const example = React.lazy(() => import('./pages/Example'));
const map = React.lazy(() => import('./pages/Map'));

class App extends Component {
	render() {
		return (
			<ErrorBoundary>
				<Suspense fallback={<div>Loading...</div>}>
					<Provider store={store}>
						<Router>
							<BasicLayout>
								<Switch>
									<Route path="/" exact component={map} />
									<Route path="/example" exact component={example} />
								</Switch>
							</BasicLayout>
						</Router>
					</Provider>
				</Suspense>
			</ErrorBoundary>
		);
	}
}

export default App;
