import React, { useState, useEffect } from "react"
import ProductImage from "../Images/ProductImage"
import Zoom from "../Helpers/Zoom"
/** 
 * ratio : (100% for 1:1), (56.25% for 16:9 ), (75% for 4:3), (66.66% for 3:2), (62.5% for 8:5)
 * zoom : false | true : Allow the zoomer
 * color : color of arrows
 * **/

// pour eslint voir :
// https://adhithiravi.medium.com/why-do-i-need-keys-in-react-lists-dbb522188bbb
// quelle est la source de ce code?
// autres carousels ? https://github.com/xiaolin/react-image-gallery

const Carousel = ({ carousel, currentImage, setCurrentImage, color, zoom = true, ratio = "100%"}) => {
  const [openModal, setOpenModal] = useState(false)
  
  useEffect(() => {
    carousel && setCurrentImage(carousel[0])
  },[]) //•••TODO remove warning *** note from brunobl: I'm not sure this is effective, I had to initialize currentImage in the product-page itself


  const prevImage = () => {
    const index = carousel.indexOf(currentImage)
    return index === 0
      ? carousel[carousel.length - 1]
      : carousel[index - 1]
        ? carousel[index - 1]
        : carousel[0]
  }

  const nextImage = () => {
    const index = carousel.indexOf(currentImage)
    return index === carousel.length - 1
      ? carousel[0]
      : carousel[index + 1]
        ? carousel[index + 1]
        : carousel[0]
  }

  return (
    <div className="w-full m-auto">
      <div>
        <div className="container-carousel border border-light relative md:m-0 m-auto">
          <div className="image-wrapper" style={{paddingTop: `${ratio}`}}>
            <div className="currentImg-carousel" >
                <button
                  onClick={() => setCurrentImage(nextImage())}
                  style={{padding: '100px 10px', paddingLeft: "30px"}}
                  className={"focus:outline-none outline-none w-14 h-10 pr-2 md:pr-3 pl-3 absolute cursor-pointer text-5xl font-bold leading-tight text-center z-10 inset-y-0 right-0 my-auto " + (color === "white" ? "text-white" : "text-black")}
                >
                  ›
                </button>
              <ProductImage onClick={() => setOpenModal(!openModal)} className="currentImg-carousel" src2={currentImage} />
              Image actuelle = {currentImage} =
              <button
                onClick={() => setCurrentImage(prevImage())}
                style={{padding: '100px 10px', paddingRight: "30px"}}
                className={"focus:outline-none w-14 h-10 pl-2 md:pl-3 pr-3 absolute cursor-pointer text-5xl font-bold leading-tight text-center z-10 inset-y-0 left-0 my-auto " + (color === "white" ? "text-white" : "text-black")}
              >
                ‹
              </button>
            </div>

            {zoom &&
              <button
                onClick={() => setOpenModal(!openModal)}
                className={"focus:outline-none cursor-zoom-in w-14 h-10 p-2 border rounded-s border-gray-light absolute cursor-pointer leading-tight z-10 bottom-0 m-2 right-0 " + (color === "white" ? "text-white" : "text-black")}
              >
                <Zoom />
              </button>
            }
          </div>

        </div>
        <div className="flex h-auto flex-wrap justify-center md:justify-start">
          {carousel.map(carousel =>
              <button
                className={"focus:outline-none cursor-pointer mr-3 mt-3 p-1 md:w-24 w-20 rounded border h-auto bg-black-light img-carousel-view "
                            +(carousel === currentImage ? "border-green" : "border-light" )}
                onClick={() => setCurrentImage(carousel)}
              >
                <ProductImage src2={carousel} />
              </button>
          )}
        </div>
      </div>
      <div className={"overflow-hidden block fixed modal w-full h-full top-0 left-0 z-40 flex items-center justify-center " + (!openModal && "none opacity-0 pointer-events-none")}>
        <button
          onClick={() => setOpenModal(!openModal)}
          className="focus:outline-none modal-overlay absolute w-full h-screen bg-black-light opacity-75 top-0 left-0 cursor-pointer"
        > </button>
        <button className={"focus:outline-none block w-full mx-3 bg-black-light py-8 shadow-lg flex items-center justify-center " + (openModal && "absolute")} onClick={() => setOpenModal(!openModal)}>
          <ProductImage className="h-auto w-8/12 m-3" maxWidth={true} src2={currentImage} />
        </button>
      </div>
    </div>
  )
}

export default Carousel
