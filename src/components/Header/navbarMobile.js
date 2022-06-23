import React from "react"
import MenuItemMobile from "../Menu/MenuItemMobile"
import translate from "../i18n/translate"

const NavbarMobile = ({ locale, allPages, productsCategories, postsCategories }) => {
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
    <nav className="px-6 pt-2 shadow-md">
      <div className="-mb-px justify-center">
        <MenuItemMobile
          title={translate("menu_produits", locale)}
          locale={locale}
          items={productsCategories.map(category => ({
            path: category.categoryPath,
            title: category.categoryTitle,
          }))}
        />

        <MenuItemMobile
          title={translate("menu_decouvrir", locale)}
          locale={locale}
          items={discoveryPage.map(discovery => ({
            path: discovery.node.frontmatter.path,
            title: discovery.node.frontmatter.titre,
          }))}
        />

        <MenuItemMobile
          title={translate("menu_revendeurs", locale)}
          locale={locale}
          items={resellerPage.map(reseller => ({
            path: reseller.node.frontmatter.path,
            title: reseller.node.frontmatter.titre,
          }))}
        />

        <MenuItemMobile
          title={translate("menu_actualites", locale)}
          locale={locale}
          items={postsCategories.map(category => ({
            path: category.categoryPath,
            title: category.categoryTitle,
          }))}
        />
      </div>
    </nav>
  )
}

export default NavbarMobile
