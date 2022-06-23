import { createContext, useContext, useEffect, useState } from "react";
import App from "../App";
import Login from "../componets/Login/Login";


const Context = createContext()
export default function AuthPpovider({children}){
    const [user, setUser]= useState(JSON.parse(localStorage.getItem('user') || '{}'))
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])
    return (
        <Context.Provider value={{user, setUser}}>
            <Context.Consumer>
                {
                    ()=> user?.name ? children : <App/> /* <Login />*/  
                }
            </Context.Consumer>
        </Context.Provider>
    )
} 
export const useAuth =(setter) => {
    const {user, setUser} = useContext(Context)
    return setter ? [setUser] : [user, setUser]
}