type Market = "stocks" | "crypto" | "fx" | "otc";
export interface Ticker {
  name: string;
  ticker: string;
  logo: string | null;
  market: Market;
}
