// import { useParams } from "react-router-dom";
// import useAppContext from "../../context/appContext";
import useThemeContext from "../../context/themeContext";
import { HeaderStyled } from "./style";
import { BsLightbulbOffFill } from "react-icons/bs";
import { BsLightbulbOff } from "react-icons/bs";

const Header = () => {
  // const teste = useParams();
  const { changeTheme, theme } = useThemeContext();

  return (
    <HeaderStyled>
      <div className="header-top-line"></div>
      <div className="header-container">
        <span>Arch-Store</span>

        <button
          onClick={(event) => {
            event?.preventDefault();
            changeTheme();
          }}
        >
          {theme === "dark" ? <BsLightbulbOffFill /> : <BsLightbulbOff />}
        </button>
      </div>
    </HeaderStyled>
  );
};

export default Header;
