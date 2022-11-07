// import { useParams } from "react-router-dom";
// import useAppContext from "../../context/appContext";
import useThemeContext from "../../context/themeContext";
import { SubHeaderStyled } from "./style";
import { TiShoppingCart } from "react-icons/ti";
import { HiSearchCircle } from "react-icons/hi";

const SubHeader = () => {
  // const teste = useParams();
  const { theme } = useThemeContext();

  return (
    <SubHeaderStyled theme={theme}>
      <div className="sub-header-container">
        <ul>
          <li>Home</li>
          <li>Canecas</li>
          <li>Camisetas</li>
          <li>Acessórios</li>
        </ul>
        <div>
          <form>
            <input></input>
            <button>
              <HiSearchCircle />
            </button>
          </form>
          <button>
            <TiShoppingCart />
          </button>
        </div>
      </div>
    </SubHeaderStyled>
  );
};

export default SubHeader;
