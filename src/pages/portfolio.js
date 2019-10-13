import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';
import PortfolioItem from '../components/portfolioItem';

const PortfolioContainer = styled.div`
  display: grid;
  grid-template: 1fr / 1fr;
`;

const PortfolioContent = styled.div`
  // display: grid;

  // @media (min-width: 825px) {
  //   justify-items: center;
  //   align-content: center;
  //   height: 100vh;
  // }
`;

// const PortfolioTitle = styled.h2`

// `;

// const PortfolioItem = styled.div``;

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

  const {portfolioItems} = data.site.siteMetadata;

  return (
    <PortfolioContainer>
      <PortfolioContent>
        <SEO title="Portfolio" />
        {portfolioItems.map(item => {
          return (
            <PortfolioItem itemData={item} key={portfolioItems.indexOf(item)} />
          )
        })}
      </PortfolioContent>
    </PortfolioContainer>
  );
};

export default Portfolio;
