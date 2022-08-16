import { Icon } from "@rneui/themed";
import React from "react";
import { Loading } from "../../../models";
import Loader from "../../../Components/Loader";
interface IProps {
  retrieveMore?: () => {};
  retrieveLoad: Loading;
}
const RetrieveListLoader = ({ retrieveMore, retrieveLoad }: IProps) => {
  return retrieveLoad === "LOADING" ? (
    <Loader />
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
export default RetrieveListLoader;
