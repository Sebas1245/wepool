import { createContext, useState } from "react";

export type AuthenticatedUser = {
  id: string;
  name: string;
  email: string;
  accessToken: string | null;
};

type AuthContextType = {
  authenticatedUser: AuthenticatedUser | null;
  setAuthenticatedUser: React.Dispatch<
    React.SetStateAction<AuthenticatedUser | null>
  >;
};

export const AuthContext = createContext<AuthContextType | null>(null);