import React from "react"
import { graphql } from "gatsby"
import { useLocalization } from "../components/i18n/useLocalization"

import Layout from "../layouts/layout"
import SEO from "../components/SEO/seo"
import BlogList from "../components/Blog/BlogList"
import HeaderPage from "../components/Header/headerPage"

const BlogPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const { locale } = useLocalization()

  const posts = data.listeArticles.edges.filter(
    post => post.node.fields.locale === locale
  )

  return (
    <Layout title={siteTitle}>
      <SEO title="Blog" />
      <HeaderPage title="Blog" />
      <div className="w-full max-w-screen-xl relative mx-auto md:px-4 mx-3 pb-40 md:pb-24 min-h-screen-80">
        <BlogList posts={posts} />
      </div>
    </Layout>
  )
}

export default BlogPage

export const blogQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    listeArticles: allMdx(
      sort: { fields: [frontmatter___date], order: [DESC] }
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
