import React from "react";
import { render, screen } from "@testing-library/react-native";
import { stats } from "../../../mocks/Tickers";
import StatsTab from "../StatsTab";

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

describe("Stats Tab", () => {
  test("Render all stats", () => {
    render(<StatsTab stats={stats} />);
    // Check for all stats provided
    expect(screen.getByText("Open")).toBeDefined();
    expect(screen.getByText("Close")).toBeDefined();
    expect(screen.getByText("High")).toBeDefined();
    expect(screen.getByText("Low")).toBeDefined();
    expect(screen.getByText("Volume")).toBeDefined();
    expect(screen.getByText("VWAP")).toBeDefined();
  });
  test("Render no data when null data passed", () => {
    render(<StatsTab stats={null} />);
    // Check for no-data
    expect(screen.getByText("No data available")).toBeDefined();
  });
});
