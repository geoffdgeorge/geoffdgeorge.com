import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PortfolioDeskImg from '../portfolioDeskImg/portfolioDeskImg';
import PortfolioMobileImg from '../portfolioMobileImg/portfolioMobileImg';
import portfolioItemCss from './portfolioItemCss';
import UnstyledLinkIcon from '../../images/svgs/link.svg';
import UnstyledGitHubIcon from '../../images/svgs/github.svg';

const PortfolioItemContent = styled.div`
  ${portfolioItemCss.portfolioItemContent}
`;

const TitleContainer = styled.div`
  ${portfolioItemCss.titleContainer}
`;

const Title = styled.h2`
  ${portfolioItemCss.title}
`;

const BulletPoints = styled.div`
  ${portfolioItemCss.bulletPoints}
`;

const ToolsAndAwards = styled.div`
  ${portfolioItemCss.toolsAndAwards}
`;

const Awards = styled.p`
  ${portfolioItemCss.awards}
`;

const ToolsUsed = styled.p`
  ${portfolioItemCss.toolsUsed}
`;

const LinkIcon = styled(UnstyledLinkIcon)`
  ${portfolioItemCss.linkIcon}
`;

const GitHubIcon = styled(UnstyledGitHubIcon)`
  ${portfolioItemCss.gitHubIcon}
`;

const Description = styled.p`
  ${portfolioItemCss.description}
`;

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
