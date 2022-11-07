import { ThemeContext } from "styled-components";
import useThemeContext from "../../context/themeContext";
import { IDatabaseObject } from "../../interfaces";
import { ProductCart } from "./style";

import { AiFillCloseSquare } from "react-icons/ai";
import useAppContext from "../../context/appContext";

const ProductCartCard = ({ product }: any) => {
  const { title, img, price } = product;

  const { removeCart } = useAppContext();

  const { theme } = useThemeContext();
  return (
    <ProductCart theme={theme}>
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div>
        <h2>{title}</h2>
        <span className="price">R$ {price.toFixed(2)}</span>
      </div>
      <button
        onClick={(event) => {
          event.preventDefault();
          removeCart(product);
        }}
      >
        <AiFillCloseSquare />
      </button>
    </ProductCart>
  );
};
export default ProductCartCard;
