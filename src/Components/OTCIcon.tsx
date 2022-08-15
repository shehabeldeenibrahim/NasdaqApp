// Imports: Dependencies
import React from "react";
import { View, Image, StyleSheet } from "react-native";

//
/**
 * OTC Icon component load from assets
 * @param none
 */
const OTCIcon = () => {
  return (
    <View>
      <Image
        source={require("../../assets/otc.png")}
        style={styles.img}
        resizeMode={"cover"}
      />
    </View>
  );
};
export default OTCIcon;
// Styles
const styles = StyleSheet.create({
  img: {
    width: 35,
    height: 35,
    alignSelf: "center",
  },
});
