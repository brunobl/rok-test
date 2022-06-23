import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { dateFormat } from "../components/Helpers/dateFormat"
import Breadcrumb from "../components/Navigation/breadcrumb"
import Layout from "../layouts/layout"
import SEO from "../components/SEO/seo"
import SharePost from "../components/Blog/SharePost"
import { useLocalization } from "../components/i18n/useLocalization"
import useBlogCategory from "../components/Blog/useBlogCategory"
import translate from "../components/i18n/translate"

const BlogPost = ({ data, pageContext, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const { locale } = useLocalization()
  const category = useBlogCategory(post.frontmatter.categorie[0], locale)
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.titre}
        description={post.frontmatter.description || post.excerpt}
      />
      <Breadcrumb
        locale={locale}
        links={[
          { title: "Accueil", url: "/" },
          { title: "Blog", url: "/blog" },
          { title: post.frontmatter.titre, url: "/" },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 xl:max-w-8xl xl:px-0">
        <div className="md:flex md:items-center md:justify-start">
          <div className="md:block hidden">
            <SharePost
              slug={post.frontmatter.path}
              title={post.frontmatter.titre}
            />
          </div>

          <article className="text-white">
            <header className="text-center my-10">
              <h1 className="my-6 leading-none sm:text-6xl md:text-5xl text-3xl">{post.frontmatter.titre}</h1>
              <p className="date">
                {dateFormat(post.frontmatter.date, locale)} -- {" "}
                <div
                  style={{
                    backgroundColor: category && category.couleur,
                  }}
                  className="ml-auto inline-block self-end text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 text-blue-700 rounded"
                >
                  {category.categoryTitle}
                </div>
              </p>
              <div className="md:hidden block">
                <SharePost
                  slug={post.frontmatter.path}
                  title={post.frontmatter.titre}
                />
              </div>
            </header>
            <MDXRenderer>{post.body}</MDXRenderer>
            <div className="flex flex-wrap justify-between my-8">
              {previous && (
                <div className="flex-start border-light border rounded">
                  <Link to={`${previous.frontmatter.path}`} rel="prev">
                    <p className="p-3 sm:text-base text-xs">← {translate("precedent_article_blog", locale)}</p>
                  </Link>
                </div>
              )}
              {next && (
                <div className="flex-end border-light border rounded">
                  <Link to={`${next.frontmatter.path}`} rel="next">
                    <p className="p-3 sm:text-base text-xs">{translate("suivant_article_blog", locale)} →</p>
                  </Link>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(frontmatter: { path: { eq: $slug } }) {
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
