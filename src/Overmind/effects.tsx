import axios, { isAxiosError } from "../axios";
import { Stats, Ticker, TickerDetails } from "../Models";
import {
  formatDateShort,
  getDetails,
  getPercentageChange,
  getPrices,
} from "../utils";

export const api = {
  async searchTickers(url: string, query: string) {
    try {
      const queryParams = {
        search: query,
        active: true,
        sort: "ticker",
        order: "asc",
        limit: 10,
      };
      const response = await axios(url, {
        params: queryParams,
      });
      const json = await response?.data?.results;
      const next_url = await response?.data?.next_url;
      var result = json?.map((_ticker: any) => {
        const ticker: Ticker = {
          name: _ticker.name,
          ticker: _ticker.ticker,
          market: _ticker.market,
        };
        return ticker;
      });

      return { result: result, next_url: next_url, error: null };
    } catch (error) {
      const errorMessage = isAxiosError(error)
        ? error.response?.data?.error
        : error.message;
      alert(errorMessage);
      return { result: null, next_url: null, error: errorMessage };
    }
  },
  async getTickerDetails(ticker: string) {
    try {
      let [details, prices] = await Promise.all([
        getDetails(ticker),
        getPrices(ticker),
      ]);

      const detailsJson = await details?.data.results;
      var pricesArray: any[];
      var historicalPrices: any[] | null = null;
      var percentageChange: number = 0;
      var stats: Stats = null;
      var pricesData = prices?.data;
      const pricesArrayLength = pricesData?.resultsCount;

      if (pricesArrayLength > 0) {
        pricesArray = await pricesData?.results;
        // get stats of previous day
        let previousStats = pricesArray[pricesArrayLength - 1];
        stats = {
          open: previousStats.o,
          close: previousStats.c,
          high: previousStats.h,
          low: previousStats.l,
          volume: previousStats.v,
          vwap: previousStats.vw,
        };
        // map array of stats to array of closing prices
        historicalPrices = pricesArray.map((stats: any) => {
          let date = formatDateShort(new Date(stats.t));
          let obj = { x: date, y: stats.c };
          return obj;
        });
        if (pricesArrayLength > 1)
          percentageChange = getPercentageChange(
            historicalPrices[pricesArrayLength - 1].y,
            historicalPrices[pricesArrayLength - 2].y
          );
      }

      const tickerDetails: TickerDetails | null = {
        name: detailsJson.name,
        ticker: ticker,
        logo: detailsJson.branding?.icon_url ?? null,
        stats: stats ?? null,
        website: detailsJson.homepage_url ?? null,
        industry: detailsJson.market ?? null,
        description: detailsJson.description ?? null,
        currency: detailsJson.currency_name ?? null,
        historicalPrices: historicalPrices ?? null,
        percentageChange: percentageChange ?? null,
      };

      return { result: tickerDetails, error: null };
    } catch (error) {
      const errorMessage = isAxiosError(error)
        ? error.response?.data?.error
        : error.message;
      alert(errorMessage);
      return { result: null, error: error };
    }
  },
};
