import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/Notfound';
import SearchPage from './pages/Search/SearchPage';
import './App.css';

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
            path="/search/:currentQuery"
            render={(props) => <SearchPage {...props} />}
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

export default App;
