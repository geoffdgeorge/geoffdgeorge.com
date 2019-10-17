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
  grid-gap: 0.5rem;
  grid-template: auto / 1.7fr 1fr;
  justify-items: center;
  margin-bottom: 1rem;

  @media (min-width: ${cssVars.midBreakPoint}) {
    grid-template: auto / 1fr 4fr 1fr 1fr
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
`;

const BulletPoints = styled.div`
  align-items: center;
  display: grid;
  font-family: ${cssVars.notoSerifJP};
  font-size: 0.8rem;
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  grid-row-gap: 0.5rem;
  grid-template: auto / 1fr 1fr;
  justify-items: center;

  @media (min-width: ${cssVars.midBreakPoint}) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
`;

const Awards = styled.p`
  grid-column: 1 / -1;
`;

const ToolsUsed = styled.p`
  grid-column: 1 / -1;
`;

const LinkIcon = styled(UnstyledLinkIcon)`
  width: 1.8rem;
  height: 1.8rem;
`;

const GitHubIcon = styled(UnstyledGitHubIcon)`
  width: 1.8rem;
  height: 1.8rem;
`;

const Description = styled.p`
  font-family: ${cssVars.notoSerifJP};
  font-size: 0.9rem;
  grid-column: 1 / -1;

  @media (min-width: ${cssVars.midBreakPoint}) {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
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
