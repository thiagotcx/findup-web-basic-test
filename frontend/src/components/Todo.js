import React from 'react'

const Todo = ({ onDelete, todo }) => (
    <li className="list-group-item d-flex justify-content-between align-items-center">
        <span>{todo.title}</span>

        <div className="modal fade" id={`delete-confirm-${todo.id}`} tabIndex="-1"
            role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Confirmar Exclusão</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Confirme a exclusão do TODO <br /> <code>{todo.title}</code>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={onDelete}>Confirmar</button>
                    </div>
                </div>
            </div>
        </div>

        <button type="button" className="btn btn-danger" 
            data-toggle="modal" data-target={`#delete-confirm-${todo.id}`}>
            <i className="fas fa-trash-alt"></i>
        </button>
    </li>
)

export default Todo