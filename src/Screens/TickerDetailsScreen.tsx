import { Divider } from "@rneui/themed";
import React from "react";
import { View } from "react-native";
import InfoCard from "../Components/TickerDetails/InfoCard";
import { TickerDetailsData } from "../mocks/Tickers";
import { Ticker } from "../models";
import { colors } from "../theme";

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
      <View style={{ flex: 0.2, flexDirection: "column" }}>
        <InfoCard data={TickerDetailsData} />
        <Divider style={{ marginHorizontal: "5%" }} color={colors?.primary} />
      </View>
    </>
  );
};
export default TickerDetailsScreen;
