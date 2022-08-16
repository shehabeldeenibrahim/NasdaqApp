import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar, ListItem, Text } from "@rneui/base";
import { TextStyle, TouchableOpacity, View } from "react-native";
import { RootStackParamList, Ticker } from "../../../models";
import { getIconName, getInitials } from "../../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { colors } from "../../../Theme/colors";
import OTCIcon from "../../../Components/OTCIcon";

interface IProps {
  ticker: Ticker;
}
/**
 * Ticker list item
 * @param {Ticker} ticker ticker data to be displayed
 */

const StockListItem = ({ ticker }: IProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  /* View */
  return (
    <TouchableOpacity
      onPress={() => {
        navigation?.navigate("TickerDetails", {
          ticker: ticker.ticker,
        });
      }}
    >
      {/* Container */}
      <View>
        <ListItem containerStyle={styles.container}>
          {/* Avatar */}
          <Avatar
            rounded
            title={getInitials(ticker.name)}
            containerStyle={{ backgroundColor: colors.primary }}
          />
          <ListItem.Content>
            {/* Title */}
            <ListItem.Title style={styles.title}>
              {ticker.ticker}
            </ListItem.Title>
            {/* Subtitle */}
            <ListItem.Subtitle numberOfLines={1} style={{ color: colors.gray }}>
              {ticker.name}
            </ListItem.Subtitle>
          </ListItem.Content>
          {/* Market Icon */}
          {ticker.market === "otc" ? (
            <OTCIcon />
          ) : (
            <FontAwesomeIcon
              testID="icon-test"
              size={30}
              color={colors.primary}
              icon={getIconName(ticker.market)}
            />
          )}

          <ListItem.Chevron color="gray" />
        </ListItem>
      </View>
    </TouchableOpacity>
  );
};

export default StockListItem;

// Styles
const styles = {
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#470000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  title: { fontWeight: "bold" } as TextStyle,
};
