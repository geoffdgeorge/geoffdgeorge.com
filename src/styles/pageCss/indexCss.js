import cssObj from '../../styles/cssObj';

const indexCss = {
  introContainer: `
    display: grid;
    grid-template: 1fr / 1fr;
    margin: 0 auto;
    max-width: 24rem;
    
    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        max-width: initial;
        min-height: 100vh;
    }`,
  introContent: `
    display: grid;
    grid-auto-rows: min-content;

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        align-content: center;
        justify-items: center;
    }`,
  introTitle: `
    color: ${cssObj.vars.teal};
    font-family: ${cssObj.vars.nunitoSans};
    font-size: 2rem;
    font-weight: 400;
    margin: 0 0 1rem 0;
    text-align: center;`,
  introGraph: `
    ${cssObj.mixins.graphSettings}
    margin-bottom: 1rem;

    :last-child {
        margin-bottom: 0;
    }`,
  introLink: `
    color: ${cssObj.vars.teal};
    text-decoration: none;`,
};

export default indexCss;
