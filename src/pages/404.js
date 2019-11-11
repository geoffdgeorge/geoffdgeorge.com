import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import fourOhFourCss from '../styles/pageCss/404Css';

const ErrorContainer = styled.div`
  ${fourOhFourCss.errorContainer}
`;

const StyledImg = styled(Img)`
  ${fourOhFourCss.styledImg}
`;

const ErrorHeader = styled.h2`
  ${fourOhFourCss.errorHeader}
`;

const ErrorMessage = styled.p`
  ${fourOhFourCss.errorMessage}
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
      <ErrorMessage>So sorry. You've navigated to a route that doesn't exist.</ErrorMessage>
    </ErrorContainer>
  );
};

export default NotFoundPage;
