import {createContext, useContext, useState} from 'react';

export const LoginContext = createContext({
    login: "Not logged in",
    setLogin: () => {}
});

export function LoginProvider({children}){
    const [login, setLogin] = useState('Not logged in');
    const loginContext = {login, setLogin}
    return(
        <LoginContext value={}>
            {children}
        </LoginContext>
    )
}
