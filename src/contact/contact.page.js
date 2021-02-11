import React, { useState } from 'react'
import Layout from '../shared/ui/layout'
import styled from 'styled-components'
import { ProcessSubmitForm } from './contact.service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import toastr from 'toastr'

const ContactWrapper = styled.div`
    display:block; max-width:680px; text-align:left; margin:30px; align-self:center;width:60%;
    @media (max-width: 767.98px) {margin:0 auto; max-width:95%; width:90%; align-self:flex-start; margin-top:30px;}
    h1{color:white; text-shadow:1px 1px #999;font-weight:300; margin-bottom:5px;}
    span{color:white; text-shadow:1px 1px #999;font-weight:300; margin-bottom:15px;display:block;}
    form{
        background:rgba(255,255,255,.7);
        display:block;
        padding:30px 25px;
        button { font-size:.8rem; padding:6px 20px; color:white; background-color:#555; border:1px solid #ccc;
            &:hover,&.processing{background-color:#777;}
        }

    }
`
const FormGroup = styled.div` 
    font-size:1rem;
    line-height:1.6rem;
    
    `
const FormControl = styled.div`
    margin:10px 0;
    input, textarea{ font-family:inherit;font-size:.8rem;padding:8px 0px; width:100%; text-indent:10px;border:solid 1px #eee; color: #777;
        &:focus, &:active, &:hover{border:1px solid #bbb; outline:none;}
    }

`


const Contact = (props) => {
    const [formdata, setFormdata] = useState({})
    const [loading, setLoading] = useState(false)
    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)
        if(!formdata.name || formdata.name==='') { toastr.error('Please set your name.', 'Error'); setLoading(false);}
        else if(!formdata.email || formdata.email==='') { toastr.error('Please set your email.', 'Error'); setLoading(false);}
        else if(!formdata.message || formdata.message==='') { toastr.error('Please set a message.', 'Error'); setLoading(false);}
        else{
            let saveForm = await ProcessSubmitForm(formdata)
            if(saveForm == null){ toastr.error("We can't send your request right now. Please try later.", "Error")}
            else{
                toastr.success('Your request was sended successfully. We will contact you soon.', 'Success')
                setFormdata({})
            }
            setLoading(false)
        }
        
    }
    const handleChangeForm = (e) => setFormdata({...formdata, [e.target.name]: e.target.value})
    return (
        <Layout {...props}>
            <ContactWrapper>
                <h1>Contact me</h1>
                <span>Please send me your request!</span>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <FormControl><input type='text' placeholder='Name' name='name' onChange={handleChangeForm}/></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl><input type='email' placeholder='Email' name='email' onChange={handleChangeForm}/></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl><textarea rows='5' name='message' placeholder='Message' onChange={handleChangeForm}/></FormControl>
                    </FormGroup>
                    <button type='submit' disabled={loading} className={loading?'processing':''}>
                        {!loading && 'Send'}
                        {loading && <div><FontAwesomeIcon icon={faSpinner} spin/> Procesando...</div>}
                    </button>
                </form>
            </ContactWrapper>
        </Layout>
    )
}
export default Contact  