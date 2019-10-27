const cssVars = {
  brown: `rgb(84, 34, 0)`,
  dropShadow: `.1rem .1rem .1rem rgb(158, 158, 158)`,
  largeBreakPoint: `825px`,
  midBreakPoint: `650px`,
  nunitoSans: `'Nunito Sans', sans-serif`,
  notoSerifJP: `'Noto Serif JP', serif`,
  standardTransition: `all .3s ease-in-out`,
  teal: `rgb(0, 141, 150)`,
  xLargeBreakPoint: `970px`,
};

const cssObj = {
  mixins: {
    gridCentered: `
    align-items: center;
    display: grid;
    justify-items: center;`,
    gridColsRows: (col1, col2, row1, row2) => {
      return `
        grid-column: ${col1} / ${col2};
        grid-row: ${row1} / ${row2};
      `;
    },
  },
  vars: cssVars,
};

export default cssObj;
