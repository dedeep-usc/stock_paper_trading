var AUTOCOMPLETE_API = "/api/v1/search?q=%s&token=%s"
var COMPANY_INFO_API = "/api/v1/stock/profile2?symbol=%s&token=%s"
var COMPANY_STOCK_CANDLES_API = "/api/v1/stock/candle?symbol=%s&resolution=%s&from=%s&to=%s&token=%s"
var LATEST_STOCK_PRICE_API = "/api/v1/quote?symbol=%s&token=%s"
var COMPANY_NEWS_API = "/api/v1/company-news?symbol=%s&from=%s&to=%s&token=%s"
var COMPANY_RECOMMENDATION_TREND_API = "/api/v1/stock/recommendation?symbol=%s&token=%s"
var COMPANY_SOCIAL_SENTIMENT_API = "/api/v1/stock/social-sentiment?symbol=%s&from=2022-01-01&token=%s"
var COMPANY_PEERS_API = "/api/v1/stock/peers?symbol=%s&token=%s"
var COMPANY_EARNINGS_API = "/api/v1/stock/earnings?symbol=%s&token=%s"

module.exports = {
    AUTOCOMPLETE_API: AUTOCOMPLETE_API,
    COMPANY_INFO_API: COMPANY_INFO_API,
    COMPANY_STOCK_CANDLES_API: COMPANY_STOCK_CANDLES_API,
    LATEST_STOCK_PRICE_API: LATEST_STOCK_PRICE_API,
    COMPANY_NEWS_API: COMPANY_NEWS_API,
    COMPANY_RECOMMENDATION_TREND_API: COMPANY_RECOMMENDATION_TREND_API,
    COMPANY_SOCIAL_SENTIMENT_API: COMPANY_SOCIAL_SENTIMENT_API,
    COMPANY_PEERS_API: COMPANY_PEERS_API,
    COMPANY_EARNINGS_API: COMPANY_EARNINGS_API
}