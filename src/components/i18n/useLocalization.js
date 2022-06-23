import * as React from "react"
import { LocaleContext } from "./context"

const useLocalization = () => {
  const locale = React.useContext(LocaleContext)
  return { locale }
}

export { useLocalization }
