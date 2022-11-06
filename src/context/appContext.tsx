import { createContext, useContext } from "react";
import { IAppContext, IChildren } from "../interfaces";

export const AppContext = createContext<any>({} as any);

export const AppProvider = ({ children }: IChildren) => {
  return <AppContext.Provider value={""}>{children}</AppContext.Provider>;
};

function useAppContext(): IAppContext {
  const context = useContext(AppContext);

  return context;
}

export default useAppContext;
