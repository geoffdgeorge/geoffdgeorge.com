module.exports = {
  siteMetadata: {
    title: `Geoff George`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Geoff George`,
    navLinks: ['About', 'Portfolio', 'CV', 'Blog', 'Contact'],
    portfolioItems: [
      {
        title: `Fridge2Table`,
        awards: `First Place, Next Level Contest`,
        toolsUsed: `Express, MongoDB, Mongoose, Cron, Auth0, Axios, React Native, Expo, NativeBase`,
        description: `This is a full-stack mobile app built to track groceries by category and expiration date, with push notifications for products nearing expiration and secure user authentication via Auth0. In a team of four, I focused on authentication and front-end design, built with React Native, Expo, and NativeBase.`,
        githubLink: `https://github.com/Dreadpipe/fridge2table`,
        liveLink: `https://play.google.com/store/apps/details?id=com.dreamteamdesigns.fridge2table`,
        desktopPicRelPath: `Fridge2Table.png`,
        mobilePicRelPath: `Fridge2Table_phone.png`,
      },
      {
        title: `Patellr`,
        awards: ``,
        toolsUsed: `Express, MySQL, Sequelize, Passport, Chart JS, Moment JS, Axios, Handlebars, CSS Grid`,
        description: `This is a full-stack app built to track the progress of patients in knee recovery. In a team of three, I focused on back-end routing and user authentication via Passport. I also worked on the CSS grid layout of the user page and the integration of Chart JS, which displays a graph of a signed-in user's pain and strength over time.`,
        githubLink: `https://github.com/geoffdgeorge/Patellr`,
        liveLink: `https://whispering-retreat-76401.herokuapp.com/`,
        desktopPicRelPath: `Patellr.png`,
        mobilePicRelPath: `Patellr_phone.png`,
      },
      {
        title: `Fresh Farm Recipes`,
        awards: ``,
        toolsUsed: `jQuery, Bootstrap, Edamam API, USDA farmer's market API, Leaflet`,
        description: `I worked with a small team to build an app that provides recipe suggestions based on raw ingredients and helps users find nearby farmer's markets to procure those ingredients. My primary work was on the display and functionality of the site's Leaflet map and the results brought back from the USDA's farmer's market API.`,
        githubLink: `https://github.com/geoffdgeorge/Fresh-Farm-Recipes`,
        liveLink: `https://geoffdgeorge.github.io/Fresh-Farm-Recipes/`,
        desktopPicRelPath: `Fresh_Farm_Recipes.png`,
        mobilePicRelPath: `Fresh_Farm_Recipes_phone.png`,
      },
      {
        title: `Multiplayer Online Game`,
        awards: ``,
        toolsUsed: `jQuery, Firebase`,
        description: `Using Firebase for back-end server processes, I built a multiplayer, online version of rock-paper-scissors, complete with sign-in and score-keeping functionality and a chat area for both players and observers.`,
        githubLink: `https://github.com/geoffdgeorge/RPS-Multiplayer`,
        liveLink: `https://geoffdgeorge.github.io/RPS-Multiplayer/`,
        desktopPicRelPath: `Online_RPS.png`,
        mobilePicRelPath: `Online_RPS_phone.png`,
      },
      {
        title: 'Wanderer',
        awards: ``,
        toolsUsed: `Express, Axios`,
        description: `This is a simple app built with Express routing on the back end and Vanilla JS on the front end to match stored users based on their survey scores. Users' scores are compared via a simple algorithm that adds up the differences of their quantifiable survey responses.`,
        githubLink: `https://github.com/geoffdgeorge/Wanderer`,
        liveLink: `https://rocky-tundra-11586.herokuapp.com/`,
        desktopPicRelPath: `Wanderer.png`,
        mobilePicRelPath: `Wanderer_phone.png`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve(`./src/components/layout.js`),
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
