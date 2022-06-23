import React, { useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";



/*

const Image = ({ src, maxWidth = false, ...props }) => {

  const data = useStaticQuery(graphql`{
file(relativePath: {eq: "default-image.png"}) {
  childImageSharp {
    gatsbyImageData(width: 280, layout: CONSTRAINED)
  }
}

maxImage: allFile(filter: {sourceInstanceName: {eq: "imagesfixes"}}) {
  edges {
    node {
      relativePath
      childImageSharp {
        gatsbyImageData(
          quality: 50
          breakpoints: [70, 282, 752, 1498]
          aspectRatio: 1

          layout: FULL_WIDTH
          formats: [JPG, WEBP]
          placeholder: DOMINANT_COLOR
          transformOptions: {fit: CONTAIN}
        )
      }
    }
  }
}
}
`)

  const match = useMemo(() => (
    data.maxImage.edges.find(({ node }) => src === node.relativePath) 
  ), [data, src])

  return match ?            
      <GatsbyImage image={match.node.childImageSharp.gatsbyImageData} {...props} /> 
      : 
      <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} {...props} />;
}

*/









const Image = ({ src, maxWidth = false, ...props }) => {

    const data = useStaticQuery(graphql`{
  file(relativePath: {eq: "default-image.png"}) {
    childImageSharp {
      gatsbyImageData(width: 280, layout: CONSTRAINED)
    }
  }

  minImage: allFile(filter: {sourceInstanceName: {eq: "imagesfixes"}}) {
    edges {
      node {
        relativePath
        childImageSharp {
          gatsbyImageData(
            width: 280,
            formats: [JPG, WEBP]
            layout: CONSTRAINED
          )
        }
      }
    }
  }
  maxImage: allFile(filter: {sourceInstanceName: {eq: "imagesfixes"}}) {
    edges {
      node {
        relativePath
        childImageSharp {
          gatsbyImageData(
            quality: 50
            breakpoints: [70, 282, 752, 1498]

            layout: FULL_WIDTH
            formats: [JPG, WEBP]
            placeholder: DOMINANT_COLOR
            transformOptions: {fit: CONTAIN}
          )
        }
      }
    }
  }
}
`)

  //console.log(src, "-", maxWidth)

    const match = useMemo(() => (
      maxWidth ? 
      data.maxImage.edges.find(({ node }) => src === node.relativePath) 
      : data.minImage.edges.find(({ node }) => src === node.relativePath)
    ), [data, src])

    return match ?            
        <GatsbyImage image={match.node.childImageSharp.gatsbyImageData} {...props} /> 
        : 
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} {...props} />;
}




export default Image
