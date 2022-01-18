import React, { useCallback, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback( () => {
        setCounter(c => c + 1);
    }, [ setCounter ] );

    return (
        <div>
            <h1>UseCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={ increment } />
        </div>
    )
}
