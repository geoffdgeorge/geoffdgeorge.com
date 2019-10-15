import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PortfolioDeskImg from './portfolioDeskImg';
import PortfolioMobileImg from './portfolioMobileImg';
import cssVars from '../styles/cssVars';

const PortfolioItemContent = styled.div`
  align-items: center;
  display: grid;
  grid-gap: .5rem;
  grid-template: auto / 1.7fr 1fr;
  justify-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-family: ${cssVars.nunitoSans};
  font-weight: 200;
  grid-column: 1 / -1;
`;

const BulletPoints = styled.div`
  font-family: ${cssVars.notoSerifJP};   
  font-size: .85rem; 
  grid-column: 1 / 2;
  grid-row: 3 / 4;
`;

const Awards = styled.p`
  margin-bottom: .5rem;
`;

const ToolsUsed = styled.p`

`;

const Description = styled.p`
  font-family: ${cssVars.notoSerifJP};
  grid-column: 1 / -1;
`;

// const PortfolioItem = styled.div``;

const PortfolioItem = ({ itemData }) => {
  return (
    <PortfolioItemContent>
      <Title>{itemData.title}</Title>
      <PortfolioDeskImg path={itemData.desktopPicRelPath} />
      <PortfolioMobileImg path={itemData.mobilePicRelPath} />
      <BulletPoints>
        {itemData.awards ? <Awards><strong>Awards: </strong>{itemData.awards}</Awards> : null}
        <ToolsUsed><strong>Tools Used: </strong>{itemData.toolsUsed}</ToolsUsed>
      </BulletPoints>
      <Description>{itemData.description}</Description>
    </PortfolioItemContent>
  );
};

PortfolioItem.propTypes = {
  itemData: PropTypes.object,
};

export default PortfolioItem;
