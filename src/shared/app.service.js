import { useContext, useEffect, useState } from "react"
import { AppContext } from "./app.context"
import { AppActions } from "./app.reducer"
import Utilities from "./app.utilities"


export const AppService = () => {
    const getMetadata = async () => {
        let request = await fetch(`/manifest.json`)
        if(request.ok) {
            let result = await request.json()
            return {...result, util: Utilities(result)}
        }
        else {}
        return ;
    }
    return {
        getMetadata
    }
}

export const useMetadata = (dispatcher) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})
    useEffect(() => {
        AppService().getMetadata().then(v => {
            setData(v)
            dispatcher(AppActions.LOAD_METADATA, v)
            setLoading(false)
        })
    },[])
    return [loading, data]
}

