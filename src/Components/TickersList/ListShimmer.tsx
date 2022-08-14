import React from "react";
import { Skeleton } from "@rneui/themed";
import { Dimensions, StyleSheet, View } from "react-native";
const { width, height } = Dimensions.get("window");

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
      width={width - 30}
      height={height / 15}
      style={styles.skeleton}
    />
  );
};
const shimmersArray = createShimmerArray();
const ListShimmer = () => {
  return <View style={styles.container}>{shimmersArray}</View>;
};

export default ListShimmer;
const styles = StyleSheet.create({
  skeleton: { borderRadius: 8, margin: "2%" },
  container: { alignItems: "center" },
});
