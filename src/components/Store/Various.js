import React from "react"
import ProductImage from "../Images/ProductImage"

const Various = ({ various, currentImage, setCurrentImage }) => {
  const { description, prix, image, ref } = various
  return (
    <div className={"grid md:grid-cols-12 grid-cols-6 gap-1 border bg-black-light m-1 items-center my-2 "+(currentImage === image ? "  border-green" : " border-light")}>
      <button
        onClick={() => setCurrentImage(image)}
        className="col-span-2 md:col-span-2 focus:outline-none py-1 md:py-1 px-1 md:px-2 border-r border-light"
      >
        <ProductImage src2={image} className="w-16 m-auto" />
      </button>
      <div className="col-span-4 md:col-span-3 col-span-2 text-center p-2 px-4 flex md:block">
        <p className="text-gray-light md:my-0 md:mx-0 my-1 mx-2" style={{font: "normal normal normal 12px/19px Saira"}}>{ref}</p>
        <p className="text-orange font-bold text-lg">{(prix+"").replace(".",",")} €</p>
      </div>
      <div className="col-span-6 md:col-span-7 border-light md:border-l md:border-t-0 border-t">
        <p className="text-white py-3 px-3" style={{font: "normal normal normal 15px/17px Asap"}}>{description}</p>
      </div>
    </div>
  )
}

export default Various
