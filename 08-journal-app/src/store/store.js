import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from 'redux-thunk'
import { uiReducer } from "../reducers/uiReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// La función createStore solo acepta un reducer, por esto se debe combinar los reducers.
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer
});

// store se debe importar en el punto más alto de la aplicación. 
// El 2do argumento es el DevTools del reducer.
export const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware( thunk )
    )
);