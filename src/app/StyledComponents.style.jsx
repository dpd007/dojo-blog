// import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
// export const GlobalStyles = createGlobalStyle`
//     *{
//         margin: 0;
//         font-family: "Quicksand";
//         color: #333;
//     }
// `;

export const StyledNavbar = styled.nav`
  padding: 20px;
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  border-bottom: 1px solid #f2f2f2;
  & a {
    text-transform: capitalize;
    margin-left: 16px;
    text-decoration: none;
    padding: 6px;
  }
  & a:hover {
    color: #f1356d;
  }
`;

export const StyledTitle = styled.h1`
  color: #f1356d;
  text-transform: capitalize;
`;

export const StyledLinks = styled.div`
  margin-left: auto;
`;

export const Content = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
`;

export const BlogPreview = styled.div`
  padding: 10px 16px;
  margin: 20px 0;
  border-bottom: 1px solid #fafafa;
  &:hover {
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const BlogPreviewTitle = styled.h2`
  font-size: 20px;
  color: #f1356d;
  margin-bottom: 8px;
`;
