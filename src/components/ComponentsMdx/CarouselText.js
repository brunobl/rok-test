import React, { useState } from "react"
import Carousel from "../Carousel/Carousel"

const CarouselText = ({ carousel, title, textPosition = "right", children }) => {
    const [currentImage, setCurrentImage] = useState()

    return (
        <div className="md:flex m-1 flex-wrap md:my-4 my-2">
            <div
                className={
                    "rounded-md overflow-hidden " +
                    (textPosition === "left" ? "order-last" : "")
                }
            >
                <Carousel
                    carousel={carousel}
                    currentImage={currentImage}
                    setCurrentImage={setCurrentImage}
                    color="white"
                    zoom={false}
                    ratio="62.5%"
                />
            </div>
            <div className="flex-1 p-3 min-h-screen-40">
                <h2 className="text-3xl font-medium antialiased tracking-tight">
                    {title}
                </h2>
                <div className="text-white md:m-10 md:m-4 description">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default CarouselText
