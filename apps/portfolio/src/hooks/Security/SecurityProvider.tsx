import { type ReactNode } from "react";

import Context from "./SecurityContext";
import type { SecurityState } from "./types";
import { useCookieData } from "../useCookieData";

export const SecurityProvider = ({ children }: { children: ReactNode }) => {
  const { clearData, saveData, retrieveData } = useCookieData();
  const validation = retrieveData<SecurityState>("validation");
  const clearValidation = () => {
    clearData("validation");
  };
  return (
    <Context.Provider
      value={{
        channel: validation?.channel ?? "",
        recipient: validation?.recipient ?? "",
        validating: validation?.validating ?? false,
        setValidating: (validating, channel = "", recipient = "") => {
          saveData("validation", {
            validating,
            channel,
            recipient,
            expires: new Date(Date.now() + 60 * 1000),
          });
        },
        clearValidation,
      }}
    >
      {children}
    </Context.Provider>
  );
};
