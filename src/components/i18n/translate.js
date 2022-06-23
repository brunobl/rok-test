import translations from "./translations.json"

const translate = (key, locale) => {
  if (translations[key]) {
    return translations[key][locale] || translations[key]["fr"]
  }
  return key
}

export default translate
