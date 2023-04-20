import useFetch        from "../../hooks/useFetch"
import style           from "./ProductList.module.css"
import { productType } from "../../types/productType";
import { ProductCard } from "./ProductCard";
import { Loading }     from "../../components/Loading";

export const ProductList = () => {
  const { data, isLoading, error } = useFetch<productType[]>("/api/v1/products")
  return (
      <>
        { isLoading && <Loading/> }
        { error && ( <div>{ `There is a problem fetching the products data - ${ error }` }</div> ) }
        <ul className={ style.productList }>
          { data && data.map((product: productType) => <ProductCard product={ product } key={ product._id }/>) }
        </ul>
      </>

  )
      ;
};