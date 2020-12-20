import React, { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {

    const [mode, setMode] = useState(true)

    useEffect(() => {
        if(window.localStorage.getItem("mode") === "false") {
            setMode(false)
        } else {
            setMode(true)
        }
    }, [])

    return (
        <ThemeContext.Provider value={[mode, setMode]}>
            {children}
        </ThemeContext.Provider>
    )
}