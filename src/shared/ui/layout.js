import React, { useContext, useState } from 'react'
import styled, {css} from 'styled-components'
import { AppContext } from '../app.context'
import './app.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const MainWrapper = styled.div` 
        min-height:100vh;
        min-width:100vw; 
        background:url(${props => props.bgimage}) no-repeat; 
        font-size:12px; 
        display:flex; 
        background-size:cover;
        text-align:center;
        @media (max-width: 767.98px) { 
            flex-direction:column;
        }
        `
const SideNav = styled.div` 
        background-color:rgba(0,0,0,.5);
        max-width:25em;
        text-align:center;
        flex:1 1 auto;
        @media (max-width: 767.98px) { 
            display:flex;
            max-width:100%;
            flex:0 1 auto;
            flex-direction:column-reverse;
            background-color:rgba(0,0,0,.5);
        }
    `
const PictureBox = styled.div` width:10rem; margin:2rem auto; @media (max-width: 767.98px) { display:none;}`
const Content = styled.div` ${props => props.vertical==='center' && css`align-self:center;`} @media (max-width: 767.98px) { }`
const Title = styled.h1` text-transform:uppercase; color:white; text-shadow:1px 0px #ccc; font-size:1.3rem; margin-bottom:0; @media (max-width: 767.98px) { display:none;}`
const Subtitle = styled.h2` color:white; text-transform:uppercase; font-weight:500; font-size:.8rem; margin-top:.3rem; @media (max-width: 767.98px) { display:none;}`
const Menu = styled.ul` 
        list-style:none;
        margin:0;
        text-align:left;
        margin-top:5rem; 
        padding:0;
        li:last-child{ margin-top:100px;}
        @media (max-width: 767.98px) { 
            display:none; 
            margin-top:0rem; 
            position:absolute;
            top:63px;
            left:0;
            width:100%;
            background:rgba(0,0,0,.8);
            li:last-child{ margin-top:50px; margin-bottom:20px;} 
            &.shown{ display:block;}}
    `
const MenuLink = styled(Link)` 
            color:white; 
            text-transform:uppercase; 
            text-decoration:none;
            font-size:.8rem;
            display:block;
            padding:10px 11px 10px 0px; 
            padding-inline-start:40px; 
            &:hover, &.active{ background-color:rgba(0,0,0,.3); }
            &.icon{ font-size:1rem !important; padding-inline-start:10px;}
            `
const Social = styled.ul` list-style:none; display:flex;margin-left:-10px; li:last-child{display:none;} @media (max-width: 767.98px) { margin-left:0;padding:0 0 0 10px; li:last-child{margin-left:auto;margin-right:10px; display:block;}} `


const Layout = ({children, contentAlign}) => {
    const [{config}] = useContext(AppContext) 
    const [shown, setShown] = useState(false)
    return (
        <MainWrapper bgimage={config.bg_main}>
            <SideNav>
                    <PictureBox><img src={config.mypicture} alt='' className='profile-image'/></PictureBox>
                    <Title>{config.info.fullname}</Title>
                    <Subtitle>{config.info.profesion}</Subtitle>
                    <Menu className={shown ? 'shown':''}>
                        <li><MenuLink to='/' className='active'>Home</MenuLink></li>
                        <li><MenuLink to='/about-me'>About me</MenuLink></li>
                        <li><MenuLink to='/my-work'>My work</MenuLink></li>
                        <li><MenuLink to='/my-work'>My Blog</MenuLink></li>
                        <li><MenuLink to='/contact-me'>Contact me</MenuLink></li>
                        <li><MenuLink to='/about-me'>My resume</MenuLink></li>
                    </Menu>
                <Social>
                    <li><MenuLink className='icon'><FontAwesomeIcon icon={faFacebook}/></MenuLink></li>
                    <li><MenuLink className='icon'><FontAwesomeIcon icon={faLinkedin}/></MenuLink></li>
                    <li><MenuLink className='icon'><FontAwesomeIcon icon={faTwitter}/></MenuLink></li>
                    <li><MenuLink className='icon'><FontAwesomeIcon icon={faInstagram}/></MenuLink></li>
                    <li><MenuLink className='icon' onClick={() => { setShown(!shown) }}><FontAwesomeIcon icon={faBars}/></MenuLink></li>
                </Social>

            </SideNav>
            <Content vertical={contentAlign}>{children}</Content>
        </MainWrapper>
    )
}

export default Layout