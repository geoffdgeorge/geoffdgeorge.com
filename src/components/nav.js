import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import React from 'react';

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  grid-column: 2 / 3;
  margin-top: 0.5rem;

  @media (min-width: 650px) {
    border-left: 0.2rem solid rgb(0, 141, 150);
    grid-column: 3 / 4;
    margin-top: 0;
    height: 100%;
    justify-content: space-between;
    padding-left: 1rem;
  }

  @media (min-width: 825px) {
    flex-direction: column;
    border-left: none;
    height: initial;
  }
`;

const NavItem = styled.li`
  color: rgb(255, 255, 255);
  font-family: 'Nunito Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  list-style: none;
  text-align: center;

  @media (min-width: 650px) {
    font-size: 1rem;
  }

  @media (min-width: 825px) {
    margin: 0 0 1rem;
    font-size: 1.2rem;
  }
`;

const StyledAniLink = styled(AniLink)`
  color: white;
  text-decoration: none;
  text-shadow: 0 0 0.3rem rgb(150, 88, 45);
  display: inline-block;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;

  :hover,
  :focus,
  :active {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  @media (min-width: 825px) {
    :hover,
    :focus,
    :active {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }
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
      {navLinks.map(linkName => {
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
