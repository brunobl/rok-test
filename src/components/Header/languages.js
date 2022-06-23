import React, { useState } from "react"
import LocalizedLink from "../i18n/localizedLink"
import translate from "../i18n/translate"
import FranceFlag from "../Helpers/FranceFlag"
import AngletterreFlag from "../Helpers/AngletterreFlag"
import ArrowDown from "../Helpers/ArrowDown"


// ••TODO: remove nested <button

const Languages = ({ locale }) => {
  const [showOptions, setShowOptions] = useState(false)
  const currentValue = () => {
    if (locale === "fr") {
      return (
        <div className="flex">
          <div className="text-white w-8 py-1 pl-2 pr-1 flex items-center border-gray-200 ">
            <FranceFlag />
          </div>
          <span> {translate("francais", locale)} </span>
        </div>
      )
    } else {
      return (
        <div className="flex">
          <div className="text-white w-8 py-1 pl-2 pr-1 flex items-center border-gray-200 ">
            <AngletterreFlag />
          </div>
          <span> {translate("anglais", locale)}  </span>
        </div>
      )
    }
  }
  return (
    <div className="flex-auto flex flex-col items-center">
      <div className="flex flex-col items-center relative">
        <div className="w-full ">
          <button
            className="focus:outline-none my-2 p-1 flex border-gray-200 rounded"
            onClick={() => setShowOptions(!showOptions)}
          >
            <div className="flex flex-auto flex-wrap"></div>
            <button className="flex flex-row p-1 px-2 bg-black text-white outline-none w-full items-center ">
              {currentValue()}
              <div className="text-white w-8 py-1 pl-2 pr-1 flex items-center">
                <ArrowDown />
              </div>
            </button>
          </button>
        </div>
        {showOptions && (
          <div className="absolute shadow bg-white top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
            <div className="flex flex-col w-full">
              <LocalizedLink to="/" language="fr">
                <div className="cursor-pointer w-full rounded border-b hover:bg-black-light">
                  <div className="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-teal-600 hover:text-teal-100 hover:border-teal-600">
                    <div className="w-full items-center flex">
                      <div className="mx-2 leading-6 flex">
                        <div className="text-white w-8 py-1 pl-2 pr-1 flex items-center border-gray-200 ">
                          <FranceFlag />
                        </div>
                        <span>{translate("francais", locale)} </span>
                      </div>
                    </div>
                  </div>
                </div>
              </LocalizedLink>
              <LocalizedLink to="/" language="en">
                <div className="cursor-pointer w-full rounded border-b hover:bg-black-light">
                  <div className="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-teal-600 hover:text-teal-100 hover:border-teal-600">
                    <div className="mx-2 leading-6 flex">
                      <div className="text-white w-8 py-1 pl-2 pr-1 flex items-center border-gray-200 ">
                        <AngletterreFlag />
                      </div>
                      <span>{translate("anglais", locale)} </span>
                    </div>
                  </div>
                </div>
              </LocalizedLink>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Languages
