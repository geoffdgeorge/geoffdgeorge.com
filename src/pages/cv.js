import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';

const CVContainer = styled.div`
  display: grid;

  @media (min-width: 825px) {
    justify-items: center;
    align-content: center;
    height: 100vh;
  }
`;

const CV = () => (
  <CVContainer>
    <SEO title="CV" />
    <p className="link-section grid">This is the CV page</p>
  </CVContainer>
);

export default CV;
