import { SessionProvider } from "./context/Session";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import { router } from "./router";

import { RouterProvider } from "react-router-dom";
import { Loading } from "./components";

const client = new QueryClient();

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <SessionProvider>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} fallbackElement={<Loading />} />
      </QueryClientProvider>
    </SessionProvider>
  </StrictMode>
);
