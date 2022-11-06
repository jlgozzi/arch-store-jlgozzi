import { createContext, useContext, useEffect, useState } from "react";
import { IAppContext, IChildren, IDatabaseObject } from "../interfaces";
import { data } from "../services/api";

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider = ({ children }: IChildren) => {
  const [database, setDatabase] = useState<IDatabaseObject[]>([]);

  useEffect(() => {
    async function loadData() {
      setDatabase(() => data);
    }
    loadData();
  });

  return (
    <AppContext.Provider value={{ database, setDatabase }}>
      {children}
    </AppContext.Provider>
  );
};

function useAppContext(): IAppContext {
  const context = useContext(AppContext);

  return context;
}

export default useAppContext;
