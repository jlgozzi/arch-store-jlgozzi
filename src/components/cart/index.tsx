import { ThemeContext } from "styled-components";
import useAppContext from "../../context/appContext";
import useThemeContext from "../../context/themeContext";
import { IDatabaseObject } from "../../interfaces";
import ProductCard from "../Product";
import { Product } from "../Product/style";
import ProductCartCard from "../productCartCard";
import { CartContainer } from "./style";

const Cart = () => {
  const { cart, cartTotal, clearCart } = useAppContext();
  const { theme } = useThemeContext();
  return (
    <CartContainer theme={theme}>
      <h2 className="cart-title">Carrinho</h2>
      <div className="cart-list">
        {cart.length > 0 ? (
          <ul>
            {cart.map((product: IDatabaseObject, index: number) => (
              <ProductCartCard key={index} index={index} product={product} />
            ))}
          </ul>
        ) : (
          <div className="empty-cart">Carrinho Vazio</div>
        )}
      </div>
      <div className="cart-resume">
        <div>
          <p>Total:</p>
          <p>Itens</p>
        </div>
        <div>
          <p>{cartTotal.toFixed(2)}</p>
          <p>{cart.length}</p>
        </div>
      </div>
      <button
        className="cart-button-clear"
        onClick={(event) => {
          event.preventDefault();
          clearCart();
        }}
      >
        Limpar carrinho
      </button>
    </CartContainer>
  );
};
export default Cart;
