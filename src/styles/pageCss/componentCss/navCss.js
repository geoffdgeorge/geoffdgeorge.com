import cssObj from '../../cssObj';

const navCss = {
  navUl: `
    align-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    grid-column: 2 / 3;
    justify-content: space-between;
    margin-top: 0.5rem;

    @media (min-width: ${cssObj.vars.midBreakPoint}) {
        border-left: 0.2rem solid ${cssObj.vars.teal};
        grid-column: 3 / 4;
        height: 100%;
        justify-content: space-between;
        margin-top: 0;
        padding-left: 1rem;
    }

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        border-left: none;
        flex-direction: column;
        height: initial;
    }`,
  navItem: `
    color: rgb(255, 255, 255);
    font-family: ${cssObj.vars.nunitoSans};
    font-size: 0.8rem;
    font-weight: 400;
    list-style: none;
    text-align: center;

    @media (min-width: ${cssObj.vars.midBreakPoint}) {
        font-size: 1rem;
    }

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        font-size: 1.2rem;
        margin: 0 0 1rem;
    }`,
  styledAniLink: `
    color: white;
    display: inline-block;
    text-decoration: none;
    text-shadow: 0 0 0.3rem rgb(150, 88, 45);
    transition: ${cssObj.vars.standardTransition};

    ${cssObj.mixins.activeHoverFocus(`
        transform: scale(1.2);
    `)}

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        ${cssObj.mixins.activeHoverFocus(`
            transform: scale(1.3);
        `)}
    }`,
};

export default navCss;
