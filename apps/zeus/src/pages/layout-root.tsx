import { Suspense, useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { animationElements } from "~/animation";
import { Footer, Loading } from "~/components";

export function RootLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    animationElements();
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback={<Loading />} />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </div>
  );
}

export { RootLayout as Component };
