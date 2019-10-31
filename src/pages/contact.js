import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import contactCss from '../styles/pageCss/contactCss'

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

const Contact = () => (
  <ContactContainer>
    <ContactContent>
      <SEO title="Contact" />
      <ContactTitle>Contact</ContactTitle>
      <ContactGraph>I'd love to work with you! (Or just grab a coffee and kibitz about code.) Drop me a line here, or connect with me on social media.</ContactGraph>
      <HiddenLabel for='name'>Name</HiddenLabel>
      <NameInput placeholder='Name' id='name'/>
      <HiddenLabel for='email'>Email</HiddenLabel>
      <EmailInput placeholder='Email' id='email'/>
      <HiddenLabel for='message'>Message</HiddenLabel>
      <MessageTextArea placeholder='Message' id='message'/>
      <SubmitButton type='button'>Submit</SubmitButton>
    </ContactContent>
  </ContactContainer>
);

export default Contact;
