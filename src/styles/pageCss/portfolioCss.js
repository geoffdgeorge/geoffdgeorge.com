import cssObj from '../cssObj';

const portfolioCss = {
  portfolioContainer: `
    display: grid;
    grid-template: 1fr / 1fr;

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        min-height: 100vh;
        padding-top: 2rem;
    }`,
  portfolioContent: `
    display: grid;
    grid-template: auto / 1fr;
    grid-row-gap: 1rem;`,
};

export default portfolioCss;
