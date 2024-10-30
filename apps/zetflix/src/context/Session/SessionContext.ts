import { createContext } from "react";

export type User = {
  name?: string | undefined;
  email?: string | undefined;
  role?: {
    name?: string | undefined;
    id?: string | undefined;
  };
  isAdmin?: boolean | undefined;
};

type SessionContextType = {
  authorized: boolean;
  user: User;

  setAccessToken: (accessToken: string) => void;
  clearSession: () => void;
  setUser: (user: User) => void;
};

const INITIAL_STATE: SessionContextType = {
  authorized: false,
  user: {},

  setAccessToken: () => 0,
  clearSession: () => 0,
  setUser: () => 0,
};

export const SessionContext = createContext(INITIAL_STATE);
