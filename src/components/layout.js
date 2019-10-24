/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BackgroundSection from './bgImg/bgImg';
import layoutCss from './layoutCss';

const Container = styled.div`
  ${layoutCss.container}
`;

const Main = styled.main`
  ${layoutCss.main}
`;

const Footer = styled.footer`
  ${layoutCss.footer}
`;

const FooterContent = styled.p`
  ${layoutCss.footerContent}
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <BackgroundSection />
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
