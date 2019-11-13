import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import Img from 'gatsby-image';
import UnstyledArrowIcon from '../../images/svgs/arrow-left2.svg';
import postLayoutCss from '../../styles/pageCss/componentCss/postLayoutCss';

const PostContainer = styled.div`
  ${postLayoutCss.postContainer}
`;

const PostContent = styled.div`
  ${postLayoutCss.postContent}
`;

const PostBackLink = styled(AniLink)`
  ${postLayoutCss.postBackLink}
`;

const ArrowIcon = styled(UnstyledArrowIcon)`
  ${postLayoutCss.arrowIcon}
`;

const PostHeader = styled.h2`
  ${postLayoutCss.postHeader}
`;

const PostSubhead = styled.span`
  ${postLayoutCss.postSubhead}
`;

const PostDate = styled.span`
  ${postLayoutCss.postDate}
`;

const BannerImg = styled(Img)`
  ${postLayoutCss.bannerImg}
`;

const BannerImgCap = styled.figcaption`
  ${postLayoutCss.bannerImgCap}
`;

const PostMain = styled.div`
  ${postLayoutCss.postMain}
`;

const Post = props => {
  const { markdownRemark } = props.data;

  return (
    <PostContainer>
      <PostContent>
        <PostBackLink swipe direction="right" duration={0.3} to={`/blog`}>
          <ArrowIcon />Back
        </PostBackLink>
        <PostHeader>{markdownRemark.frontmatter.title}</PostHeader>
        <PostSubhead>{markdownRemark.frontmatter.subhead}</PostSubhead>
        <PostDate>{markdownRemark.frontmatter.date}</PostDate>
        <BannerImg
          fluid={markdownRemark.frontmatter.bannerImg.childImageSharp.fluid}
        ></BannerImg>
        <BannerImgCap>{markdownRemark.frontmatter.bannerImgCap}</BannerImgCap>
        <PostMain
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
        <PostBackLink swipe direction="right" duration={0.3} to={`/blog`}>
          <ArrowIcon />Back
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
        date(formatString: "MMMM DD, YYYY")
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
