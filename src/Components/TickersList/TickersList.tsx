// Imports: Dependencies
import React from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { Ticker } from "../../models";
import { colors } from "../../theme";
import Loader from "../Loader";
import Item from "./Item";
interface IProps {
  data: Ticker[];
  retrieveMore: () => {};
}
const TickerList = ({ data, retrieveMore }: IProps) => {
  var onEndReachedCalledDuringMomentum = true;
  return (
    <>
      {/* Our Ticker Flatlist */}
      <FlatList
        style={styles.flatlist}
        // Data fetched
        data={data}
        // Render each item in data array
        renderItem={({ item }) => (
          <View>
            {/* Card Component */}
            <Item
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
        // Refreshing State Set To True When End Reached
        //   refreshing={refreshing}
        // Optimization attributes
        initialNumToRender={10}
        ListFooterComponent={<Loader />}
      />
    </>
  );
};
const styles = StyleSheet.create({
  flatlist: { marginBottom: "25%" },
});
export default TickerList;
