const express = require("express");
const router = express.Router();

const apis = require("./apis")

// router.get('/test/get', (req, res, next) => {
//     res.status(200).json(
//         {
//             message: "finnub get test."
//         }
//     );
// });

router.get("/test/get", apis.test_get);
router.get("/autocomplete", apis.autocomplete);
router.get("/get/company/info", apis.company_info);
router.get("/get/company/stock_candles", apis.company_stock_candles);
router.get("/get/company/latest/price", apis.company_latest_price);
router.get("/get/company/news", apis.company_news);
router.get("/get/company/recommendation/trend", apis.company_recommendation_trend);
router.get("/get/company/social/sentiment", apis.company_social_sentiment);
router.get("/get/company/peers", apis.company_peers);
router.get("/get/company/earnings", apis.company_earnings)

module.exports = router;