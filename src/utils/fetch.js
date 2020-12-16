const URL = 'http://127.0.0.1:5000';

const fetchFunction = async (method, path, body, otherProps) => {
    let headers;
    if(method === 'POST' || method === 'PATCH') {
        headers = {
            'Content-type': 'application/json'
        }
    }

    if(otherProps){
        if(otherProps.authorization) headers = {
            ...headers,
            'authorization': otherProps.authorization
        }
    }

    let response;
    if (method === 'GET'){
        response = await fetch(`${URL}/${path}`, {
            method: method,
            headers
        });
    }else {
        response = await fetch(`${URL}/${path}`, {
            method: method,
            headers,
            body: JSON.stringify(body)
        });
    }

    return await response.json();
}

export default fetchFunction;