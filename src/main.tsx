import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// for reference:
import Root, { loader as rootLoader } from "./route/root.jsx";

// you must have a "route" folder under src

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    loader: rootLoader,
    // children: [
    //   {
    //     path: "something/:somethingID",
    //     element: <Something />,
    //   }
    // ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
