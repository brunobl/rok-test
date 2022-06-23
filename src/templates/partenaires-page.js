import React from "react"
import { graphql } from "gatsby"
import { useLocalization } from "../components/i18n/useLocalization"

import Layout from "../layouts/layout"
import SEO from "../components/SEO/seo"
import ListParteners from "../components/Parteners/listParteners"
import HeaderPage from "../components/Header/headerPage"
import translate from "../components/i18n/translate"

const PartenairesPage = ({ data }) => {
  const { locale } = useLocalization()
  return (
    <Layout locale={locale}>
      <SEO title={translate("titre_partenaires", locale)} />
      <HeaderPage title={translate("titre_partenaires", locale)} />
      <div className="w-full max-w-6xl m-auto">
        <h6 className="text-center text-white text-lg my-5">
          {translate("description_partenaires", locale)}
        </h6>
        <ListParteners locations={data.magasinsEnLigne.nodes} />
      </div>
    </Layout>
  )
}

export default PartenairesPage

export const PartenairesQuery = graphql`
  query {
    magasinsEnLigne: allEnligneXlsxSheet1 {
      nodes {
        adresse
        image
        description
      }
    }
  }
`
