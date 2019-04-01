import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onAddTodo, onDeleteTodo }) => {

    let input

    const onSubmit = (e) => {
        e.preventDefault()
        if (!input.value.trim()) return
        onAddTodo(input.value)
        input.value = ''
    }

    return (
        <ul className="list-group">
            <li class="list-group-item bg-primary">
                <form onSubmit={e => onSubmit(e)}>
                    <div className="input-group">
                        <input
                            type="text" placeholder="Adicionar TODO" className="form-control"
                            ref={text => { input = text }} />
                        <div class="input-group-append">
                            <button class="btn btn-light" type="submit">
                                <i class="fas fa-greater-than"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </li>

            {todos && todos.map((todo, index) => (
                <Todo key={index} {...todo} onDelete={() => onDeleteTodo(todo.id)} />
            ))}
        </ul>
    )
}

export default TodoList