import { useParams }   from "react-router-dom";
import React           from "react";
import useFetch        from "../../hooks/useFetch";
import { productType } from "../../types/productType";
import style           from "./productDetail.module.css"
import { Loading }     from "../../components/Loading";

const ProductDetail = () => {
  const { idProduct } = useParams();
  const { data, error, isLoading } = useFetch<{ product: productType }>(`/api/v1/products/${ idProduct }`);
  return (

      <>
        { isLoading && <Loading/> }
        { error && ( <div>{ `There is a problem fetching the products data - ${ error }` }</div> ) }
        { !isLoading && <div className={ style.productDetail }>
          <div className={ style.productDetailLeft }>
            <img className={ style.productDetailImage } src={ `/${ data?.product.image }` }
                 alt={ data?.product.name }/>
          </div>
          <div className={ style.productDetailRight }>
            <h2 className={ style.productDetailName }>{ data?.product.name }</h2>
            <p className={ style.productDetailBrand }>{ data?.product.brand }</p>
            <p className={ style.productDetailDescription }>{ data?.product.richDescription }</p>
            <p className={ style.productDetailPrice }>${ data?.product.price }</p>
            <p className={ style.productDetailCategory }>{ data?.product.category.name }</p>
          </div>
        </div> }
      </> )
      ;
};

export default ProductDetail;
