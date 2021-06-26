import constants from './../components/provider/constants';

let setGetParams = async (endpoint, params) => {
    if (Object.keys(params).length > 0) {
        for (let index in params) {
            if (params[index] != '' && (params[index] !== undefined || params[index] !== 'undefined')) {
                endpoint += (index > 0 ? ('&' + index + '=' + params[index]) : ('?' + index + '=' + params[index]));
            }
        }
    }

    return await endpoint;
};

let getApi = async (endpoint, params) => {
    console.log('getApi', constants.API_URL + endpoint, params);
    endpoint = await setGetParams(constants.API_URL + endpoint, params);
    return await fetch(endpoint, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
    });
};

let getApiWithAuth = async (endpoint, params, token) => {
    console.log('getApiWithAuth', constants.API_URL + endpoint, params, token);
    endpoint = await setGetParams(constants.API_URL + endpoint, params);
    return await fetch(endpoint, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        })
    });
};

let postApi = async (endpoint, params) => {
    console.log('postApi', constants.API_URL + endpoint, params);
    params.api_token=constants.API_Secure_Token;
    return await fetch(constants.API_URL + endpoint, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(params)
    });
};

let postApiWithAuth = async (endpoint, params, token) => {
    console.log('postApiWithAuth', constants.API_URL + endpoint, params, token);
    return await fetch(constants.API_URL + endpoint, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }),
        body: JSON.stringify(params)
    });
};

let postApiWithAuthWithMultipart = async (endpoint, params, token) => {
    console.log('postApiWithAuthWithMultipart', constants.API_URL + endpoint, params, token);
    return await fetch(constants.API_URL + endpoint, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            "Content-Type": "multipart/form-data",
            'Authorization': 'Bearer ' + token
        }),
        body: params
    });
};

let putApi = async (endpoint, params) => {
    console.log('putApi', constants.API_URL + endpoint, params);
    return await fetch(constants.API_URL + endpoint, {
        method: 'PUT',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(params)
    });
};

let putApiWithAuth = async (endpoint, params, token) => {
    console.log('putApiWithAuth', constants.API_URL + endpoint, params, token);
    return await fetch(constants.API_URL + endpoint, {
        method: 'PUT',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }),
        body: JSON.stringify(params)
    });
};


let deleteApi = async (endpoint, params) => {
    console.log('deleteApi', constants.API_URL + endpoint, params);
    return await fetch(constants.API_URL + endpoint, {
        method: 'DELETE',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(params)
    });
};

let deleteApiWithAuth = async (endpoint, params, token) => {
    console.log('deleteApiWithAuth', constants.API_URL + endpoint, params, token);
    return await fetch(constants.API_URL + endpoint, {
        method: 'DELETE',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }),
        body: JSON.stringify(params)
    });
};

export {
    getApi,
    getApiWithAuth,
    postApi,
    postApiWithAuth,
    putApi,
    putApiWithAuth,
    deleteApi,
    deleteApiWithAuth,postApiWithAuthWithMultipart
};
