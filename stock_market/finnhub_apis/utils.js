const xhr = require("../common/xhr");
const constants = require("./constants");
const secrets = require("../secrets/secrets")
const util = require("util");


function build_get_request(url) {
    return {
        "method": "GET",
        "url": url
    }
}

function get_autocomplete_results(company_name) {
    console.log(`The company name is: ${company_name}.`);
    var complete_api_url = secrets.FINNHUB_END_POINT + util.format(constants.AUTOCOMPLETE_API, company_name, secrets.FINNHUB_API_KEY);
    console.log(complete_api_url);
    req_body = build_get_request(complete_api_url);
    resp = xhr.xhr_send(req_body);
    return resp.then((result) => {return result.data}).catch((result) => {console.log(result.response); return {"error": "Please enter valid company symbol."}});
}

function get_company_info(company_name) {
    console.log(`The company name is: ${company_name}.`);
    var company_info_url = secrets.FINNHUB_END_POINT + util.format(constants.COMPANY_INFO_API, company_name, secrets.FINNHUB_API_KEY);
    console.log(`The company_info_url is: ${company_info_url}.`);
    req_body = build_get_request(company_info_url);
    resp = xhr.xhr_send(req_body);
    return resp.then(handle_company_info_response).catch(handle_company_info_error);
}

function handle_company_info_response(result) {
    console.log(result.data);
    result = result.data;
    if (Object.keys(result).length === 0) {
        return {
            "error": "Finnhub didn't return any data."
        }
    }
    return result;
}

function handle_company_info_error(result) {
    console.log(result.response)
    return {
        "error": result.response.data
    }
}

function get_company_stock_candles(company_name, resolution, from, to) {
    console.log(`The company name is: ${company_name}.`);
    var company_stock_candles_api = secrets.FINNHUB_END_POINT + util.format(constants.COMPANY_STOCK_CANDLES_API, company_name, resolution, from, to, secrets.FINNHUB_API_KEY);
    console.log(`company_stock_candles_api: ${company_stock_candles_api}`);

    req_body = build_get_request(company_stock_candles_api);
    resp = xhr.xhr_send(req_body);
    return resp.then(handle_company_stock_candle_response).catch(handle_company_stock_candle_error);
}

function handle_company_stock_candle_response(result){
    console.log(result.data);
    result = result.data;

    if (result["s"] != "ok") {
        console.log(`result["s"]: ${result["s"]}`)
        return {
            "error": `Finhub didn't return any data for the company. Please ensure that the company symbol is right.`
        }
    }

    return result
}

function handle_company_stock_candle_error(result){
    console.log(result.response)
    if (result.response){
        return {
            "error": result.response.data
        }
    }
    return {
        "error": "Unknown Error."
    }
    
}

function get_company_latest_price(company) {
    console.log(`The company name is: ${company}.`);

    var company_stock_price_api = secrets.FINNHUB_END_POINT + util.format(constants.LATEST_STOCK_PRICE_API, company, secrets.FINNHUB_API_KEY);
    console.log(`company_stock_price_api: ${company_stock_price_api}`);

    req_body = build_get_request(company_stock_price_api);
    resp = xhr.xhr_send(req_body);
    return resp.then(handle_company_stock_price_response).catch(handle_company_stock_price_error);
}

function handle_company_stock_price_response(result){
    console.log(result.data);
    result = result.data;

    if (result["d"] == null || result["dp"] == null) {
        console.log(`result["d"]: ${result["d"]}`);
        console.log(`result["dp"]: ${result["dp"]}`);
        return {
            "error": `Finhub didn't return any data for the company. Please ensure that the company symbol is right.`
        }
    }

    return result
}

function handle_company_stock_price_error(result){
    console.log(result.response)
    return {
        "error": result.response.data
    }
}

function get_company_news(company, from, to) {
    console.log(`The company name is: ${company}.`);

    var company_stock_news_api = secrets.FINNHUB_END_POINT + util.format(constants.COMPANY_NEWS_API, company, from, to, secrets.FINNHUB_API_KEY);
    console.log(`company_stock_news_api: ${company_stock_news_api}`);

    req_body = build_get_request(company_stock_news_api);
    resp = xhr.xhr_send(req_body);
    return resp.then(handle_company_news_response).catch(handle_company_news_error);
}

function handle_company_news_response(result){
    // console.log(result.data);
    result = result.data;

    // if (Object.keys(result).length === 0) {
    //     console.log("The len of the returned data is 0.");
    //     return {
    //         "error": "Finnhub didn't return any data."
    //     }
    // }

    return result
}

function handle_company_news_error(result){
    console.log(result.response)
    return {
        "error": result.response.data
    }
}

function get_company_recommendation_trend(company) {
    console.log(`The company name is: ${company}.`);

    var company_recommendation_trend_api = secrets.FINNHUB_END_POINT + util.format(constants.COMPANY_RECOMMENDATION_TREND_API, company, secrets.FINNHUB_API_KEY);
    console.log(`company_recommendation_trend_api: ${company_recommendation_trend_api}`);

    req_body = build_get_request(company_recommendation_trend_api);
    resp = xhr.xhr_send(req_body);
    return resp.then(handle_company_recommendation_trend_response).catch(handle_company_recommendation_trend_error);
}

function handle_company_recommendation_trend_response(result){
    console.log(result.data);
    result = result.data;

    if (Object.keys(result).length === 0) {
        console.log("The len of the returned data is 0.");
        return {
            "error": "Finnhub didn't return any data."
        }
    }

    return result
}

function handle_company_recommendation_trend_error(result){
    console.log(result.response)
    return {
        "error": result.response.data
    }
}

function get_company_social_sentiment(company) {
    console.log(`The company name is: ${company}.`);

    var company_social_sentiment_api = secrets.FINNHUB_END_POINT + util.format(constants.COMPANY_SOCIAL_SENTIMENT_API, company, secrets.FINNHUB_API_KEY);
    console.log(`company_social_sentiment_api: ${company_social_sentiment_api}`);

    req_body = build_get_request(company_social_sentiment_api);
    resp = xhr.xhr_send(req_body);
    return resp.then(handle_company_social_sentiment_response).catch(handle_company_social_sentiment_error);
}

function handle_company_social_sentiment_response(result){
    console.log(result.data);
    result = result.data;

    if (Object.keys(result["reddit"]).length === 0 && Object.keys(result["twitter"]).length === 0) {
        console.log("The len of the returned data is 0.");
        return {
            "error": "Finnhub didn't return any data."
        }
    }

    return result
}

function handle_company_social_sentiment_error(result){
    console.log(result.response)
    return {
        "error": result.response.data
    }
}

function get_company_peers(company) {
    console.log(`The company name is: ${company}.`);

    var company_social_sentiment_api = secrets.FINNHUB_END_POINT + util.format(constants.COMPANY_PEERS_API, company, secrets.FINNHUB_API_KEY);
    console.log(`company_social_sentiment_api: ${company_social_sentiment_api}`);

    req_body = build_get_request(company_social_sentiment_api);
    resp = xhr.xhr_send(req_body);
    return resp.then(handle_company_peers_response).catch(handle_company_peers_error);
}

function handle_company_peers_response(result){
    console.log(result.data);
    result = result.data;

    // if (Object.keys(result).length === 0) {
    //     console.log("The len of the returned data is 0.");
    //     return {
    //         "error": "Finnhub didn't return any data."
    //     }
    // }

    return result
}

function handle_company_peers_error(result){
    console.log(result.response)
    return {
        "error": result.response.data
    }
}

function get_company_earnings(company) {
    console.log(`The company name is: ${company}.`);

    var company_social_sentiment_api = secrets.FINNHUB_END_POINT + util.format(constants.COMPANY_EARNINGS_API, company, secrets.FINNHUB_API_KEY);
    console.log(`company_social_sentiment_api: ${company_social_sentiment_api}`);

    req_body = build_get_request(company_social_sentiment_api);
    resp = xhr.xhr_send(req_body);
    return resp.then(handle_company_earnings_response).catch(handle_company_earnings_error);
}

function handle_company_earnings_response(result){
    console.log(result.data);
    result = result.data;

    if (Object.keys(result).length === 0) {
        console.log("The len of the returned data is 0.");
        return {
            "error": "Finnhub didn't return any data."
        }
    }

    return result
}

function handle_company_earnings_error(result){
    console.log(result.response)
    return {
        "error": result.response.data
    }
}



module.exports = {
    get_autocomplete_results,
    get_company_info,
    get_company_stock_candles,
    get_company_latest_price,
    get_company_news,
    get_company_recommendation_trend,
    get_company_social_sentiment,
    get_company_peers,
    get_company_earnings
}