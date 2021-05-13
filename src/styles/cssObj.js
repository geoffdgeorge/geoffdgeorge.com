const cssVars = {
    brown: `rgb(84, 34, 0)`,
    dropShadow: `.1rem .1rem .1rem rgb(158, 158, 158)`,
    largeBreakPoint: `825px`,
    maxContentWidth: `35.6875rem`,
    midBreakPoint: `650px`,
    nunitoSans: `'Nunito Sans', sans-serif`,
    notoSerifJP: `'Noto Serif JP', serif`,
    standardTransition: `all .3s ease-in-out`,
    teal: `rgb(0, 141, 150)`,
    xLargeBreakPoint: `970px`,
};

const cssObj = {
    mixins: {
        activeHoverFocus: (tempLiteral) => {
            return `
        :active,
        :hover,
        :focus {
          ${tempLiteral}
        }`;
        },
        graphSettings: `
      font-family: ${cssVars.notoSerifJP};
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.4rem;`,
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
        inputSettings: `
      background-color: rgb(243, 243, 243);
      border: .1rem solid rgb(196, 196, 196);
      padding: .5rem;`,
        visuallyHidden: `
      border: 0;  
      clip: rect(0 0 0 0); 
      height: 1px; 
      margin: -1px; 
      overflow: hidden; 
      padding: 0; 
      position: absolute; 
      width: 1px;`,
    },
    vars: cssVars,
};

export default cssObj;
