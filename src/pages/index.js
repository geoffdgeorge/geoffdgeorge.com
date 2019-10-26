import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import indexCss from '../styles/pageCss/indexCss';

const IntroContainer = styled.section`
  ${indexCss.introContainer}
`;

const IntroContent = styled.div`
  ${indexCss.introContent}
`;

const IntroTitle = styled.h2`
  ${indexCss.introTitle}
`;

const IntroGraph = styled.p`
  ${indexCss.introGraph}
`;

const IntroLink = styled.a`
  ${indexCss.introLink}
`;

const IndexPage = () => (
  <IntroContainer>
    <SEO title="About Me" />
    <IntroContent>
      <IntroTitle>Hey there!</IntroTitle>
      <IntroGraph>
        I&rsquo;m a longtime magazine writer and editor turned web developer and
        programmer. I first caught the coding bug while reading Paul
        Ford&rsquo;s issue-length{' '}
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
        precision as an editor to get up to speed with new languages and
        libraries quickly and write clean code for web and mobile apps.
        I&rsquo;m combining my new skills with my experience as a content
        creator and deadline-driven project manager to continue to move beyond
        the printed page into full-stack development.
      </IntroGraph>
    </IntroContent>
  </IntroContainer>
);

export default IndexPage;
