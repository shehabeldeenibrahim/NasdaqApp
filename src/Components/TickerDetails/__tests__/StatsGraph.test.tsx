import React from "react";
import { render, screen } from "@testing-library/react-native";
import StatsTab from "../StatsTab";
import StatsGraph from "../StatsGraph";
import { GraphData } from "../../../mocks/Tickers";

// Mock Navigation
jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});
// Mock Icon
jest.mock("@fortawesome/react-native-fontawesome", () => ({
  FontAwesomeIcon: "",
}));

describe("Stats Graph", () => {
  test("Render graph points", () => {
    render(<StatsGraph data={GraphData} percentageChange={0} />);

    // Check for all stats provided
    expect(screen.getByTestId("graph-test")).toBeDefined();
    expect(screen.queryByText("No data available")).toBeNull();
  });

  test("Render no data when null data passed", () => {
    render(<StatsTab stats={null} />);

    // Check for no-data
    expect(screen.queryByTestId("graph-test")).toBeNull();
    expect(screen.getByText("No data available")).toBeDefined();
  });
});
