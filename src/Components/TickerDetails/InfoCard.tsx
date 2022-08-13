import { Avatar, Card, Divider, Text } from "@rneui/themed";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TickerDetails } from "../../models";
import { colors } from "../../theme";
import { getInitials } from "../../utils";

interface IProps {
  data: TickerDetails;
  percentageChange: number;
}
/**
 * Info header card showing ticker details
 * @param {data} TickerDetails ticker details to be displayed
 */
const InfoCard = ({ data, percentageChange }: IProps) => {
  return (
    <Card containerStyle={styles.card}>
      <View style={{ flexDirection: "row" }}>
        <Avatar
          rounded
          containerStyle={styles.logo}
          size={65}
          title={getInitials(data.name)}
        />
        <View style={styles.data}>
          <Text h4 h4Style={styles.title}>
            {data.ticker}
          </Text>
          <Text style={styles.subtitle}>{data.name}</Text>

          <Text h4 h4Style={styles.closePrice}>
            {data.stats?.close?.toString()}
            <Text style={styles.currency}> {data.currency}</Text>
            <Text
              style={{
                color: percentageChange > 0 ? colors.green : "red",
                fontSize: 15,
              }}
            >
              {" ("}
              {percentageChange} {"%)"}
            </Text>
          </Text>
        </View>
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    shadowColor: "#470000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 1,
    backgroundColor: colors.primary,
  },
  container: {
    flexDirection: "row",
    padding: "2%",
  },
  logo: { borderColor: "white", borderWidth: 2 },
  data: {
    marginLeft: "4%",
    flex: 0.8,
    fontWeight: 300,
  },
  prices: {
    flexDirection: "row",
  },
  closePrice: { color: "white" },
  title: { color: "white", fontWeight: "bold" },
  currency: { color: "white", fontSize: 16, alignSelf: "flex-end" },
  subtitle: {
    color: colors.gray,
  },
});

export default InfoCard;
