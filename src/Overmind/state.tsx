import { Ticker, TickerDetails, Loading } from "../models";

export interface State {
  tickers: Ticker[];
  search_tickers: Ticker[];
  next_url: string;
  search_next_url: string;
  search_load: boolean;
  retrieve_load: Loading;
  details_load: boolean;
  ticker_details: {
    [key: string]: TickerDetails;
  };
}

export const state: State = {
  tickers: [],
  search_tickers: [],
  next_url: "/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=10",
  search_next_url:
    "/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=10",
  search_load: false,
  retrieve_load: "IDLE",
  details_load: false,
  ticker_details: {},
};
