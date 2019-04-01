import { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../store/ducks/auth'

class Logout extends Component {
    componentDidMount() {
        this.props.logout()
    }

    render() {
        return null
    }
}

export default connect(null, { logout })(Logout)