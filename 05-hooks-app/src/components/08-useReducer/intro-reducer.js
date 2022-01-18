
const initialState = [{
    id:1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = ( state = initialState, action ) => {

    if (action?.type === 'agregar'){
        state = [ ...state, action.payload ]
    }

    return state;
};


let todos = todoReducer();

const newTodo = [{
    id:2,
    todo: 'salir a correr',
    done: false
}]

const action = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, action);

console.log(todos);