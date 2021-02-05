import React, { useContext } from 'react'
import { AppContext } from '../shared/app.context'

const Home = () => {
    const [state] = useContext(AppContext)
    return (
        <div>Home, {state?.config?.name}</div>
    ) 
}
export default Home