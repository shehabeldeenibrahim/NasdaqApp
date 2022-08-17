import { TICKERS_URL } from "@env";
import { Context } from "./helper";

/**
 * Search the api for the ticker matching
 * the given query and set the states
 * @param {string} query search query
 */
export const searchTickers = async (
  { state, effects }: Context,
  query: string
) => {
  state.search_load = true;
  let result = await effects.api.searchTickers(TICKERS_URL, query);
  if (!result.error && result.result) {
    // Set states
    state.search_tickers = result?.result;
    state.search_next_url = result?.next_url ?? "";
  }
  state.search_load = false;
};

/**
 * Fetch all tickers and set the states
 * @param none
 */
export const getAllTickers = async ({ state, effects }: Context) => {
  state.search_load = true;
  let result = await effects.api.searchTickers(TICKERS_URL, "");
  if (!result.error && result.result) {
    // Set states
    state.tickers = result?.result;
    state.next_url = result?.next_url ?? "";
  }
  state.search_load = false;
};

/**
 * Fetch `next_url` for more tickers
 * and append to the tickers state
 * @param none
 */
export const retrieveMoreTickers = async ({ state, effects }: Context) => {
  // Return if there is no next_url set
  if (!state.next_url) return;

  state.retrieve_load = "LOADING";
  let result = await effects.api.searchTickers(state.next_url, "");
  if (!result.error && result.result) {
    // Set states
    state.tickers = [...state.tickers, ...result?.result];
    state.next_url = result?.next_url ?? "";
    state.retrieve_load = "IDLE";
  } else {
    state.retrieve_load = "REFRESH";
  }
};

/**
 * Fetch `search_next_url` for more search
 * tickers and append to the search_tickers state
 * @param none
 */
export const retrieveMoreSearchTickers = async ({
  state,
  effects,
}: Context) => {
  // Return if no search_next_url set
  if (!state.search_next_url) return;

  state.retrieve_load = "LOADING";
  let result = await effects.api.searchTickers(state.search_next_url, "");
  if (!result.error && result.result) {
    // Set states
    state.search_tickers = [...state.search_tickers, ...result?.result];
    state.search_next_url = result?.next_url ?? "";
    state.retrieve_load = "IDLE";
  } else {
    state.retrieve_load = "REFRESH";
  }
};

/**
 * Fetch api for details about the
 * given ticker
 * @param {string} ticker ticker required
 */
export const getTickerDetails = async (
  { state, effects }: Context,
  ticker: string
) => {
  // Some tickers have special character (ie: AAC.WS)
  const tickerClean: string = ticker.replace(/[^a-zA-Z ]/g, "");
  // Return the cached state if available
  if (tickerClean in state.ticker_details)
    return state.ticker_details[tickerClean];
  state.details_load = true;
  const result = await effects.api.getTickerDetails(ticker);
  if (!result.error && result.result) {
    // Set states
    state.ticker_details[tickerClean] = result.result;
  }
  state.details_load = false;
};
