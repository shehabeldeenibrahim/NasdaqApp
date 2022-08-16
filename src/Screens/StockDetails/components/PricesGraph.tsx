import React from "react";
import { Dimensions, View } from "react-native";
import {
  VictoryChart,
  VictoryTheme,
  VictoryLine,
  VictoryAxis,
} from "victory-native";
import { GraphPoint } from "../../../models";
import { colors } from "../../../theme";
import NoData from "../../../Components/NoData";
/**
 * Graph showing stock prices for the last 30 days
 * @param {number[]} data stock data for the last 30 days
 */

interface IProps {
  data: GraphPoint[] | null;
  percentageChange: number;
}
const { width, height } = Dimensions.get("window");

const PricesGraph = ({ data, percentageChange }: IProps) => {
  return data && data.length > 1 ? (
    <View testID="graph-test">
      <VictoryChart
        height={250}
        width={width + 25}
        theme={VictoryTheme.material}
        domainPadding={{ y: 15 }}
        style={{
          parent: { paddingRight: 500 },
        }}
      >
        <VictoryAxis
          fixLabelOverlap
          crossAxis
          standalone={false}
          style={styles.xAxis}
        />
        <VictoryAxis
          dependentAxis
          crossAxis
          width={400}
          height={400}
          theme={VictoryTheme.material}
          // orientation="right"
          style={styles.yAxis}
        />
        <VictoryLine
          style={{
            data: { stroke: percentageChange > 0 ? colors.green : "red" },
            parent: { border: "1px solid #ccc" },
          }}
          data={data}
          animate
        />
      </VictoryChart>
    </View>
  ) : (
    <NoData />
  );
};
const styles = {
  yAxis: {
    axis: { stroke: "transparent" },
    ticks: { stroke: "transparent" },
    grid: { stroke: "rgba(128, 162, 191, 0.3)" },
  },
  xAxis: { grid: { stroke: "rgba(128, 162, 191, 0.3)" } },
};
export default PricesGraph;
