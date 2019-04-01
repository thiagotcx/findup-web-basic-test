import React, { Component} from 'react'
import { connect } from 'react-redux'

import TodoList from '../containers/TodoList'

import { fetchTodos } from '../store/ducks/todo'
import { logout } from '../store/ducks/auth'

class TodoApp extends Component {

    componentDidMount() {
        if (sessionStorage.access_token !== undefined) this.props.fetchTodos();
    }

    render() {
        return (
            <main role="main">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <TodoList />
                    </div>
                </div>
            </main>
        )
    }
}

export default connect(null, { fetchTodos, logout })(TodoApp)