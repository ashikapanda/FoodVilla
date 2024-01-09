import HeaderComponent from "../HeaderComponent";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../ReduxStore/configureStore";
import { StaticRouter } from "react-router-dom/server";

test(" load logo on header render", async () => {
  //load header component
  /**
   * jsdom cannot read the png/jpg image files in image src,
   * so we need to create mock dummy.js file to keep src and use them in place of actual images.
   * and the configuration in  jest.config.js in moduleNameMapper as
   *
   */
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </StaticRouter>
  );
  console.log("header", header);
  //check if logo is present
  const logo = await header.findByTestId("appLogo");
  console.log("logo", logo);
  expect(logo.src).toMatch("/dummy.png");
});

test("show cart items as 0 on header render", async () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </StaticRouter>
  );
  const cart = await header.getByTestId("cart");
  expect(cart.innerHTML).toMatch("0");
});
