import React, { useState } from "react"
import { graphql } from "gatsby"
import { useLocalization } from "../components/i18n/useLocalization"

import Layout from "../layouts/layout"
import SEO from "../components/SEO/seo"
import Location from "../components/Resellers/map"
import ListMap from "../components/Resellers/listMap"
import { useGetLocation } from "../components/Resellers/useGetLocation"
import HeaderPage from "../components/Header/headerPage"
import translate from "../components/i18n/translate"

const RevendeursPage = ({ data }) => {
  const { locale } = useLocalization()
  const [displayMobile, setDisplayMobile] = useState("list");
  const { latitude, longitude } = useGetLocation()
  const [cpValue, setCpValue] = useState("")

  let allLocationsData = data.magasins.nodes
  
  const link = React.createElement('link', {
    key: 'leaflet',
    rel: 'stylesheet',
    href: 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css',
    integrity: 'sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==',
    crossOrigin: ''
  })

  return (
    <Layout locale={locale}>
      <SEO 
        title={translate("titre_revendeurs", locale)}
        baliseLink={link}  
      />
      <HeaderPage title={translate("titre_revendeurs", locale)} />

      <div className="flex items-center justify-center md:hidden block mx-3 md:mx-0">
        <button 
          className={"text-white font-bold py-2 px-4 rounded-l focus:outline-none "+ (displayMobile === "list" ? "bg-orange" : "bg-black-light hover:bg-black-hover")}
          onClick={() => setDisplayMobile("list")}>
          {translate("bouton_list_revendeurs", locale)}
        </button>
        <button 
          className={"text-white bg-black-light font-bold py-2 px-4 rounded-r focus:outline-none "+ (displayMobile === "map" ? "bg-orange" : "bg-black-light hover:bg-black-hover")} 
          onClick={() => setDisplayMobile("map")}>
          {translate("bouton_carte_revendeurs", locale)}
        </button>
      </div>
      <div className="md:flex w-full max-w-6xl m-auto">
        <div className={"md:w-1/2 m-auto md:p-4 md:mx-4 mx-3 "+ (displayMobile !== "list" && "md:block hidden")}>
          <h6 className="text-white text-lg my-5">
            {translate("description_revendeurs", locale)}
          </h6>
          <div className={"w-full px-2 mb-6 md:mb-0  "}>
            <input
              className="bg-black-light block w-full text-light border border-light rounded py-3 px-4 mb-3 leading-tight"
              value={cpValue}
              onChange={e => setCpValue(e.target.value)}
              name="nom"
              type="cp"
              placeholder={translate("placeholder_barre_recherche_revendeurs", locale)}
            />
          </div>
          <ListMap
            locations={allLocationsData}
            gps={{ lat: latitude, lng: longitude }}
            cp={cpValue}
            locale={locale}
          />
        </div>
        <div className={"md:w-1/2 mx-3 md:mx-0 mt-0 "+(displayMobile !== "map" && "md:block hidden")}>
          {typeof window !== 'undefined' ?
            <Location
              locations={allLocationsData}
              gps={{ lat: latitude, lng: longitude }}
              locale={locale}
            />
            :null
          }
        </div>
      </div>
    </Layout>
  )
}

export default RevendeursPage

export const RevendeursQuery = graphql`
  query {
    magasins : allMagasinsXlsxSheet1 {
      nodes {
        lat
        lng
        nom
        pays
        cp
        type
        adresse
        description
      }
    }
  }
`
