import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import Img from 'gatsby-image';

import cssObj from '../../styles/cssObj';

import UnstyledArrowIcon from '../../images/svgs/arrow-left2.svg';

const PostContainer = styled.div`
  ${cssObj.mixins.gridCentered}

  @media (min-width: ${cssObj.vars.largeBreakPoint}) {
    padding-top: 2rem;
  }
`;

const PostContent = styled.div`
  max-width: 35.6875rem;
`;

const PostBackLink = styled(AniLink)`
  align-items: center;
  color: ${cssObj.vars.teal};
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  transition: ${cssObj.vars.standardTransition};

  ${cssObj.mixins.activeHoverFocus(`
    color: ${cssObj.vars.brown};
    
    > svg {
      fill: ${cssObj.vars.brown}
    }
  `)}
`;

const ArrowIcon = styled(UnstyledArrowIcon)`
  fill: ${cssObj.vars.teal};
  margin-right: 0.3rem;
  max-width: 1rem;
  transition: ${cssObj.vars.standardTransition};
`;

const PostHeader = styled.h2`
  font-family: ${cssObj.vars.notoSerifJP};
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
`;

const PostSubhead = styled.span`
  display: block;
  font-family: ${cssObj.vars.notoSerifJP};
  font-size: 1.3rem;
  font-style: italic;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const PostDate = styled.span`
  color: ${cssObj.vars.teal};
  display: block;
  font-family: ${cssObj.vars.nunitoSans};
  font-size: 0.8rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
`;

const PortraitBannerImgContainer = styled.div`
  width: 55%;
  float: right;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

const PortraitBannerImg = styled(Img)`
  margin-bottom: 0.3rem;
`;

const BannerImgContainer = styled.div`
  margin-bottom 1rem;
`;

const BannerImg = styled(Img)`
  margin-bottom: 0.3rem;
`;

const BannerImgCap = styled.figcaption`
  color: ${cssObj.vars.brown};
  font-family: ${cssObj.vars.nunitoSans};
  font-size: 0.8rem;
  margin: 0 auto;
  max-width: max-content;
`;

const PostMain = styled.div`
  p,
  pre[class*='language-'],
  ul,
  ol,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1rem;
  }

  a {
    color: ${cssObj.vars.teal};
    text-decoration: none;
  }

  ul,
  ol {
    ${cssObj.mixins.graphSettings}
    margin: 1rem;
  }

  p {
    ${cssObj.mixins.graphSettings}

    :last-child {
      margin-bottom: 0;
    }
  }

  pre[class*='language-'] {
    margin-top: 0;
  }
`;

const Post = (props) => {
  const { markdownRemark } = props.data;

  return (
    <PostContainer>
      <PostContent>
        <PostBackLink swipe direction="right" duration={0.3} to={`/blog`}>
          <ArrowIcon />
          Back
        </PostBackLink>
        <PostHeader>{markdownRemark.frontmatter.title}</PostHeader>
        <PostSubhead>{markdownRemark.frontmatter.subhead}</PostSubhead>
        <PostDate>{markdownRemark.frontmatter.date}</PostDate>
        {markdownRemark.frontmatter.bannerImg.childImageSharp.fluid
          .aspectRatio < 1 ? (
          <PortraitBannerImgContainer>
            <PortraitBannerImg
              fluid={markdownRemark.frontmatter.bannerImg.childImageSharp.fluid}
            />
            <BannerImgCap>
              {markdownRemark.frontmatter.bannerImgCap}
            </BannerImgCap>
          </PortraitBannerImgContainer>
        ) : (
          <BannerImgContainer>
            <BannerImg
              fluid={markdownRemark.frontmatter.bannerImg.childImageSharp.fluid}
            />
            <BannerImgCap>
              {markdownRemark.frontmatter.bannerImgCap}
            </BannerImgCap>
          </BannerImgContainer>
        )}
        <PostMain
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
        <PostBackLink swipe direction="right" duration={0.3} to={`/blog`}>
          <ArrowIcon />
          Back
        </PostBackLink>
      </PostContent>
    </PostContainer>
  );
};

export default Post;

export const query = graphql`
  query postQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        slug
        subhead
        title
        bannerImgCap
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
`;
