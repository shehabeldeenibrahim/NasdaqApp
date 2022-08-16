// Imports: Dependencies
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Loading, Ticker } from "../../../models";
import RetrieveListLoader from "./RetrieveListLoader";
import StockListItem from "./StockListItem";
/**
 * Infinite List of stock items
 * @param {Ticker[]} data list of stock tickers
 * @param {boolean} retrieveLoad global retieve load state
 * @param {function} retrieveMore fn to fetch more data
 * @param {function} test flag used in unit tests
 */

interface IProps {
  data: Ticker[];
  retrieveMore: () => {};
  retrieve_load: Loading;
  test?: boolean;
}
const StockList = ({
  data,
  retrieveMore,
  retrieve_load,
  test = false,
}: IProps) => {
  var onEndReachedCalledDuringMomentum = test ? false : true;
  return (
    <>
      {/* Our Ticker Flatlist */}
      <FlatList
        style={styles.flatlist}
        // Test id
        testID="tickers-list"
        // Data fetched
        data={data}
        // Render each item in data array
        renderItem={({ item }) => (
          <View>
            {/* Card Component */}
            <StockListItem
              // Props passed
              ticker={item}
            />
          </View>
        )}
        // Extract item Key
        keyExtractor={(item, index) => String(index)}
        // On End Reached retrieves more data (LAZY LOADING)
        onScrollBeginDrag={() => {
          onEndReachedCalledDuringMomentum = false;
        }}
        onEndReached={() => {
          if (!onEndReachedCalledDuringMomentum) {
            retrieveMore();
            onEndReachedCalledDuringMomentum = true;
          }
        }}
        // How Close To The End Of List Until Next Data Request Is Made
        onEndReachedThreshold={0.2}
        // Optimization attributes
        initialNumToRender={10}
        // Loader on retriveMore
        ListFooterComponent={
          <RetrieveListLoader
            retrieveMore={retrieveMore}
            retrieveLoad={retrieve_load}
          />
        }
      />
    </>
  );
};

export default StockList;

// Styles
const styles = StyleSheet.create({
  flatlist: { marginBottom: "25%" },
});
