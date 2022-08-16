const query: string = "AAPL";
beforeEach(() => {
  // Stub getAllTickers request
  cy.intercept(
    {
      method: "GET",
      hostname: "api.polygon.io",
      pathname: "/v3/reference/tickers",
    },

    { fixture: "tickersList.json" }
  ).as("allItemsRequest");

  // Stub searchTicker request
  cy.intercept(
    {
      method: "GET",
      hostname: "api.polygon.io",
      pathname: "/v3/reference/tickers",
      query: {
        search: /\.*[a-zA-Z].*/,
      },
    },

    { fixture: "searchList.json" }
  ).as("searchRequest");

  // Open app
  cy.visit("http://localhost:19006/");
});

it("Verify search loads the desired ticker, with appropriate loader behavior", () => {
  // Wait for all items request to return
  cy.wait("@allItemsRequest").then(() => {
    // Type a query
    cy.get('[data-testid="RNE__SearchBar"]').type(query);
    // Verify loader is visible
    cy.get('[role="progressbar"]').should("be.visible");
  });

  // Wait for search request to return
  cy.wait("@searchRequest").then(() => {
    // Verify the first item is the {query} ticker
    cy.get('[data-testid="listItemTitle"]')
      .first()
      .contains(query)
      .should("be.visible");
    // Verify loader not visible
    cy.get('[role="progressbar"]').should("not.exist");
  });
});
it("Verify search debounce with slow typing", () => {
  // Slowly type each character and
  // check number of requests

  // Wait for all items request to return
  cy.wait("@allItemsRequest").then(() => {
    // Type a query
    cy.get('[data-testid="RNE__SearchBar"]').type(query, { delay: 1000 });
    // Verify number of search requests === number of characters
    cy.get("@searchRequest.all").should("have.length", query.length);
  });
});
it("Verify search debounce with fast typing", () => {
  // Slowly type each character and
  // check number of requests

  // Wait for all items request to return
  cy.wait("@allItemsRequest").then(() => {
    // Type a query
    cy.get('[data-testid="RNE__SearchBar"]')
      .type(query, { delay: 200 })
      .then(() => {
        // Verify number of search requests === number of characters
        cy.wait(1000);
        cy.get("@searchRequest.all").should("have.length", 1);
      });
  });
});
