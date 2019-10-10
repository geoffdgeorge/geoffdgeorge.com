import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';

const IntroContainer = styled.section`
  display: grid;

  @media (min-width: 825px) {
    justify-items: center;
    align-content: center;
    height: 100vh;
  }
`;

const IntroTitle = styled.h2`
  color: rgb(0, 141, 150);
  font-family: 'Nunito Sans', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin: 0 0 1rem 0;
`;

const IntroGraph = styled.p`
  font-family: 'Noto Serif JP', serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4rem;
  margin-bottom: 1rem;

  :last-child {
    margin-bottom: 0;
  }
`;

const IntroLink = styled.a`
  color: rgb(0, 141, 150);
  text-decoration: none;
`;

const IndexPage = () => (
  <IntroContainer>
    <SEO title="About Me" />
    <IntroTitle>Hey there!</IntroTitle>
    <IntroGraph>
      I&rsquo;m a longtime magazine writer and editor turned web developer and
      programmer. I first caught the coding bug while reading Paul Ford&rsquo;s
      issue-length{' '}
      <IntroLink
        href="https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/"
        target="_blank"
      >
        &ldquo;What Is Code?&rdquo;
      </IntroLink>{' '}
      piece in <em>Bloomberg Businessweek</em>, and after a few
      years&mdash;dabbling in web tutorials here and spending time on{' '}
      <IntroLink href="https://www.freecodecamp.org" target="_blank">
        FreeCodeCamp.org
      </IntroLink>{' '}
      there&mdash;I committed to and completed Northwestern University&rsquo;s
      coding boot camp.
    </IntroGraph>
    <IntroGraph>
      Now I&rsquo;m leveraging my know-how of syntax and language and my
      precision as an editor to get up to speed with new languages and libraries
      quickly and write clean code for web and mobile apps. I&rsquo;m combining
      my new skills with my experience as a content creator and deadline-driven
      project manager to continue to move beyond the printed page into
      full-stack development.
    </IntroGraph>
  </IntroContainer>
);

export default IndexPage;
