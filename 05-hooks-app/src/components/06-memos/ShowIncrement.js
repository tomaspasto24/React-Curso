import React from 'react';
import PropTypes from 'prop-types';

export const ShowIncrement = React.memo(( { increment }) => {
    
    console.log('Me volvi a generar :(');
    
    return (
        <div>
            <button
                className='btn btn-primary'
                onClick={ () => {
                    increment();
                } }
            >
                Incrementar
            </button>
        </div>
    )
})

ShowIncrement.protoTypes = {
    increment : PropTypes.func.isRequired,
}