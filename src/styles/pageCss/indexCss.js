import cssObj from '../../styles/cssObj';

const indexCss = {
  introContainer: `
    display: grid;
    grid-template: 1fr / 1fr;
    max-width: 24rem;
    
    @media (min-width: ${cssObj.largeBreakPoint}) {
        min-height: 100vh;
        max-width: initial;
    }`,
  introContent: `
    display: grid;
    grid-auto-rows: min-content;

    @media (min-width: ${cssObj.largeBreakPoint}) {
        justify-items: center;
        align-content: center;
    }`,
  introTitle: `
    color: ${cssObj.teal};
    font-family: ${cssObj.nunitoSans};
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    margin: 0 0 1rem 0;`,
  introGraph: `
    font-family: ${cssObj.notoSerifJP};
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.4rem;
    margin-bottom: 1rem;

    :last-child {
        margin-bottom: 0;
    }`,
  introLink: `
    color: ${cssObj.teal};
    text-decoration: none;`,
};

export default indexCss;
