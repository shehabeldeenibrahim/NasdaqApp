import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import NoData from "../../Components/NoData";
import TabsCard from "./components/DetailsTabs/TabsCard";
import DetailsShimmer from "./StockDetailsLoader";
import InfoCard from "./components/InfoCard";
import PricesGraph from "./components/PricesGraph";
import { TickerDetails } from "../../models";
import { useActions, useAppState } from "../../Overmind/helper";

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
  const { ticker_details, details_load } = useAppState();
  const { ticker } = props.route.params;
  const tickerClean: string = ticker.replace(/[^a-zA-Z ]/g, "");
  const details: TickerDetails | null = ticker_details[tickerClean];
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
        {details?.description && <TabsCard data={details} />}
      </>
    );
  return details ? (
    <ScrollView>
      <InfoCard data={details} />
      <PricesGraph
        data={details?.historicalPrices}
        percentageChange={details?.percentageChange}
      />
      <TabsCard data={details} />
    </ScrollView>
  ) : (
    <DetailsShimmer />
  );
};
export default TickerDetailsScreen;
