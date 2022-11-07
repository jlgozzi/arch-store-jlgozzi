// import { useParams } from "react-router-dom";
// import useAppContext from "../../context/appContext";
import useThemeContext from "../../context/themeContext";
import { HeaderStyled } from "./style";
import { BsLightbulbFill } from "react-icons/bs";
import { BsLightbulbOff } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  // const teste = useParams();
  const { changeTheme, theme } = useThemeContext();

  return (
    <HeaderStyled>
      <div className="header-container">
        <Link to={`/dashboard`}>
          <span>Arch-Store</span>
        </Link>

        <button
          onClick={(event) => {
            event?.preventDefault();
            changeTheme();
          }}
        >
          {theme === "dark" ? <BsLightbulbOff /> : <BsLightbulbFill />}
        </button>
      </div>
    </HeaderStyled>
  );
};

export default Header;
