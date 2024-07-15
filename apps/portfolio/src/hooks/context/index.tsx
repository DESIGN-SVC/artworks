import { SessionProvider } from "./Session/SessionProvider";
import { ReactNode } from "react";
import { ThemeProvider } from "./Theme/ThemeProvider";

type ProviderProps = {
  children: ReactNode;
};
export const Provider = ({ children }: ProviderProps) => {
  return (
    <SessionProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SessionProvider>
  );
};
