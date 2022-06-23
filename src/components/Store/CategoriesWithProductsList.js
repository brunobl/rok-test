import React from "react"
import { Link } from "gatsby"
import ProductsList from "./ProductsList"
import useStoreCategory from "./useProductCategory"

const ProductList = ({ category, locale, products }) => {
  const categoryName = useStoreCategory(category, locale)

  return (
    <>
      {
        categoryName.categoryTitle !== "Non défini" &&
        <div className="mx-auto md:p-24 px-3 my-10">
          <div className="mb-4 border-b bg-white">
            <div className="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300">
              <Link to={`/../store/${categoryName.categoryPath}`}>{categoryName.categoryTitle}</Link>
            </div>
          </div>
          <ProductsList
            products={products.filter(post =>
              post.node.frontmatter.categorie.includes(categoryName.nom)
            )}
          />
        </div>
      }
    </>
  )
}

const CategoriesWithProductsList = ({ products, locale }) => {
  let allCategories = products.map(product => ([...product.node.frontmatter.categorie]))
  let categories = [...new Set(allCategories.flat())]
  return (
    <>
      {categories.map((category, i) => (
        <ProductList key={i} category={category} locale={locale} products={products} />
      ))}
    </>
  )
}

export default CategoriesWithProductsList
