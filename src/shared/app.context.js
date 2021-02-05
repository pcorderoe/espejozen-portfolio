import { createContext } from "react";
import React, {  } from 'react'
import { useAppReducer } from "./app.reducer";
import { useMetadata } from "./app.service";

export const AppContext = createContext([])

export const Context = ({ children }) => {
    const [state, dispatcher] = useAppReducer({})
    const [loading] = useMetadata(dispatcher)

    return (
        <AppContext.Provider value={[state, dispatcher]}>
            { loading && <span>Loading...</span>}
            { !loading && children }
        </AppContext.Provider>
    )
}