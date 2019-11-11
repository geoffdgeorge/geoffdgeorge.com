import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import blogCss from '../styles/pageCss/blogCss';

const BlogContainer = styled.div`
  ${blogCss.blogContainer}
`;

const BlogContent = styled.div`
  ${blogCss.blogContent}
`;

const BlogHeader = styled.h2`
  ${blogCss.blogHeader}
`;

const PostContainer = styled(AniLink)`
  ${blogCss.postContainer}
`;

const PostTitle = styled.h3`
  ${blogCss.postTitle}
`;

const PostDate = styled.p`
  ${blogCss.postDate}
`;

const StyledImg = styled(Img)`
  ${blogCss.styledImg}
`;

const PostExcerpt = styled.p`
  ${blogCss.postExcerpt}
`;

const PostLink = styled.span`
  ${blogCss.postLink}
`;

const blogDataQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      nodes {
        excerpt(pruneLength: 190)
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          slug
          key
          bannerImg {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

const Blog = () => {
  const blogData = useStaticQuery(blogDataQuery);
  const { nodes } = blogData.allMarkdownRemark;

  return (
    <BlogContainer>
      <BlogContent>
        <SEO title="Blog" />
        <BlogHeader>Blog</BlogHeader>
        {nodes.map(node => {
          return (
            <PostContainer
              swipe
              direction="left"
              duration={0.3}
              to={`/blog/${node.frontmatter.slug}`}
              key={node.frontmatter.key}
            >
              <PostDate>{node.frontmatter.date}</PostDate>
              <PostTitle>{node.frontmatter.title}</PostTitle>
              <StyledImg
                fluid={node.frontmatter.bannerImg.childImageSharp.fluid}
              ></StyledImg>
              <PostExcerpt>{node.excerpt}</PostExcerpt>
              <PostLink>Read More</PostLink>
            </PostContainer>
          );
        })}
      </BlogContent>
    </BlogContainer>
  );
};

export default Blog;
