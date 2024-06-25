import { decodeJwt, type JWTPayload } from "jose";
import { useEffect, useState, type ReactNode } from "react";

import { SessionContext, User } from "./SessionContext";
import { useCookieData } from "../../useCookieData";

type AccessTokenPayload = Required<JWTPayload> & {
  authorized: boolean;
  name: string;
};

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const { saveData, clearData, retrieveData } = useCookieData();
  const initialAccessToken =
    retrieveData<string | undefined>("_access_token") ?? undefined;
  const [accessToken, setAccessTokenState] = useState<string | undefined>(
    initialAccessToken,
  );
  const [user, setUser] = useState<User>({});

  const clearAccessToken = () => {
    clearData("_access_token");
    setAccessTokenState(undefined);
  };

  const decode = (jwt: string) => decodeJwt(jwt) as AccessTokenPayload;

  const authorized = accessToken ? Boolean(decode(accessToken).sub) : false;

  const guest = !accessToken;

  const setAccessToken = (accessToken: string) => {
    saveData("expires", {
      expires: new Date(decode(accessToken).exp * 1000),
      sameSite: "strict",
      secure: import.meta.env.PROD,
    });
    saveData("_access_token", accessToken);
    setAccessTokenState(accessToken);
  };
  const setUserState = (user: User) => {
    setUser(user);
  };

  useEffect(() => {
    if (initialAccessToken !== accessToken) {
      setAccessTokenState(initialAccessToken);
    }
  }, [initialAccessToken, accessToken]);

  return (
    <SessionContext.Provider
      value={{
        accessToken,
        authorized,
        guest,
        user,
        setAccessToken,
        clearSession: clearAccessToken,
        setUser: setUserState,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
