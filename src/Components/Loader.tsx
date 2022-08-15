import { Icon } from "@rneui/themed";
import React from "react";
import { ActivityIndicator } from "react-native";
import { Loading } from "../models";
import { colors } from "../theme";
interface IProps {
  retrieveMore?: () => {};
  retrieveLoad: Loading;
}
const Loader = ({ retrieveMore, retrieveLoad }: IProps) => {
  return retrieveLoad === "LOADING" ? (
    <ActivityIndicator
      testID="activity-indicator"
      size="small"
      color={colors.primary}
    />
  ) : retrieveLoad === "REFRESH" ? (
    <Icon
      name="reload"
      type="ionicon"
      onPress={() => {
        if (retrieveMore) retrieveMore();
      }}
    />
  ) : null;
};
export default Loader;
