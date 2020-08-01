import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import cssObj from '../styles/cssObj';

const BlogContainer = styled.div`
  display: grid;
  grid-template: 1fr / 1fr;
  justify-items: center;
  min-height: 100vh;
  overflow-y: hidden;

  @media (min-width: ${cssObj.vars.largeBreakPoint}) {
    padding-top: 2rem;
  }
`;

const BlogContent = styled.div`
  display: grid;
  justify-items: center;
  grid-template: min-content / 1fr;
  grid-gap: 1rem;
  max-width: ${cssObj.vars.maxContentWidth};
`;

const BlogHeader = styled.h2`
  ${cssObj.mixins.sectionTitle}
`;

const PostContainer = styled(AniLink)`
  align-content: center;
  border-top: 0.0625rem solid ${cssObj.vars.brown};
  color: #000;
  display: grid;
  height: max-content;
  grid-gap: 0.5rem;
  grid-template: min-content / 1fr;

  padding-top: 1rem;
  text-decoration: none;

  :last-child {
    border-bottom: 0.0625rem solid ${cssObj.vars.brown};
    padding-bottom: 1rem;
  }

  @media (min-width: ${cssObj.vars.midBreakPoint}) {
    grid-template: min-content / 3fr 4fr;
  }
`;

const PostTitle = styled.h3`
  font-family: ${cssObj.vars.notoSerifJP};
  font-size: 1.75rem;
  grid-column: 1 / -1;
  justify-self: center;
`;

const PostDate = styled.p`
  color: ${cssObj.vars.teal};
  font-family: ${cssObj.vars.nunitoSans};
  font-size: 0.9rem;
  grid-column: 1 / -1;
  justify-self: center;
`;

const StyledImg = styled(Img)`
  display: block;
  grid-row: 3 / 5;
  object-fit: cover;
  object-position: center center;
`;

const PostExcerpt = styled.p`
  ${cssObj.mixins.graphSettings}
`;

const PostLink = styled.span`
  color: ${cssObj.vars.teal};
  font-family: ${cssObj.vars.nunitoSans};
  font-size: 1.2rem;
  font-weight: 600;
  max-width: max-content;
  text-decoration: none;
  transition: ${cssObj.vars.standardTransition};

  @media (min-width: ${cssObj.vars.midBreakPoint}) {
    align-self: end;
  }

  ${cssObj.mixins.activeHoverFocus(`
    color: ${cssObj.vars.brown};
  `)}
`;

const blogDataQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      nodes {
        excerpt(pruneLength: 115)
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
        {nodes.map((node) => {
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
