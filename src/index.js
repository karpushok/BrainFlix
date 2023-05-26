import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import MainLayout from "./pages/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import UploadPage from "./pages/Upload/UploadPage";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: async () => {
      return await fetch(`https://project-2-api.herokuapp.com/register`);
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
