import React from "react"
import Image from "../Images/Image"

const ListParteners = ({ locations }) => {
  return (
    <ul className="text-white">
      {locations.map(location => (
        <li>
          <div className="md:flex border-light border my-5 bg-black-light items-center mx-4">
            <div className="px-6 p-8 md:border-r border-light md:border-b-0 border-r-0 border-b">
              <Image src={location.image} className="w-48 m-auto" />
            </div>
            <div className="min-h-full p-10">
              <p className="text-orange">{location.adresse}</p>
              <p className="pt-4">{location.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ListParteners
