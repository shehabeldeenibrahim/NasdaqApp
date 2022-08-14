import { Ticker, TickerDetails, Loading } from "../models";

export interface State {
  tickers: Ticker[];
  next_url: string;
  search_load: boolean;
  retrieve_load: Loading;
  details_load: boolean;
  tickerDetails: {
    [key: string]: TickerDetails;
  };
}

export const state: State = {
  tickers: [],
  next_url: "/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=10",
  search_load: false,
  retrieve_load: "IDLE",
  details_load: false,
  tickerDetails: {},
};
