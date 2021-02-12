import styled from 'styled-components'

export const Posts = styled.div` display:block; max-width:680px; text-align:left; margin:30px; align-self:start;
    @media (max-width: 767.98px) {margin:0 auto; max-width:95%;}
`
export const Post = styled.div`
    text-rendering:optimizeLegibility;
    display:block;
    padding:40px 50px;
    background:rgba(255,255,255,.7);
    width:85%;
    margin:20px 0;
    figure{ width:100%; display:contents; figcaption{ color:#999; font-size:.7rem;}}
    img{width:100%;margin:10px 0;}
    span.pubDate{ 
        display:block;
        color:#999;
        &::first-letter{text-transform:uppercase;}
    }
    h2{margin-top:7px; font-size:1.6rem;}
    p{
        font-size:.9rem;
    }
    pre{
        overflow:auto;
        background:rgba(0,0,0,.8);
        padding:10px;
        color:white;
        margin:0;
    }
    blockquote{
        font-style:italic;
        line-height:20px;
    }
    @media (max-width: 767.98px) {padding:30px 20px;width:auto;}
`
export const Loading = styled.div` color:white; text-shadow:1px 1px #999;`