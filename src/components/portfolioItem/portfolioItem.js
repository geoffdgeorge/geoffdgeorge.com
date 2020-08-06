import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PortfolioDeskImg from '../portfolioDeskImg/portfolioDeskImg';
import PortfolioMobileImg from '../portfolioMobileImg/portfolioMobileImg';
import cssObj from '../../styles/cssObj';

import UnstyledLinkIcon from '../../images/svgs/link.svg';
import UnstyledGitHubIcon from '../../images/svgs/github.svg';

const PortfolioItemContent = styled.div`
  ${cssObj.mixins.gridCentered}
  grid-gap: 0.75rem;
  grid-template: auto / 1.7fr 1fr;
  margin-bottom: 1rem;
  max-width: 18rem;

  @media (min-width: ${cssObj.vars.midBreakPoint}) {
    grid-template: auto / 3fr 4fr 1.25fr;
    max-width: ${cssObj.vars.maxContentWidth};
  }

  @media (min-width: ${cssObj.vars.largeBreakPoint}) {
    grid-template: auto / 1.7fr 1fr;
    max-width: 18rem;
  }

  @media (min-width: ${cssObj.vars.xLargeBreakPoint}) {
    grid-template: auto / 3fr 4fr 1.25fr;
    max-width: ${cssObj.vars.maxContentWidth};
  }
`;

const TitleContainer = styled.div`
  grid-column: 1 / -1;
  min-width: 100%;
  position: relative;

  :before {
    background-color: ${cssObj.vars.brown};
    content: '';
    height: 0.0625rem;
    min-width: 100%;
    position: absolute;
    top: 50%;
  }
`;

const Title = styled.h2`
  background-color: #fff;
  color: ${cssObj.vars.brown};
  font-family: ${cssObj.vars.nunitoSans};
  font-size: 1.2rem;
  font-weight: 200;
  margin: 0 auto;
  padding: 0 0.5rem;
  position: relative;
  max-width: max-content;
  z-index: 2;

  @media (min-width: ${cssObj.vars.midBreakPoint}) {
    font-size: 1.5rem;
  }
`;

const DeskImgLink = styled.a`
  grid-column: 1 / -1;
  min-width: 100%;
  transition: ${cssObj.vars.standardTransition};

  ${cssObj.mixins.activeHoverFocus(`
    box-shadow: ${cssObj.vars.dropShadow};
    filter: grayscale(100%);
  `)}

  @media (min-width: ${cssObj.vars.midBreakPoint}) {
    ${cssObj.mixins.gridColsRows(1, 2, 3, 4)}
  }

  @media (min-width: ${cssObj.vars.largeBreakPoint}) {
    grid-column: 1 / -1;
    grid-row: initial;
  }
      
  @media (min-width: ${cssObj.vars.xLargeBreakPoint}) {
    ${cssObj.mixins.gridColsRows(1, 2, 3, 4)}
  }
`;

const MobileImgLink = styled.a`
  min-width: 100%;
  transition: ${cssObj.vars.standardTransition};

  ${cssObj.mixins.activeHoverFocus(`
    filter: grayscale(100%);

    img {
      filter: drop-shadow(${cssObj.vars.dropShadow})
    }
  `)}

  @media (min-width: ${cssObj.vars.midBreakPoint}) {
    ${cssObj.mixins.gridColsRows(3, 4, 3, 4)}
  }

  @media (min-width: ${cssObj.vars.largeBreakPoint}) {
    grid-column: initial;
    grid-row: initial;
  }
      
  @media (min-width: ${cssObj.vars.xLargeBreakPoint}) {
    ${cssObj.mixins.gridColsRows(3, 4, 3, 4)}
  }
`;

const BulletPoints = styled.div`
  ${cssObj.mixins.gridCentered}
  font-family: ${cssObj.vars.notoSerifJP};
  font-size: 0.8rem;
  ${cssObj.mixins.gridColsRows(1, 2, 3, 4)}
  grid-row-gap: 0.75rem;
  grid-template: auto / 1fr 1fr;

  @media (min-width: ${cssObj.vars.midBreakPoint}) {
    ${cssObj.mixins.gridColsRows(1, -1, 2, 3)}
    grid-template: auto auto / 4fr 1fr 1fr;
    min-width: 100%;
  }

  @media (min-width: ${cssObj.vars.largeBreakPoint}) {
    ${cssObj.mixins.gridColsRows(1, 2, 3, 4)}
    grid-template: auto / 1fr 1fr;
    min-width: initial;
  }

  @media (min-width: ${cssObj.vars.xLargeBreakPoint}) {
    ${cssObj.mixins.gridColsRows(1, -1, 2, 3)}
    grid-template: auto auto / 4fr 1fr 1fr;
    min-width: 100%;
  }
`;

const ToolsAndAwards = styled.div`
  display: grid;
  grid-column: 1 / -1;
  grid-gap: 0.75rem;
  grid-template: auto / 1fr;

  @media (min-width: ${cssObj.vars.midBreakPoint}) {
    ${cssObj.mixins.gridColsRows(1, 2, 1, 3)}
  }

  @media (min-width: ${cssObj.vars.largeBreakPoint}) {
    grid-column: 1 / -1;
    grid-row: initial;
  }

  @media (min-width: ${cssObj.vars.xLargeBreakPoint}) {
    ${cssObj.mixins.gridColsRows(1, 2, 1, 3)}
  }
`;

const Awards = styled.p`
  text-align: center;
`;

const ToolsUsed = styled.p`
  text-align: center;
`;

const LiveLink = styled.a`
  ${cssObj.mixins.activeHoverFocus(`
    > svg {
      filter: drop-shadow(${cssObj.vars.dropShadow});
      fill: ${cssObj.vars.teal};
    }
  `)}

  @media (min-width: ${cssObj.vars.midBreakPoint}) {
    ${cssObj.mixins.gridColsRows(2, 3, 1, 3)}
  }

  @media (min-width: ${cssObj.vars.largeBreakPoint}) {
    grid-column: initial;
    grid-row: initial;
  }

  @media (min-width: ${cssObj.vars.xLargeBreakPoint}) {
    ${cssObj.mixins.gridColsRows(2, 3, 1, 3)}
  }
`;

const LinkIcon = styled(UnstyledLinkIcon)`
  fill: ${cssObj.vars.brown};
  width: 1.8rem;
  height: 1.8rem;
  transition: ${cssObj.vars.standardTransition};
`;

const GitHubLink = styled.a`
  ${cssObj.mixins.activeHoverFocus(`
    > svg {
      filter: drop-shadow(${cssObj.vars.dropShadow});
      fill: ${cssObj.vars.teal};
    }
  `)}

  @media (min-width: ${cssObj.vars.midBreakPoint}) {
    ${cssObj.mixins.gridColsRows(3, 4, 1, 3)}
  }

  @media (min-width: ${cssObj.vars.largeBreakPoint}) {
    grid-column: initial;
    grid-row: initial;
  }

  @media (min-width: ${cssObj.vars.xLargeBreakPoint}) {
    ${cssObj.mixins.gridColsRows(3, 4, 1, 3)}
  }
`;

const GitHubIcon = styled(UnstyledGitHubIcon)`
  fill: ${cssObj.vars.brown};
  height: 1.8rem;
  width: 1.8rem;
  transition: ${cssObj.vars.standardTransition};
`;

const Description = styled.p`
  font-family: ${cssObj.vars.notoSerifJP};
  font-size: 0.9rem;
  line-height: 1.1rem;
  grid-column: 1 / -1;

  @media (min-width: ${cssObj.vars.midBreakPoint}) {
    ${cssObj.mixins.gridColsRows(2, 3, 3, 4)}
  }

  @media (min-width: ${cssObj.vars.largeBreakPoint}) {
    grid-column: 1 / -1;
    grid-row: initial;
  }

  @media (min-width: ${cssObj.vars.xLargeBreakPoint}) {
    ${cssObj.mixins.gridColsRows(2, 3, 3, 4)}
  }
`;

const PortfolioItem = ({ itemData }) => {
  return (
    <PortfolioItemContent>
      <TitleContainer>
        <Title>{itemData.title}</Title>
      </TitleContainer>
      <DeskImgLink href={itemData.liveLink} target="_blank">
        <PortfolioDeskImg path={itemData.desktopPicRelPath} />
      </DeskImgLink>
      <MobileImgLink href={itemData.liveLink} target="_blank">
        <PortfolioMobileImg path={itemData.mobilePicRelPath} />
      </MobileImgLink>
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
        <LiveLink href={itemData.liveLink} target="_blank">
          <LinkIcon />
        </LiveLink>
        <GitHubLink href={itemData.githubLink} target="_blank">
          <GitHubIcon />
        </GitHubLink>
      </BulletPoints>
      <Description>{itemData.description}</Description>
    </PortfolioItemContent>
  );
};

PortfolioItem.propTypes = {
  itemData: PropTypes.object,
};

export default PortfolioItem;
