import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons/faArrowTrendUp";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons/faDollarSign";
import { faBitcoinSign } from "@fortawesome/free-solid-svg-icons/faBitcoinSign";
import { faO } from "@fortawesome/free-solid-svg-icons/faO";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Icon } from "@rneui/themed";

export const getInitials = (name: string) => {
  if (!name.length) return "";
  return name.length > 1
    ? `${name[0]}${name.split(" ").pop()?.charAt(0)}`
    : name[0];
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
