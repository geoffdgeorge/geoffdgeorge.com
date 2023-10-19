import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer'
import cssObj from '../styles/cssObj';

const Container = styled.div`
    display: grid;
    grid-template: 1fr / 1fr;
    margin: 0 auto;

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        grid-template: auto auto / ${cssObj.vars.verticalHeaderWidth} 1fr;
    }
`;

const Main = styled.main`
    background-color: rgb(255, 255, 255);
    min-height: calc(100vh - 3rem);
    padding: 10rem 1rem 5rem 1rem;

    @media (min-width: ${cssObj.vars.smallBreakPoint}) {
        padding: 10rem 2rem 5rem 2rem;
    }

    @media (min-width: ${cssObj.vars.largeBreakPoint}) {
        grid-column-start: 2;
        padding-top: 2rem;
    }
`;

const Layout = ({ children }) => {
    return (
        <Container>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </Container>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
