import cssObj from '../../styles/cssObj';

const headerCss = {
  headerContent: `
    align-content: center;
    background-color: rgba(84, 34, 0, 0.5);
    box-shadow: 0 0.1rem 0.3rem rgb(78, 78, 78);
    height: 5rem;
    display: grid;
    grid-column-gap: 1rem;
    grid-template: min-content min-content / auto 1fr;
    justify-content: center;
    padding: 0.5rem 1rem;

    @media (min-width: ${cssObj.vars.midBreakPoint}) {
        align-items: center;
        grid-column-gap: 1rem;
        grid-template: min-content / min-content 12.5rem 1fr;
    }

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
    }`,
  styledHeaderImg: `
    border: 0.1rem rgb(196, 196, 196) solid;
    border-radius: 50%;
    grid-row: 1 / 3;
    height: 4rem;
    justify-self: end;
    width: 4rem;

    @media (min-width: ${cssObj.vars.midBreakPoint}) {
        grid-row: 1 / 2;
    }

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        height: 10rem;
        width: 10rem;
    }`,
  headerTitle: `
    border-bottom: 0.2rem solid ${cssObj.vars.teal};
    color: rgb(255, 255, 255);
    font-family: ${cssObj.vars.nunitoSans};
    font-weight: 700;
    font-size: 1.7rem;
    margin: 0;
    padding-bottom: 0.5rem;
    text-align: center;
    text-shadow: 0 0 0.3rem rgb(150, 88, 45);

    @media (min-width: ${cssObj.vars.midBreakPoint}) {
        border-bottom: none;
        font-size: 2rem;
        justify-self: end;
        padding-bottom: 0;
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
