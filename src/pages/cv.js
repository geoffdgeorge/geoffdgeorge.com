import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';

const CVContainer = styled.div`
  display: grid;
  grid-template: 1fr / 1fr;
`;

const CVContent = styled.div`
  display: grid;

  @media (min-width: 825px) {
    justify-items: center;
    align-content: center;
    height: 100vh;
  }
`;

const CV = () => (
  <CVContainer>
    <CVContent>
      <SEO title="CV" />
      <p className="link-section grid">This is the CV page</p>
    </CVContent>
  </CVContainer>
);

export default CV;
