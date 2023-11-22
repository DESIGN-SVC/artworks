import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

export function RootLayout() {
  return (
    <>
      <Suspense fallback={<p>Carregando...</p>} />
      <Outlet />
      <ScrollRestoration />
    </>
  );
}

export { RootLayout as Component };
