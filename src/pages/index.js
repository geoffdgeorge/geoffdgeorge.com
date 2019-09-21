import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="About Me" />
    <section className="link-section grid">
      <h1 className="nunito-sans color-teal">Hey there!</h1>
      <p className="noto-serif-jp">
        I&rsquo;m a longtime magazine writer and editor turned web developer and
        programmer. I first caught the coding bug while reading Paul
        Ford&rsquo;s issue-length{' '}
        <a
          href="https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/"
          target="_blank"
          className="color-teal"
        >
          &ldquo;What Is Code?&rdquo;
        </a>{' '}
        piece in <em>Bloomberg Businessweek</em>, and after a few
        years&mdash;dabbling in web tutorials here and spending time on{' '}
        <a
          href="https://www.freecodecamp.org"
          target="_blank"
          className="color-teal"
        >
          FreeCodeCamp.org
        </a>{' '}
        there&mdash;I committed to and completed Northwestern University&rsquo;s
        coding boot camp.
      </p>
      <p className="noto-serif-jp">
        Now I&rsquo;m leveraging my know-how of syntax and language and my
        precision as an editor to get up to speed with new languages and
        libraries quickly and write clean code for web and mobile apps.
        I&rsquo;m combining my new skills with my experience as a content
        creator and deadline-driven project manager to continue to move beyond
        the printed page into full-stack development.
      </p>
    </section>
  </Layout>
);

export default IndexPage;
