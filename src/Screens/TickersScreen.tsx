import React from "react";
import { Button } from "react-native";

interface Props {
  navigation: any;
}
/**
 * Main Screen Displays the List of tickers
 * @param  none
 */
const TickersScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <Button
        title="Go to DetailScreen"
        onPress={() => {
          navigation?.navigate("TickerDetails");
        }}
      ></Button>
    </>
  );
};
export default TickersScreen;
