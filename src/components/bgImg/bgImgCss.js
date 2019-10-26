import cssObj from '../../styles/cssObj';

const bgImgCss = {
  styledBackgroundImage: `
    position: relative;

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        min-height: 100vh;
        position: fixed;
        width: 20rem;
    }`,
};

export default bgImgCss;
