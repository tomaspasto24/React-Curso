//Todo lo que tenga el prefijo use, es un Hook.
import react, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 0}) => {

    const [ counter, setCounter ] = useState(value);

    const HandleAdd = () => {
        // setCounter( counter + 1);
        setCounter( (c) => c + 1);
    }

    const HandleReset = () => setCounter(value);

    const HandleSubtract = () => setCounter(counter - 1);

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ HandleAdd } >+1</button>
            <button onClick={ HandleReset } >Reset</button>
            <button onClick={ HandleSubtract } >-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number,
}

export default CounterApp;