import React, { useEffect, useState } from "react";
import { View } from "react-native";
import DetailsCard from "../Components/TickerDetails/DetailsCard";
import InfoCard from "../Components/TickerDetails/InfoCard";
import StatsGraph from "../Components/TickerDetails/StatsGraph";
import { TickerDetailsData } from "../mocks/Tickers";
import { createData, getPercentageChange } from "../utils";

interface IProps {
  navigation: any;
}

/**
 * Details Screen Displays a ticker details
 * @param  none
 */
const TickerDetailsScreen: React.FC<IProps> = (props) => {
  // Generate mock historical prices
  const historicalData: number[] = createData();
  const length = historicalData.length;
  const percentageChange: number = getPercentageChange(
    historicalData[length - 1],
    historicalData[length - 2]
  );

  return (
    <>
      <InfoCard data={TickerDetailsData} percentageChange={percentageChange} />
      <StatsGraph data={historicalData} percentageChange={percentageChange} />
      <DetailsCard />
    </>
  );
};
export default TickerDetailsScreen;
