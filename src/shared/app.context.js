import { createContext } from "react";
import React, {  } from 'react'
import { useAppReducer } from "./app.reducer";
import { useMetadata } from "./app.service";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const LoadingMain = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.4rem;
    background-size:cover;
    color:white;
    text-shadow:1px 1px #999;
    background:url(${props => props.bgimage}) no-repeat #B1CFE9;
    height:100vh;
    span{font-size:1.2rem; margin-left:10px;}
`


export const AppContext = createContext([])

export const Context = ({ children }) => {
    const [state, dispatcher] = useAppReducer({})
    const [loading] = useMetadata(dispatcher)

    return (
        <AppContext.Provider value={[state, dispatcher]}>
            
            { loading && <LoadingMain bgimage={state.config.bg_main}><FontAwesomeIcon icon={faSpinner} spin/><span>Loading...</span></LoadingMain>}
            { !loading && children }
        </AppContext.Provider>
    )
}