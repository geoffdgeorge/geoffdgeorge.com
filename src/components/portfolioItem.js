import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PortfolioDeskImg from './portfolioDeskImg';
import PortfolioMobileImg from './portfolioMobileImg'

const PortfolioItemContent = styled.div`
    display: grid;
    grid-template: 1fr / 1fr
`;

const PortfolioItem = ({itemData}) => {
    return(
        <PortfolioItemContent>
            <PortfolioDeskImg path={itemData.desktopPicRelPath} />
            <PortfolioMobileImg path={itemData.mobilePicRelPath} />
            {itemData.title}
        </PortfolioItemContent>
    )
}

PortfolioItem.propTypes = {
    itemData: PropTypes.object,
}

export default PortfolioItem;