import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Loading } from "~/components";
import { router } from "~/router";
import "./styles.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <RouterProvider router={router} fallbackElement={<Loading />} />
      </StrictMode>
    </QueryClientProvider>
  </>
);
