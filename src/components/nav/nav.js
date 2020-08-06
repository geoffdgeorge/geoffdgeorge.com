import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import React from 'react';

import cssObj from '../../styles/cssObj';

const NavUl = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-column: 2 / 3;
  justify-content: space-between;
  margin-top: 0.5rem;

  @media (min-width: ${cssObj.vars.midBreakPoint}) {
    border-left: 0.2rem solid ${cssObj.vars.teal};
    grid-column: 3 / 4;
    height: 100%;
    justify-content: space-between;
    margin-top: 0;
    padding-left: 1rem;
  }

  @media (min-width: ${cssObj.vars.largeBreakPoint}) {
    border-left: none;
    flex-direction: column;
    height: initial;
  }
`;

const NavItem = styled.li`
  color: rgb(255, 255, 255);
  font-family: ${cssObj.vars.nunitoSans};
  font-size: 0.8rem;
  font-weight: 400;
  list-style: none;
  text-align: center;

  @media (min-width: ${cssObj.vars.midBreakPoint}) {
    font-size: 1rem;
  }

  @media (min-width: ${cssObj.vars.largeBreakPoint}) {
    font-size: 1.2rem;
    margin: 0 0 1rem;
  }
`;

const StyledAniLink = styled(AniLink)`
  color: white;
  display: inline-block;
  text-decoration: none;
  text-shadow: 0 0 0.3rem rgb(150, 88, 45);
  transition: ${cssObj.vars.standardTransition};

  ${cssObj.mixins.activeHoverFocus(`
    transform: scale(1.2);
  `)}

  @media (min-width: ${cssObj.vars.largeBreakPoint}) {
    ${cssObj.mixins.activeHoverFocus(`
        transform: scale(1.3);
    `)}
  }
`;

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          navLinks
        }
      }
    }
  `);

  const { navLinks } = data.site.siteMetadata;

  return (
    <NavUl>
      {navLinks.map((linkName) => {
        return (
          <NavItem key={navLinks.indexOf(linkName)}>
            <StyledAniLink
              swipe
              direction="right"
              duration={0.3}
              to={
                navLinks.indexOf(linkName) === 0
                  ? `/`
                  : `/${linkName.toLowerCase()}`
              }
            >
              {linkName}
            </StyledAniLink>
          </NavItem>
        );
      })}
    </NavUl>
  );
};

export default Nav;
