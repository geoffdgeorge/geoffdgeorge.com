import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, image, lang, meta, title }) {
    const { site, placeholderImage } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        author
                        defaultImg
                        description
                        title
                        url
                    }
                }
                placeholderImage: file(
                    relativePath: { eq: "personal/High-Res-Square.jpg" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 300) {
                            src
                        }
                    }
                }
            }
        `
    );

    const siteUrl = site.siteMetadata.url;
    const fullTitle = `${site.siteMetadata.title} | ${title}`;
    const metaDescription = description || site.siteMetadata.description;
    const metaImage = `${siteUrl}${
        image || placeholderImage.childImageSharp.fluid.src
    }`;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`${site.siteMetadata.title} | %s`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: fullTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: fullTitle,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: `twitter:image`,
                    content: metaImage,
                },
            ].concat(meta)}
        />
    );
}

SEO.defaultProps = {
    description: ``,
    image: ``,
    lang: `en`,
    meta: [],
};

SEO.propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
};

export default SEO;
