import { TICKERS_URL } from "../Constants";
import { TickerDetails } from "../models";
import { Context } from "./helper";

export const searchTickers = async (
  { state, effects }: Context,
  query: string
) => {
  console.log("search called");
  state.search_load = true;
  let result = await effects.api.searchTickers(TICKERS_URL, query);
  if (!result.error && result.result) {
    state.tickers = result?.result;
    state.next_url = result ? result.next_url : "";
  }
  state.search_load = false;
};
export const retrieveMoreTickers = async ({ state, effects }: Context) => {
  if (!state.next_url) return;
  state.retrieve_load?.send("FETCH");
  let result = await effects.api.searchTickers(state.next_url, "");
  if (!result.error && result.result) {
    state.tickers = [...state.tickers, ...result?.result];
    state.next_url = result ? result.next_url : "";
  }
  // await state.retrieve_load.send("SUCCESS");
};
export const getTickerDetails = async (
  { state, effects }: Context,
  ticker: string
) => {
  console.log("get ticker details called");
  state.details_load = true;
  const result = await effects.api.getTickerDetails(ticker);
  if (!result.error && result.result) {
    state.tickerDetails[ticker] = result.result;
  }
  state.details_load = false;
};
