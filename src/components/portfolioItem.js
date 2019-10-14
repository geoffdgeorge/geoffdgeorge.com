import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PortfolioDeskImg from './portfolioDeskImg';
import PortfolioMobileImg from './portfolioMobileImg';
import cssVars from '../styles/cssVars';

const PortfolioItemContent = styled.div`
  display: grid;
  grid-template: auto / 1fr;
  min-width: 100%;
`;

const PortfolioTitle = styled.h2`
  font-family: ${cssVars.nunitoSans};
  font-weight: 200;
`;

// const PortfolioItem = styled.div``;

const PortfolioItem = ({ itemData }) => {
  return (
    <PortfolioItemContent>
      <PortfolioTitle>{itemData.title}</PortfolioTitle>
      <PortfolioDeskImg path={itemData.desktopPicRelPath} />
      <PortfolioMobileImg path={itemData.mobilePicRelPath} />
    </PortfolioItemContent>
  );
};

PortfolioItem.propTypes = {
  itemData: PropTypes.object,
};

export default PortfolioItem;
