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

export const getDataByGet = async (url)=>{
    const response = await fetch(url);
    return response;
}

export const deleteAccount = async(url)=>{
    const deleteOptions = {
        method : 'DELETE',
        headers  : {
            'content-type' : 'application/json'
        },
    };
    const deleteResponse = await fetch(url,deleteOptions);
    return deleteResponse;
}

export const deleteTodoForUser =  async (url)=>{
    const todoDeleteOptions = {
        method : 'DELETE',
        headers : {
            'content-type':'application/json'
        }
    };
        const deleteTodores = await fetch(url,todoDeleteOptions);
        return deleteTodores;
}

export const updateTodoForUser = async (url,data)=>{
    const todoUpdateOptions = {
        method : 'PATCH',
        headers : {
            'content-type': 'application/json'
        },
        body : JSON.stringify(data)
    };
    const updateTodores = await fetch(url,todoUpdateOptions);
    return updateTodores;
}