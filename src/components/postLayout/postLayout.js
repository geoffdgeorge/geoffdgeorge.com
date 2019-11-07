import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import postLayoutCss from '../../styles/pageCss/componentCss/postLayoutCss';

const PostContainer = styled.div`
  ${postLayoutCss.postContainer}
`;

const PostContent = styled.div`
  ${postLayoutCss.postContent}
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

const PostMain = styled.div`
    ${postLayoutCss.postMain}
`;

const Post = props => {
  const { markdownRemark } = props.data;

  return (
    <PostContainer>
      <PostContent>
        <PostHeader>{markdownRemark.frontmatter.title}</PostHeader>
        <PostSubhead>{markdownRemark.frontmatter.subhead}</PostSubhead>
        <PostDate>{markdownRemark.frontmatter.date}</PostDate>
        <PostMain
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
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
      }
    }
  }
`;
