import React from "react";
import reactDOM from "react-dom";
import {CounterWithCustomHook} from './components/01-useState/CounterWithCustomHook';

const app = document.querySelector('#root');

reactDOM.render(<CounterWithCustomHook />, app);