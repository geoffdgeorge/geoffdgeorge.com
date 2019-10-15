import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const StyledImg = styled(Img)`
  border: 1px solid black;
  grid-column: 1 / -1;
  width: 100%;
`;

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
      );
      if (!image) {
        return null;
      }
      return <StyledImg fluid={image.node.fluid} />;
    }}
  />
);

PortfolioDeskImg.propTypes = {
  path: PropTypes.string,
};

export default PortfolioDeskImg;
