import { connect } from 'react-redux'

import { TodoList } from '../components'
import { addTodo, deleteTodo } from '../store/ducks/todo'

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: input => {
            dispatch(addTodo(input))
        },
        onDeleteTodo: id => {
            dispatch(deleteTodo(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
