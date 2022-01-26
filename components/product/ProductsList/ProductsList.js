
import { ProductCard } from '..'
import { ProductsListStyled } from './styled'

const ProductsList = ({ list, columns }) => {
  return (
    <ProductsListStyled columns={columns}>
      {list && list.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </ProductsListStyled>
  )
}

export default ProductsList
