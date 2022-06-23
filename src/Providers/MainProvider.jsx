import { createContext, useContext, useState } from "react";

const Context = createContext()

export default function ThemeProvider({ children }) {
    const [state, setState] = useState(false)
    const value = {state,setState}
    return <Context.Provider value={value}>
        <Context.Consumer>
            {
                () => children
            }
        </Context.Consumer>
    </Context.Provider>
}


export const useTheme = (setter) => {
    const { state, setState } = useContext(Context)
    return  setter ? [setState] : [state,setState]
}