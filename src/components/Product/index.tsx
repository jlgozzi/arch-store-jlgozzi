import { ThemeContext } from "styled-components";
import useAppContext from "../../context/appContext";
import useThemeContext from "../../context/themeContext";
import { IDatabaseObject } from "../../interfaces";
import { Product } from "./style";

const ProductCard = ({ product }: any) => {
  const { title, img, category, description, price } = product;

  const { addCart } = useAppContext();
  const { theme } = useThemeContext();
  return (
    <Product theme={theme}>
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div>
        <span className="category">{category}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <span className="price">R$ {price.toFixed(2)}</span>
        <button
          onClick={(event) => {
            event.preventDefault();
            addCart(product);
          }}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </Product>
  );
};
export default ProductCard;
