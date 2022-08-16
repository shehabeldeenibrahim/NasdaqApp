import { SearchBar } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import StockListLoader from "./components/StockListLoader";
import StockList from "./components/StockList";
import useDebounce from "../../hooks/useDebounce";
import { useActions, useAppState } from "../../Overmind/helper";
import { colors } from "../../Theme/colors";

interface Props {
  navigation: any;
}
/**
 * Main Screen Displays the List of tickers
 * @param  none
 */
const ExploreScreen: React.FC<Props> = ({ navigation }) => {
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
        containerStyle={styles.searchBar}
        inputContainerStyle={{ backgroundColor: colors.white }}
        leftIconContainerStyle={{ backgroundColor: colors.white }}
        onChangeText={handleChange}
        value={query}
      />
      {tickers?.length === 0 ? <StockListLoader /> : null}
      <StockList
        data={isSearch ? search_tickers : tickers}
        retrieveMore={
          isSearch ? retrieveMoreSearchTickers : retrieveMoreTickers
        }
        retrieve_load={retrieve_load}
      />
    </View>
  );
};
export default ExploreScreen;

// Styles
const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "transparent",
    shadowColor: "#470000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 3,
    paddingHorizontal: "1.5%",
  },
});
