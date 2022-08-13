import { TICKERS_URL } from "../Constants";
import { Context } from "./helper";

export const searchTickers = async (
  { state, effects }: Context,
  query: string
) => {
  let result = await effects.api.searchTickers(TICKERS_URL, query);

  state.tickers = result?.result;
  state.next_url = result ? result.next_url : "";
  console.log("search called");
};
export const retrieveMoreTickers = async ({ state, effects }: Context) => {
  let result = await effects.api.searchTickers(state.next_url, "");

  state.tickers = [...state.tickers, ...result?.result];
  console.log("retrieve called");

  state.next_url = result ? result.next_url : "";
};
