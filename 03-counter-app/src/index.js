//Importar React para poder usar JSX (etiquetas html y js).
import React from "react";
// ReactDOM es el encargado de hacer renderizaciones en html.
import ReactDOM from "react-dom";
// import PrimeraApp from "./primeraApp";
import CounterApp from './CounterApp';
import './index.css';

// Referencia a la etiqueta div root del index.
const divRoot = document.querySelector('#root');

// Metodo render que toma como primer parametro lo que se quiere renderizar (componente) y como segundo la referencia a la etiqueta.
// ReactDOM.render( < PrimeraApp saludo='Hola, soy Goku' />, divRoot );
ReactDOM.render( <CounterApp />, divRoot);