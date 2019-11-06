import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';

const BlogContainer = styled.div`
  display: grid;
  grid-template: 1fr / 1fr;
`;

const BlogContent = styled.div`
  display: grid;

  @media (min-width: 825px) {
    justify-items: center;
    align-content: center;
    height: 100vh;
  }
`;

const BlogHeader = styled.h2``;

const PostContainer = styled.div``;

const PostTitle = styled.h3``;

const PostDate = styled.p``;

const PostLink = styled(Link)``;

const blogDataQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      nodes {
        frontmatter {
          title
          date
          slug
          key
        }
      }
    }
  }
`;

const Blog = () => {
  const blogData = useStaticQuery(blogDataQuery);

  console.log(blogData);

  const { nodes } = blogData.allMarkdownRemark;

  return (
    <BlogContainer>
      <BlogContent>
        <SEO title="Blog" />
        <BlogHeader>This is the Blog page</BlogHeader>
        {nodes.map(node => {
          return (
            <PostContainer key={node.frontmatter.key}>
              <PostTitle>{node.frontmatter.title}</PostTitle>
              <PostDate>{node.frontmatter.date}</PostDate>
              <PostLink to={`/blog/${node.frontmatter.slug}`}>
                Read More
              </PostLink>
            </PostContainer>
          );
        })}
      </BlogContent>
    </BlogContainer>
  );
};

export default Blog;
