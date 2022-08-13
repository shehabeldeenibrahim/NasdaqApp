import { SearchBar } from "@rneui/base";
import React, { useEffect } from "react";
import { View } from "react-native";
import TickerList from "../Components/TickersList/TickersList";
import { TickersData } from "../mocks/Tickers";
import { useActions, useAppState } from "../Overmind/helper";

interface Props {
  navigation: any;
}
/**
 * Main Screen Displays the List of tickers
 * @param  none
 */
const TickersScreen: React.FC<Props> = ({ navigation }) => {
  const { searchTickers, retrieveMoreTickers } = useActions();
  const { tickers } = useAppState();

  useEffect(() => {
    searchTickers("");
  }, []);
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
      <TickerList data={tickers} retrieveMore={retrieveMoreTickers} />
    </View>
  );
};
export default TickersScreen;
