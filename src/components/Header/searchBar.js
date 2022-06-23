import React, { useEffect, useState } from "react"
import { localizedPath } from "../i18n/helpers"
import translate from "../i18n/translate"
import Search from "../Helpers/Search"

const SearchBar = ({ locale }) => {
  const [search, setSearch] = useState("")

  useEffect(() => {
    if (search === "") {
      setSearch(
        typeof document !== undefined
          ? document.location.search.substring(7).split("=")[0]
          : ""
      )
    }
  }, []) //••TODO remove warning

  return (
    <div className="w-full min-w-0 lg:px-8 xl:w-4/4 xl:px-48">
      <form
        action={localizedPath("fr", locale, "/search")}
        method="GET"
        className="pt-2 relative mx-auto m"
      >
        <input
          className="w-full text-white border-solid border-2 border-light bg-black h-10 px-5 py-4 pr-16 text-sm focus:outline-none"
          name="value"
          type="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={translate("placeholder_barre_recherche", locale)}
        />
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
          <Search />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
