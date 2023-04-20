import style        from "./ProductCard.module.css";
import { truncate }    from "../../utils";
import { productType } from "../../types/productType";
import { useNavigate } from "react-router-dom";


interface ProductCardProps {
  product: productType
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate()
  return (
        <li className={ style.card } key={ product._id } onClick={()=>navigate(`/home/${product._id}`)}>
          <img
              className={ style.image }
              src={ `../${product.image}` }
              alt={ product.name }
          />
          <div className={ style.content }>
            <p
                className={ style.title }
                title={ product.name.length >= 25? product.name: undefined }
            >
              { truncate(product.name, 25) }
            </p>
            <p className={ style.price }>${ product.price }</p>
            <p className={ style.description }>
              { truncate(product.description, 55) }
            </p>
          </div>
        </li>
  );
};