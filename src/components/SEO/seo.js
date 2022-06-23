/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocalization } from "../i18n/useLocalization"

function SEO({ description, meta, title, baliseLink }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const { locale } = useLocalization()
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang: locale,
      }}
      title={title ? `%s | ${site.siteMetadata.title}` : `${site.siteMetadata.title}`}
      titleTemplate={title ? `${title} | ${site.siteMetadata.title}` : `${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >

      <link rel="alternate" />
      <link href="https://fonts.googleapis.com/css2?family=Asap:wght@400;500;700&display=swap" rel="stylesheet" type="text/css" />
      <link href="https://fonts.googleapis.com/css2?family=Krub:wght@300&display=swap" rel="stylesheet" type="text/css" />
      <link href="https://fonts.googleapis.com/css2?family=Saira:wght@400&display=swap" rel="stylesheet" type="text/css" />
      <link href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@1,800&display=swap" rel="stylesheet" type="text/css" />
      {baliseLink}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
