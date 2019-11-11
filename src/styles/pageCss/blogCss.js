import cssObj from '../../styles/cssObj';

const blogCss = {
  blogContainer: `
    display: grid;
    grid-template: 1fr / 1fr;
    justify-items: center;
    min-height: 100vh;
    overflow-y: hidden;

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
      padding-top: 2rem;
    }`,
  blogContent: `
    display: grid;
    justify-items: center;
    grid-template:  min-content / 1fr;
    grid-gap: 1rem;
    max-width: ${cssObj.vars.maxContentWidth};`,
  blogHeader: `
    ${cssObj.mixins.sectionTitle}`,
  postContainer: `
    border-top: 0.0625rem solid ${cssObj.vars.brown};
    color: #000;
    display: grid;
    grid-gap: .5rem;
    padding-top: 1rem;
    text-decoration: none;
    
    :last-child {
      border-bottom: 0.0625rem solid ${cssObj.vars.brown};
      padding-bottom: 1rem;
    }

    @media (min-width: ${cssObj.vars.midBreakPoint}) {
      grid-template: min-content / 3fr 4fr;
    }`,
  postTitle: `
    font-family: ${cssObj.vars.notoSerifJP};
    font-size: 1.75rem;
    grid-column: 1 / -1;
    justify-self: center;`,
  postDate: `
    color: ${cssObj.vars.teal};
    font-family: ${cssObj.vars.nunitoSans};
    font-size: .9rem;
    grid-column: 1 / -1;
    justify-self: center;`,
  styledImg: `
    display: block;
    grid-row: 3 / 5;
    object-fit: cover;
    object-position: center center;`,
  postExcerpt: `
    ${cssObj.mixins.graphSettings}`,
  postLink: `
    align-self: end;
    color: ${cssObj.vars.teal};
    font-family: ${cssObj.vars.nunitoSans};
    font-size: 1.2rem;
    font-weight: 600;
    max-width: max-content;
    text-decoration: none;
    transition: ${cssObj.vars.standardTransition};
    
    ${cssObj.mixins.activeHoverFocus(`
      color: ${cssObj.vars.brown};
    `)}`,
};

export default blogCss;
