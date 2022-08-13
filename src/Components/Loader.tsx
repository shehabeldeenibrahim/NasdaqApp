import React from "react";
import { ActivityIndicator } from "react-native";
import { useAppState } from "../Overmind/helper";
import { colors } from "../theme";

const Loader = () => {
  const { retrieve_load } = useAppState();
  return retrieve_load ? (
    <ActivityIndicator
      testID="activity-indicator"
      size="small"
      color={colors.primary}
    />
  ) : null;
};
export default Loader;
