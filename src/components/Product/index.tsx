import { IDatabaseObject } from "../../interfaces";
import { Product } from "./style";

const ProductCard = ({ product }: any) => {
  const { title, img, category, description, price } = product;
  return (
    <Product>
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div>
        <span className="category">${category}</span>
        <h2>${title}</h2>
        <p>${description}</p>
        <span className="">${price}</span>
        <button>Adicionar ao carrinho</button>
      </div>
    </Product>
  );
};
export default ProductCard;
