const axios = require("axios");
const https = require("https");
const request = require('request');

function _http_get_request(options) {
    const url = options["url"];
    console.log(`url: ${url}`);
    // return  axios.get(url)
    // .then(res => {
    //     console.log("Success get request.");
    //     // console.log(response.data);response;
    //     return res;
    // })
    // .catch(error => {
    //     console.log(error);
    // });

    const request = axios.get(url);
    return request.then(response => response);
}


function _http_get_post(options) {
    const url = options["url"];
    
    axios.post(url, options["data"])
    .then(res => {
        console.log(res.data.url);
    })
    .catch(error => {
        console.log(error);
    });
}

function xhr_send(options) {
    method = options["method"];
    console.log(`request method: ${method}`);

    if (["GET", "get"].includes(method)) {
        console.log("GET method.");
        return _http_get_request(options);
    }

    if (["POST", "post"].includes(method)) {
        console.log("POST method.")
        return _http_get_post(options);
    }
}

module.exports = {
    xhr_send
}