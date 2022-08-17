import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import StockList from "../StockList";
import { Loading } from "../../../../models";
import { StockListData } from "../../../../mocks/StockList";
import { expect } from "@jest/globals";

const retrieveMore = jest.fn();
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
  const retrieve_load: Loading = "IDLE";
  render(
    <StockList
      data={StockListData}
      retrieveMore={retrieveMore}
      retrieve_load={retrieve_load}
      test={true}
    />
  );
});

describe("Ticker List", () => {
  test("Does fetch on end reach", () => {
    /* Scroll event configuration */
    const eventData = {
      nativeEvent: {
        contentOffset: {
          /* Change this to test
              y should be greater (or equal) than the outcome of 
               he following equation:
              contentHeight - (screenHeight+ 0.2 * screenHeight) + 1
              this example: 500 - (100 + 0.2 * 100) + 1 = 381
             */
          y: 381,
        },
        contentSize: {
          // Dimensions of the scrollable content
          height: 500,
          width: 100,
        },
        layoutMeasurement: {
          // Dimensions of the device
          height: 100,
          width: 100,
        },
      },
    };

    fireEvent.scroll(screen.getByTestId("tickers-list"), eventData);
    expect(retrieveMore).toHaveBeenCalled();
  });
  test("Renders All List Items", () => {
    expect(screen.getAllByTestId("RNE__LISTITEM__padView").length).toEqual(
      StockListData.length
    );
  });
});
