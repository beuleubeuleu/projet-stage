import style        from "./ProductCard.module.css";
import { truncate } from "../utils";
import { IProduct } from "../interface/IProduct";


interface ProductCardProps {
  product: IProduct
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
      <li className={ style.card } key={ product._id }>
        <img
            className={ style.image }
            src={ `../${product.image}` }
            alt={ product.name }
        />
        <div className={ style.content }>
          <h5
              className={ style.title }
              title={ product.name.length >= 25? product.name: undefined }
          >
            { truncate(product.name, 25) }
          </h5>
          <p className={ style.price }>${ product.price }</p>
          <p className={ style.description }>
            { truncate(product.description, 55) }
          </p>
        </div>
      </li>
  );
};