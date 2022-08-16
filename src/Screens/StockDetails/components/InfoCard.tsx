import { Avatar, Card, Divider, Text } from "@rneui/themed";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { TickerDetails } from "../../../models";
import { colors } from "../../../Theme/colors";
import { getInitials } from "../../../utils";
import Loader from "../../../Components/Loader";
import RetrieveListLoader from "../../Explore/components/RetrieveListLoader";
import { APIKEY } from "../../../../config";

interface IProps {
  data: TickerDetails;
}
/**
 * Info header card showing ticker details
 * @param {data} TickerDetails ticker details to be displayed
 */
const InfoCard = ({ data }: IProps) => {
  return data ? (
    <Card containerStyle={styles.card}>
      <View style={{ flexDirection: "row" }}>
        {data?.logo ? (
          <Image
            testID="info-img-test"
            style={styles.image}
            source={{
              uri: `${data?.logo}?apikey=${APIKEY}`,
            }}
            resizeMode="stretch"
          />
        ) : (
          <Avatar
            rounded
            containerStyle={styles.logo}
            size={65}
            title={getInitials(data.name)}
          />
        )}
        <View style={styles.data}>
          <Text h4 h4Style={styles.title}>
            {data.ticker}
          </Text>
          <Text numberOfLines={2} style={styles.subtitle}>
            {data.name}
          </Text>

          <Text h4 h4Style={styles.closePrice}>
            {data.stats ? data.stats.close?.toString() : "--"}
            <Text style={styles.currency}> {data.currency}</Text>
            <Text
              style={{
                color: data.percentageChange > 0 ? colors.green : "red",
                fontSize: 15,
              }}
            >
              {" ("}
              {data.percentageChange} {"%)"}
            </Text>
          </Text>
        </View>
      </View>
    </Card>
  ) : (
    <Loader />
  );
};
const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    shadowColor: "#470000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 3,
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
  image: {
    alignSelf: "center",
    height: 65,
    width: 65,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 75,
  },
});

export default InfoCard;
