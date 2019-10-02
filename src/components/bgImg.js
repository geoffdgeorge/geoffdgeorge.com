import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './header';
import BackgroundImage from 'gatsby-background-image';

const UnstyledBackgroundSection = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "personal/meagan-h-1414289-unsplash.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.placeholderImage.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="header"
          className="header-container"
          fluid={imageData}
        >
          <Header siteTitle={siteTitle} />
        </BackgroundImage>
      );
    }}
  />
);

UnstyledBackgroundSection.propTypes = {
  siteTitle: PropTypes.string,
};

const BackgroundSection = styled(UnstyledBackgroundSection)`
  background-position: center center;
  background-size: cover
`;

export default BackgroundSection;
