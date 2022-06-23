import React from "react"
import Layout from "../layouts/layout"
import { useLocalization } from "../components/i18n/useLocalization"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from 'gatsby'
import SEO from "../components/SEO/seo"
import HeaderPage from "../components/Header/headerPage"

const StaticPage = ({ data }) => {
  const { locale } = useLocalization()
  return (
    <Layout locale={locale}>
      <SEO title={data.page.frontmatter.titre} />

      <div className="min-h-screen-80 flex-col ">
        <HeaderPage title={data.page.frontmatter.titre} />
        <div className="text-white mt-4 mx-auto max-w-screen-xl px-3 md:px-4 my-3">
          <MDXRenderer>{data.page.body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}

export default StaticPage

export const pageQuery = graphql`
  query defaultStaticPage($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    page: mdx(frontmatter: { path: { eq: $slug }}) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        titre
        date(formatString: "MMMM DD, YYYY")
        description
        categorie
        path
      }
    }
  }
`
