import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import Header from './header';
import BackgroundImage from 'gatsby-background-image';

import cssObj from '../../styles/cssObj';

const StyledBackgroundImage = styled(BackgroundImage)`
    position: fixed;
    z-index: 3;
    top: 0;
    right: 0;
    left: 0;

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        max-height: 100vh;
        width: ${cssObj.vars.verticalHeaderWidth};
        right: inherited;
    }
`;

const UnstyledHeaderContainerSection = () => (
    <StaticQuery
        query={graphql`
            query {
                placeholderImage: file(
                    relativePath: {
                        eq: "personal/chicago.jpg"
                    }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 2048) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={(data) => {
            // Set ImageData.
            const imageData = data.placeholderImage.childImageSharp.fluid;
            return (
                <StyledBackgroundImage
                    Tag="header"
                    fluid={imageData}
                    preserveStackingContext={true}
                    // Blank position set to override position default for gatsby-background-image
                    style={{ position: '' }}
                >
                    <Header />
                </StyledBackgroundImage>
            );
        }}
    />
);

const HeaderContainer = styled(UnstyledHeaderContainerSection)`
    background-position: center center;
    background-size: cover;
`;

export default HeaderContainer;
