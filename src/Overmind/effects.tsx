import axios from "../api";
import { GraphPoint, QueryParams, Stats, TickerDetails } from "../Models";
import {
  IAggsResults,
  ITickerDetailsResults,
  ITickers,
  ITickersResults,
} from "../types/responses";
import {
  getDetails,
  getErrorMessage,
  getPercentageChange,
  getPrices,
  mapArrayToGraph,
  mapResponseToDetails,
  mapResponseToStats,
  mapResponseToTicker,
} from "../utils";

export const api = {
  /**
   * Search the api for the ticker matching
   * the given `query`
   * @param {string} query search query
   * @param {string} url search url
   */
  async searchTickers(url: string, query: string) {
    try {
      // Search query params
      const queryParams: QueryParams = {
        search: query,
        active: true,
        sort: "ticker",
        order: "asc",
        limit: 10,
      };
      // Fetch
      const response = await axios.get<ITickers>(url, {
        params: queryParams,
      });
      // Grab result and next url
      const resultsArray: ITickersResults[] = await response?.data?.results;
      const next_url = await response?.data?.next_url;

      // Map results to fit Ticker interface
      var result = resultsArray?.map((_ticker: ITickersResults) => {
        return mapResponseToTicker(_ticker);
      });

      return { result: result, next_url: next_url, error: null };
    } catch (error: any) {
      const errorMessage = getErrorMessage(error);
      alert(errorMessage);
      return { result: null, next_url: null, error: errorMessage };
    }
  },

  /**
   * Fetch details for the `ticker`
   * @param {string} ticker search query
   */
  async getTickerDetails(ticker: string) {
    try {
      var historicalPrices: GraphPoint[] | null = null;
      var percentageChange: number = 0;
      var stats: Stats = null;

      // Fetch ticker details and prices
      let [details, prices] = await Promise.all([
        getDetails(ticker),
        getPrices(ticker),
      ]);

      const detailsObject: ITickerDetailsResults | undefined = await details
        ?.data?.results;
      var pricesArray: IAggsResults[] = (await prices?.data?.results) ?? [];
      const pricesArrayLength: number = prices?.data?.resultsCount ?? 0;

      // If we have prices
      if (pricesArrayLength > 0) {
        // Get stats of previous day
        let previousStats: IAggsResults = pricesArray[pricesArrayLength - 1];
        let beforePreviousStats: IAggsResults =
          pricesArray[pricesArrayLength - 2];
        stats = mapResponseToStats(previousStats);

        // Map array of stats to array of closing prices
        historicalPrices = mapArrayToGraph(pricesArray);

        // Get percentage change
        if (pricesArrayLength > 1)
          percentageChange = getPercentageChange(
            previousStats.c,
            beforePreviousStats.c
          );
      }
      // Map details response to TickerDetails
      const tickerDetails: TickerDetails | null = mapResponseToDetails(
        detailsObject,
        ticker,
        stats,
        historicalPrices,
        percentageChange
      );

      return { result: tickerDetails, error: null };
    } catch (error: any) {
      const errorMessage = getErrorMessage(error);
      alert(errorMessage);
      return { result: null, error: error };
    }
  },
};
