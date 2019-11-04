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
        plugins: [],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
