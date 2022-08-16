import { APP_URL, HOSTNAME, TICKERS_URL } from "./constants";

const selectors = {
  listItem: '[data-testid="RNE__LISTITEM__padView"]',
  listLoader: '[data-testid="RNE__Skeleton"]',
};
describe("TickersList Screen", () => {
  it("Verify that loading show before response received", () => {
    // Create a promise that will be manually resolved
    let resolveRequest: any;
    const trigger = new Promise((resolve) => {
      resolveRequest = resolve;
    });

    // Stub getAllTickers request
    cy.intercept(
      {
        method: "GET",
        hostname: HOSTNAME,
        pathname: TICKERS_URL,
      },
      (request: any) => {
        return trigger.then(() => {
          request.reply({
            statusCode: 200,
            fixture: "TickersList.json",
          });
        });
      }
    ).as("allTickersRequest");

    // Open app
    cy.visit(APP_URL);
    cy.get(selectors.listLoader)
      .should("be.visible")
      .then(() => {
        // Asserted that loader is shown
        // resolve the Promise
        resolveRequest();
      });

    // Verify ticker list is rendered
    cy.get(selectors.listItem).should("have.length", 20);
  });
});
