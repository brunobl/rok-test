import React from "react"
import AngleDown from "../Helpers/AngleDown"
import LocalizedLink from "../i18n/localizedLink"

const MenuItem = ({ items, locale, title, link = "store" }) => (
  <div className="no-underline text-white border-teal-dark uppercase font-bold py-3 mx-4 flex dropdown hover:text-orange" style={{font: "normal normal bold 15px/21px Asap"}}>
    <LocalizedLink to={`/${link}/`} language={locale}>
      {title}
    </LocalizedLink>
    <AngleDown />
    <div className="absolute pt-2 opacity-0 dropdown-content transition duration-150 scale-0 z-40 m-auto mt-4">
      <div className="bg-black border border-light rounded-md shadow-xl">
        <div className="relative">
          {items.map(item => (
            <LocalizedLink
              key={item.path}
              to={`${item.path}`}
              language={locale}
              className="block w-full px-4 py-2 font-medium text-gray-light whitespace-no-wrap hover:bg-black-hover focus:outline-none hover:text-white focus:shadow-outline transition duration-300 ease-in-out"
              style={{font: "normal normal normal 15px/40px Krub"}}
            >
              {item.title}
            </LocalizedLink>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default MenuItem
