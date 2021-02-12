

export const ProcessSubmitForm = async (formdata) => {
    const actionForm = 'https://formspree.io/f/xjvpzdzk'
    
    let request = await fetch(`${actionForm}`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formdata)
    })
    if(request.ok) return request.json()
    else return null
}