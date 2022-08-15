import { GraphPoint, Stats, Ticker, TickerDetails } from "../models";

export const TickersData: Ticker[] = [
  {
    ticker: "AAPL",
    name: "Mission Advancement Corp.",
    market: "stocks",
  },
  {
    ticker: "NIKE",
    name: "Mission Advancement Corp.",
    market: "crypto",
  },
  {
    ticker: "NETFLIX",
    name: "Mission Advancement Corp.",
    market: "fx",
  },
  {
    ticker: "AAPL",
    name: "Mission Advancement Corp.",
    market: "stocks",
  },
  {
    ticker: "NIKE",
    name: "Mission Advancement Corp.",
    market: "crypto",
  },
  {
    ticker: "NETFLIX",
    name: "Mission Advancement Corp.",
    market: "fx",
  },
  {
    ticker: "AAPL",
    name: "Mission Advancement Corp.",
    market: "stocks",
  },
  {
    ticker: "NIKE",
    name: "Mission Advancement Corp.",
    market: "crypto",
  },
  {
    ticker: "NETFLIX",
    name: "Mission Advancement Corp.",
    market: "fx",
  },
];
export const stats: Stats = {
  open: 4,
  close: 5.201,
  volume: 422443,
  high: 33,
  low: 21,
  vwap: 44,
};
export const TickerDetailsData: TickerDetails = {
  name: "Apple co",
  ticker: "AAPL",
  logo: null,
  stats: stats,
  website: "http://www.google.com",
  currency: "USD",
  industry: "industry",
  historicalPrices: null,
  percentageChange: 2.5,
  description: "description here",
};

export const GraphData: GraphPoint[] = [
  { x: "22-07", y: 4 },
  { x: "23-07", y: 4.1 },
  { x: "25-07", y: 5 },
];
