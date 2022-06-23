import React, {useState} from "react"
import { graphql } from "gatsby"
import { useLocalization } from "../components/i18n/useLocalization"

import Layout from "../layouts/layout"
import SEO from "../components/SEO/seo"
import ProductsList from "../components/Store/ProductsList"
import Categories from "../components/Store/Categories"
import Breadcrumb from "../components/Navigation/breadcrumb"
import getCategoryLocalizedAttributes from "../components/Helpers/getCategoryLocalizedAttributes"
import translate from "../components/i18n/translate"
import FilterProducts from "../components/Store/FilterProducts"
import CategoriesMobile from "../components/Store/CategoriesMobile"

const CategoryPage = ({ data }) => {
  const { locale } = useLocalization()
  const [sortFilter, setSortFilter] = useState("pop");

  // Select category
  const categorie = data.categorie
  const { categoryTitle, categoryPath } = getCategoryLocalizedAttributes(
    categorie,
    locale
  )

  // Posts related to this category
  const products = data.listeProduits.edges
    .filter(post => post.node.fields.locale === locale)
    .filter(post =>
      post.node.frontmatter.categorie.includes(
        categorie.frontmatter.nom.toLowerCase()
      )
    )

    const sortFilterBy = () => {
      switch (sortFilter) {
        case 'pop':
          return products.sort((a, b) => a.node.frontmatter.priorite - b.node.frontmatter.priorite);
        case 'az':
          return products.sort((a, b) => a.node.frontmatter.titre.localeCompare(b.node.frontmatter.titre));
        case 'za':
          return products.sort((a, b) => b.node.frontmatter.titre.localeCompare(a.node.frontmatter.titre));
        case 'new':
          return products.filter(product => product.node.frontmatter.categorie.includes('nouveautes'));
        default:
          return products;
      }
    }
  

  // sisters categories with same language
  const categories = data.listeCategories.edges.map(edge =>
    getCategoryLocalizedAttributes(edge.node, locale)
  )

  // Breadcrumb
  const linksBreadcrumb = [
    { title: translate("accueil", locale), url: "/" },
    { title: translate("liste_produits", locale), url: "/store" },
    { title: categoryTitle, url: categoryPath },
  ]

  return (
    <Layout>
      <SEO title={`Store ${categoryTitle}`} />
      <Breadcrumb links={linksBreadcrumb} locale={locale} />
      <div className="flex w-full max-w-screen-xl relative mx-auto md:px-6 px-3 md:pb-40 pb-10 md:pb-24 min-h-screen-80">
        <div className="lg:block hidden">
          <Categories categories={categories} locale={locale} />
        </div>
        <div className="w-full md:mx-6">
          <div className="flex">
            <div className="block lg:hidden">
              <CategoriesMobile categories={categories} locale={locale} />
            </div>
            <FilterProducts sortFilter={sortFilter} setSortFilter={setSortFilter} />
          </div>
          <ProductsList products={sortFilterBy()} />
        </div>
      </div>
    </Layout>
  )
}

export default CategoryPage

export const CategoryStorePageBySlug = graphql`
  query CategoryStorePageBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    categorie: mdx(id: { eq: $id }) {
      frontmatter {
        nom
        type
        traductions {
          langue
          libelle
          path
        }
      }
    }
    listeCategories: allMdx(
      sort: { fields: [frontmatter___priorite], order: [ASC] }
      filter: { frontmatter: { templateKey: { eq: "store-category-page" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
            locale
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            templateKey
            type
            nom
            priorite
            traductions {
              langue
              libelle
              path
            }
          }
        }
      }
    }
    listeProduits: allMdx(
      sort: { fields: [frontmatter___priorite], order: [ASC] }
      filter: { frontmatter: { templateKey: { eq: "product-page" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
            locale
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            templateKey
            image_principale
            titre
            description
            categorie
            path
            type
            nom
          }
        }
      }
    }
  }
`
