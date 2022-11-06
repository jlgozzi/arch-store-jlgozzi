import { ReactElement } from "react";

export interface IChildren {
  children: ReactElement | ReactElement[];
}

export interface IAppContext {
  database: IDatabaseObject[];
  setDatabase: React.Dispatch<React.SetStateAction<IDatabaseObject[]>>;
}

export interface IThemeContext {
  theme: string;
  setTheme?: React.Dispatch<React.SetStateAction<string>>;
  changeTheme: () => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IDatabaseObject {
  title: string;
  description: string;
  price: number;
  category: string;
  img: string;
}
