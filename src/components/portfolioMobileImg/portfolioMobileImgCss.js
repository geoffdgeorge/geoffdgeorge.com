import cssObj from '../../styles/cssObj';

const portfolioMobileImgCss = {
  styledImg: `
    width: 100%;

    @media (min-width: ${cssObj.vars.midBreakPoint}) {
        ${cssObj.mixins.gridColsRows(3, 4, 3, 4)}
    }

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        grid-column: initial;
        grid-row: initial;
    }
        
    @media (min-width: ${cssObj.vars.xLargeBreakPoint}) {
        ${cssObj.mixins.gridColsRows(3, 4, 3, 4)}
    }`,
};

export default portfolioMobileImgCss;
