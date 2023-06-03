import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import MainLayout from "./pages/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import UploadPage from "./pages/Upload/UploadPage";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: async () => {
      if (JSON.parse(sessionStorage.getItem("apiKey"))) return true;

      const response = await axios.get("http://localhost:3001/register");

      if (response.status === 201) {
        if (!Boolean(sessionStorage.getItem("apiKey"))) {
          sessionStorage.setItem("apiKey", JSON.stringify(await response.data));
        }
        return true;
      }

      return false;
    },
    children: [
      {
        path: "/",
        element: <MainLayout />,
      },
      {
        path: "/video/:videoId",
        element: <MainLayout />,
      },
      {
        path: "/upload",
        element: <UploadPage />,
      },
      {
        path: "/*/*",
        element: <>404 Not Found!</>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
