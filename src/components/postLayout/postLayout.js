import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const PostContainer = styled.div``;

const PostContent = styled.div``;

const PostHeader = styled.h2``;

const Post = props => {
  const { markdownRemark } = props.data;

  return (
    <PostContainer>
      <PostContent>
        <PostHeader>{markdownRemark.frontmatter.title}</PostHeader>
        <div dangerouslySetInnerHTML={{
            __html: markdownRemark.html
        }} />
      </PostContent>
    </PostContainer>
  );
};

export default Post;

export const query = graphql`
  query postQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug  } }) {
      html
      frontmatter {
        slug
        date
        title
      }
    }
  }
`;
