import * as React from "react"
import { Link } from "gatsby"
import { localizedPath } from "./helpers"
import { useLocalization } from "./useLocalization"

const LocalizedLink = ({ to, language, ...props }) => {
  const { locale } = useLocalization()
  const linkLocale = language || locale
  return <Link {...props} to={localizedPath('fr', linkLocale, to)} />
}

export default LocalizedLink
