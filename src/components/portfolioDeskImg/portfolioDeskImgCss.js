import cssObj from '../../styles/cssObj';

const portfolioDeskImgCss = {
  styledImg: `
    border: 1px solid black;
    grid-column: 1 / -1;
    width: 100%;

    @media (min-width: ${cssObj.vars.midBreakPoint}) {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
    }

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        grid-column: 1 / -1;
        grid-row: initial;
    }
        
    @media (min-width: ${cssObj.vars.xLargeBreakPoint}) {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
    }`,
};

export default portfolioDeskImgCss;
