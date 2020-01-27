import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BasicLayout from './layouts';
import ErrorBoundary from './components/ErrorBoundary';
import { Provider as MobxProvider } from 'mobx-react';
import { Provider as KeepAliveProvider } from 'react-keep-alive';
import store from './store';

const example = React.lazy(() => import('./pages/Example'));
const map = React.lazy(() => import('./pages/Map'));

class App extends Component {
	render() {
		return (
			<ErrorBoundary>
				<Suspense fallback={<div>Loading...</div>}>
					<MobxProvider store={store}>
						<Router>
              <KeepAliveProvider>
                <BasicLayout>
                  <Switch>
                    <Route path="/" exact component={map} />
                    <Route path="/example" exact component={example} />
                  </Switch>
                </BasicLayout>
              </KeepAliveProvider>
						</Router>
					</MobxProvider>
				</Suspense>
			</ErrorBoundary>
		);
	}
}

export default App;
