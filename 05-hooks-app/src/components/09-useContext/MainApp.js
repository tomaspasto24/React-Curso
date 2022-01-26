import React from 'react'
import { useState } from 'react/cjs/react.development'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const [user, setUser] = useState({
        id: 123,
    });

    return (
        <UserContext.Provider value={ {
            user,
            setUser,
        } }>
            
            <AppRouter/>

        </UserContext.Provider>
    )
}
