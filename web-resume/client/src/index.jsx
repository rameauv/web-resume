import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/Notfound';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import './App.css';
import configureModules from './modules';
import context from './context';
import configureServices from './configureServices';

const App = (props) => {
  const { store } = props;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => <Dashboard {...props} isMyProfile={true} />}
          />
          <Route
            path='/profile/:username'
            render={(props) => <Dashboard {...props} isMyProfile={false} />}
          />
          <Route
            exact
            path='/login'
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
