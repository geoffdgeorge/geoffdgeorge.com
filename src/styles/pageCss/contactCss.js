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

    @media (min-width: ${cssObj.vars.midBreakPoint}) {
      grid-template: auto / 1fr 1fr;
    }

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        align-content: center;
        height: 100vh;
        max-width: 45rem;
    }`,
  contactTitle: `
    ${cssObj.mixins.sectionTitle}
    grid-column: 1 / -1;`,
  contactGraph: `
    ${cssObj.mixins.graphSettings}
    grid-column: 1 / -1;
    text-align: center`,
  hiddenLabel: `
    ${cssObj.mixins.visuallyHidden}`,
  nameInput: `
    ${cssObj.mixins.inputSettings}
    ${cssObj.mixins.graphSettings}
    min-width: 100%`,
  emailInput: `
    ${cssObj.mixins.inputSettings}
    ${cssObj.mixins.graphSettings}
    min-width: 100%`,
  messageTextArea: `
    ${cssObj.mixins.inputSettings}
    ${cssObj.mixins.graphSettings}
    grid-column: 1 / -1;
    height: 10rem;
    min-width: 100%`,
  submitButton: `
    grid-column: 1 / -1
    font-family: ${cssObj.vars.nunitoSans};
    font-weight: 200;
    font-size: 1.2rem;
    padding: .7rem;
    justify-self: center;
    background-color: rgb(0, 141, 150);
    color: rgb(255, 255, 255);
    transition: box-shadow .1s linear;
    
    :active,
    :hover,
    :focus {
      box-shadow: ${cssObj.vars.dropShadow};
    }`,
};

export default contactCss;
