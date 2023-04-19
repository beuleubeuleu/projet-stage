import style        from "./ProductList.module.css";
import { truncate } from "../utils";
import { IProduct } from "../interface/IProduct";

interface ProductCardProps {
  product: IProduct
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
      <div className={ style.card } key={ product._id }>
        <img
            className={ style.image }
            src={ product.image }
            alt={ product.name }
        />
        <div className={ style.content }>
          <h5
              className={ style.title }
              title={ product.name.length >= 50? product.name: undefined }
          >
            { truncate(product.name, 55) }
          </h5>
          <p className={ style.description }>
            { truncate(product.description, 55) }
          </p>
          <p className={ style.price }>${ product.price }</p>
        </div>
      </div>
  );
};