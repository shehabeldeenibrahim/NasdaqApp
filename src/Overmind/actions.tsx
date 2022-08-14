import { TICKERS_URL } from "../Constants";
import { TickerDetails } from "../models";
import { Context } from "./helper";

export const searchTickers = async (
  { state, effects }: Context,
  query: string
) => {
  state.search_load = true;
  let result = await effects.api.searchTickers(TICKERS_URL, query);
  state.tickers = result?.result;
  state.next_url = result ? result.next_url : "";
  state.search_load = false;
  console.log("search called");
};
export const retrieveMoreTickers = async ({ state, effects }: Context) => {
  console.log("retrieve called");
  if (!state.next_url) return;
  state.retrieve_load = true;
  let result = await effects.api.searchTickers(state.next_url, "");
  if (!result.error) {
    state.tickers = [...state.tickers, ...result?.result];
    state.next_url = result ? result.next_url : "";
  }
  state.retrieve_load = false;
};
export const getTickerDetails = async (
  { state, effects }: Context,
  ticker: string
) => {
  state.details_load = true;
  const result: TickerDetails | null = await effects.api.getTickerDetails(
    ticker
  );

  state.tickerDetails[ticker] = result;
  console.log("get ticker details called");
  state.details_load = false;
};
