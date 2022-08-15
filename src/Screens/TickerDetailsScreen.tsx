import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import NoData from "../Components/NoData";
import DetailsCard from "../Components/TickerDetails/DetailsCard";
import DetailsShimmer from "../Components/TickerDetails/DetailsShimmer";
import InfoCard from "../Components/TickerDetails/InfoCard";
import StatsGraph from "../Components/TickerDetails/StatsGraph";
import { TickerDetails } from "../models";
import { useActions, useAppState } from "../Overmind/helper";

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
  const { tickerDetails, details_load } = useAppState();
  const { ticker } = props.route.params;
  const details: TickerDetails | null = tickerDetails[ticker];
  useEffect(() => {
    props.navigation.setOptions({
      title: ticker,
    });
    getTickerDetails(ticker);
  }, []);
  if (!details?.stats && !details?.historicalPrices && !details_load)
    return (
      <>
        <InfoCard data={details} />
        <NoData center />
        {details?.description && <DetailsCard data={details} />}
      </>
    );
  return details ? (
    <ScrollView>
      <InfoCard data={details} />
      <StatsGraph
        data={details?.historicalPrices}
        percentageChange={details?.percentageChange}
      />
      <DetailsCard data={details} />
    </ScrollView>
  ) : (
    <DetailsShimmer />
  );
};
export default TickerDetailsScreen;
