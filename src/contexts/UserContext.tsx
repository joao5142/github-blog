import { ReactNode, useEffect, useState, createContext } from "react";

import { api } from "@/lib/api";

interface IUserContext {
  user: any;
}
export const UserContext = createContext({} as IUserContext);

interface UserProviderProps {
  children: ReactNode;
}

interface IUser {
  bio: string;
  id: number;
  followers: number;
  html_url: string;
  login: string;
  name: string;
  created_at: string;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<IUser>();

  async function fetchUserData() {
    const response = await api.get(`/users/joao5142`);
    const data = response.data;

    setUser(data);
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
