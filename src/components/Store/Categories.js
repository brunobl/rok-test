import React from "react"
import LocalizedLink from "../i18n/localizedLink"
import translate from "../i18n/translate"

const Categories = ({ categories, locale }) => {
  return (
    <div className="text-white lg:text-m lg:px-2 w-64 lg:mt-10">
      <div>
        <p className="my-3 border-orange border-b-2 pb-2 font-semibold">
          {translate("categorie_produits", locale)}
        </p>
      </div>
      <ul>
        {categories.map((category, index) => (
          <LocalizedLink
            to={`/.${category.categoryPath}`}
            langage={locale}
            key={category.categoryPath}
          >
            <li className={"my-3 pb-3 text-left font-thin hover:text-gray-light " + (categories.length !== index + 1 && "border-light border-b")}>
              {category.categoryTitle}
            </li>
          </LocalizedLink>
        ))}
      </ul>
    </div>
  )
}

export default Categories
