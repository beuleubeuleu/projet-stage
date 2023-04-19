import useFetch        from "../hooks/useFetch"
import style           from "./ProductList.module.css"
import { IProduct }    from "../interface/IProduct";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const { data, loading, error } = useFetch("/api/v1/products")
  return (
      <>
        { loading && <div className={ style.ldsEllipsis }>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div> }
        { error && ( <div>{ `There is a problem fetching the products data - ${ error }` }</div> ) }
        <ul className={ style.productList }>
          { data && data.map((product: IProduct) => <ProductCard product={ product } key={ product._id }/>) }
        </ul>
      </>

  )
      ;
};