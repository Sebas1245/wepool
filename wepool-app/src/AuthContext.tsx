import { createContext } from "react";

export type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
});