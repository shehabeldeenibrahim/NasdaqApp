import { Icon, Text } from "@rneui/themed";
import React from "react";
import { ActivityIndicator } from "react-native";
import { useActions, useAppState } from "../Overmind/helper";
import { colors } from "../theme";
interface IProps {
  retrieveMore: () => {};
}
const Loader = ({ retrieveMore }: IProps) => {
  const { retrieve_load } = useAppState();
  return retrieve_load === "LOADING" ? (
    <ActivityIndicator
      testID="activity-indicator"
      size="small"
      color={colors.primary}
    />
  ) : retrieve_load === "REFRESH" ? (
    <Icon
      name="reload"
      type="ionicon"
      onPress={() => {
        retrieveMore();
      }}
    />
  ) : null;
};
export default Loader;
