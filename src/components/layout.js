/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import BackgroundSection from './bgImg'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="site-container grid">
      <TransitionPortal id="transition-portal">
        <BackgroundSection siteTitle={data.site.siteMetadata.title} />
      </TransitionPortal>
      <main className="main-section">{children}</main>
      <footer className="foot nunito-sans color-white">
        <p>Copyright © {new Date().getFullYear()} Geoff George</p>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
