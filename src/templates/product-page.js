import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { useLocalization } from "../components/i18n/useLocalization"
import Layout from "../layouts/layout"
import SEO from "../components/SEO/seo"
import Various from "../components/Store/Various"
import Carousel from "../components/Carousel/Carousel"
import Related from "../components/Store/Related"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Breadcrumb from "../components/Navigation/breadcrumb"
import translate from "../components/i18n/translate"
import CheckboxCircle from "../components/Helpers/CheckboxCircle"

const ProductPage = ({ data }) => {

  const { locale } = useLocalization()
  const post = data.produit
  const allPosts = data.allProduits.edges
  const imagesSecondaire = post.frontmatter.images_secondaire ? post.frontmatter.images_secondaire : []
  const related = allPosts.filter(product => (post.frontmatter.produits_lies && post.frontmatter.produits_lies.some(produits_lie => produits_lie.id === product.node.frontmatter.id)))

  const siteTitle = data.site.siteMetadata.title
  const [currentImage, setCurrentImage] = useState()

  const linksBreadcrumb = [
    { title: translate("accueil", locale), url: "/" },
    { title: translate("liste_produits", locale), url: "/store" },
    { title: post.frontmatter.titre, url: data.produit.frontmatter.path },
  ]

  // [brunobl] I extracted the variables here as the behavior was buggy otherwise
  const carousel = [
    post.frontmatter.image_principale,
    ...imagesSecondaire,
    ...post.frontmatter.variante.map(various => various.image),
  ].reduce((listeSansDoublon, item) => { return listeSansDoublon.includes(item) ? listeSansDoublon : [...listeSansDoublon, item]}, [])
  if (carousel && !currentImage)
    setCurrentImage(carousel[0])

  return (
    <Layout title={siteTitle}>
      <SEO
        title={post.frontmatter.titre}
        description={post.frontmatter.meta_description || post.excerpt}
      />
      <Breadcrumb links={linksBreadcrumb} locale={locale} />

      <div className="pt-4 pb-4 md:pb-4">
        <div className="md:flex max-w-screen-xl mx-auto px-6">
          <div className="md:w-1/2">
            <Carousel
              carousel={carousel}
              currentImage={currentImage}
              setCurrentImage={setCurrentImage}
              color="white"
            />
          </div>
          <div className="md:px-10 pt-1">
            <div className="md:flex md:items-center justify-start">
              <h1 className="text-white text-3xl" style={{font: "normal normal bold 38px/43px Asap"}}>
                {post.frontmatter.titre}
              </h1>
              {/*
              <span className="md:ml-3 text-sm bg-green px-1 rounded text-green inline-flex items-center">
                  <CheckboxCircle />
                <span className="px-1">
                  En stock
                </span>
              </span>
              */}
            </div>
            {post.frontmatter.variante.map(various => (
              <Various
                currentImage={currentImage}
                setCurrentImage={setCurrentImage}
                various={various}
              />
            ))}
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-6">
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
        <Related related={related} />
      </div>
    </Layout>
  )
}

export default ProductPage


export const pageQuery = graphql`
  query ProductPageBySlug($slug: String!, $locale: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allProduits: allMdx(
      filter: {
        fields: { locale: { eq: $locale }}
        frontmatter: { templateKey: { eq: "product-page" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            id
            titre
            image_principale
            path
          }
        }
      }
    }
    produit: mdx(
      frontmatter: { path: { eq: $slug } }
      fields: { locale: { eq: $locale } }
    ) {
      id
      body
      fields {
        locale
      }
      body
      frontmatter {
        id
        titre
        image_principale
        images_secondaire
        path
        variante {
          description
          prix
          ref
          titre
          image
        }
        produits_lies {
          id
        }
        meta_description
      }
    }
  }
`
