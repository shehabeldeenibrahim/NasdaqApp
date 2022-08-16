describe("TickersList Screen", () => {
  it("Verify that loading show before response received", () => {
    // Create a promise that will be manually
    // resolved
    let resolveRequest: any;
    const trigger = new Promise((resolve) => {
      resolveRequest = resolve;
    });

    // Stub getAllTickers request
    cy.intercept(
      {
        method: "GET",
        hostname: "api.polygon.io",
        pathname: "/v3/reference/tickers",
      },
      (request: any) => {
        return trigger.then(() => {
          request.reply({
            statusCode: 200,
            fixture: "TickersList.json",
          });
        });
      }
    );

    // Open app
    cy.visit("http://localhost:19006/");
    cy.get('[data-testid="RNE__Skeleton"]')
      .should("be.visible")
      .then(() => {
        // Asserted that loader is shown
        // resolve the Promise
        resolveRequest();
      });

    // Verify ticker list is rendered
    cy.get('[data-testid="RNE__LISTITEM__padView"]').should("have.length", 20);
  });
});
