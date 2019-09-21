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
        <h1 className="nunito-sans color-white">{siteTitle}</h1>
        <ul className="row">
          <li className="nunito-sans">
            <AniLink
              swipe
              direction="right"
              duration={0.3}
              to="/"
              className="color-white"
            >
              About
            </AniLink>
          </li>
          <li className="nunito-sans">
            <AniLink
              swipe
              direction="right"
              duration={0.3}
              to="/portfolio"
              className="color-white"
            >
              Portfolio
            </AniLink>
          </li>
          <li className="nunito-sans">
            <AniLink
              swipe
              direction="right"
              duration={0.3}
              to="/cv"
              className="color-white"
            >
              CV
            </AniLink>
          </li>
          <li className="nunito-sans">
            <AniLink
              swipe
              direction="right"
              duration={0.3}
              to="/blog"
              className="color-white"
            >
              Blog
            </AniLink>
          </li>
          <li className="nunito-sans">
            <AniLink
              swipe
              direction="right"
              duration={0.3}
              to="/contact"
              className="color-white"
            >
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
