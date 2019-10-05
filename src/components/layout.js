/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import BackgroundSection from './bgImg';

const Container = styled.div`
  display: grid;
  grid-template: 1fr / 1fr;
  padding-top: 5rem;

  @media (min-width: 825px) {
    grid-template: auto auto / 20rem 1fr;
    padding-top: 0;
  }
`;

const Main = styled.main`
  align-items: center;
  display: grid;
  justify-items: center;
  padding: 2rem;

  @media (min-width: 825px) {
    grid-column-start: 2;
    padding-top: 0;
  }
`;

const Footer = styled.footer`
  background-color: rgb(0, 141, 150);
  border-top: 0.2rem solid rgb(84, 34, 0);
  color: rgb(255, 255, 255);
  display: grid;
  font-family: 'Nunito Sans', sans-serif;
  height: 3rem;
  justify-items: center;
  align-items: center;

  @media (min-width: 825px) {
    grid-column: 2 / -1;
  }
`;

const FooterContent = styled.p`
  font-weight: 200;
  font-size: 0.8rem;
`;

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
    <Container>
      <TransitionPortal>
        <BackgroundSection siteTitle={data.site.siteMetadata.title} />
      </TransitionPortal>
      <Main>{children}</Main>
      <Footer>
        <FooterContent>
          Copyright © {new Date().getFullYear()} Geoff George
        </FooterContent>
      </Footer>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
