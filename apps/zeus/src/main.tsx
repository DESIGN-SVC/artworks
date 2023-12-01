import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import "./styles.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Footer } from "./components";

const queryClient = new QueryClient();

createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <RouterProvider
          router={router}
          fallbackElement={<p>Carregando...</p>}
        />
      </StrictMode>
    </QueryClientProvider>    
  </>
);
