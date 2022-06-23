import { graphql, useStaticQuery } from "gatsby"
import getCategoryLocalizedAttributes from "../Helpers/getCategoryLocalizedAttributes"

const useBlogCategory = (categorie, locale) => {
  const data = useStaticQuery(graphql`
    query {
      listeCategoriesBlogPosts: allMdx(
        filter: { frontmatter: { templateKey: { eq: "blog-category-page" } } }
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
              couleur
              traductions {
                langue
                libelle
                path
              }
            }
          }
        }
      }
    }
  `)

  const matchingCategory = data.listeCategoriesBlogPosts.edges.find(
    edge => edge.node.frontmatter.nom === categorie
  )

  if (matchingCategory) {
    const { nom, couleur } = matchingCategory.node.frontmatter
    const { categoryTitle, categoryPath } = getCategoryLocalizedAttributes(
      matchingCategory.node,
      locale
    )
    return { nom, couleur, categoryTitle, categoryPath }
  }
  return {
    nom: "",
    couleur: "",
    categoryTitle: "Non défini",
    categoryPath: "/",
  }
}

export default useBlogCategory
