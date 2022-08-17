type IMarket = "stocks" | "crypto" | "fx" | "otc";
export interface ITickersResults {
  ticker: string;
  name: string;
  market: IMarket;
  locale: string;
  primary_exchange: string;
  type: string;
  active: boolean;
  currency_symbol?: string;
  currency_name?: string;
  base_currency_symbol?: string;
  base_currency_name?: string;
  cik?: string;
  composite_figi?: string;
  share_class_fig?: string;
  last_updated_utc?: string;
  deslisted_utc?: string;
}

export interface ITickers {
  status: string;
  request_id: string;
  count: number;
  previous_url?: string;
  next_url?: string;
  results: ITickersResults[];
}
export interface PolygonError {
  status: string;
  request_id: string;
  error: string;
}
export interface IAggsResults {
  T?: string;
  c?: number;
  h?: number;
  l?: number;
  n?: number;
  o?: number;
  t?: number;
  v?: number;
  vw?: number;
}
export interface IAggs {
  ticker?: string;
  adjusted?: boolean;
  queryCount?: number;
  request_id?: number;
  resultsCount?: number;
  status?: string;
  results?: IAggsResults[];
}
export interface ITickerDetailsResults {
  active?: boolean;
  address?: {
    address1?: string;
    city?: string;
    state?: string;
  };
  branding?: {
    icon_url?: string;
    logo_url?: string;
  };
  cik?: number;
  composite_figi?: string;
  currency_name: string;
  description?: string;
  homepage_url?: string;
  list_date?: string;
  locale?: string;
  market: string;
  market_cap?: number;
  name: string;
  phone_number?: string;
  primary_exchange?: string;
  share_class_figi?: string;
  share_class_shares_outstanding?: number;
  sic_code?: number;
  sic_description?: string;
  ticker?: string;
  total_employees?: number;
  type?: string;
  weighted_shares_outstanding?: number;
}

export interface ITickerDetails {
  request_id?: string;
  results?: ITickerDetailsResults;
  status?: string;
}
