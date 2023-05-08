import { createContext, useState } from "react";

export type AuthenticatedUser = {
  id: number;
  fname: string;
  lname: string;
  email: string;
  accessToken: string | null;
};

export type AuthContextType = {
  authenticatedUser: AuthenticatedUser | null;
  setAuthenticatedUser: React.Dispatch<
    React.SetStateAction<AuthenticatedUser | null>
  >;
};

export const AuthContext = createContext<AuthContextType | null>(null);