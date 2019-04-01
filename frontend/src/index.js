import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import history, { store, serviceWorker } from './config'

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>Hello Word!</div>
        </Router>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
