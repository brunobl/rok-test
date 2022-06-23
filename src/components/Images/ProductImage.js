import React, { useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

const ProductImage = ({ src2, maxWidth = false, ...props }) => {

    const data = useStaticQuery(graphql`{
  file(relativePath: {eq: "default-image.png"}) {
    childImageSharp {
      gatsbyImageData(width: 280, layout: CONSTRAINED)
    }
  }

  maxImage: allFile(filter: {sourceInstanceName: {eq: "images"}}) {
    edges {
      node {
        relativePath
        childImageSharp {
          gatsbyImageData(
            quality: 50
            breakpoints: [64, 86, 500, 1500]
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
      data.maxImage.edges.find(({ node }) => src2 === node.relativePath) 
    ), [data, src2])

    return match ?            
        <GatsbyImage image={match.node.childImageSharp.gatsbyImageData} {...props} /> 
        : 
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} {...props} />;
}

export default ProductImage
