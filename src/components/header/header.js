import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import React from 'react';

import cssObj from '../../styles/cssObj';

const HeaderContainer = styled.nav`
    align-items: center;
    background: linear-gradient(to right, rgba(84, 34, 0, 1) 10%, rgba(84, 34, 0, .5) 90%);
    box-shadow: 0 0.1rem 0.3rem rgb(78, 78, 78);
    display: flex;
    height: 8rem;
    padding: 1rem;

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        background: linear-gradient(rgba(84, 34, 0, 1) 10%, rgba(84, 34, 0, .5) 90%);
        flex-direction: column;
        height: 100vh;
        justify-content: flex-start;
        padding: 2rem;
    }
`;

const StyledHeaderImg = styled(Img)`
    border: 0.1rem rgb(196, 196, 196) solid;
    border-radius: 50%;
    height: 6rem;
    margin-right: 1rem;
    min-width: 6rem;

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        height: 10rem;
        margin-right: 0;
        width: 10rem;
    }
`;

const HeaderContent = styled.div``

const HeaderTitle = styled.h1`
    color: rgb(255, 255, 255);
    font-family: ${cssObj.vars.nunitoSans};
    font-size: 1.35rem;
    font-weight: 700;
    margin: 0 0 .5rem 0;

    @media (min-width: ${cssObj.vars.smallBreakPoint}) {
        font-size: 1.7rem;
    }
    
    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        font-size: 2rem;
        margin-top: 1rem;
        text-align: center;
    }
`;

const HeaderSummary = styled.div`
    border-top: 0.2rem solid ${cssObj.vars.teal};
    color: rgb(255, 255, 255);
    font-family: ${cssObj.vars.nunitoSans};
    font-size: .75rem;
    padding-top: .5rem;
    
    @media (min-width: ${cssObj.vars.smallBreakPoint}) {
        font-size: .85rem;
    }
`

const titleAndImgQuery = graphql`
    query {
        placeholderImage: file(
            relativePath: { eq: "personal/illustrated_portrait.jpeg" }
        ) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`;

const Header = () => {
    const data = useStaticQuery(titleAndImgQuery);

    return (
        <HeaderContainer>
            <StyledHeaderImg
                fluid={data.placeholderImage.childImageSharp.fluid}
                alt="Portrait of Geoff George"
            />
            <HeaderContent>
                <HeaderTitle>{data.site.siteMetadata.title}</HeaderTitle>
                <HeaderSummary>Software Engineer / Writer / Editor</HeaderSummary>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;
