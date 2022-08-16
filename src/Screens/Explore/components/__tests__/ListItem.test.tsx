import React from "react";
import { render, screen } from "@testing-library/react-native";
import StockListItem from "../StockListItem";
import { StockListData } from "../../../../mocks/StockList";
import { expect } from "@jest/globals";

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
beforeEach(() => {
  render(<StockListItem ticker={StockListData[0]} />);
});
describe("Ticker Item", () => {
  test("Renders ticker", () => {
    // Check for correct ticker rendered
    expect(screen.getByText("AAPL")).toBeDefined();
  });

  test("Renders name", () => {
    // Check for correct name rendered
    expect(screen.getByText("Mission Advancement Corp.")).toBeDefined();
  });

  test("Renders Avatar", () => {
    // Check for initials in avatar
    expect(screen.getByText("MC")).toBeDefined();

    // Check for Image
    expect(screen.getByTestId("RNE__Avatar__Image")).toBeDefined();
  });
  test("Renders Market Icon", () => {
    // Check that for the stocks market, arrow-trend-up
    // icon is rendered
    expect(screen.getByTestId("icon-test")._fiber.pendingProps.icon).toEqual(
      "arrow-trend-up"
    );
  });
});
