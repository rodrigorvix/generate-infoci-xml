import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface UserAuthProps {
  id?:number,
  name?: string,
  token?: string,
}

interface ResultContext {
  userAuth: UserAuthProps,
  setUserAuth: Dispatch<SetStateAction<UserAuthProps>>,
  formId: string,
  setFormId: (formId: string) => void,
}

interface ContextPropsType {
  children:ReactNode
}

export const GlobalContext = createContext({} as ResultContext);

export const GlobalStorage = (props:ContextPropsType) => {
  const [userAuth, setUserAuth] = useState<UserAuthProps>({});
  const [formId, setFormId] = useState("");
  

  return (
    <GlobalContext.Provider value={{userAuth, setUserAuth, formId, setFormId}}>
      {props.children}
    </GlobalContext.Provider>
  );
}