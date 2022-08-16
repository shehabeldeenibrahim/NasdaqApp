import { APP_URL, HOSTNAME, TICKERS_URL } from "./constants";

const query: string = "AAPL";
const selectors = {
  searchLoader: '[role="progressbar"]',
  searchBar: '[data-testid="RNE__SearchBar"]',
  listItem: '[data-testid="listItemTitle"]',
};
beforeEach(() => {
  // Stub getAllTickers request
  cy.intercept(
    {
      method: "GET",
      hostname: HOSTNAME,
      pathname: TICKERS_URL,
    },

    { fixture: "tickersList.json" }
  ).as("allTickersRequest");

  // Stub searchTicker request
  cy.intercept(
    {
      method: "GET",
      hostname: HOSTNAME,
      pathname: TICKERS_URL,
      query: {
        search: /\.*[a-zA-Z].*/,
      },
    },

    { fixture: "searchList.json" }
  ).as("searchRequest");

  // Open app
  cy.visit(APP_URL);
});

it("Verify search loads the desired ticker, with appropriate loader behavior", () => {
  // Wait for all items request to return
  cy.wait("@allTickersRequest").then(() => {
    // Type a query
    cy.get(selectors.searchBar).type(query);
    // Verify loader is visible
    cy.get(selectors.searchLoader).should("be.visible");
  });

  // Wait for search request to return
  cy.wait("@searchRequest").then(() => {
    // Verify the first item is the {query} ticker
    cy.get(selectors.listItem).first().contains(query).should("be.visible");
    // Verify loader not visible
    cy.get(selectors.searchLoader).should("not.exist");
  });
});
it("Verify search debounce with slow typing", () => {
  // Slowly type each character and
  // check number of requests

  // Wait for all items request to return
  cy.wait("@allTickersRequest").then(() => {
    // Type a query
    cy.get(selectors.searchBar).type(query, { delay: 1000 });
    // Verify number of search requests === number of characters
    cy.get("@searchRequest.all").should("have.length", query.length);
  });
});
it("Verify search debounce with fast typing", () => {
  // Quickly type each character and
  // check number of requests

  // Wait for all items request to return
  cy.wait("@allTickersRequest").then(() => {
    // Type a query
    cy.get(selectors.searchBar)
      .type(query, { delay: 200 })
      .then(() => {
        // Verify number of search requests === number of characters
        cy.wait(1000);
        cy.get("@searchRequest.all").should("have.length", 1);
      });
  });
});
