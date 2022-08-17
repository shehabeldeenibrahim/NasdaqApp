type Market = "stocks" | "crypto" | "fx" | "otc";
export interface Ticker {
  name: string;
  ticker: string;
  market: Market;
}
export type Stats = {
  open?: number;
  close?: number;
  high?: number;
  low?: number;
  volume?: number;
  vwap?: number;
} | null;
export interface TickerDetails {
  name: string;
  ticker: string;
  logo: string | null;
  stats: Stats | null;
  historicalPrices: GraphPoint[] | null;
  percentageChange: number;
  website: string | null;
  industry: string;
  description: string | null;
  currency: string;
}
export type Loading = "IDLE" | "LOADING" | "REFRESH";
export type RootStackParamList = {
  TickerDetails: { ticker: string };
};
export interface GraphPoint {
  x: string;
  y: number;
}
export interface QueryParams {
  search?: string;
  active?: boolean;
  sort?: string;
  order?: string;
  limit?: number;
}
