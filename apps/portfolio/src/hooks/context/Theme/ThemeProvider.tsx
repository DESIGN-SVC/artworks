import { useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">();
  const setThemeState = (theme: "light" | "dark") => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ setTheme: setThemeState, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
