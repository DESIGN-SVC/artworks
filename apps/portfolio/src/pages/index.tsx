import { Suspense } from "react";
import { Loading } from "~/components";
import { Home as HomePage } from "./Home";
import { Login as LoginPage } from "./Login";
import { useSession } from "~/hooks";

export function IndexPage() {
  const { authorized } = useSession();

  const renderPage = () => {
    if (!authorized) {
      return <LoginPage />;
    } else {
      return <HomePage />;
    }
  };

  return <Suspense fallback={<Loading />}>{renderPage()}</Suspense>;
}
