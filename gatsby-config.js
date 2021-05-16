module.exports = {
    siteMetadata: {
        title: `Geoff George`,
        description: `Web Developer, editor, and writer, living in Chicago. This is a website for all my personal work.`,
        author: `Geoff George`,
        url: `https://www.geoffdgeorge.com`,
        defaultImg: `/images/personal/High-Res-Square.jpg`,
        navLinks: ['About', 'Portfolio', 'Blog', 'Contact'],
        portfolioItems: [
            {
                title: `Fridge2Table`,
                awards: `First Place, Next Level Contest`,
                toolsUsed: `Express, MongoDB, Mongoose, Cron, Auth0, Axios, React Native, Expo, NativeBase`,
                description: `A full-stack mobile app built to track groceries by category, with push notifications for products nearing expiration.`,
                githubLink: `https://github.com/Dreadpipe/fridge2table`,
                liveLink: `https://play.google.com/store/apps/details?id=com.dreamteamdesigns.fridge2table`,
                desktopPicRelPath: `Fridge2Table.png`,
                mobilePicRelPath: `Fridge2Table_phone.png`,
            },
            {
                title: `Patellr`,
                awards: ``,
                toolsUsed: `Express, MySQL, Sequelize, Passport, Chart JS, Moment JS, Axios, Handlebars, CSS Grid`,
                description: `A full-stack web app built to track the progress of patients in knee recovery.`,
                githubLink: `https://github.com/geoffdgeorge/Patellr`,
                liveLink: `https://whispering-retreat-76401.herokuapp.com/`,
                desktopPicRelPath: `Patellr.png`,
                mobilePicRelPath: `Patellr_phone.png`,
            },
            {
                title: `Fresh Farm Recipes`,
                awards: ``,
                toolsUsed: `jQuery, Bootstrap, Edamam API, USDA farmer's market API, Leaflet`,
                description: `A single-page app providing recipe suggestions based on raw ingredients and mapping to nearby farmer's markets.`,
                githubLink: `https://github.com/geoffdgeorge/Fresh-Farm-Recipes`,
                liveLink: `https://geoffdgeorge.github.io/Fresh-Farm-Recipes/`,
                desktopPicRelPath: `Fresh_Farm_Recipes.png`,
                mobilePicRelPath: `Fresh_Farm_Recipes_phone.png`,
            },
            {
                title: `Multiplayer Online Game`,
                awards: ``,
                toolsUsed: `jQuery, Firebase`,
                description: `A multiplayer version of rock-paper-scissors, complete with score-keeping and chat functionality.`,
                githubLink: `https://github.com/geoffdgeorge/RPS-Multiplayer`,
                liveLink: `https://geoffdgeorge.github.io/RPS-Multiplayer/`,
                desktopPicRelPath: `Online_RPS.png`,
                mobilePicRelPath: `Online_RPS_phone.png`,
            },
            {
                title: 'Wanderer',
                awards: ``,
                toolsUsed: `Express, Axios`,
                description: `A web app built to match potential travel companions based on their survey scores.`,
                githubLink: `https://github.com/geoffdgeorge/Wanderer`,
                liveLink: `https://rocky-tundra-11586.herokuapp.com/`,
                desktopPicRelPath: `Wanderer.png`,
                mobilePicRelPath: `Wanderer_phone.png`,
            },
        ],
    },
    plugins: [
        `gatsby-plugin-netlify`,
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
                commonmark: true,
                footnotes: true,
                pedantic: true,
                gfm: true,
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1000,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                            languageExtensions: [
                                {
                                    language: 'superscript',
                                    extend: 'javascript',
                                    definition: {
                                        superscript_types: /(SuperType)/,
                                    },
                                    insertBefore: {
                                        function: {
                                            superscript_keywords:
                                                /(superif|superelse)/,
                                        },
                                    },
                                },
                            ],
                            prompt: {
                                user: 'root',
                                host: 'localhost',
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
