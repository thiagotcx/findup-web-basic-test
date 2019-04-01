import { createBrowserHistory } from 'history';

import store from './store'
import * as serviceWorker from './serviceWorker';

const isAuthenticated = () => {
    if (sessionStorage.access_token && sessionStorage.access_token !== undefined) return true
    return false
}

const getToken = () => sessionStorage.access_token

export default createBrowserHistory()

export {
    serviceWorker,
    isAuthenticated,
    getToken,
    store,
}