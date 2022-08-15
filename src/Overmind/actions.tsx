import { TICKERS_URL } from "../Constants";
import { Context } from "./helper";

export const searchTickers = async (
  { state, effects }: Context,
  query: string
) => {
  console.log("search called");
  state.search_load = true;
  let result = await effects.api.searchTickers(TICKERS_URL, query);
  if (!result.error && result.result) {
    state.search_tickers = result?.result;
    state.search_next_url = result ? result.next_url : "";
  }
  state.search_load = false;
};
export const getAllTickers = async ({ state, effects }: Context) => {
  console.log("get all tickers called");
  state.search_load = true;
  let result = await effects.api.searchTickers(TICKERS_URL, "");
  if (!result.error && result.result) {
    state.tickers = result?.result;
    state.next_url = result ? result.next_url : "";
  }
  state.search_load = false;
};
export const retrieveMoreTickers = async ({ state, effects }: Context) => {
  console.log("retrieve called");
  if (!state.next_url) return;
  state.retrieve_load = "LOADING";
  let result = await effects.api.searchTickers(state.next_url, "");
  if (!result.error && result.result) {
    state.tickers = [...state.tickers, ...result?.result];
    state.next_url = result ? result.next_url : "";
    state.retrieve_load = "IDLE";
  } else {
    state.retrieve_load = "REFRESH";
  }
};
export const retrieveMoreSearchTickers = async ({
  state,
  effects,
}: Context) => {
  console.log("retrieve search called");
  if (!state.next_url) return;
  state.retrieve_load = "LOADING";
  let result = await effects.api.searchTickers(state.search_next_url, "");
  if (!result.error && result.result) {
    state.search_tickers = [...state.search_tickers, ...result?.result];
    state.search_next_url = result ? result.next_url : "";
    state.retrieve_load = "IDLE";
  } else {
    state.retrieve_load = "REFRESH";
  }
};
export const getTickerDetails = async (
  { state, effects }: Context,
  ticker: string
) => {
  if (ticker in state.tickerDetails) return state.tickerDetails[ticker];
  console.log("get ticker details called");
  state.details_load = true;
  const result = await effects.api.getTickerDetails(ticker);
  if (!result.error && result.result) {
    state.tickerDetails[ticker] = result.result;
  }
  state.details_load = false;
};
