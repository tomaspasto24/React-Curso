import React from "react";
import { useCounter } from "../../hooks/useCounter";

import './counter.css';

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter( 10 );
    
    return (
        <>
        <h1>CounterWithCustomHook: { counter }</h1>
        <hr />

        <button onClick={ () => increment() } className="btn">+1</button>
        <button onClick={ () => decrement() } className="btn">-1</button>
        <button onClick={ () => reset() } className="btn">Reset</button>
        </>
    )

};