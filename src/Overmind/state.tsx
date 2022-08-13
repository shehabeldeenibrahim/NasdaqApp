import { Ticker } from "../models";

export interface State {
  tickers: Ticker[];
  next_url: string;
}

export const state: State = {
  tickers: [],
  next_url: "/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=10",
};
