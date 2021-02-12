import { Document, Page } from 'react-pdf'
import React, { useState } from 'react'
import Layout from '../shared/ui/layout'
import styled from 'styled-components'

const ResumeWrapper = styled.div`
        display:block; 
        max-width:680px; 
        text-align:left; 
        margin:30px; 
        align-self:start;
        div.react-pdf__Document{
            height:792px;
            @media (max-width: 767.98px) { width:100%;overflow:auto;}
        }
        @media (max-width: 767.98px) {
            margin:20px auto; 
            max-width:95%;
            }
            `
const Pagination = styled.div`
    display:flex;
    flex-direction:row;
    background-color:white;
    justify-content:space-around;
    padding:10px 0;
    text-align:center;
    button{
        border:0;
        background-color:rgba(0,0,0,.5);
        color:white;
        padding:8px 11px;
    }
    div{
        flex:1 1 auto;
        line-height:30px;
    }
    
`
const Resume = (props) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }
    const handleChangePage = (q) => {
        let newPage = pageNumber+q
        if(newPage>0 && newPage<=numPages) setPageNumber(newPage)
    }
    return (
        <Layout {...props}>
            <ResumeWrapper>
                <Document
                    file="files/Resume2021.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                    renderMode='svg'
                >
                    <Page pageNumber={pageNumber}/>
                </Document>
                <Pagination>
                    <div><button onClick={() => handleChangePage(-1)}>Previous</button></div>
                    <div>Page {pageNumber} of {numPages}</div>
                    <div><button onClick={() =>handleChangePage(1)}>Next</button></div>
                </Pagination>
            </ResumeWrapper>
        </Layout>
    )
}
export default Resume