import React, { useEffect, useState } from "react";
import { View } from "react-native";
import DetailsCard from "../Components/TickerDetails/DetailsCard";
import InfoCard from "../Components/TickerDetails/InfoCard";
import StatsGraph from "../Components/TickerDetails/StatsGraph";
import ListShimmer from "../Components/TickersList/ListShimmer";
import { TickerDetails } from "../models";
import { useActions, useAppState } from "../Overmind/helper";
import { createData, getPercentageChange } from "../utils";

interface IProps {
  route: any;
  navigation: any;
}

/**
 * Details Screen Displays a ticker details
 * @param  none
 */
const TickerDetailsScreen: React.FC<IProps> = (props) => {
  const { getTickerDetails } = useActions();
  const { tickerDetails } = useAppState();
  const { ticker } = props.route.params;
  const details: TickerDetails | null = tickerDetails[ticker];
  useEffect(() => {
    if (!(ticker in tickerDetails)) getTickerDetails(ticker);
  }, []);

  return details ? (
    <>
      <InfoCard data={details} />
      <StatsGraph
        data={details?.historicalPrices}
        percentageChange={details?.percentageChange}
      />
      <DetailsCard data={details} />
    </>
  ) : (
    <ListShimmer />
  );
};
export default TickerDetailsScreen;
