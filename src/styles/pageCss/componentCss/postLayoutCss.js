import cssObj from '../../cssObj';

const postLayoutCss = {
  postContainer: `
    ${cssObj.mixins.gridCentered}

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
      padding-top: 2rem;
    }`,
  postContent: `
    max-width: 35.6875rem;`,
  postBackLink: `
    align-items: center;
    color: ${cssObj.vars.teal};
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
    transition: ${cssObj.vars.standardTransition};
    
    ${cssObj.mixins.activeHoverFocus(`
    color: ${cssObj.vars.brown};
    
    > svg {
      fill: ${cssObj.vars.brown}
    }
    `)}`,
    arrowIcon: `
    fill: ${cssObj.vars.teal};
    margin-right: .3rem;
    max-width: 1rem;
    transition: ${cssObj.vars.standardTransition};`,
  postHeader: `
    font-family: ${cssObj.vars.notoSerifJP};
    font-size: 2.5rem;
    margin-bottom: .75rem;`,
  postSubhead: `
    display: block;
    font-family: ${cssObj.vars.notoSerifJP};
    font-size: 1.3rem;
    font-style: italic;
    font-weight: 500;
    margin-bottom: .5rem;`,
  postDate: `
    color: ${cssObj.vars.teal};
    display: block;
    font-family: ${cssObj.vars.nunitoSans};
    font-size: .8rem;
    font-weight: 800;
    margin-bottom: 1.5rem`,
  bannerImg: `
    margin-bottom: .3rem;
  `,
  bannerImgCap: `
    color: ${cssObj.vars.brown};
    font-family: ${cssObj.vars.nunitoSans};
    font-size: .8rem;
    margin: 0 auto 1rem;
    max-width: max-content;`,
  postMain: `
    p, pre[class*="language-"], ul, ol, h3, h4, h5, h6 {
        margin-bottom: 1rem;
    }

    a {
      color: ${cssObj.vars.teal};
      text-decoration: none;
    }

    ul, ol {
        ${cssObj.mixins.graphSettings}
        margin: 1rem;
    }

    p {
        ${cssObj.mixins.graphSettings}

        :last-child {
            margin-bottom: 0;
        }
    }

    pre[class*="language-"] {
        margin-top: 0;
    }`,
};

export default postLayoutCss;
