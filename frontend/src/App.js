import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BasicLayout from './layouts';
import ErrorBoundary from './components/ErrorBoundary';
import { Provider } from 'mobx-react';
import store from './store';

const example = React.lazy(() => import('./pages/example'));

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Provider store={store}>
            <BasicLayout>
              <Router>
                <Switch>
                  <Route path="/" exact component={example} />
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
