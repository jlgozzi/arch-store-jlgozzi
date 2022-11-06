import useThemeContext from "../../context/themeContext";
import { CartPageStyled } from "./style";

const Cart = () => {
  const { theme } = useThemeContext();
  return (
    <CartPageStyled theme={theme}>
      <h1>afadfafadfadf</h1>
    </CartPageStyled>
  );
};
export default Cart;
