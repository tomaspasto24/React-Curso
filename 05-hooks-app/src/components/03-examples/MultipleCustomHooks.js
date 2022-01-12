import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

    const {loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    // !! son para que de retorne falso si es null.
    const { author, quote} = !!data && data[0];
    
    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                loading
                ?
                (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                )
                :
                (
                    <blockquote className='blockquote aling-right'>
                    <p className='mb-0'>{ quote }</p>
                    <footer className='blockquote-footer'>{ author }</footer>
                    </blockquote>                        
                )
            }

            { !loading && ( <button className='btn btn-primary' onClick={increment}>Siguiente quote</button> ) }
        </div>
    )
}
