import React, { useState, useEffect, useRef } from "react"
import Layout from "../layouts/layout"
import { useLocalization } from "../components/i18n/useLocalization"
import BlogList from "../components/Blog/BlogList"
import BoxHomePage from "../components/Store/BoxHomePage"
import translate from "../components/i18n/translate"
import SEO from "../components/SEO/seo"
import { graphql } from "gatsby"

const HomePage = ({ data }) => {
  const { locale } = useLocalization()
  const posts = data.listeDernierArticles.edges.filter(
    post => post.node.fields.locale === locale
  )
  const { header, produits } = data.homePage.frontmatter

  const [imageHeader, setImageHeader] = useState(header[0].image_compresse)
  const ref = useRef()

  const onLoad = () => {
    setImageHeader(header[0].image)
  }

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onLoad()
    }
  }, [ref, onLoad])

  //••TODO title in SEO was added to remove warning, but this should be moved somewhere else.
  return (
    <Layout locale={locale}>
      <SEO title="ROK Fishing Performance - Concepteur de Produits pour la Pêche à la Carpe" />
      <div className="min-h-screen-80">
        <div
          className="flex items-center header-homePage margin-auto w-full lazy-background bg-center"
          style={{ backgroundImage: `url(../${imageHeader})` }}
        >
          <img
            ref={ref}
            className="hidden"
            src={`../${header[0].image}`}
            alt="loading"
            onLoad={onLoad}
            width="0"
            height="0"
          />
          <div className="md:mx-20 mx-10">
            <h1 className="uppercase text-white md:text-6xl text-5xl font-light leading-snug p-0">
              {header[0].titre1}
            </h1>
            <h1 className="uppercase text-white md:text-6xl text-5xl leading-snug p-0">
              <b>{header[0].titre2}</b>
            </h1>
            <h1 className="uppercase text-white md:text-6xl text-5xl font-light leading-snug p-0">
              {header[0].titre3}
            </h1>
            <div className="my-10">
              <a
                className="bg-orange hover:bg-blue-700 text-white py-3 px-6 rounded"
                href={header[0].boutonLien}
              >
                {header[0].boutonTexte}
              </a>
            </div>
          </div>
        </div>
        <div className="my-10 w-full">
          <div className="grid md:grid-cols-4 max-w-screen-xl m-auto w-full px-2 md:px-0">
            <BoxHomePage
              taille="2"
              placementText="end"
              title={produits[0].titre}
              link={produits[0].lien}
              image={produits[0].image}
              locale={locale}
            />
            <BoxHomePage
              taille="1"
              placementText="start"
              title={produits[1].titre}
              link={produits[1].lien}
              image={produits[1].image}
              locale={locale}
            />
            <BoxHomePage
              taille="1"
              placementText="end"
              title={produits[2].titre}
              link={produits[2].lien}
              image={produits[2].image}
              locale={locale}
            />
            <BoxHomePage
              taille="1"
              placementText="end"
              title={produits[3].titre}
              link={produits[3].lien}
              image={produits[3].image}
              locale={locale}
            />
            <BoxHomePage
              taille="1"
              placementText="start"
              title={produits[4].titre}
              link={produits[4].lien}
              image={produits[4].image}
              locale={locale}
            />
            <BoxHomePage
              taille="2"
              placementText="end"
              title={produits[5].titre}
              link={produits[5].lien}
              image={produits[5].image}
              locale={locale}
            />
          </div>
        </div>
        <div className="w-full related">
          <div className="max-w-screen-xl w-full text-center m-auto py-14 md:p-8 px-4">
            <h1 className="uppercase text-white">
              {translate("titre_section_blog_homepage", locale)}
            </h1>
            <BlogList posts={posts} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage

export const HomePageQuery = graphql`
  query($locale: String!) {
    homePage: mdx(
      frontmatter: { templateKey: { eq: "home-page" } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        header {
          titre1
          titre2
          titre3
          boutonLien
          boutonTexte
          image
          image_compresse
        }
        produits {
          titre
          lien
          image
        }
      }
    }
    listeDernierArticles: allMdx(
      limit: 4
      sort: { fields: [frontmatter___date], order: [DESC] }
      filter: {
        frontmatter: { templateKey: { eq: "blog-post" } }
        fields: { locale: { eq: $locale } }
      }
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
