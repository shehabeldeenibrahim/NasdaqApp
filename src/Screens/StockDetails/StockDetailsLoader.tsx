import React from "react";
import { Skeleton } from "@rneui/themed";
import { Dimensions, StyleSheet, View } from "react-native";
const { width, height } = Dimensions.get("window");

const DetailsShimmer = () => {
  return (
    <View style={styles.container}>
      <Skeleton
        animation="pulse"
        width={width - 30}
        height={height / 8}
        style={styles.skeleton}
      />
      <Skeleton
        animation="pulse"
        width={width - 30}
        height={height / 4}
        style={styles.skeleton}
      />
      <Skeleton
        animation="pulse"
        width={width - 30}
        height={height / 2.5}
        style={styles.skeleton}
      />
    </View>
  );
};

export default DetailsShimmer;
const styles = StyleSheet.create({
  skeleton: { borderRadius: 8, margin: "2%" },
  container: { alignItems: "center" },
});
