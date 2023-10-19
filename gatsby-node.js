/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        graphql(`
            query {
                allMarkdownRemark {
                    nodes {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        `).then((results) => {
            results.data.allMarkdownRemark.nodes.forEach((node) => {
                createPage({
                    path: `/blog/${node.frontmatter.slug}`,
                    component: path.resolve(
                        `./src/components/postLayout/index.js`
                    ),
                    context: {
                        slug: node.frontmatter.slug,
                    },
                });
            });
            resolve();
        });
    });
};
