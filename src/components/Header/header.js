import React, { useState } from "react"
import PropTypes from "prop-types"
import SearchBar from "./searchBar"
import Languages from "./languages"
import SocialNetworks from "../Social/socialNetworks"
import LocalizedLink from "../i18n/localizedLink"
import MenuLine from "../Helpers/MenuLine"
import CloseLine from "../Helpers/CloseLine"
import HeaderMobile from "./headerMobile"

const Header = ({ locale, allPages, productsCategories, postsCategories }) => {
  const [responsiveHeader, setResponsiveHeader] = useState(false);
  return (
    <nav className="md:p-6 p-3 h-22 max-w-screen-xl m-auto">
      <div className="items-center flex justify-between flex-1">
        <LocalizedLink
          to="/"
          language={locale}
          className="flex items-center flex-shrink-0 mr-6"
        >
          <img src={`../../../logo.svg`} alt="logo-header" width="160" height="50" className="w-40 h-42px l-52 t-30" />
        </LocalizedLink>
        <div className="lg:flex lg:flex-grow min-w-0">
          <div className="hidden lg:flex w-full">
            <SearchBar className="hidden lg:flex" locale={locale} />
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-between">
            <Languages locale={locale} />
            <SocialNetworks />
          </div>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 text-white focus:outline-none" aria-label="menu-icon" onClick={() => setResponsiveHeader(!responsiveHeader)}>
            {responsiveHeader ? <CloseLine color="#FFF" /> : <MenuLine color="#FFF" />}
          </button>
        </div>
      </div>
      <HeaderMobile locale={locale} allPages={allPages} productsCategories={productsCategories} postsCategories={postsCategories} responsiveHeader={responsiveHeader} />
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
