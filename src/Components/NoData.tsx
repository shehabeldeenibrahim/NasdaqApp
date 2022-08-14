// Imports: Dependencies
import { Text } from "@rneui/themed";
import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { colors } from "../theme";

// Screen Dimensions
const { height } = Dimensions.get("window");
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
        paddingVertical: center ? height / 5 : height / 12,
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
