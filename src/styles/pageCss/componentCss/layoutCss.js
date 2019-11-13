import cssObj from '../../cssObj';

const layoutCss = {
  container: `
    display: grid;
    grid-template: 1fr / 1fr;
    margin: 0 auto;
    max-width: 80rem;
  
    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
      grid-template: auto auto / 20rem 1fr;
    }`,
  main: `
    ${cssObj.mixins.gridCentered}
    background-color: #FFF;
    min-height: calc(100vh - 5rem);
    padding: 2rem;

    .tl-edges {
      min-width: 100%;
    }

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
      grid-column-start: 2;
      padding-top: 0;
    }`,
  footer: `
    ${cssObj.mixins.gridCentered}
    background-color: ${cssObj.vars.teal};
    border-top: 0.2rem solid ${cssObj.vars.brown};
    color: rgb(255, 255, 255);
    font-family: ${cssObj.vars.nunitoSans};
    height: 3rem;
  
    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
      grid-column: 2 / -1;
    }`,
  footerContent: `
    font-weight: 200;
    font-size: 0.8rem;`,
};

export default layoutCss;
