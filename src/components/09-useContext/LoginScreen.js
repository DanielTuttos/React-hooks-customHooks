import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const userContext = useContext(UserContext);

    const { setUser } = userContext;

    const user = {
        id: 123,
        name: 'Eva Aguirre'
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={() => setUser(user)}
            >Login</button>
        </div>
    )
}
