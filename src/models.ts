type Market = "stocks" | "crypto" | "fx" | "otc";
export interface Ticker {
  name: string;
  ticker: string;
  market: Market;
}
export type Stats = {
  open: number | null;
  close: number | null;
  high: number | null;
  low: number | null;
  volume: number | null;
  vwap: number | null;
} | null;
export interface TickerDetails {
  name: string;
  ticker: string;
  logo: string | null;
  stats: Stats | null;
  historicalPrices: number[] | null;
  percentageChange: number;
  website: string | null;
  industry: string;
  description: string | null;
  currency: string;
}
