import axios from 'axios';

export const tokenGenerate = async (baseURL) => {
    let objectInstance = {
        url: baseURL + '/api/login_check',
        method: 'post',
        data: {
            "authentication_type" 	: "anonymous",
            "anonymous_id"			: "bioscope_anonymous",
            "client_type"     		: "web",
            "client_id"       		: "web_"+Math.random(),
            "channel"  				: "bioscope_web_anonymous"
        }
    };

    var obj = {}
    await axios(objectInstance).then(async (res) => {
        obj = await {token: res.data.token}

    }).catch(async (error) => {
        obj = await {error: JSON.stringify(error)}
    });

    return obj;
}


export const contentList = async (baseURL, token) => {
    let objectInstance = {
        url: baseURL + '/api/en/content-selector/drama-dhamaka',
        method: 'get',
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + token,
            "Access-Code" : "QkQ%3D"
        },
    };
    var obj = {}
    await axios(objectInstance).then(async (res) => {
        obj = await {contentLists: res.data._embedded.contents}
    }).catch(async (error) => {
        obj = await {error: JSON.stringify(error)}
    });
    console.log(obj);
    return obj;
}