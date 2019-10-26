import cssObj from '../../styles/cssObj';

const portfolioMobileImgCss = {
  styledImg: `
    width: 100%;

    @media (min-width: ${cssObj.vars.midBreakPoint}) {
        grid-column: 3 / 4;
        grid-row: 3 / 4;
    }

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        grid-column: initial;
        grid-row: initial;
    }
        
    @media (min-width: ${cssObj.vars.xLargeBreakPoint}) {
        grid-column: 3 / 4;
        grid-row: 3 / 4;
    }`,
};

export default portfolioMobileImgCss;
