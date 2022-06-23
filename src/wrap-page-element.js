import React from "react"
import { LocaleProvider } from "./components/i18n/context"

const wrapPageElement = ({ element, props }) => (
  <LocaleProvider pageContext={props.pageContext}>{element}</LocaleProvider>
)

export { wrapPageElement }
