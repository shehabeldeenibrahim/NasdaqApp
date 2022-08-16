import React from "react";
import { Skeleton } from "@rneui/themed";
import { StyleSheet, View } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../Theme/dimensions";

const DetailsShimmer = () => {
  return (
    <View style={styles.container}>
      <Skeleton
        animation="pulse"
        width={SCREEN_WIDTH - 30}
        height={SCREEN_HEIGHT / 8}
        style={styles.skeleton}
      />
      <Skeleton
        animation="pulse"
        width={SCREEN_WIDTH - 30}
        height={SCREEN_HEIGHT / 4}
        style={styles.skeleton}
      />
      <Skeleton
        animation="pulse"
        width={SCREEN_WIDTH - 30}
        height={SCREEN_HEIGHT / 2.5}
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
