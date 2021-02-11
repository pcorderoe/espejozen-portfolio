import React, { useContext } from 'react'
import { AppContext } from '../shared/app.context'
import Layout from '../shared/ui/layout'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const WrapperGreet = styled.div`
    display:flex;
    flex-direction:column;
    width:35rem;
    color:white;
    text-align:left;
    margin-left:8rem;
    text-shadow:1px 1px #999;
    align-self:center;
    @media (max-width: 767.98px) { width:80%; text-align:center;margin:50px auto;}
    h1{
        line-height:2.5rem;
        font-size:1.6rem;
        font-weight:300;
        span{
            line-height:3.4rem;
            font-size:2.6rem;
            display:block;
        }
    }
`
const ContactMeLink = styled(Link)`
    text-decoration:none;
    width:fit-content;
    padding:8px 11px;
    border:2px solid white;
    text-transform:uppercase;
    font-size:1rem;
    color:white;
    text-shadow:none;
    background-color:transparent;
    @media (max-width: 767.98px) {margin:50px auto;}
    &:hover{
        background-color:white;
        color:#999;
    }
`
const Home = (props) => {
    const [state] = useContext(AppContext)
    return (
        <Layout contentAlign='center' {...props}>
            <WrapperGreet>
                <h1><span>Hi, I'm Patricio,</span> a software engineer specialized to create <strong>outstanding software</strong></h1>
                <ContactMeLink to='/contact-me'>Contact me</ContactMeLink>
            </WrapperGreet>
        </Layout>
    ) 
}
export default Home