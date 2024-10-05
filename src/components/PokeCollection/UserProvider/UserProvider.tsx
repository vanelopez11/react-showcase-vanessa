import * as React from "react";
 
type UserContextType = {
  username: string;
  setUsername: (username: string) => void;
}

export const UserContext = React.createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children } : { children: React.ReactNode }) {
  const [username, setUsername] = React.useState<string>("");
 
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}

  