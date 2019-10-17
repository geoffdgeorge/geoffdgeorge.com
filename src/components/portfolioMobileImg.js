import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import cssVars from '../styles/cssVars';

const StyledImg = styled(Img)`
  width: 100%;

  @media (min-width: ${cssVars.midBreakPoint}) {
    grid-column: 4 / 5;
  }
`;

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
      );
      if (!image) {
        return null;
      }
      return <StyledImg fluid={image.node.fluid} />;
    }}
  />
);

PortfolioMobileImg.propTypes = {
  path: PropTypes.string,
};

export default PortfolioMobileImg;
