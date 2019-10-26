import cssObj from '../../styles/cssObj';
import { deflate } from 'zlib';

const navCss = {
  navUl: `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    grid-column: 2 / 3;
    margin-top: 0.5rem;

    @media (min-width: ${cssObj.vars.midBreakPoint}) {
        border-left: 0.2rem solid ${cssObj.vars.teal};
        grid-column: 3 / 4;
        margin-top: 0;
        height: 100%;
        justify-content: space-between;
        padding-left: 1rem;
    }

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        flex-direction: column;
        border-left: none;
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
        margin: 0 0 1rem;
        font-size: 1.2rem;
    }`,
  styledAniLink: `
    color: white;
    text-decoration: none;
    text-shadow: 0 0 0.3rem rgb(150, 88, 45);
    display: inline-block;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;

    :hover,
    :focus,
    :active {
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        :hover,
        :focus,
        :active {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
        }
    }`,
};

export default navCss;
