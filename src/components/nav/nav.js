import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import React from 'react';
import navCss from './navCss';

const NavUl = styled.ul`
  ${navCss.navUl};
`;

const NavItem = styled.li`
  ${navCss.navItem};
`;

const StyledAniLink = styled(AniLink)`
  ${navCss.styledAniLink};
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
