const getCategoryLocalizedAttributes = (categorie, locale) => {
  const localizedAttributes = categorie.frontmatter.traductions.filter(
    traduction => traduction.langue === locale
  )
  // Il doit y avoir au moins une version en Français de la catégorie
  if (locale === "fr" && !localizedAttributes.length) {
    return {
      categoryTitle: "Titre non traduit",
      categoryPath: "/",
    }
  }

  if (localizedAttributes && localizedAttributes.length) {
    return {
      categoryTitle: localizedAttributes[0].libelle,
      categoryPath: localizedAttributes[0].path,
    }
  }
  return getCategoryLocalizedAttributes(categorie, "fr")
}

export default getCategoryLocalizedAttributes
