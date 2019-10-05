import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

const linkNames = ['About', 'Portfolio', 'CV', 'Blog', 'Contact'];

const HeaderContent = styled.nav`
  background-color: rgba(84, 34, 0, 0.5);
  padding: 0.5rem 1rem;
  height: 5rem;
  display: grid;
  grid-template: min-content min-content / auto 1fr;
  justify-content: center;
  grid-column-gap: 1rem;
  align-content: center;
  box-shadow: 0 0.1rem 0.3rem rgb(78, 78, 78);

  @media (min-width: 650px) {
    grid-template: min-content / min-content 12.5rem 1fr;
    grid-column-gap: 1rem;
    align-items: center;
  }

  @media (min-width: 825px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const HeaderTitle = styled.h1`
  text-shadow: 0 0 0.3rem rgb(150, 88, 45);
  border-bottom: 0.2rem solid rgb(0, 141, 150);
  color: rgb(255, 255, 255);
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
  font-size: 1.7rem;
  padding-bottom: 0.5rem;
  margin: 0;
  text-align: center;

  @media (min-width: 650px) {
    border-bottom: none;
    padding-bottom: 0;
    justify-self: end;
    font-size: 2rem;
  }

  @media (min-width: 825px) {
    border-bottom: 0.2rem solid rgb(0, 141, 150);
    border-left: none;
    font-size: 2.5rem;
    margin: 1rem 0;
    padding-bottom: 1rem;
    padding-left: 0;
  }
`;

const Nav = styled.ul`
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

const StyledHeaderImg = styled(Img)`
  width: 4rem;
  height: 4rem;
  border: 0.1rem rgb(196, 196, 196) solid;
  border-radius: 50%;
  justify-self: end;
  grid-row: 1 / 3;

  @media (min-width: 650px) {
    grid-row: 1 / 2;
  }

  @media (min-width: 825px) {
    width: 10rem;
    height: 10rem;
  }
`;

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "personal/High-Res-Square.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <HeaderContent>
      <StyledHeaderImg
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="A portrait photo of me"
      />
      <HeaderTitle>{siteTitle}</HeaderTitle>
      <Nav>
        {linkNames.map(linkName => {
          return (
            <NavItem>
              <StyledAniLink swipe direction="right" duration={0.3} to={linkNames.indexOf(linkName) === 0 ? `/` : `/${linkName.toLowerCase()}`} key={linkNames.indexOf(linkName)}>
                {linkName}
              </StyledAniLink>
            </NavItem>
          );
        })}
      </Nav>
    </HeaderContent>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
