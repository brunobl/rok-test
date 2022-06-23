import React from "react"
//import Image from "../Images/Image"
import SocialNetworks from "../Social/socialNetworks"
import translate from "../i18n/translate"
import LocalizedLink from "../i18n/localizedLink"
import MapPin from "../Helpers/MapPin"
import Mail from "../Helpers/Mail"

const Footer = ({logo, locale, allPages, productsCategories, postsCategories }) => {
  const discoveryPage = allPages.filter(
    post =>
      post.node.fields.locale === locale && !post.node.frontmatter.footer &&
      ["static-page"].includes(post.node.frontmatter.templateKey)
  )
  const footerPage = allPages.filter(
    post =>
      post.node.fields.locale === locale && post.node.frontmatter.footer &&
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
    <footer className="text-footer">
      <div className="py-1 pb-1 text-gray-light m-auto w-full">
        <div className="w-full flex flex-wrap justify-center">
          <div className="lg:w-1/4 w-full md:p-8 mx-4">
            <img src={logo} alt="logo-header" className="w-48  mb-6"  width="160" height="50" />
            <p className="pb-4">{translate("description_footer", locale)}</p>
            <div className="py-4 flex">
              <div className="pr-4 pl-3">
                <MapPin />
              </div>
              <div>
                <p className="py-0">PLASTILYS</p>
                <p className="py-0">Z.A. des Granges Hautes</p>
                <p className="py-0">17 rue du Bief Pérou,</p>
                <p className="py-0">21130 Auxonne, France</p>
              </div>
            </div>
            <div className="py-4 flex pl-3">
              <div className="pr-4">
                <Mail />
              </div>
              <div>
                <LocalizedLink to="/contact" language={locale}>
                  <p className="hover:text-orange">{translate("nous_contacter", locale)}</p>
                </LocalizedLink>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap md:m-4 md:m-0">
            <div className="pt-12 md:px-10 px-4">
              <div className="text-white pb-6 title-categorie-footer font-bold">
                {translate("titre_produits_footer", locale)}
              </div>
              <div className="grid grid-cols-2 md:gap-x-10 gap-x-4">
                {productsCategories.map(category => (
                  <LocalizedLink
                    key={category.categoryPath}
                    to={`${category.categoryPath}`}
                    language={locale}
                    className="my-2 hover:text-white link-footer"
                  >
                    {category.categoryTitle}
                  </LocalizedLink>
                ))}
              </div>
            </div>
            <div className="pt-12 flex-1 w-48 px-4">
              <div className="text-white pb-6 title-categorie-footer font-bold">
                {translate("titre_decouvrir_footer", locale)}
              </div>
              {discoveryPage.map(discovery => (
                <LocalizedLink
                  key={discovery.node.frontmatter.path}
                  to={`${discovery.node.frontmatter.path}`}
                  language={locale}
                  className="py-2 block hover:text-white link-footer"
                >
                  {discovery.node.frontmatter.titre}
                </LocalizedLink>
              ))}
            </div>
            <div className="pt-12 flex-1 w-48 px-4">
              <div className="text-white pb-6 title-categorie-footer font-bold">
                {translate("titre_blog_footer", locale)}
              </div>
              {postsCategories.map(category => (
                <LocalizedLink
                  key={category.categoryPath}
                  to={`${category.categoryPath}`}
                  language={locale}
                  className="py-2 block hover:text-white link-footer"
                >
                  {category.categoryTitle}
                </LocalizedLink>
              ))}
            </div>
            <div className="pt-12 flex-1 w-48 md:px-0 px-4">
              <div className="text-white pb-6 title-categorie-footer font-bold">
                {translate("titre_revendeurs_footer", locale)}
              </div>
              {resellerPage.map(reseller => (
                <LocalizedLink
                  key={reseller.node.frontmatter.path}
                  to={`${reseller.node.frontmatter.path}`}
                  language={locale}
                  className="py-2 block hover:text-white link-footer"
                >
                  {reseller.node.frontmatter.titre}
                </LocalizedLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 border-t border-gray-light pb-5 pt-5">
        <div className="max-w-screen-xl m-auto w-full md:flex">
          <div className="md:flex flex-wrap w-full md:justify-start justify-center md:ml-4">
            <p className="text-orange mt-3 text-center">ROK Fishing Performance </p>
            <p className="text-gray-light pl-2 mt-3 text-center">
              {translate("footer_text", locale)}
            </p>
            <div className="mt-3 text-center">
              {footerPage.map(discovery => (
                <LocalizedLink
                  key={discovery.node.frontmatter.path}
                  to={`${discovery.node.frontmatter.path}`}
                  language={locale}
                  className="text-gray-light pl-2 hover:text-white underline"
                >
                  {discovery.node.frontmatter.titre + "."}
                </LocalizedLink>
              ))}
            </div>
          </div>
          <div className="flex md:w-1/4 md:justify-end m-auto mt-4 md:mt:0">
              <SocialNetworks />
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
