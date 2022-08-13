import axios from "../axios";
import { Ticker } from "../Models";

export const api = {
  async searchTickers(url: string, query: string) {
    try {
      // TODO: add retry to handle 429 errors,
      // see: https://stackoverflow.com/questions/56074531/how-to-retry-5xx-requests-using-axios
      const queryParams = {
        search: query,
        active: true,
        sort: "ticker",
        order: "asc",
        limit: 10,
      };
      const response = await axios(url, {
        params: queryParams,
      }).catch((e: Error) => {
        console.log(e.message);
      });
      const json = await response?.data.results;
      const next_url = await response?.data.next_url;
      var result = json.map((_ticker: any) => {
        const ticker: Ticker = {
          name: _ticker.name,
          ticker: _ticker.ticker,
          market: _ticker.market,
        };
        return ticker;
      });

      return { result: result, next_url: next_url };
    } catch (error) {
      console.log(error);
    }
  },
};
