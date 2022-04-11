export const getData = async (data,url)=>{
    const options = {
        method : 'POST',
        headers : {
            'content-type':'application/json'
        },
        body : JSON.stringify(data)
    };
    const response = await fetch(url,options);
    return response;
}