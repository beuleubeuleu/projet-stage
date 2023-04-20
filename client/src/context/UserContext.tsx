import React, { createContext, useContext, useEffect, useState } from "react";
import AuthService                                               from "../services/AuthService";
import { UserType }                                              from "../types/userType";

type contextProps = {
  children: React.ReactNode
}

type UserContextType = {
  user: UserType | null;
  token: string | null;
  checkUserData(): void

}

const UserContext = createContext<UserContextType>({
  user: null,
  token: null,
  checkUserData(): void {}
});

export const useUserContext = () => useContext(UserContext)

const UserProvider = ({ children }: contextProps) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [token, setToken] = useState<string | null>(null);

  function checkUserData(): void {
    const loggedInUser = AuthService.getLoggedInUser();
    if ( loggedInUser ) {
      setUser(loggedInUser.user);
      setToken(loggedInUser.token);
    }
  }

  useEffect(() => {
    checkUserData();
  }, []);

  return (
      <UserContext.Provider value={ { user, token, checkUserData } }>
        { children }
      </UserContext.Provider>
  );
};

export default UserProvider;
