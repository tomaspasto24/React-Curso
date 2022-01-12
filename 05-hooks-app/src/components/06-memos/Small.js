import React, { memo } from 'react'

//Memoriza el componente, solo lo vuelve a renderizar si cambia el props
//(Lo que se ingresa como parametro).
// Tambien puede aparecer como React.memo().
export const Small = memo(( { value } ) => {
    console.log('Me volvi a mostrar.');
    return (
        <div>
            <small> {value} </small>
        </div>
    )
})
