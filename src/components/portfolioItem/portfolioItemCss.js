import cssObj from '../../styles/cssObj';

const portfolioItemCss = {
  portfolioItemContent: `
    ${cssObj.mixins.gridCentered}
    grid-gap: 0.75rem;
    grid-template: auto / 1.7fr 1fr;
    margin-bottom: 1rem;
    max-width: 18rem;

    @media (min-width: ${cssObj.vars.midBreakPoint}) {
        grid-template: auto / 3fr 4fr 1.25fr;
        max-width: 35.6875rem;
    }
    
    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        grid-template: auto / 1.7fr 1fr;
        max-width: 18rem;
    }

    @media (min-width: ${cssObj.vars.xLargeBreakPoint}) {
        grid-template: auto / 3fr 4fr 1.25fr;
        max-width: 35.6875rem;
    }`,
  titleContainer: `
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
    }`,
  title: `
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
    }`,
  bulletPoints: `
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
    }`,
  toolsAndAwards: `
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
    }`,
  awards: `
    text-align: center;`,
  toolsUsed: `
    text-align: center;`,
  linkIcon: `
    fill: ${cssObj.vars.brown};
    width: 1.8rem;
    height: 1.8rem;

    @media (min-width: ${cssObj.vars.midBreakPoint}) {
        ${cssObj.mixins.gridColsRows(2, 3, 1, 3)}
    }

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        grid-column: initial;
        grid-row: initial;
    }

    @media (min-width: ${cssObj.vars.xLargeBreakPoint}) {
        ${cssObj.mixins.gridColsRows(2, 3, 1, 3)}
    }`,
  gitHubIcon: `
    fill: ${cssObj.vars.brown};
    height: 1.8rem;
    width: 1.8rem;

    @media (min-width: ${cssObj.vars.midBreakPoint}) {
        ${cssObj.mixins.gridColsRows(3, 4, 1, 3)}
    }

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        grid-column: initial;
        grid-row: initial;
    }

    @media (min-width: ${cssObj.vars.xLargeBreakPoint}) {
        ${cssObj.mixins.gridColsRows(3, 4, 1, 3)}
    }`,
  description: `
    font-family: ${cssObj.vars.notoSerifJP};
    font-size: 0.9rem;
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
    }`,
};

export default portfolioItemCss;
