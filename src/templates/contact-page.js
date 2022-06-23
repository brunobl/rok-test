import React from "react"
import Layout from "../layouts/layout"
import SEO from "../components/SEO/seo"
import HeaderPage from "../components/Header/headerPage"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from 'gatsby'

const contactPage = ({data}) => {
  return (
    <Layout>
      <SEO title={data.contactPage.frontmatter.titre} />
      <HeaderPage title={data.contactPage.frontmatter.titre} />
      <div className="my-10">
        <MDXRenderer >{data.contactPage.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default contactPage

export const contactPageQuery = graphql`
  query contactPage($slug: String!, $locale: String!) {
    contactPage: mdx(frontmatter: { path: { eq: $slug }}, fields: {locale: {eq: $locale}}) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter{
        titre
      }
    }
  }
`
