import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';

const BlogContainer = styled.div`
  display: grid;

  @media (min-width: 825px) {
    justify-items: center;
    align-content: center;
    height: 100vh;
  }
`;

const Blog = () => (
  <BlogContainer>
    <SEO title="Blog" />
    <p className="link-section grid">This is the Blog page</p>
  </BlogContainer>
);

export default Blog;
