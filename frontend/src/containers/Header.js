import { connect } from 'react-redux'

import { Header } from '../components'
import { isAuthenticated } from '../config';

function mapStateToProps(state) {

    let isAuthBySession = isAuthenticated()

    return {
        isAuth: state.auth.isAuth || isAuthBySession
    }
}

export default connect(mapStateToProps)(Header)
