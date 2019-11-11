import cssObj from '../../styles/cssObj';

const fourOhFourCss = {
  errorContainer: `
    display: grid;
    justify-items: center;
      align-content: center;

    @media (min-width: 825px) {
      min-height: 100vh;
    }`,
  styledImg: `
    margin-bottom: 1rem;
    width: 8rem;`,
  errorHeader: `
    ${cssObj.mixins.sectionTitle}`,
  errorMessage: `
    ${cssObj.mixins.graphSettings}`,
};

export default fourOhFourCss;
