import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'

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
  `)

  return (
    <header>
      <nav>
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          style={{
            width: `10rem`,
            height: `10rem`,
            border: `0.1rem rgb(196, 196, 196) solid`,
            borderRadius: `50%`,
          }}
          alt="A portrait photo of me"
        />
        <h1 className="head-el head-el-2s">{siteTitle}</h1>
        <ul className="row">
          <li className="head-el head-el-3s">
            <Link to="/" id="about-btn">
              About
            </Link>
          </li>
          <li className="head-el head-el-4s">
            <Link to="/page-2" id="portfolio-btn">
              Portfolio
            </Link>
          </li>
          <li className="head-el head-el-5s">
            <Link to="/" id="cv-btn">
              CV
            </Link>
          </li>
          <li className="head-el head-el-6s">
            <Link to="/" id="contact-btn">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
