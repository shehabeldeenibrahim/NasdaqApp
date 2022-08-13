import React from "react";
import {
  VictoryChart,
  VictoryTheme,
  VictoryLine,
  VictoryAxis,
} from "victory-native";
import { colors } from "../../theme";
/**
 * Graph showing stock prices for the last 30 days
 * @param {Object} data stock data for the last 30 days
 */

interface IProps {
  data: {};
  percentageChange: number;
}
const StatsGraph = ({ data, percentageChange }: IProps) => {
  return (
    <VictoryChart
      height={250}
      theme={VictoryTheme.material}
      domainPadding={{ y: 15 }}
    >
      <VictoryAxis crossAxis standalone={false} style={styles.xAxis} />
      <VictoryAxis
        dependentAxis
        crossAxis
        width={400}
        height={400}
        theme={VictoryTheme.material}
        orientation="right"
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
export default StatsGraph;
