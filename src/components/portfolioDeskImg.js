import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const PortfolioDeskImg = ({ path }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === path
      )
      if (!image) {
        return null
      }
      return <Img fluid={image.node.fluid} />
    }}
  />
)

PortfolioDeskImg.propTypes = {
  path: PropTypes.string,
}

export default PortfolioDeskImg;