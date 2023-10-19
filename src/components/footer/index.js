import React from 'react';
import styled from 'styled-components';

import cssObj from '../../styles/cssObj';

import GitHubIcon from '../../images/svgs/github.svg';
import InstagramIcon from '../../images/svgs/instagram.svg';
import LinkedInIcon from '../../images/svgs/linkedin2.svg';
import TikTokIcon from '../../images/svgs/tiktok.svg';
import TwitterIcon from '../../images/svgs/twitter.svg';

const FooterContainer = styled.footer`
    align-items: center;
    background-color: ${cssObj.vars.teal};
    border-top: 0.2rem solid ${cssObj.vars.brown};
    bottom: 0;
    color: rgb(255, 255, 255);
    display: flex;
    height: 3rem;
    justify-content: space-between;
    left: 0;
    padding: 0 1rem;
    position: fixed;
    right: 0;
    z-index: 2;

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        left: ${cssObj.vars.verticalHeaderWidth};
    }
`;

const FooterContent = styled.p`
    flex: 1;
    font-family: ${cssObj.vars.nunitoSans};
    font-size: 0.8rem;
    font-weight: 200;
`;

const CopyrightWord = styled.span`
    display: none;

    @media (min-width: ${cssObj.vars.midBreakPoint}) {
        display: initial;
    }
`

const SocialContainer = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 7rem;

    > a > svg {
        fill: rgb(255, 255, 255);
        max-width: 1rem;
        transition: ${cssObj.vars.standardTransition};

        @media (min-width: ${cssObj.vars.smallBreakPoint}) {
            max-width: 1.25rem;
        }
    }

    > a {
        ${cssObj.mixins.activeHoverFocus(`
            > svg {
                fill: ${cssObj.vars.brown};
            }
        `)}
    }

    @media (min-width: ${cssObj.vars.smallBreakPoint}) {
        min-width: 10rem;
    }
`;

const IconLink = styled.a``;

const Footer = ({ children }) => {
    return (
        <FooterContainer>
            <FooterContent>
                <CopyrightWord>Copyright</CopyrightWord> © {new Date().getFullYear()} Geoff George
            </FooterContent>
            <SocialContainer>
                <IconLink
                    href="https://github.com/geoffdgeorge"
                    target="_blank"
                >
                    <GitHubIcon />
                </IconLink>
                <IconLink
                    href="https://www.instagram.com/geoffdgeorge/"
                    target="_blank"
                >
                    <InstagramIcon />
                </IconLink>
                <IconLink
                    href="https://www.linkedin.com/in/geoff-george/"
                    target="_blank"
                >
                    <LinkedInIcon />
                </IconLink>
                <IconLink
                    href="https://www.tiktok.com/@geoffdgeorge"
                    target="_blank"
                >
                    <TikTokIcon />
                </IconLink>
                <IconLink
                    href="https://twitter.com/geoffdgeorge"
                    target="_blank"
                >
                    <TwitterIcon />
                </IconLink>
            </SocialContainer>
        </FooterContainer>
    );
};

export default Footer;
