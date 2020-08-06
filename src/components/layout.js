import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BackgroundSection from './bgImg/bgImg';
import cssObj from '../styles/cssObj';

const Container = styled.div`
  display: grid;
  grid-template: 1fr / 1fr;
  margin: 0 auto;

  @media (min-width: ${cssObj.vars.largeBreakPoint}) {
    grid-template: auto auto / 20rem 1fr;
  }
`;

const Main = styled.main`
  ${cssObj.mixins.gridCentered}
  background-color: #FFF;
  min-height: calc(100vh - 5rem);
  padding: 2rem;

  .tl-edges {
    min-width: 100%;
  }

  @media (min-width: ${cssObj.vars.largeBreakPoint}) {
    grid-column-start: 2;
    padding-top: 0;
  }
`;

const Footer = styled.footer`
  ${cssObj.mixins.gridCentered}
  background-color: ${cssObj.vars.teal};
  border-top: 0.2rem solid ${cssObj.vars.brown};
  color: rgb(255, 255, 255);
  font-family: ${cssObj.vars.nunitoSans};
  height: 3rem;

  @media (min-width: ${cssObj.vars.largeBreakPoint}) {
    grid-column: 2 / -1;
  }
`;

const FooterContent = styled.p`
  font-weight: 200;
  font-size: 0.8rem;
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
