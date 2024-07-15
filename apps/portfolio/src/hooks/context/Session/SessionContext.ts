import { createContext } from "react";

export type User = {
  name?: string | undefined;
  id?: string | undefined;
  email?: string | undefined;
  role?: {
    name?: string | undefined;
    id?: string | undefined;
  };
  avatar?: string | undefined;
  avatar_url?: string | undefined;
  isAdmin?: boolean | undefined;
  team?: string;
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
