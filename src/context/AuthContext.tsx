import { CognitoUser } from "@aws-amplify/auth";
import { Auth, Hub } from "aws-amplify";
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

interface UserContextType {
  user: CognitoUser | null;
  setUser: Dispatch<SetStateAction<CognitoUser>>;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

interface Props {
  children: React.ReactElement;
}

export default function AuthContext({children}: Props): React.ReactElement {
  const [user, setUser] = useState<CognitoUser | null>(null);

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    Hub.listen("auth", () => {
      // perform action to update state with new auth event
      checkUser();
    });
  }, []);

  async function checkUser() {
    try {
      const amplifyUser = await Auth.currentAuthenticatedUser();
      setUser(amplifyUser);
    } catch (error) {
      // no signed in user
      console.log(error);
      setUser(null);
    }
  }

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}
export const useUser = () => (): UserContextType => useContext(UserContext);
