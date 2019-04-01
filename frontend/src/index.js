import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import history, { store, serviceWorker } from './config'
import { TodoApp, Login, Register, DontMatch } from './pages'
import { PrivateRoute, Footer } from './components';
import Header from './containers/Header'
import Logout from './containers/Logout';

import './assets/style.css'

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div className="container d-flex w-100 h-100 p-3 flex-column text-center">
                <Header />

                <Switch>
                    <PrivateRoute exact path='/' component={TodoApp} />
                    <Route path='/login' component={Login} />
                    <Route path='/registrar' component={Register} />
                    <Route path='/logout' component={Logout} />

                    <Route component={DontMatch} />
                </Switch>

                <Footer />
            </div>
        </Router>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
