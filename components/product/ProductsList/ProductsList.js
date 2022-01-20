
import { ProductCard } from '..'
import { ProductsListStyled } from './styled'

const ProductsList = ({ list, columns }) => {
  return (
    <ProductsListStyled columns={columns}>
      {list.map((product) => (
        <ProductCard product={product} key={product.id}/>
      ))}
    </ProductsListStyled>
  )
}

export default ProductsList
