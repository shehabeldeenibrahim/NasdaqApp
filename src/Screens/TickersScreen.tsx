import { SearchBar } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import ListShimmer from "../Components/TickersList/ListShimmer";
import TickerList from "../Components/TickersList/TickersList";
import useDebounce from "../hooks/useDebounce";
import { useActions, useAppState } from "../Overmind/helper";

interface Props {
  navigation: any;
}
/**
 * Main Screen Displays the List of tickers
 * @param  none
 */
const TickersScreen: React.FC<Props> = ({ navigation }) => {
  const {
    getAllTickers,
    searchTickers,
    retrieveMoreTickers,
    retrieveMoreSearchTickers,
  } = useActions();
  const { tickers, search_load, search_tickers, retrieve_load } = useAppState();
  const [query, setQuery] = useState("");
  const debouncedSearch = useDebounce(query, 500);
  const [isSearch, setIsSearch] = useState(false);
  const handleChange = (query: string) => {
    setQuery(query);
  };
  useEffect(() => {
    // TODO: scroll to top when search called
    if (debouncedSearch) {
      setIsSearch(true);
      searchTickers(debouncedSearch);
    } else {
      // TODO: show first list again
      setIsSearch(false);
    }
  }, [debouncedSearch]);
  useEffect(() => {
    getAllTickers();
  }, []);
  return (
    <View>
      <SearchBar
        showLoading={search_load}
        placeholder="Search Ticker..."
        platform="ios"
        containerStyle={{
          backgroundColor: "transparent",
        }}
        inputContainerStyle={{ backgroundColor: "white" }}
        leftIconContainerStyle={{ backgroundColor: "white" }}
        onChangeText={handleChange}
        value={query}
      />
      {tickers?.length === 0 ? <ListShimmer /> : null}
      <TickerList
        data={isSearch ? search_tickers : tickers}
        retrieveMore={
          isSearch ? retrieveMoreSearchTickers : retrieveMoreTickers
        }
        retrieve_load={retrieve_load}
      />
    </View>
  );
};
export default TickersScreen;
