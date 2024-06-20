import { createContext } from "react";

type User = {
  name?: string | undefined;
  id?: string | undefined;
  email?: string | undefined;
  role?: {
    name?: string | undefined;
    id?: string | undefined;
  };
  avatar?: string | undefined;
  isAdmin?: boolean | undefined;
};

type SessionContextType = {
  accessToken?: string;

  authorized: boolean;
  guest: boolean;
  user: User;

  setAccessToken: (accessToken: string) => void;
  clearSession: () => void;
  setUser: (user: User) => void;
};

const INITIAL_STATE: SessionContextType = {
  accessToken: undefined,
  authorized: false,
  guest: true,
  user: {},

  setAccessToken: () => 0,
  clearSession: () => 0,
  setUser: () => 0,
};

export const SessionContext = createContext(INITIAL_STATE);
