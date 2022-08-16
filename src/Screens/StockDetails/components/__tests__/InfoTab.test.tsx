import React from "react";
import { render, screen } from "@testing-library/react-native";
import InfoTab from "../InfoTab";
import { StockDetailsData } from "../../../../mocks/StockDetails";

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
  render(
    <InfoTab
      description={StockDetailsData.description}
      website={StockDetailsData.website}
    />
  );
});

describe("Info Tab", () => {
  test("Render title and description", () => {
    // Check for correct description rendered
    expect(
      screen.getAllByText(
        StockDetailsData.description ? StockDetailsData?.description : ""
      )
    ).toBeDefined();
    // Check for correct title rendered
    expect(screen.getByText("About")).toBeDefined();
  });

  test("Render website button", () => {
    // Check for correct title rendered
    expect(screen.getByText("Visit Website")).toBeDefined();
  });

  test("Render website button if null passed", () => {
    let newDetails = Object.assign({}, StockDetailsData);
    render(<InfoTab description={newDetails.description} website={null} />);
    // Check for correct title rendered
    expect(screen.queryByText("Visit Website")).toBeNull();
  });
});
