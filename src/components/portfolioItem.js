import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PortfolioDeskImg from './portfolioDeskImg';
import PortfolioMobileImg from './portfolioMobileImg';
import cssVars from '../styles/cssVars';
import UnstyledLinkIcon from '../images/svgs/link.svg';
import UnstyledGitHubIcon from '../images/svgs/github.svg';

const PortfolioItemContent = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 0.75rem;
  grid-template: auto / 1.7fr 1fr;
  justify-items: center;
  margin-bottom: 1rem;
  max-width: 18rem;

  @media (min-width: ${cssVars.midBreakPoint}) {
    grid-template: auto / 3fr 4fr 1.25fr;
    max-width: 35.6875rem;
  }

  @media (min-width: ${cssVars.largeBreakPoint}) {
    grid-template: auto / 1.7fr 1fr;
    max-width: 18rem;
  }

  @media (min-width: ${cssVars.xLargeBreakPoint}) {
    grid-template: auto / 3fr 4fr 1.25fr;
    max-width: 35.6875rem;
  }
`;

const TitleContainer = styled.div`
  grid-column: 1 / -1;
  min-width: 100%;
  position: relative;

  :before {
    background-color: ${cssVars.brown};
    content: '';
    height: 0.0625rem;
    min-width: 100%;
    position: absolute;
    top: 50%;
  }
`;

const Title = styled.h2`
  background-color: #fff;
  color: ${cssVars.brown};
  font-family: ${cssVars.nunitoSans};
  font-size: 1.2rem;
  font-weight: 200;
  margin: 0 auto;
  padding: 0 0.5rem;
  position: relative;
  width: max-content;
  z-index: 2;

  @media (min-width: ${cssVars.midBreakPoint}) {
    font-size: 1.5rem;
  }
`;

const BulletPoints = styled.div`
  align-items: center;
  display: grid;
  font-family: ${cssVars.notoSerifJP};
  font-size: 0.8rem;
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  grid-row-gap: 0.75rem;
  grid-template: auto / 1fr 1fr;
  justify-items: center;

  @media (min-width: ${cssVars.midBreakPoint}) {
    grid-template: auto auto / 4fr 1fr 1fr;
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    min-width: 100%;
  }
  
  @media (min-width: ${cssVars.largeBreakPoint}) {
    grid-template: auto / 1fr 1fr;
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    min-width: initial;
  }
  
  @media (min-width: ${cssVars.xLargeBreakPoint}) {
    grid-template: auto auto / 4fr 1fr 1fr;
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    min-width: 100%;
  }
`;

const ToolsAndAwards = styled.div`
  display: grid;
  grid-column: 1 / -1;
  grid-gap: 0.75rem;
  grid-template: auto / 1fr;

  @media (min-width: ${cssVars.midBreakPoint}) {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }

  @media (min-width: ${cssVars.largeBreakPoint}) {
    grid-column: 1 / -1;
    grid-row: initial;
  }

  @media (min-width: ${cssVars.xLargeBreakPoint}) {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
`;

const Awards = styled.p`
  text-align: center;
`;

const ToolsUsed = styled.p`
  text-align: center;
`;

const LinkIcon = styled(UnstyledLinkIcon)`
  fill: ${cssVars.brown};
  width: 1.8rem;
  height: 1.8rem;

  @media (min-width: ${cssVars.midBreakPoint}) {
    grid-row: 1 / 3;
    grid-column: 2 / 3;
  }

  @media (min-width: ${cssVars.largeBreakPoint}) {
    grid-column: initial;
    grid-row: initial;
  }

  @media (min-width: ${cssVars.xLargeBreakPoint}) {
    grid-row: 1 / 3;
    grid-column: 2 / 3;
  }
`;

const GitHubIcon = styled(UnstyledGitHubIcon)`
  fill: ${cssVars.brown};
  width: 1.8rem;
  height: 1.8rem;

  @media (min-width: ${cssVars.midBreakPoint}) {
    grid-row: 1 / 3;
    grid-column: 3 / 4;
  }

  @media (min-width: ${cssVars.largeBreakPoint}) {
    grid-column: initial;
    grid-row: initial;
  }

  @media (min-width: ${cssVars.xLargeBreakPoint}) {
    grid-row: 1 / 3;
    grid-column: 3 / 4;
  }
`;

const Description = styled.p`
  font-family: ${cssVars.notoSerifJP};
  font-size: 0.9rem;
  grid-column: 1 / -1;

  @media (min-width: ${cssVars.midBreakPoint}) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }

  @media (min-width: ${cssVars.largeBreakPoint}) {
    grid-column: 1 / -1;
    grid-row: initial;
  }

  @media (min-width: ${cssVars.xLargeBreakPoint}) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
`;

// const PortfolioItem = styled.div``;

const PortfolioItem = ({ itemData }) => {
  return (
    <PortfolioItemContent>
      <TitleContainer>
        <Title>{itemData.title}</Title>
      </TitleContainer>
      <PortfolioDeskImg path={itemData.desktopPicRelPath} />
      <PortfolioMobileImg path={itemData.mobilePicRelPath} />
      <BulletPoints>
        <ToolsAndAwards>
          {itemData.awards ? (
            <Awards>
              <strong>Awards: </strong>
              {itemData.awards}
            </Awards>
          ) : null}
          <ToolsUsed>
            <strong>Tools Used: </strong>
            {itemData.toolsUsed}
          </ToolsUsed>
        </ToolsAndAwards>
        <LinkIcon />
        <GitHubIcon />
      </BulletPoints>
      <Description>{itemData.description}</Description>
    </PortfolioItemContent>
  );
};

PortfolioItem.propTypes = {
  itemData: PropTypes.object,
};

export default PortfolioItem;
