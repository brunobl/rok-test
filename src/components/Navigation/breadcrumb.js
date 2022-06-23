import React from "react"
import LocalizedLink from "../i18n/localizedLink"

// links : [
//              {title: 'Home', url: '/'}
//              {title: 'Blog', url: '/blog'}
//              {title: 'Article title', url: '/blog/...'}
//         ]

const Breadcrumb = ({ links, locale }) => {
  return (
    <nav
    className="breadcrumb max-w-screen-xl mx-auto md:px-6 px-3 pt-4 lg:pt-16 pb-4 md:pb-4"
      aria-label="breadcrumbs"
    >
      <ol className="list-reset flex text-grey-dark text-gray-light">
        {links.map((link, index) =>
          links.length === index + 1 && "is-active" ? (
            <li className="is-active" key={link.url}>
              {link.title}
            </li>
          ) : (
            <li key={link.url}>
              <LocalizedLink
                locale={locale}
                className="underline hover:text-white"
                to={link.url}
              >
                {link.title}
              </LocalizedLink>
              <span className="px-1">/</span>
            </li>
          )
        )}
      </ol>
    </nav>
  )
}

export default Breadcrumb
