import { ReactElement } from "react";

export interface IChildren {
  children: ReactElement | ReactElement[];
}

export interface IAppContext {
  database: IDatabaseObject[];
  setDatabase: React.Dispatch<React.SetStateAction<IDatabaseObject[]>>;
  filterList: (name: string) => void;
  dataList: IDatabaseObject[];
  cart: IDatabaseObject[];
  addCart: (item: IDatabaseObject) => void;
  removeCart: (item: IDatabaseObject) => void;
  clearCart: () => void;
  cartTotal: number;
}

export interface IThemeContext {
  theme: string;
  setTheme?: React.Dispatch<React.SetStateAction<string>>;
  changeTheme: () => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IDatabaseObject {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  img: string;
}
