import { useContext, useEffect, useState } from "react"
import { AppContext } from "../shared/app.context"

export const useMediumPosts = (initialState) => {
    const [{config}] = useContext(AppContext)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(initialState)

    useEffect(() => {
        setLoading(true)
        fetch(config.medium_posts).then(x => x.json()).then(x => {
            setData(x)
            setLoading(false)
        })
    }, [])

    return [loading, data]
}