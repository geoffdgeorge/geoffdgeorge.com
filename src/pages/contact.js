import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import contactCss from '../styles/pageCss/contactCss';
import FacebookIcon from '../images/svgs/facebook.svg';
import GitHubIcon from '../images/svgs/github.svg';
import InstagramIcon from '../images/svgs/instagram.svg';
import LinkedInIcon from '../images/svgs/linkedin2.svg';
import StackOverflowIcon from '../images/svgs/stackoverflow.svg';
import TwitterIcon from '../images/svgs/twitter.svg';

const ContactContainer = styled.div`
  ${contactCss.contactContainer}
`;

const ContactContent = styled.div`
  ${contactCss.contactContent}
`;

const ContactTitle = styled.h2`
  ${contactCss.contactTitle}
`;

const ContactGraph = styled.p`
  ${contactCss.contactGraph}
`;

const ContactForm = styled.form`
  ${contactCss.contactForm}
`;

const HiddenLabel = styled.label`
  ${contactCss.hiddenLabel}
`;

const NameInput = styled.input`
  ${contactCss.nameInput}
`;

const EmailInput = styled.input`
  ${contactCss.emailInput}
`;

const MessageTextArea = styled.textarea`
  ${contactCss.messageTextArea}
`;

const SubmitButton = styled.button`
  ${contactCss.submitButton}
`;

const SocialContainer = styled.div`
  ${contactCss.socialContainer}
`;

const SocialHeader = styled.div`
  ${contactCss.socialHeader}
`;

const SocialTitle = styled.h3`
  ${contactCss.socialTitle}
`;

const IconContainer = styled.div`
  ${contactCss.iconContainer}
`;

const IconLink = styled.a`
  ${contactCss.iconLink}
`;

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
          <IconLink href='https://github.com/geoffdgeorge' target='_blank'><GitHubIcon /></IconLink>
          <IconLink href='https://www.linkedin.com/in/geoff-george/' target='_blank'><LinkedInIcon /></IconLink>
          <IconLink href='https://twitter.com/geoffdgeorge' target='_blank'><TwitterIcon /></IconLink>
          <IconLink href='https://www.instagram.com/geoffdgeorge/' target='_blank'><InstagramIcon /></IconLink>
          <IconLink href='https://stackoverflow.com/users/6623742/geoff-george' target='_blank'><StackOverflowIcon /></IconLink>
          <IconLink href='https://www.facebook.com/geoffdgeorge' target='_blank'><FacebookIcon /></IconLink>
        </IconContainer>
      </SocialContainer>
    </ContactContent>
  </ContactContainer>
);

export default Contact;
