const finnhub_utils = require("./utils");

function send_result(res, data, code) {
    res.status(code).json(data);
}

function test_get(req, res, next) {
    return send_result(res, {"message": "test send result."}, 200);
}

async function autocomplete(req, res, next) {
    var company_name = req.query.company_name
    if (company_name == "" || company_name == null) {
        return send_result(res, {"error": "company name is missing."}, 400);
    }

    console.log(`company_name from the api is: ${company_name}.`);
    result = await finnhub_utils.get_autocomplete_results(company_name.toUpperCase());
    
    var code = 200;
    if ("error" in result) {
        code = 400;
    }

    console.log(`result: ${JSON.stringify(result)}.`);
    return send_result(res, {"message": result, "company_name": company_name}, code);
}

async function company_info(req, res, next) {
    var company_name = req.query.company_name;
    console.log(`company_name from the api is: ${company_name}.`);
    if (company_name == "" || company_name == null) {
        return send_result(res, {"error": "company name is missing."}, 400);
    }

    var code = 200;
    result = await finnhub_utils.get_company_info(company_name.toUpperCase());
    if ("error" in result) {
        code = 400;
    }

    console.log(`result: ${JSON.stringify(result)}.`);
    return send_result(res, {"message": result, "company_name": company_name}, code);
}

async function company_stock_candles(req, res, next) {
    var company_name = req.query.company_name;
    var resolution = req.query.resolution;
    var from = req.query.from;
    var to = req.query.to;
    console.log(`company_name from the api is: ${company_name}.`);
    console.log(`'resolution' from the api is: ${resolution}.`);
    console.log(`'from' from the api is: ${from}.`);
    console.log(`'to' from the api is: ${to}.`);
    if (company_name == "" || company_name == null) {
        return send_result(res, {"error": "company name is missing."}, 400);
    }

    if (resolution == "" || resolution == null) {
        return send_result(res, {"error": "resolution is missing."}, 400);
    }

    if (from == "" || from == null) {
        return send_result(res, {"error": "from is missing."}, 400);
    }

    if (to == "" || to == null) {
        return send_result(res, {"error": "to is missing."}, 400);
    }

    var code = 200;
    result = await finnhub_utils.get_company_stock_candles(company_name.toUpperCase(), resolution, from, to);
    if ("error" in result) {
        code = 400;
    }

    console.log(`result: ${JSON.stringify(result)}.`);
    return send_result(res, {"message": result, "company_name": company_name}, code);
}

async function company_latest_price(req, res, next) {
    var company_name = req.query.company_name;
    console.log(`company_name from the api is: ${company_name}.`);

    if (company_name == "" || company_name == null) {
        return send_result(res, {"error": "company name is missing."}, 400);
    }

    var code = 200;
    result = await finnhub_utils.get_company_latest_price(company_name.toUpperCase());
    if ("error" in result) {
        code = 400;
    }

    console.log(`result: ${JSON.stringify(result)}.`);
    return send_result(res, {"message": result, "company_name": company_name}, code);

}

async function company_news(req, res, next) {
    var company_name = req.query.company_name;
    console.log(`company_name from the api is: ${company_name}.`);

    if (company_name == "" || company_name == null) {
        return send_result(res, {"error": "company name is missing."}, 400);
    }

    var from = req.query.from;
    var to = req.query.to;

    console.log(`'from' from the api is: ${from}.`);
    console.log(`'to' from the api is: ${to}.`);

    if (from == "" || from == null) {
        var cur_date = new Date();
        var prior = new Date().setDate(cur_date.getDate() - 31);
        from = new Date(prior).toISOString().split('T')[0];
    }

    if (to == "" || to == null) {
        var cur_date = new Date();
        to = cur_date.toISOString().split('T')[0];
    }

    console.log(`'from' from the api is: ${from}.`);
    console.log(`'to' from the api is: ${to}.`);

    var code = 200;
    result = await finnhub_utils.get_company_news(company_name.toUpperCase(), from, to);
    if ("error" in result) {
        code = 400;
    }

    console.log(`result: ${JSON.stringify(result)}.`);
    return send_result(res, {"message": result, "company_name": company_name}, code);

}

async function company_recommendation_trend(req, res, next) {
    var company_name = req.query.company_name;
    console.log(`company_name from the api is: ${company_name}.`);

    if (company_name == "" || company_name == null) {
        return send_result(res, {"error": "company name is missing."}, 400);
    }

    var code = 200;
    result = await finnhub_utils.get_company_recommendation_trend(company_name.toUpperCase());
    if ("error" in result) {
        code = 400;
    }

    console.log(`result: ${JSON.stringify(result)}.`);
    return send_result(res, {"message": result, "company_name": company_name}, code);

}

async function company_social_sentiment(req, res, next) {
    var company_name = req.query.company_name;
    console.log(`company_name from the api is: ${company_name}.`);

    if (company_name == "" || company_name == null) {
        return send_result(res, {"error": "company name is missing."}, 400);
    }

    var code = 200;
    result = await finnhub_utils.get_company_social_sentiment(company_name.toUpperCase());
    if ("error" in result) {
        code = 400;
    }

    console.log(`result: ${JSON.stringify(result)}.`);
    return send_result(res, {"message": result, "company_name": company_name}, code);
}

async function company_peers(req, res, next) {
    var company_name = req.query.company_name;
    console.log(`company_name from the api is: ${company_name}.`);

    if (company_name == "" || company_name == null) {
        return send_result(res, {"error": "company name is missing."}, 400);
    }

    var code = 200;
    result = await finnhub_utils.get_company_peers(company_name.toUpperCase());
    if ("error" in result) {
        code = 400;
    }

    console.log(`result: ${JSON.stringify(result)}.`);
    return send_result(res, {"message": result, "company_name": company_name}, code);
}


async function company_earnings(req, res, next) {
    var company_name = req.query.company_name;
    console.log(`company_name from the api is: ${company_name}.`);

    if (company_name == "" || company_name == null) {
        return send_result(res, {"error": "company name is missing."}, 400);
    }

    var code = 200;
    result = await finnhub_utils.get_company_earnings(company_name.toUpperCase());
    if ("error" in result) {
        code = 400;
    }

    console.log(`result: ${JSON.stringify(result)}.`);
    return send_result(res, {"message": result, "company_name": company_name}, code);
}


module.exports = {
    test_get,
    autocomplete,
    company_info,
    company_stock_candles,
    company_latest_price,
    company_news,
    company_recommendation_trend,
    company_social_sentiment,
    company_peers,
    company_earnings
}