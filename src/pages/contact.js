import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import cssObj from '../styles/cssObj';

import FacebookIcon from '../images/svgs/facebook.svg';
import GitHubIcon from '../images/svgs/github.svg';
import InstagramIcon from '../images/svgs/instagram.svg';
import LinkedInIcon from '../images/svgs/linkedin2.svg';
import StackOverflowIcon from '../images/svgs/stackoverflow.svg';
import TwitterIcon from '../images/svgs/twitter.svg';

const ContactContainer = styled.div`
  display: grid;
  grid-template: 1fr / 1fr;
  justify-items: center;
`;

const ContactContent = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template: auto / 1fr;
  justify-items: center;

  @media (min-width: ${cssObj.vars.largeBreakPoint}) {
    align-content: center;
    min-height: 100vh;
    max-width: ${cssObj.vars.maxContentWidth};
  }
`;

const ContactTitle = styled.h2`
  ${cssObj.mixins.sectionTitle}
  grid-column: 1 / -1;
`;

const ContactGraph = styled.p`
  ${cssObj.mixins.graphSettings}
  grid-column: 1 / -1;
  text-align: center;
`;

const ContactForm = styled.form`
  display: grid;
  grid-column: 1 / -1;
  grid-gap: 1rem;
  min-width: 100%;

  @media (min-width: ${cssObj.vars.midBreakPoint}) {
    grid-template: auto / 1fr 1fr;
  }
`;

const HiddenLabel = styled.label`
  ${cssObj.mixins.visuallyHidden}
`;

const NameInput = styled.input`
  ${cssObj.mixins.inputSettings}
  ${cssObj.mixins.graphSettings}
  width: 100%;
`;

const EmailInput = styled.input`
  ${cssObj.mixins.inputSettings}
  ${cssObj.mixins.graphSettings}
  width: 100%;
`;

const MessageTextArea = styled.textarea`
  ${cssObj.mixins.inputSettings}
  ${cssObj.mixins.graphSettings}
  grid-column: 1 / -1;
  height: 7rem;
  min-width: 100%;
`;

const SubmitButton = styled.button`
  grid-column: 1 / -1;
  font-family: ${cssObj.vars.nunitoSans};
  font-weight: 200;
  font-size: 1.1rem;
  padding: 0.7rem;
  justify-self: center;
  background-color: ${cssObj.vars.teal};
  color: #fff;
  transition: all 0.3s ease-in-out;

  ${cssObj.mixins.activeHoverFocus(`
    background-color: ${cssObj.vars.brown};
    box-shadow: ${cssObj.vars.dropShadow};
  `)}
`;

const SocialContainer = styled.div`
  min-width: 100%;
`;

const SocialHeader = styled.div`
  margin: 0.5rem 0;
  min-width: 100%;
  position: relative;

  :before {
    background-color: ${cssObj.vars.brown};
    content: '';
    height: 0.0625rem;
    min-width: 100%;
    position: absolute;
    top: 50%;
  }
`;

const SocialTitle = styled.h3`
  background-color: #fff;
  color: ${cssObj.vars.brown};
  font-family: ${cssObj.vars.nunitoSans};
  font-size: 1.2rem;
  font-weight: 200;
  margin: 0 auto;
  padding: 0 0.5rem;
  position: relative;
  max-width: max-content;
  z-index: 2;

  @media (min-width: ${cssObj.vars.midBreakPoint}) {
    font-size: 1.5rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 18rem;

  > a > svg {
    fill: ${cssObj.vars.brown};
    max-width: 1.75rem;
    transition: ${cssObj.vars.standardTransition};
  }

  > a {
    ${cssObj.mixins.activeHoverFocus(`
      > svg {
        fill: ${cssObj.vars.teal};
        filter: drop-shadow(${cssObj.vars.dropShadow});
      }`)}
  }
`;

const IconLink = styled.a``;

const Contact = () => (
  <ContactContainer>
    <ContactContent>
      <SEO title="Contact" />
      <ContactTitle>Contact</ContactTitle>
      <ContactGraph>
        I'd love to work with you! (Or just grab a coffee and kibitz about
        code.) Drop me a line here, or connect with me on social media.
      </ContactGraph>
      <ContactForm
        data-netlify="true"
        netlify-honeypot="bot-field"
        method="POST"
        name="contact"
      >
        <input type="hidden" name="bot-field" />
        <HiddenLabel htmlFor="name">Name</HiddenLabel>
        <NameInput placeholder="Name" id="name" name="name" />
        <HiddenLabel htmlFor="email">Email</HiddenLabel>
        <EmailInput placeholder="Email" id="email" name="email" />
        <HiddenLabel htmlFor="message">Message</HiddenLabel>
        <MessageTextArea placeholder="Message" id="message" name="message" />
        <SubmitButton>Submit</SubmitButton>
      </ContactForm>
      <SocialContainer>
        <SocialHeader>
          <SocialTitle>Social</SocialTitle>
        </SocialHeader>
        <IconContainer>
          <IconLink href="https://github.com/geoffdgeorge" target="_blank">
            <GitHubIcon />
          </IconLink>
          <IconLink
            href="https://www.linkedin.com/in/geoff-george/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconLink>
          <IconLink href="https://twitter.com/geoffdgeorge" target="_blank">
            <TwitterIcon />
          </IconLink>
          <IconLink
            href="https://www.instagram.com/geoffdgeorge/"
            target="_blank"
          >
            <InstagramIcon />
          </IconLink>
          <IconLink
            href="https://stackoverflow.com/users/6623742/geoff-george"
            target="_blank"
          >
            <StackOverflowIcon />
          </IconLink>
          <IconLink
            href="https://www.facebook.com/geoffdgeorge"
            target="_blank"
          >
            <FacebookIcon />
          </IconLink>
        </IconContainer>
      </SocialContainer>
    </ContactContent>
  </ContactContainer>
);

export default Contact;
