import React from "react"
import Image from "../Images/Image"

const AnnotedImage = ({ src, title, textPosition = "right", children }) => (
  <div className="flex m-1 flex-wrap md:my-4 my-2 sm:mx-8">
    <div
      className={
        "w-full md:w-1/2 rounded-md overflow-hidden " +
        (textPosition === "left" ? "md:order-last sm:order-first " : "")
      }
    >
      <Image src={src} maxWidth={true}/>
    </div>
    <div className="flex-1 p-3 w-full md:w-1/2 my-auto md:min-h-screen-40">
      {
        title &&
        <h2 className="text-3xl font-medium antialiased tracking-tight">
          {title}
        </h2>
      }
      <div className="text-white md:m-10 md:m-4 description">
        {children}
      </div>
    </div>
  </div>
)

export default AnnotedImage
