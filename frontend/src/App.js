import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BasicLayout from './layouts';
import ErrorBoundary from './components/ErrorBoundary';
import { Provider } from 'mobx-react';
import store from './store';

const Example = React.lazy(() => import('./pages/Example'));

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Provider store={store}>
            <BasicLayout>
              <Router>
                <Switch>
                  <Route path="/" exact component={Example} />
                </Switch>
              </Router>
            </BasicLayout>
          </Provider>
        </Suspense>
      </ErrorBoundary>
    );
  }
}

export default App;
