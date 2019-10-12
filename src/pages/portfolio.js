import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';

const PortfolioContainer = styled.div`
  display: grid;
  grid-template: 1fr / 1fr;
`;

const PortfolioContent = styled.div`
  display: grid;

  @media (min-width: 825px) {
    justify-items: center;
    align-content: center;
    height: 100vh;
  }
`;

const Portfolio = () => (
  <PortfolioContainer>
    <PortfolioContent>
      <SEO title="Portfolio" />
      <p className="link-section grid">This is the Portfolio page</p>
    </PortfolioContent>
  </PortfolioContainer>
);

export default Portfolio;
