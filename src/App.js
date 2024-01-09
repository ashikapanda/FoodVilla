import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HelpComponent from "./components/HelpComponent";
import OffersComponent from "./components/OffersComponent";
import ErrorComponent from "./components/ErrorComponent";
import ResturantComponent from "./components/ResturantComponent";
import useOnline from "./utils/useOnline";
import LoaderComponent from "./components/LoaderComponent";
import { AppProvider } from "./ContextStore/AppProvider";
import store from "./ReduxStore/configureStore";
import { Provider } from "react-redux";
import Cart from "./components/CartComponent";
// import LazyComponent from "./components/LazyComponent"

//chunking, tree shaking, code spilting, dynamic bundling, lazy loading, dynamic import, on demand loading.
const LazyComponent = lazy(() => import("./components/LazyComponent"));
const AppLayout = () => {
  const isOnline = useOnline();
  console.log(isOnline);
  return (
    <Provider store={store}>
      <AppProvider>
        <HeaderComponent />
        {!isOnline ? (
          <ErrorComponent
            data={{
              status: "offline",
              statusText: "Please check your internet connection",
            }}
          />
        ) : (
          <Outlet />
        )}
        <FooterComponent />
      </AppProvider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/help",
        element: <HelpComponent />,
      },
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/offers",
        element: <OffersComponent />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/resturant/:resId",
        element: <ResturantComponent />,
      },
      {
        path: "/lazy",
        element: (
          <Suspense fallback={<LoaderComponent />}>
            <LazyComponent />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
