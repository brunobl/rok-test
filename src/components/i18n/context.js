import * as React from "react"

const LocaleContext = React.createContext("fr")

const LocaleProvider = ({ children, pageContext: { locale = `fr` } }) => {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  )
}

export { LocaleProvider, LocaleContext }
