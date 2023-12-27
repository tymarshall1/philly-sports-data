import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import EaglesPage from "./pages/eagles.tsx";
import PhilliesPage from "./pages/phillies.tsx";
import SixersPage from "./pages/sixers.tsx";
import FlyersPage from "./pages/flyers.tsx";

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  },
  {
    path: "/eagles",
    element: <EaglesPage />,
  },
  {
    path: "/phillies",
    element: <PhilliesPage />,
  },
  {
    path: "/flyers",
    element: <FlyersPage />,
  },
  {
    path: "/sixers",
    element: <SixersPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
