import { createContext } from "react";

type ThemeContextType = {
  theme?: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
};

const INITIAL_STATE: ThemeContextType = {
  theme: undefined,
  setTheme: () => 0,
};

export const ThemeContext = createContext(INITIAL_STATE);
