import React from "react"
import AngleDown from "../Helpers/AngleDown"
import LocalizedLink from "../i18n/localizedLink"



const MenuItemMobile = ({ items, locale, title}) => (
  <div className="w-full no-underline text-white border-teal-dark uppercase font-bold py-3 dropdown border-b borer-black-light" style={{font: "normal normal bold 15px/17px Asap"}}>
    <input type="checkbox" value="selected" id={title} className="hidden toggle-input"/>
    <div className="flex items-center justify-between">
        <label htmlFor={title} className="flex justify-between w-full block cursor-pointer py-3 px-2 lg:p-6 text-sm lg:text-base font-bold">
          {title}
          <AngleDown />
        </label>
    </div>

    <div className="pt-2 mega-menu transition duration-150 z-40  mt-4">
      <div className="text-white">
        <div className="relative">
          {items.map(item => (
            <LocalizedLink
              key={item.path}
              to={`${item.path}`}
              language={locale}
              className="block w-full text-white py-2 font-medium whitespace-no-wrap hover:bg-black-hover focus:outline-none hover:text-white focus:shadow-outline transition duration-300 ease-in-out"
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

export default MenuItemMobile
