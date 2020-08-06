import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/seo';
import PortfolioItem from '../components/portfolioItem/portfolioItem';
import cssObj from '../styles/cssObj';

const PortfolioContainer = styled.div`
  display: grid;
  grid-template: 1fr / 1fr;

  @media (min-width: ${cssObj.vars.largeBreakPoint}) {
    min-height: 100vh;
    padding-top: 2rem;
  }
`;

const PortfolioContent = styled.div`
  display: grid;
  grid-template: auto / 1fr;
  grid-row-gap: 1rem;
  justify-items: center;
`;

const PortfolioTitle = styled.h2`
  ${cssObj.mixins.sectionTitle}
`;

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          portfolioItems {
            title
            awards
            toolsUsed
            description
            liveLink
            desktopPicRelPath
            mobilePicRelPath
            githubLink
          }
        }
      }
    }
  `);

  const { portfolioItems } = data.site.siteMetadata;

  return (
    <PortfolioContainer>
      <SEO title="Portfolio" />
      <PortfolioContent>
        <PortfolioTitle>Portfolio</PortfolioTitle>
        {portfolioItems.map((item) => {
          return (
            <PortfolioItem itemData={item} key={portfolioItems.indexOf(item)} />
          );
        })}
      </PortfolioContent>
    </PortfolioContainer>
  );
};

export default Portfolio;
