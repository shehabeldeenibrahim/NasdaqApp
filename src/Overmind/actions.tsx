import { Context } from "./helper";

export const searchTickers = async (
  { state, effects }: Context,
  query: string
) => {
  console.log(`search called with query: ${query}`);
};
