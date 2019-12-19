import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/Notfound';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import configureStore from "./store";
import './App.css';

class App extends React.Component {
    _store = null;
    constructor(props) {
        super(props);
        this._store = configureStore();
    
    }
    render() {
        return (
            <Provider store={this._store}>
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
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
