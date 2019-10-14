import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import Header from './header';
import BackgroundImage from 'gatsby-background-image';
import cssVars from '../styles/cssVars';

const StyledBackgroundImage = styled(BackgroundImage)`
  position: relative;

  @media (min-width: ${cssVars.largeBreakPoint}) {
    position: fixed;
    width: 20rem;
    min-height: 100vh;
  }
`;

const UnstyledBackgroundSection = () => (
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
        <StyledBackgroundImage
          Tag="header"
          fluid={imageData}
          preserveStackingContext={true}
          // Blank position set to override position default for gatsby-background-image
          style={{ position: '' }}
        >
          <Header />
        </StyledBackgroundImage>
      );
    }}
  />
);

const BackgroundSection = styled(UnstyledBackgroundSection)`
  background-position: center center;
  background-size: cover;
`;

export default BackgroundSection;
