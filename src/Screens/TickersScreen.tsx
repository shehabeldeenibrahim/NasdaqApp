import { SearchBar } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import TickerList from "../Components/TickersList/TickersList";
import { TickersData } from "../mocks/Tickers";

interface Props {
  navigation: any;
}
/**
 * Main Screen Displays the List of tickers
 * @param  none
 */
const TickersScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <SearchBar
        placeholder="Search Ticker..."
        platform="ios"
        containerStyle={{
          backgroundColor: "transparent",
        }}
        inputContainerStyle={{ backgroundColor: "white" }}
        leftIconContainerStyle={{ backgroundColor: "white" }}
      />
      <TickerList data={TickersData} retrieveMore={() => {}} />
    </View>
  );
};
export default TickersScreen;
