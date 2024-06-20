import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Loading } from "./components";
import { SessionProvider } from "./hooks";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SessionProvider>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} fallbackElement={<Loading />} />
      </QueryClientProvider>
    </SessionProvider>
  </React.StrictMode>,
);
