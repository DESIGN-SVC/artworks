import { Suspense } from "react";
import {
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import { Footer } from "~/components";

export function RootLayout() {

  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback={<p>Carregando...</p>} />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </div>
  );
}

export { RootLayout as Component };
