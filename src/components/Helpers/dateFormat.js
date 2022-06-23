const dateFormat = (date, locale) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  switch (locale) {
    case "en":
      return new Date(date).toLocaleDateString("en-EN", options)
    default:
      return new Date(date).toLocaleDateString("fr-FR", options)
  }
}

export { dateFormat }
