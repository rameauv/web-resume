import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import configureStore, { Store } from './modules/store';
import App from './view/App';
import configureModules from './modules';
import context from './context';
import configureServices from './configureServices';

const render = async (store: Store) => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
};

(async function init() {
  // const services = await configureServices();
  const services = configureServices();
  const { actions, reducers, middlewares } = await configureModules(services);
  const store = configureStore(reducers, middlewares);

  context.registerActions(actions);

  render(store);
}());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
