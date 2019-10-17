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
`;

const TitleContainer = styled.div`
  min-width: 100%;
  grid-column: 1 / -1;
  position: relative;

  :before {
    background-color: ${cssVars.brown};
    content: '';
    height: 0.1rem;
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
  padding: 0 .5rem;
  position: relative;
  width: max-content;
  z-index: 2;
`;

const BulletPoints = styled.div`
  font-family: ${cssVars.notoSerifJP};
  font-size: 0.8rem;
  grid-column: 1 / 2;
  grid-row: 3 / 4;
`;

const Awards = styled.p`
  margin-bottom: 0.5rem;
`;

const ToolsUsed = styled.p``;

const Icons = styled.div``;

const LinkIcon = styled(UnstyledLinkIcon)`

`;

const GitHubIcon = styled(UnstyledGitHubIcon)`

`;

const Description = styled.p`
  font-family: ${cssVars.notoSerifJP};
  font-size: .9rem;
  grid-column: 1 / -1;
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
        <Icons>
          <LinkIcon/>
          <GitHubIcon/>
        </Icons>
      </BulletPoints>
      <Description>{itemData.description}</Description>
    </PortfolioItemContent>
  );
};

PortfolioItem.propTypes = {
  itemData: PropTypes.object,
};

export default PortfolioItem;
