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
    align-items: start;
    min-height: 100%;
`;

const BlogContent = styled.div`
    display: grid;
    justify-items: center;
    grid-template: max-content / 1fr;
    grid-gap: 3rem;
    max-width: ${cssObj.vars.maxContentWidth};
`;

const PostContainer = styled(AniLink)`
    align-content: center;
    color: #000;
    display: grid;
    height: max-content;
    grid-gap: 0.5rem;
    grid-template: max-content / 1fr;
    text-decoration: none;

    :last-child {
        padding-bottom: 1rem;
    }

    @media (min-width: ${cssObj.vars.midBreakPoint}) {
        grid-template: max-content / 3fr 4fr;
    }
`;

const PostTitleContainer = styled.div`
    grid-column: 1 / -1;
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

const PostTitle = styled.h3`
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

const PostDate = styled.p`
    color: ${cssObj.vars.teal};
    font-family: ${cssObj.vars.nunitoSans};
    font-size: 0.8rem;
    font-weight: bold;
    justify-self: start;
    align-self: end;
`;

const StyledImg = styled(Img)`
    display: block;
    grid-row: 2 / 4;
    object-fit: cover;
    object-position: center center;
`;

const PostExcerpt = styled.p`
    ${cssObj.mixins.graphSettings}
`;

const blogDataQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            nodes {
                excerpt(pruneLength: 155)
                frontmatter {
                    title
                    date(formatString: "MMMM D, YYYY")
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
                {nodes.map((node) => {
                    return (
                        <PostContainer
                            swipe
                            direction="left"
                            duration={0.3}
                            to={`/blog/${node.frontmatter.slug}`}
                            key={node.frontmatter.key}
                        >
                            <PostTitleContainer>
                                <PostTitle>{node.frontmatter.title}</PostTitle>
                            </PostTitleContainer>
                            <StyledImg
                                fluid={
                                    node.frontmatter.bannerImg.childImageSharp
                                        .fluid
                                }
                            />
                            <PostExcerpt>{node.excerpt}</PostExcerpt>
                            <PostDate>{node.frontmatter.date}</PostDate>
                        </PostContainer>
                    );
                })}
            </BlogContent>
        </BlogContainer>
    );
};

export default Blog;