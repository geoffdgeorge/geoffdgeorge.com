import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';
import PortfolioItem from '../components/portfolioItem';
import cssVars from '../styles/cssVars';

const PortfolioContainer = styled.div`
  display: grid;
  grid-template: 1fr / 1fr;
`;

const PortfolioContent = styled.div`
  display: grid;
  grid-template: auto / 1fr;
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
        {portfolioItems.map(item => {
          return (
            <PortfolioItem itemData={item} key={portfolioItems.indexOf(item)} />
          );
        })}
      </PortfolioContent>
    </PortfolioContainer>
  );
};

export default Portfolio;
