import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import portfolioMobileImgCss from './portfolioMobileImgCss';

const StyledImg = styled(Img)`
  ${portfolioMobileImgCss.styledImg}
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
      return <StyledImg fluid={image.node.fluid} style={{overflow: 'visible'}} />;
    }}
  />
);

PortfolioMobileImg.propTypes = {
  path: PropTypes.string,
};

export default PortfolioMobileImg;
