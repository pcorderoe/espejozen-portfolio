import { createContext } from "react";
import React, { useState, useEffect } from 'react'
import Utilities from "./app.utilities";

export const AppContext = createContext([])

const useMetadata = (setContext) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`/manifest.json`).then(o => o.json()).then(d => {
            setContext({...d, util: Utilities(d)})
            setLoading(false)
            Utilities(d).logger.log('Context','Reloading Metadata')
        })
    }, [setContext])
    return [loading]
}




export const Context = ({ children }) => {
    const [context, setContext] = useState({})
    const [loading] = useMetadata(setContext)
    return (
        <AppContext.Provider value={[context, setContext]}>
            {loading && <div>Loading....</div>}
            {!loading && children}
        </AppContext.Provider>
    )
}