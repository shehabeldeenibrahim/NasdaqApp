import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons/faArrowTrendUp";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons/faDollarSign";
import { faBitcoinSign } from "@fortawesome/free-solid-svg-icons/faBitcoinSign";
import { faO } from "@fortawesome/free-solid-svg-icons/faO";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Icon } from "@rneui/themed";
import axios, { isAxiosError } from "./api";
import { PRICES_URL, TICKERS_URL } from "@env";
import { AxiosError } from "axios";
import {
  IAggs,
  IAggsResults,
  ITickerDetails,
  ITickerDetailsResults,
  ITickersResults,
  PolygonError,
} from "./types/responses";
import { GraphPoint, Stats, Ticker } from "./models";

export const getInitials = (name: string) => {
  if (!name?.length) return "";
  let firstChar = name[0];
  let lastChar = name.split(" ").pop()?.charAt(0);
  return `${firstChar}${lastChar}`.toUpperCase();
};
export const getPercentageChange = (
  closeToday: number | undefined,
  closeYesterday: number | undefined
) => {
  if (!closeToday || !closeYesterday) return 0;
  const percentageChange: number =
    ((closeToday - closeYesterday) / closeYesterday) * 100;
  return parseFloat(percentageChange.toFixed(2));
};
export const getIconName = (market: string) => {
  switch (market.toLowerCase()) {
    case "stocks":
      return "arrow-trend-up";
    case "crypto":
      return "bitcoin-sign";
    case "fx":
      return "dollar-sign";
    default:
      return "o";
  }
};

export const createIconsLibrary = () => {
  library.add(faArrowTrendUp, faDollarSign, faBitcoinSign, faO);
};

const getRandomFloat = (min: number, max: number, decimals: number) => {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);
  return parseFloat(str);
};
export const createData = () => {
  let data = [];
  for (let index = 0; index < 30; index++) {
    data[index] = getRandomFloat(150, 160, 2);
  }
  return data;
};

export const getTabBarIcon = (props: any) => {
  const { route, focused } = props;
  if (route.key === "stats") {
    return (
      <Icon
        name={focused ? "stats-chart" : "stats-chart-outline"}
        type="ionicon"
        color="#517fa4"
        size={20}
      />
    );
  } else {
    return (
      <Icon
        name={focused ? "information-circle" : "information-circle-outline"}
        type="ionicon"
        color="#517fa4"
        size={20}
      />
    );
  }
};

export const getDetails = async (ticker: string) => {
  const response = await axios.get<ITickerDetails>(`${TICKERS_URL}/${ticker}`);
  return response;
};
export const getPrices = async (ticker: string) => {
  const todayDate: Date = new Date();
  const endDate: string = formatDate(todayDate);
  const startDate: string = formatDate(subtractMonths(1));
  const url = `${PRICES_URL}/${ticker}/range/1/day/${startDate}/${endDate}`;
  const response = await axios.get<IAggs>(url);
  return response;
};
export const formatDate = (date: Date) => {
  let d = new Date(date);
  let month = (d.getMonth() + 1).toString();
  let day = d.getDate().toString();
  let year = d.getFullYear();
  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) {
    day = "0" + day;
  }
  return [year, month, day].join("-");
};
export const formatDateShort = (date: Date) => {
  let d = new Date(date);
  let month = (d.getMonth() + 1).toString();
  let day = d.getDate().toString();
  let year = d.getFullYear();
  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) {
    day = "0" + day;
  }
  return [month, day].join("-");
};
const subtractMonths = (numOfMonths: number, date = new Date()) => {
  date.setMonth(date.getMonth() - numOfMonths);
  return date;
};

export const getErrorMessage = (error: AxiosError | Error) => {
  let errorMessage;
  if (isAxiosError(error)) {
    errorMessage = (error as AxiosError<PolygonError>).response?.data?.error;
  } else {
    errorMessage = (error as Error).message;
  }
  return errorMessage;
};

export const mapResponseToTicker = (_ticker: ITickersResults) => {
  const ticker: Ticker = {
    name: _ticker.name,
    ticker: _ticker.ticker,
    market: _ticker.market,
  };
  return ticker;
};
export const mapResponseToStats = (previousStats: IAggsResults) => {
  const ticker: Stats = {
    open: previousStats.o,
    close: previousStats.c,
    high: previousStats.h,
    low: previousStats.l,
    volume: previousStats.v,
    vwap: previousStats.vw,
  };
  return ticker;
};
export const mapArrayToGraph = (pricesArray: IAggsResults[]) => {
  // Map array of stats to array of closing prices
  return pricesArray.map((stats: any) => {
    let date = formatDateShort(new Date(stats.t));
    let obj = { x: date, y: stats.c };
    return obj;
  });
};
export const mapResponseToDetails = (
  detailsObject: ITickerDetailsResults | undefined,
  ticker: string,
  stats: Stats,
  historicalPrices: GraphPoint[] | null,
  percentageChange: number
) => {
  if (!detailsObject) return null;
  return {
    name: detailsObject.name,
    ticker: ticker,
    logo: detailsObject.branding?.icon_url ?? null,
    stats: stats ?? null,
    website: detailsObject.homepage_url ?? null,
    industry: detailsObject.market ?? null,
    description: detailsObject.description ?? null,
    currency: detailsObject.currency_name ?? null,
    historicalPrices: historicalPrices ?? null,
    percentageChange: percentageChange ?? null,
  };
};
