/*

import React, { useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const LegacyProductImage = ({ src2, maxWidth = false, ...props }) => {

    const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "default-image.png"}) {
        childImageSharp {
          fluid(maxWidth: 280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      minImage : allFile( filter: {sourceInstanceName: {eq: "images"}} ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 280) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      maxImage : allFile( filter: {sourceInstanceName: {eq: "images"}} ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1500, quality: 70, srcSetBreakpoints: [70, 500, 1500]) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

    const match = useMemo(() => (
      maxWidth ? 
      data.maxImage.edges.find(({ node }) => src2 === node.relativePath) 
      : data.minImage.edges.find(({ node }) => src2 === node.relativePath)
    ), [data, src2, maxWidth])

    return (
        match ?            
            <Img
                fluid={match.node.childImageSharp.fluid}
                {...props}
            /> 
            : 
            <Img 
              fluid={data.file.childImageSharp.fluid} 
              {...props} 
            />
    )
}

export default LegacyProductImage

*/