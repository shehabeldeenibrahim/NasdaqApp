import React from "react";
import { View } from "react-native";
import DetailsCard from "../Components/TickerDetails/DetailsCard";
import InfoCard from "../Components/TickerDetails/InfoCard";
import StatsGraph from "../Components/TickerDetails/StatsGraph";
import { TickerDetailsData } from "../mocks/Tickers";
import { createData } from "../utils";

interface IProps {
  navigation: any;
}

/**
 * Details Screen Displays a ticker details
 * @param  none
 */
const TickerDetailsScreen: React.FC<IProps> = (props) => {
  return (
    <>
      <InfoCard data={TickerDetailsData} />
      <StatsGraph data={createData()} />
      <DetailsCard />
    </>
  );
};
export default TickerDetailsScreen;
