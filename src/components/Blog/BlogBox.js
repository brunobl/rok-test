import React from "react"
import Image from "../Images/Image"
import LocalizedLink from "../i18n/localizedLink"
import { useLocalization } from "../i18n/useLocalization"
import useBlogCategory from "./useBlogCategory"
import translate from "../i18n/translate"
import ArrowRight from "../Helpers/ArrowRight"

const BlogBox = ({ post }) => {
  const { titre, image_principale, path, date, categorie } = post
  const { locale } = useLocalization()
  const options = { year: "numeric", month: "2-digit", day: "2-digit" }
  const category = useBlogCategory(categorie[0], locale)
  return (
    <div className="md:mx-2 mx-3 md:m-2 my-2 bg-black-light col-span-1 rounded">
      <Image src={image_principale} className="rounded-t" />
      <div className="p-4">
        <div className="text-white py-4 text-left font-bold">
          <p style={{minHeight: "51px"}}>{titre}</p>
        </div>
        <div className="text-white flex items-center">
          <span className="date mr-3 text-gray-light">
            {new Date(date).toLocaleDateString("fr-FR", options)}
          </span>
          <div
            style={{
              backgroundColor: category && category.couleur,
            }}
            className="ml-auto inline-block self-end text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded"
          >
            {category.categoryTitle}
          </div>
        </div>
      </div>
      <LocalizedLink to={`${path}`} locale={locale}>
        <div className="text-white flex p-4 border-light border-t cursor-pointer flex justify-between lien-article">
          <p>{translate("lire_plus_blog", locale)}</p>
          <ArrowRight />
        </div>
      </LocalizedLink>
    </div>
  )
}

export default BlogBox
