import { Card, TabView, Text } from "@rneui/base";
import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../theme";

interface IProps {
  title: string;
  value: number;
}
const StatsItem = ({ title, value }: IProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
};
export default StatsItem;
const styles = StyleSheet.create({
  item: {
    padding: "3%",
    flexBasis: "50%",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: colors.primary,
  },
});
