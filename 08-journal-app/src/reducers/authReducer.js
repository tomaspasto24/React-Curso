import { types } from "../types/types"

export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {

        // En caso de logearse el estado es el uid y el name proporcionado en el payload.
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        // En caso de desloguearse el estado se vuelve vacío.
        case types.logout:
            return { }

        default:
            return state
    }

}