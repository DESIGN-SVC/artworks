import { useCallback } from "react";
import { useSession } from "~/context/Session/";
import { useCookieData } from "./useCookieData";

export const useLogout = () => {
  const { clearSession } = useSession();
  const { clearAllCookies } = useCookieData();

  const logout = useCallback(
    (clearCookies = true) => {
      if (clearCookies) {
        clearAllCookies();
      }
      clearSession();
    },
    [clearSession, clearAllCookies],
  );

  return logout;
};
