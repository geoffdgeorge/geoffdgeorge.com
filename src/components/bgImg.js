import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Header from './header';
import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = ({siteTitle}) => (
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
          style={{
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        >
          <Header siteTitle={siteTitle} />
        </BackgroundImage>
      );
    }}
  />
);

BackgroundSection.propTypes = {
  siteTitle: PropTypes.string,
};

export default BackgroundSection;
