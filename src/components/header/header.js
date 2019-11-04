import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Nav from '../nav/nav';
import React from 'react';
import headerCss from '../../styles/pageCss/componentCss/headerCss';

const HeaderContent = styled.nav`
  ${headerCss.headerContent}
`;

const StyledHeaderImg = styled(Img)`
  ${headerCss.styledHeaderImg}
`;

const HeaderTitle = styled.h1`
  ${headerCss.headerTitle}
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "personal/High-Res-Square.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <HeaderContent>
      <StyledHeaderImg
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="A portrait photo of me"
      />
      <HeaderTitle>{data.site.siteMetadata.title}</HeaderTitle>
      <Nav />
    </HeaderContent>
  );
};

export default Header;
