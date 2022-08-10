import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar, ListItem, Text } from "@rneui/base";
import { TextStyle, TouchableOpacity, View } from "react-native";
import { Ticker } from "../../models";
import { getIconName, getInitials } from "../../utils";
import { useTheme } from "@rneui/themed/dist/config";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

interface IProps {
  ticker: Ticker;
}
/**
 * Ticker list item
 * @param {Ticker} ticker ticker data to be displayed
 */

const Item = ({ ticker }: IProps) => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation?.navigate("TickerDetails" as never);
      }}
    >
      <View>
        <ListItem containerStyle={styles.container}>
          <Avatar
            rounded
            title={getInitials(ticker.ticker)}
            containerStyle={{ backgroundColor: theme.colors.primary }}
          />
          <ListItem.Content>
            <ListItem.Title style={styles.title}>
              {ticker.ticker}
            </ListItem.Title>
            <ListItem.Subtitle style={{ color: theme.colors.primary }}>
              {ticker.name}
            </ListItem.Subtitle>
          </ListItem.Content>
          <FontAwesomeIcon
            size={30}
            color={theme.colors.primary}
            icon={getIconName(ticker.market)}
          />
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
  title: { fontWeight: "bold" } as TextStyle,
};
export default Item;
