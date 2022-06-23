import { graphql, useStaticQuery } from "gatsby"
import getCategoryLocalizedAttributes from "../Helpers/getCategoryLocalizedAttributes"

const useProductCategory = (categorie, locale) => {
  const data = useStaticQuery(graphql`
    query {
      listeCategoriesBlogPosts: allMdx(
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
    edge => edge.node.frontmatter.nom === categorie,
  )


  if (matchingCategory) {
    const { nom } = matchingCategory.node.frontmatter
    const { categoryTitle, categoryPath } = getCategoryLocalizedAttributes(
      matchingCategory.node,
      locale
    )
    return { nom, categoryTitle, categoryPath }
  }

  return {
    nom: "",
    categoryTitle: "Non défini",
    categoryPath: "/",
  }
}

export default useProductCategory
