import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

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
    <header className="header-container">
      <nav className="header-nav">
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          className="portrait-img"
          alt="A portrait photo of me"
        />
        <h1>{siteTitle}</h1>
        <ul className="row">
          <li>
            <AniLink swipe direction="right" duration={0.3} to="/">
              About
            </AniLink>
          </li>
          <li>
            <AniLink swipe direction="right" duration={0.3} to="/portfolio">
              Portfolio
            </AniLink>
          </li>
          <li>
            <AniLink swipe direction="right" duration={0.3} to="/cv">
              CV
            </AniLink>
          </li>
          <li>
            <AniLink swipe direction="right" duration={0.3} to="/blog">
              Blog
            </AniLink>
          </li>
          <li>
            <AniLink swipe direction="right" duration={0.3} to="/contact">
              Contact
            </AniLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
