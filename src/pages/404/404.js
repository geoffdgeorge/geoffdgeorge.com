import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/seo';

const ErrorContainer = styled.div`
  display: grid;

  @media (min-width: 825px) {
    justify-items: center;
    align-content: center;
    height: 100vh;
  }
`;

const NotFoundPage = () => (
  <ErrorContainer>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </ErrorContainer>
);

export default NotFoundPage;
