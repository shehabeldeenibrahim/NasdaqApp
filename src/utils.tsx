import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons/faArrowTrendUp";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons/faDollarSign";
import { faBitcoinSign } from "@fortawesome/free-solid-svg-icons/faBitcoinSign";
import { faO } from "@fortawesome/free-solid-svg-icons/faO";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Icon } from "@rneui/themed";
import axios from "./axios";
import { PRICES_URL, TICKERS_URL } from "./Constants";

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
  const response = await axios(`${TICKERS_URL}/${ticker}`);
  return response;
};
export const getPrices = async (ticker: string) => {
  const todayDate: Date = new Date();
  const endDate: string = formatDate(todayDate);
  const startDate: string = formatDate(subtractMonths(1));
  const url = `${PRICES_URL}/${ticker}/range/1/day/${startDate}/${endDate}`;
  const response = await axios(url);
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
