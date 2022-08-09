import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar, ListItem, Text } from "@rneui/base";
import { TouchableOpacity, View } from "react-native";
import { Ticker } from "../../models";

interface IProps {
  ticker: Ticker;
}
/**
 * Ticker list item
 * @param {Ticker} ticker ticker data to be displayed
 */

const Item = ({ ticker }: IProps) => {
  const navigation = useNavigation();
  const stockColor = () => {
    return Math.random() < 0.5 ? "green" : "red";
  };
  return (
    <TouchableOpacity
      onPress={() => {
        navigation?.navigate("TickerDetails", {});
      }}
    >
      <View>
        <ListItem containerStyle={styles.container}>
          <Avatar
            rounded
            source={{ uri: ticker.logo ? ticker.logo : "none" }}
          />
          <ListItem.Content>
            <ListItem.Title style={styles.title}>
              {ticker.ticker}
            </ListItem.Title>
            <ListItem.Subtitle>{ticker.name}</ListItem.Subtitle>
          </ListItem.Content>
          <Text h4 h4Style={{ color: stockColor() }}>
            $776.9
          </Text>
          <ListItem.Chevron color="gray" />
        </ListItem>
      </View>
    </TouchableOpacity>
  );
};

// Styles
const styles = {
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#470000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 1,
  },
  title: { fontWeight: "bold" },
};
export default Item;
