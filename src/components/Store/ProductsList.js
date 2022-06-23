import React from "react"
import ProductBox from "./ProductBox"

const ProductsList = ({ products, cols=3 }) => {
  return (
    <div className={"grid gap-8 my-6 " + (cols === 4 ? "md:grid-cols-4" : "md:grid-cols-3")}>
      {products &&
        products.map((product) => {
          return <ProductBox product={product} key={product.node.id} />
        })}
    </div>
  )
}

export default ProductsList
