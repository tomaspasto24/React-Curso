import React from 'react'
import PropTypes from 'prop-types';

export const TodoListItem = ( { todo, index, handleDelete, handleToggle } ) => {
    return (
        <li
                key={todo.id}
                className='list-group-item'
            >

                <p
                    onClick={ () => handleToggle(todo.id) } 
                    className={ `${todo.done && 'complete'}` }
                >
                    { index+1 }. { todo.desc }
                </p>

                <button
                    onClick={ () => handleDelete(todo.id) } 
                    className='btn btn-danger'
                >
                    Borrar
                </button>

        </li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
}