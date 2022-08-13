import { Text } from "@rneui/base";
import { Icon } from "@rneui/themed";
import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../theme";

interface IProps {
  title: string;
  value: number | null | undefined;
  currency: string | null;
}
const StatsItem = ({ title, value, currency }: IProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{title}</Text>
      <Text>
        {value} {currency}
      </Text>
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
