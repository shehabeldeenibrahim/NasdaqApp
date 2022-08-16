// Imports: Dependencies
import { Text } from "@rneui/themed";
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { colors } from "../Theme/colors";
import { SCREEN_HEIGHT } from "../Theme/dimentions";

interface IProps {
  center?: boolean;
}
/**
 * Component rendered when no data is retrieved
 * @param {boolean} center  controls the svg's position
 */
const NoData = ({ center }: IProps) => {
  return (
    <View
      style={{
        ...styles.container,
        paddingVertical: center ? SCREEN_HEIGHT / 5 : SCREEN_HEIGHT / 12,
      }}
    >
      <Image
        source={require("../../assets/nodata.webp")}
        style={styles.noDataImage}
        resizeMode={"cover"}
      />
      <Text h4 testID="no-data" style={styles.text}>
        No data available
      </Text>
    </View>
  );
};
export default NoData;
// Styles
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: { color: colors.primary },
  noDataImage: {
    width: 200,
    height: 100,
    alignSelf: "center",
  },
});
