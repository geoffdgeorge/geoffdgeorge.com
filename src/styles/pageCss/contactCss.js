import cssObj from '../../styles/cssObj';

const contactCss = {
  contactContainer: `
    display: grid;
    grid-template: 1fr / 1fr;
    justify-items: center`,
  contactContent: `
    display: grid;
    grid-gap: 1rem;
    grid-template: auto / 1fr;
    justify-items: center;

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        align-content: center;
        min-height: 100vh;
        max-width: ${cssObj.vars.maxContentWidth} ;
    }`,
  contactTitle: `
    ${cssObj.mixins.sectionTitle}
    grid-column: 1 / -1;`,
  contactGraph: `
    ${cssObj.mixins.graphSettings}
    grid-column: 1 / -1;
    text-align: center`,
  contactForm: `
    display: grid;
    grid-column: 1 / -1;
    grid-gap: 1rem;
    min-width: 100%
    
    @media (min-width: ${cssObj.vars.midBreakPoint}) {
      grid-template: auto / 1fr 1fr;
    }
    `,
  hiddenLabel: `
    ${cssObj.mixins.visuallyHidden}`,
  nameInput: `
    ${cssObj.mixins.inputSettings}
    ${cssObj.mixins.graphSettings}
    width: 100%`,
  emailInput: `
    ${cssObj.mixins.inputSettings}
    ${cssObj.mixins.graphSettings}
    width: 100%`,
  messageTextArea: `
    ${cssObj.mixins.inputSettings}
    ${cssObj.mixins.graphSettings}
    grid-column: 1 / -1;
    height: 7rem;
    min-width: 100%`,
  submitButton: `
    grid-column: 1 / -1
    font-family: ${cssObj.vars.nunitoSans};
    font-weight: 200;
    font-size: 1.1rem;
    padding: .7rem;
    justify-self: center;
    background-color: ${cssObj.vars.teal};
    color: #FFF;
    transition: all .3s ease-in-out;
    
    ${cssObj.mixins.activeHoverFocus(`
      background-color: ${cssObj.vars.brown};
      box-shadow: ${cssObj.vars.dropShadow};
    `)}`,
  socialContainer: `
    min-width: 100%`,
  socialHeader: `
    margin: .5rem 0;
    min-width: 100%;
    position: relative;

    :before {
        background-color: ${cssObj.vars.brown};
        content: '';
        height: 0.0625rem;
        min-width: 100%;
        position: absolute;
        top: 50%;
    }`,
  socialTitle: `
    background-color: #fff;
    color: ${cssObj.vars.brown};
    font-family: ${cssObj.vars.nunitoSans};
    font-size: 1.2rem;
    font-weight: 200;
    margin: 0 auto;
    padding: 0 0.5rem;
    position: relative;
    max-width: max-content;
    z-index: 2;

    @media (min-width: ${cssObj.vars.midBreakPoint}) {
        font-size: 1.5rem;
    }`,
  iconContainer: `
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 18rem;

    > a > svg {
      fill: ${cssObj.vars.brown};
      max-width: 1.75rem;
      transition: ${cssObj.vars.standardTransition};
    }

    > a {
      ${cssObj.mixins.activeHoverFocus(`
        > svg {
          fill: ${cssObj.vars.teal};
          filter: drop-shadow(${cssObj.vars.dropShadow});
        }`
      )}
    }`,
  iconLink: ``,
};

export default contactCss;
