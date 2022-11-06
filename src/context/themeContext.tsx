import { createContext, useContext, useEffect, useState } from "react";
import { IThemeContext, IChildren } from "../interfaces";

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const CustomThemeProvider = ({ children }: IChildren) => {
  const [theme, setTheme] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html")!.classList.add("dark");
      setTheme("dark");
    } else {
      document.querySelector("html")!.classList.remove("dark");
      setTheme("light");
    }

    setLoading(false);
  }, []);

  function changeTheme() {
    if (
      !localStorage.getItem("theme") ||
      localStorage.getItem("theme") === "light"
    ) {
      localStorage.theme = "dark";
      document.querySelector("html")!.classList.add("dark");
      setTheme("dark");
    } else {
      localStorage.theme = "light";
      document.querySelector("html")!.classList.remove("dark");
      setTheme("light");
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, loading, setLoading }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useThemeContext(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}

export default useThemeContext;
