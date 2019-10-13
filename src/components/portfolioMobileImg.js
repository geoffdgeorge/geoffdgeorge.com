import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const PortfolioMobileImg = ({ path }) => (
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

PortfolioMobileImg.propTypes = {
  path: PropTypes.string,
}

export default PortfolioMobileImg;