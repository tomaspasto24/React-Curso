import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../auth/authContext';
import { types } from '../types/types';

export const PublicRoute = ( { children } ) => {
    const {user, dispatch} = useContext(AuthContext);
    
    (user.logged) && dispatch({ type: types.logout })
    
    return children;
};
