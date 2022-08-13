// Imports: Dependencies
import { Text } from "@rneui/themed";
import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { colors } from "../theme";

// Screen Dimensions
const { width } = Dimensions.get("window");

/**
 * Component rendered when no data is retrieved
 * @param  none
 */
const NoData = () => {
  return (
    <View style={styles.container}>
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
    paddingVertical: width / 7,
    alignItems: "center",
  },
  text: { color: colors.primary },
  noDataImage: {
    width: 200,
    height: 100,
    alignSelf: "center",
  },
});
