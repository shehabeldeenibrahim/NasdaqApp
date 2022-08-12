import { Card, Divider } from "@rneui/base";
import React from "react";
import { View, StyleSheet } from "react-native";
import StatsItem from "./StatsItem";

const StatsTab = () => {
  return (
    <Card containerStyle={styles.card}>
      <View style={styles.container}>
        <View style={styles.row}>
          <StatsItem title="Open" value={34} />
          <Divider orientation="vertical" />
          <StatsItem title="Close" value={23} />
        </View>
        <View style={styles.row}>
          <StatsItem title="High" value={12} />
          <Divider orientation="vertical" />
          <StatsItem title="Low" value={53} />
        </View>
        <View style={styles.row}>
          <StatsItem title="Volume" value={12} />
          <Divider orientation="vertical" />
          <StatsItem title="VWAP" value={12} />
        </View>
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  card: {
    borderRadius: 8,
    shadowColor: "#470000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    elevation: 1,
  },
});
export default StatsTab;
