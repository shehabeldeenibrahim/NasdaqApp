import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons/faArrowTrendUp";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons/faDollarSign";
import { faBitcoinSign } from "@fortawesome/free-solid-svg-icons/faBitcoinSign";
import { faO } from "@fortawesome/free-solid-svg-icons/faO";
import { library } from "@fortawesome/fontawesome-svg-core";

export const getInitials = (name: string) => {
  if (!name.length) return "";
  return name.length > 1
    ? `${name[0]}${name.split(" ").pop()?.charAt(0)}`
    : name[0];
};
export const getPercentageIncrease = (close: number, open: number) => {
  return Math.round(close - open) / 100;
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
