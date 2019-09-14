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
    <header className='header-container'>
      <nav className='header-nav'>
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          className='portrait-img'
          alt="A portrait photo of me"
        />
        <h1 className="head-el head-el-2s">{siteTitle}</h1>
        <ul className="row">
          <li className="head-el head-el-3s">
            <AniLink
              swipe
              direction="right"
              duration={0.3}
              to="/"
              id="about-btn"
            >
              About
            </AniLink>
          </li>
          <li className="head-el head-el-4s">
            <AniLink
              swipe
              direction="right"
              duration={0.3}
              to="/portfolio"
              id="portfolio-btn"
            >
              Portfolio
            </AniLink>
          </li>
          <li className="head-el head-el-5s">
            <AniLink
              swipe
              direction="right"
              duration={0.3}
              to="/cv"
              id="cv-btn"
            >
              CV
            </AniLink>
          </li>
          <li className="head-el head-el-6s">
            <AniLink
              swipe
              direction="right"
              duration={0.3}
              to="/contact"
              id="contact-btn"
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
