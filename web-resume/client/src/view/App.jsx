import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/Notfound';
import configureStore from './store';
import './App.css';
import configureModules from '../modules';
import context from '../context';
import configureServices from '../configureServices';

const App = (props) => {
  const { store } = props;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Dashboard {...props} isMyProfile />}
          />
          <Route
            path="/profile/:username"
            render={(props) => <Dashboard {...props} isMyProfile={false} />}
          />
          <Route
            exact
            path="/login"
            render={(props) => <Login {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

const render = async (store) => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
};

(async function init() {
  // const services = await configureServices();
  const services = configureServices();
  const { actions, reducers, middlewares } = await configureModules(services);
  const store = configureStore(reducers, middlewares);

  context.registerServices(services);
  context.registerActions(actions);

  render(store);
}());

export default App;
