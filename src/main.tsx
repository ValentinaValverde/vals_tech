import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Root, { loader as rootLoader } from "./route/root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ErrorPage from "./route/errorPage.tsx";
import WorkPage from "./route/workPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "work",
        element: <WorkPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
