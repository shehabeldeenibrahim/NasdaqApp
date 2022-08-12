import { Card, Divider } from "@rneui/base";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Stats } from "../../models";
import StatsItem from "./StatsItem";
interface IProps {
  stats: Stats;
}
const StatsTab = ({ stats }: IProps) => {
  return (
    <Card containerStyle={styles.card}>
      <View style={styles.container}>
        <View style={styles.row}>
          <StatsItem title="Open" value={stats?.open} />
          <Divider orientation="vertical" />
          <StatsItem title="Close" value={stats?.close} />
        </View>
        <View style={styles.row}>
          <StatsItem title="High" value={stats?.high} />
          <Divider orientation="vertical" />
          <StatsItem title="Low" value={stats?.low} />
        </View>
        <View style={styles.row}>
          <StatsItem title="Volume" value={stats?.volume} />
          <Divider orientation="vertical" />
          <StatsItem title="VWAP" value={stats?.vwap} />
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
