import React, { useContext } from 'react'
import { AppContext } from '../shared/app.context'

const Home = () => {
    const [{name}] = useContext(AppContext)
    return (
        <div>Home, {name}</div>
    ) 
}
export default Home