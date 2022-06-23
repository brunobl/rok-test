import React from "react"
import MenuItem from "../Menu/MenuItem"
import translate from "../i18n/translate"

const Navbar = ({ locale, allPages, productsCategories, postsCategories }) => {
  const discoveryPage = allPages.filter(
    post =>
      post.node.fields.locale === locale && !post.node.frontmatter.footer &&
      ["static-page"].includes(post.node.frontmatter.templateKey)
  )
  const resellerPage = allPages.filter(
    post =>
      post.node.fields.locale === locale &&
      ["revendeurs-page", "partenaires-page"].includes(
        post.node.frontmatter.templateKey
      )
  )

  return (
    <nav className="bg-black-light px-6 shadow-md hidden lg:block">
      <div className="-mb-px flex items-center justify-center">
        <MenuItem
          title={translate("menu_produits", locale)}
          link="store"
          locale={locale}
          items={productsCategories.map(category => ({
            path: category.categoryPath,
            title: category.categoryTitle,
          }))}
        />

        <MenuItem
          title={translate("menu_decouvrir", locale)}
          locale={locale}
          items={discoveryPage.map(discovery => ({
            path: discovery.node.frontmatter.path,
            title: discovery.node.frontmatter.titre,
          }))}
        />

        <MenuItem
          title={translate("menu_revendeurs", locale)}
          locale={locale}
          items={resellerPage.map(reseller => ({
            path: reseller.node.frontmatter.path,
            title: reseller.node.frontmatter.titre,
          }))}
        />

        <MenuItem
          title={translate("menu_actualites", locale)}
          locale={locale}
          link="blog"
          items={postsCategories.map(category => ({
            path: category.categoryPath,
            title: category.categoryTitle,
          }))}
        />
      </div>
    </nav>
  )
}

export default Navbar
