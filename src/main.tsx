import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading</h1>}>
      <RouterProvider router={router} fallbackElement={<h1>Loading</h1>} />
    </Suspense>
  </React.StrictMode>
);
