import React,{ useState, createContext } from "react"

export const OpenCloseContext = createContext()

export const OpenCloseProvider = ({children}) => {
    const [ sideBarOpen, setSideBarOpen ] = useState(false)

    const Open = () => setSideBarOpen(true)
    const Close = () => setSideBarOpen(false)

    return(
        <OpenCloseContext.Provider value={{ sideBarOpen, Open, Close }}>
            {children}
        </OpenCloseContext.Provider>
    )
}