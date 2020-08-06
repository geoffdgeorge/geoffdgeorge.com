import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import SEO from '../components/seo';
import cssObj from '../styles/cssObj';

const ErrorContainer = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;

  @media (min-width: 825px) {
    min-height: 100vh;
  }
`;

const StyledImg = styled(Img)`
  margin-bottom: 1rem;
  width: 8rem;
`;

const ErrorHeader = styled.h2`
  ${cssObj.mixins.sectionTitle}
`;

const ErrorMessage = styled.p`
  ${cssObj.mixins.graphSettings}
`;

const imageQuery = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "personal/grimace.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const NotFoundPage = () => {
  const data = useStaticQuery(imageQuery);

  return (
    <ErrorContainer>
      <SEO title="404: Not found" />
      <ErrorHeader>WHOOPS</ErrorHeader>
      <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />
      <ErrorMessage>
        So sorry. You've navigated to a route that doesn't exist.
      </ErrorMessage>
    </ErrorContainer>
  );
};

export default NotFoundPage;
