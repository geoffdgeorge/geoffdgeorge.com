import cssObj from '../../styles/cssObj';

const bgImgCss = {
  styledBackgroundImage: `
    position: relative;

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        position: fixed;
        width: 20rem;
        min-height: 100vh;
    }`,
};

export default bgImgCss;
