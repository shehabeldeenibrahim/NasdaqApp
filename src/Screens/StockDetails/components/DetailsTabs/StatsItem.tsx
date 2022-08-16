import { Text, Tooltip } from "@rneui/base";
import { Icon } from "@rneui/themed";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { statsDefinitions } from "../../../../Constants";
import { colors } from "../../../../theme";

interface IProps {
  title: string;
  value: number | null | undefined;
  currency: string | null;
}

const StatsItem = ({ title, value, currency }: IProps) => {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.item}>
      <Text style={styles.text}>
        {title}{" "}
        <Tooltip
          visible={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          popover={<Text>{statsDefinitions[title.toLowerCase()]}</Text>}
          containerStyle={{
            width: 200,
            height: 100,
            backgroundColor: colors.gray,
          }}
          withPointer={false}
        >
          <Icon
            name="help-with-circle"
            type="entypo"
            size={13}
            color={colors.gray}
            style={{ paddingBottom: 4 }}
          />
        </Tooltip>
      </Text>
      <Text>
        {value} {currency}
      </Text>
    </View>
  );
};
export default StatsItem;
const styles = StyleSheet.create({
  item: {
    padding: "3%",
    flexBasis: "50%",
    alignItems: "flex-start",
    paddingHorizontal: "10%",
  },
  text: {
    fontSize: 20,
    color: colors.primary,
  },
});
