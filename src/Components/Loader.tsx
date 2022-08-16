import React from "react";
import { ActivityIndicator } from "react-native";
import { colors } from "../theme";

const Loader = () => {
  return (
    <ActivityIndicator
      testID="activity-indicator"
      size="small"
      color={colors.primary}
    />
  );
};
export default Loader;
