import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { useLocalization } from "../components/i18n/useLocalization"
import { Tabs } from "../components/ComponentsMdx/Tabs"
import Image from "../components/Images/Image"
import Header from "../components/Header/header"
import Navbar from "../components/Header/navbar"
import Footer from "../components/Footer/footer"
import getCategoryLocalizedAttributes from "../components/Helpers/getCategoryLocalizedAttributes"
import AnnotedImage from "../components/ComponentsMdx/AnnotedImage"
import YouTube from "../components/ComponentsMdx/YouTube"
import CarouselText from "../components/ComponentsMdx/CarouselText"
import Team from "../components/ComponentsMdx/Team"
import Contacts from "../components/ComponentsMdx/Contacts"
import Avatar from "../components/ComponentsMdx/Avatar"
import Contact from "../components/ComponentsMdx/Contact"

const Layout = ({ children }) => {
  const { locale } = useLocalization()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      categoriesProduits: allMdx(
        filter: { frontmatter: { templateKey: { eq: "store-category-page" } } }
        sort: { fields: frontmatter___priorite }
      ) {
        edges {
          node {
            fields {
              locale
            }
            frontmatter {
              traductions {
                langue
                libelle
                path
              }
            }
          }
        }
      }
      categoriesArticles: allMdx(
        filter: { frontmatter: { templateKey: { eq: "blog-category-page" } } }
        sort: { fields: frontmatter___priorite }
      ) {
        edges {
          node {
            fields {
              locale
            }
            frontmatter {
              traductions {
                langue
                libelle
                path
              }
            }
          }
        }
      }
      allMdx {
        edges {
          node {
            fields {
              locale
            }
            frontmatter {
              templateKey
              titre
              nom
              type
              path
              footer
              traductions {
                langue
                libelle
                path
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const shortcodes = { Avatar, Contact, Contacts, Tabs, Team, Image, AnnotedImage, YouTube, CarouselText }
  /* eslint-disable */
  const designSystem = {
    p: props => <p {...props} className="mb-3" style={{font: "normal normal normal 16px/25px Asap"}} />,
    ul: props => <ul {...props} className="list-disc ml-4" />,
    h1: props => (
      <h1
        {...props}
        className="text-4xl font-bold antialiased tracking-tight"
      />
    ),
    h2: props => (
      <h1
        {...props}
        className="text-3xl font-medium antialiased tracking-tight"
      />
    ),
    h3: props => (
      <h1
        {...props}
        className="text-2xl font-normal antialiased tracking-tight"
      />
    ),
  }
  /* eslint-enable */
  const components = { ...shortcodes, ...designSystem }

  const categoriesProduits = data.categoriesProduits.edges.map(edge =>
    getCategoryLocalizedAttributes(edge.node, locale)
  )
  const postsCategories = data.categoriesArticles.edges.map(edge =>
    getCategoryLocalizedAttributes(edge.node, locale)
  )

  return (
    <>
      <Header 
        locale={locale} 
        logo={`~/../../logo.svg`}
        allPages={data.allMdx.edges}
        productsCategories={categoriesProduits}
        postsCategories={postsCategories}
      />
      <Navbar
        locale={locale}
        productsCategories={categoriesProduits}
        postsCategories={postsCategories}
        allPages={data.allMdx.edges}
      />
      <main>
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>
      <Footer 
        logo={`../../../logo.svg`}
        locale={locale} 
        productsCategories={categoriesProduits}
        postsCategories={postsCategories}
        allPages={data.allMdx.edges}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
