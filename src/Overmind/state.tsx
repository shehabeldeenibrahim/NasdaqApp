import { Ticker, TickerDetails } from "../models";
import { loading } from "./loadingStateMachine";

export interface State {
  tickers: Ticker[];
  next_url: string;
  search_load: boolean;
  retrieve_load: any;
  details_load: boolean;
  tickerDetails: {
    [key: string]: TickerDetails;
  };
}

export const state: State = {
  tickers: [],
  next_url: "/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=10",
  search_load: false,
  retrieve_load: loading.create({
    current: "IDLE",
  }),
  details_load: false,
  tickerDetails: {},
};
