import cssObj from '../styles/cssObj';

const layoutCss = {
  container: `
    display: grid;
    grid-template: 1fr / 1fr;
  
    @media (min-width: ${cssObj.largeBreakPoint}) {
      grid-template: auto auto / 20rem 1fr;
    }`,
  main: `
    align-items: center;
    display: grid;
    justify-items: center;
    min-height: calc(100vh - 5rem);
    padding: 2rem;
  
    @media (min-width: 825px) {
      grid-column-start: 2;
      padding-top: 0;
    }`,
  footer: `
    background-color: rgb(0, 141, 150);
    border-top: 0.2rem solid rgb(84, 34, 0);
    color: rgb(255, 255, 255);
    display: grid;
    font-family: 'Nunito Sans', sans-serif;
    height: 3rem;
    justify-items: center;
    align-items: center;
  
    @media (min-width: 825px) {
      grid-column: 2 / -1;
    }`,
  footerContent: `
    font-weight: 200;
    font-size: 0.8rem;`,
};

export default layoutCss;