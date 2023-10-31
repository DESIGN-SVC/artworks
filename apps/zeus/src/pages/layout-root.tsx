import { Suspense } from "react";
import {
  Outlet,
  ScrollRestoration,
} from "react-router-dom";

export function RootLayout() {

  return (
    <div className="flex min-h-screen-d flex-col">
      <Suspense fallback={<p>Carregando...</p>} />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}

export { RootLayout as Component };
