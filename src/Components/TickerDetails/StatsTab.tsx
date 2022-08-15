import { Card, Divider } from "@rneui/base";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Stats } from "../../models";
import NoData from "../NoData";
import StatsItem from "./StatsItem";
interface IProps {
  stats: Stats;
}
const StatsTab = ({ stats }: IProps) => {
  return (
    <Card containerStyle={styles.card}>
      {stats ? (
        <View style={styles.container}>
          <View style={styles.row}>
            <StatsItem title="Open" value={stats?.open} currency={"USD"} />
            <Divider orientation="vertical" />
            <StatsItem title="Close" value={stats?.close} currency={"USD"} />
          </View>
          <View style={styles.row}>
            <StatsItem title="High" value={stats?.high} currency={"USD"} />
            <Divider orientation="vertical" />
            <StatsItem title="Low" value={stats?.low} currency={"USD"} />
          </View>
          <View style={styles.row}>
            <StatsItem title="Volume" value={stats?.volume} currency={null} />
            <Divider orientation="vertical" />
            <StatsItem title="VWAP" value={stats?.vwap} currency={null} />
          </View>
        </View>
      ) : (
        <NoData />
      )}
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
    elevation: 3,
  },
});
export default StatsTab;
