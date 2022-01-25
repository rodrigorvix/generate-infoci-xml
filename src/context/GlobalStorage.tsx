import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface UserAuthProps {
  id?:number,
  name?: string,
  token?: string,
}

interface ResultContext {
  userAuth: UserAuthProps,
  setUserAuth: Dispatch<SetStateAction<UserAuthProps>>,
}

interface ContextPropsType {
  children:ReactNode
}

export const GlobalContext = createContext({} as ResultContext);

export const GlobalStorage = (props:ContextPropsType) => {
  const [userAuth, setUserAuth] = useState<UserAuthProps>({});
  

  return (
    <GlobalContext.Provider value={{userAuth, setUserAuth}}>
      {props.children}
    </GlobalContext.Provider>
  );
}