// import { useParams } from "react-router-dom";
// import useAppContext from "../../context/appContext";
import useThemeContext from "../../context/themeContext";
import { SubHeaderStyled } from "./style";
import { TiShoppingCart } from "react-icons/ti";
import { HiSearchCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import useAppContext from "../../context/appContext";

const SubHeader = () => {
  // const teste = useParams();
  const { theme } = useThemeContext();
  const { cart } = useAppContext();

  return (
    <SubHeaderStyled theme={theme}>
      <div className="sub-header-container">
        <ul>
          <li>
            <Link to={"/homepage"}>Home</Link>
          </li>
          <li>
            <Link to={"/bookpage"}>Livros</Link>
          </li>
          <li>
            <Link to={"/shirtpage"} replace={true}>
              Camisetas
            </Link>
          </li>
          <li>
            <Link to={"/accessorypage"}>Acessórios</Link>
          </li>
        </ul>
        <div className="sub-header-input-cart">
          <form>
            <input></input>
            <button>
              <HiSearchCircle />
            </button>
          </form>
          <Link to={"/cart"}>
            <TiShoppingCart />
          </Link>
          {cart.length > 0 ? (
            <span className="cart-number">{cart.length}</span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </SubHeaderStyled>
  );
};

export default SubHeader;
