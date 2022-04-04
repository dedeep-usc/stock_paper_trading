const express = require("express");
const app = express();
const morgan = require("morgan");
const body_parser = require("body-parser");
const path = require("path");

const morgan_body = require("morgan-body");

const test_routes = require("./stock_market/test/apis");
const finnhub_routes = require("./stock_market/finnhub_apis/routes");

app.use(morgan("dev"));

// morgan_body(app);

app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");

    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "*");
        return res.status(200).json({});
    }
    next();
});

app.use(express.static(path.join(__dirname, "stock_paper_trading_frontend")));

app.use("/test", test_routes);
app.use("/api/finnhub", finnhub_routes);

app.use("/*", function(req, res){
    res.sendFile(path.join(__dirname + "/stock_paper_trading_frontend/index.html"));
})

// things like 404 error
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

// things like 500 error
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json(
        {
            error: {
                message: error.message
            }
        }
    );
});

module.exports = app;