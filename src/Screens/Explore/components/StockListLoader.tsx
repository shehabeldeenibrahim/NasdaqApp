import React from "react";
import { Skeleton } from "@rneui/themed";
import { StyleSheet, View } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../Theme/dimensions";

/**
 * Loader Shimmer effect for list
 * @param none
 */
const StockListLoader = () => {
  return <View style={styles.container}>{shimmersArray}</View>;
};

export default StockListLoader;

// Styles
const styles = StyleSheet.create({
  skeleton: { borderRadius: 8, margin: "2%" },
  container: { alignItems: "center" },
});

// Helper functions
const createShimmerArray = () => {
  var shimmerItems = [];
  for (var i = 0; i < 10; i++) {
    shimmerItems.push(<OneShimmer key={i} />);
  }
  return <View>{shimmerItems}</View>;
};

const OneShimmer = () => {
  return (
    <Skeleton
      animation="pulse"
      width={SCREEN_WIDTH - 30}
      height={SCREEN_HEIGHT / 15}
      style={styles.skeleton}
    />
  );
};
const shimmersArray = createShimmerArray();
