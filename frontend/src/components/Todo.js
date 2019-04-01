import React from 'react'

const Todo = ({ onDelete, title }) => (
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>{title}</span>
        <button onClick={onDelete} class="btn btn-danger">
            <i class="fas fa-trash-alt"></i>
        </button>
    </li>
)

export default Todo