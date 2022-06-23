import React from "react"
import ProductImage from "../Images/ProductImage"
import LocalizedLink from "../i18n/localizedLink"
import { useLocalization } from "../i18n/useLocalization"

const ProductBox = ({ product }) => {
  const { titre, image_principale, path } = product.node.frontmatter
  const { locale } = useLocalization()

  return (
    <LocalizedLink to={`${path}`} locale={locale}>
      <div className="m-2 bg-black-light col-span-1">
        <div className="container-image">
          <div className="item-image">
            <ProductImage className="item-image" src2={image_principale} />
          </div>
        </div>
        <div className="text-center text-white p-3 pt-4 bg-black">
          <p style={{font: "normal normal bold 16px/27px Saira"}}>{titre}</p>
        </div>
      </div>
    </LocalizedLink>
  )
}

export default ProductBox
