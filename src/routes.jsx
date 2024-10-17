/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import SearchData from "./components/SearchData";
import ConfiguratorData from "./components/ConfiguratorData";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { index: true, element: <SearchData /> },
      { path: "configurator-data", element: <ConfiguratorData /> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
