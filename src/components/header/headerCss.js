import cssObj from '../../styles/cssObj';

const headerCss = {
  headerContent: `
    background-color: rgba(84, 34, 0, 0.5);
    padding: 0.5rem 1rem;
    height: 5rem;
    display: grid;
    grid-template: min-content min-content / auto 1fr;
    justify-content: center;
    grid-column-gap: 1rem;
    align-content: center;
    box-shadow: 0 0.1rem 0.3rem rgb(78, 78, 78);

    @media (min-width: ${cssObj.vars.midBreakPoint}) {
        grid-template: min-content / min-content 12.5rem 1fr;
        grid-column-gap: 1rem;
        align-items: center;
    }

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }`,
  styledHeaderImg: `
    width: 4rem;
    height: 4rem;
    border: 0.1rem rgb(196, 196, 196) solid;
    border-radius: 50%;
    justify-self: end;
    grid-row: 1 / 3;

    @media (min-width: ${cssObj.vars.midBreakPoint}) {
        grid-row: 1 / 2;
    }

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        width: 10rem;
        height: 10rem;
    }`,
  headerTitle: `
    text-shadow: 0 0 0.3rem rgb(150, 88, 45);
    border-bottom: 0.2rem solid ${cssObj.vars.teal};
    color: rgb(255, 255, 255);
    font-family: ${cssObj.vars.nunitoSans};
    font-weight: 700;
    font-size: 1.7rem;
    padding-bottom: 0.5rem;
    margin: 0;
    text-align: center;

    @media (min-width: ${cssObj.vars.midBreakPoint}) {
        border-bottom: none;
        padding-bottom: 0;
        justify-self: end;
        font-size: 2rem;
    }

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        border-bottom: 0.2rem solid ${cssObj.vars.teal};
        font-size: 2.5rem;
        margin: 1rem 0;
        padding-bottom: 1rem;
        padding-left: 0;
    }`,
};

export default headerCss;
