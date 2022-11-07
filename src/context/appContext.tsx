import { createContext, useContext, useEffect, useState } from "react";
import { IAppContext, IChildren, IDatabaseObject } from "../interfaces";
import { data } from "../services/api";

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider = ({ children }: IChildren) => {
  const [database, setDatabase] = useState<IDatabaseObject[]>([]);
  const [dataList, setDataList] = useState<IDatabaseObject[]>([]);
  const [cart, setCart] = useState<IDatabaseObject[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    async function loadData() {
      setDatabase(() => data);
    }
    loadData();
    totalCart();
  });

  function filterList(name: string) {
    if (!name) {
      setDataList(database);
    }
    setDataList(() => {
      return database.filter((data) => data.category === name);
    });
  }

  function totalCart() {
    const total = cart.reduce((inicial, atual) => inicial + atual.price, 0);
    setCartTotal(total);
  }

  function addCart(item: IDatabaseObject) {
    setCart((previous) => [...previous, item]);
    totalCart();
  }
  function clearCart() {
    setCart([]);
    totalCart();
  }
  function removeCart(item: IDatabaseObject) {
    setCart(() => cart.filter((product) => product.id !== item.id));
    totalCart();
  }

  return (
    <AppContext.Provider
      value={{
        database,
        setDatabase,
        filterList,
        dataList,
        cart,
        addCart,
        clearCart,
        removeCart,
        cartTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

function useAppContext(): IAppContext {
  const context = useContext(AppContext);

  return context;
}

export default useAppContext;
