import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { useLocalization } from "../components/i18n/useLocalization"
import Fuse from "fuse.js"
import translate from "../components/i18n/translate"

import CategoriesWithProductsList from "../components/Store/CategoriesWithProductsList"
import Layout from "../layouts/layout"
import SEO from "../components/SEO/seo"

const SearchPage = ({ data, location}) => {
  const { locale } = useLocalization()
  const [finalList, setFinalList] = useState([])

  let searchValue = ""
  // ••TODO remove warning, maybe using:     const [searchValue, setSearchValue] = useState("")


  const siteTitle = data.site.siteMetadata.title
  const products = data.allMdx.edges.filter(
    post =>
      post.node.frontmatter.templateKey === "product-page" &&
      post.node.fields.locale === locale
  )


  // Setting up fuse.js
  const optionsFuse = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ["node.frontmatter.titre"],
  }

  const fuse = new Fuse(products, optionsFuse)

  useEffect(() => {
    searchValue = location.search ? location.search.substring(7).split("=")[0] : ""
    //••TODO remove warning, maybe using       setSearchValue (location.search ? location.search.substring(7).split("=")[0] : "")
    
    searchValue.length === 0
      ? setFinalList(products)
      : setFinalList(
          fuse.search(searchValue).map(item => ({ node: item.item.node }))
        )
  }, []) //••TODO remove warning


  return (
    <Layout title={siteTitle}>
      <SEO title="Store" />
      {finalList.length ? (
        <CategoriesWithProductsList products={finalList} locale={locale} />
      ) : (
        <div className="max-w-screen-xl m-auto flex min-h-screen-80 items-center margin-auto w-full ">
          <h6 className="text-white">{translate("aucun_produits", locale)}</h6>
        </div>
      )}
    </Layout>
  )
}

export default SearchPage

export const storeQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
            locale
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            templateKey
            titre
            description
            image_principale
            categorie
            path
          }
        }
      }
    }
  }
`
