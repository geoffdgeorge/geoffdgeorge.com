import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';
import PortfolioItem from '../components/portfolioItem/portfolioItem';
import portfolioCss from '../styles/pageCss/portfolioCss';

const PortfolioContainer = styled.div`
  ${portfolioCss.portfolioContainer}
`;

const PortfolioContent = styled.div`
  ${portfolioCss.portfolioContent}
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
