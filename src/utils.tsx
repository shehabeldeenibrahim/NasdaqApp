import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons/faArrowTrendUp";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons/faDollarSign";
import { faBitcoinSign } from "@fortawesome/free-solid-svg-icons/faBitcoinSign";
import { faO } from "@fortawesome/free-solid-svg-icons/faO";
import { library } from "@fortawesome/fontawesome-svg-core";

export const getInitials = (name: string) => {
  if (!name.length) return "";
  return name.length > 1
    ? `${name[0]}${name.charAt(name.length - 1)}`
    : name[0];
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
