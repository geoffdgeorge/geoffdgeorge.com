import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/seo';

const ContactContainer = styled.div`
  display: grid;
  grid-template: 1fr / 1fr;
`;

const ContactContent = styled.div`
  display: grid;

  @media (min-width: 825px) {
    justify-items: center;
    align-content: center;
    height: 100vh;
  }
`;

const Contact = () => (
  <ContactContainer>
    <ContactContent>
      <SEO title="Contact" />
      <p className="link-section grid">This is the Contact page</p>
    </ContactContent>
  </ContactContainer>
);

export default Contact;
