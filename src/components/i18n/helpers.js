function isDefaultLang(locale, defaultLang) {
    return locale === defaultLang
  }
  
  function localizedPath(defaultLang, locale, path) {
    // The default language isn't prefixed
    if (isDefaultLang(locale, defaultLang)) {
      return path
    }
  
    const [, base] = path.split(`/`)
  
    // If for whatever reason we receive an already localized path
    // (e.g. if the path was made with location.pathname)
    // just return it as-is.
    if (base === locale) {
      return path
    }
  
    // If it's another language, prefix with the locale
    return `/${locale}${path}`
  }
  

  module.exports = {
    localizedPath
  }
  