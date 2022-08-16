import React from "react";
import { render, screen } from "@testing-library/react-native";
import { StockDetailsData } from "../../../../mocks/StockDetails";
import InfoCard from "../InfoCard";
import { APIKEY } from "@env";

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
  render(<InfoCard data={StockDetailsData} />);
});

describe("Info Card", () => {
  test("Render ticker", () => {
    // Check for correct ticker rendered
    expect(screen.getByText("AAPL")).toBeDefined();
  });

  test("Render title", () => {
    // Check for correct ticker rendered
    expect(screen.getByText("Apple co")).toBeDefined();
  });

  test("Renders image if logo url provided", () => {
    // Add img url to details object
    let newDetails = Object.assign({}, StockDetailsData);
    const imgURL = "https://i.pravatar.cc/300";
    newDetails.logo = imgURL;

    render(<InfoCard data={newDetails} />);

    expect(
      screen.getByTestId("info-img-test")._fiber.pendingProps?.source?.uri
    ).toEqual(`${imgURL}?apikey=${APIKEY}`);
  });

  test("Renders avatar with Initials when no url provided", () => {
    // Check for initials in avatar
    expect(screen.getByText("AC")).toBeDefined();

    // Check for Image
    expect(screen.getByTestId("RNE__Avatar__Image")).toBeDefined();
  });

  test("Renders closing price", () => {
    // Check for price and currency
    expect(screen.getByText("5.201")).toBeDefined();
    expect(screen.getByText("USD")).toBeDefined();
  });
});
