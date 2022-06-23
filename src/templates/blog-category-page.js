import React from "react"
import { graphql } from "gatsby"
import { useLocalization } from "../components/i18n/useLocalization"

import Layout from "../layouts/layout"
import SEO from "../components/SEO/seo"
import BlogList from "../components/Blog/BlogList"
import Breadcrumb from "../components/Navigation/breadcrumb"
import HeaderPage from "../components/Header/headerPage"
import getCategoryLocalizedAttributes from "../components/Helpers/getCategoryLocalizedAttributes"
import translate from "../components/i18n/translate"

const BlogCategoryPage = ({ data }) => {
  const { locale } = useLocalization()
  // Select category
  const categorie = data.categorie
  const { categoryTitle, categoryPath } = getCategoryLocalizedAttributes(
    categorie,
    locale
  )

  // Posts related to this category
  const posts = data.listeArticles.edges
    .filter(post => post.node.fields.locale === locale)
    .filter(post =>
      post.node.frontmatter.categorie.includes(
        categorie.frontmatter.nom.toLowerCase()
      )
    )

  // Breadcrumb
  const linksBreadcrumb = [
    { title: translate("accueil", locale), url: "/" },
    { title: translate("liste_articles", locale), url: "/blog" },
    { title: categoryTitle, url: categoryPath },
  ]

  return (
    <Layout>
      <SEO title={`Store ${categoryTitle}`} />
      <Breadcrumb links={linksBreadcrumb} locale={locale} />
      <HeaderPage title={`< ${categoryTitle} >`} />
      <div className="max-w-screen-xl m-auto flex">
        <BlogList posts={posts} />
      </div>
    </Layout>
  )
}

export default BlogCategoryPage

export const CategoryBlogPageBySlug = graphql`
  query CategoryBlogPageBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    categorie: mdx(id: { eq: $id }) {
      frontmatter {
        nom
        type
        couleur
        traductions {
          langue
          libelle
          path
        }
      }
    }
    listeArticles: allMdx(
      sort: { fields: [frontmatter___priorite], order: [ASC] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
