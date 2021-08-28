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

export const StyledContent = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
`;

export const StyledBlogPreview = styled.div`
  padding: 10px 16px;
  margin: 20px 0;
  border-bottom: 1px solid #fafafa;
  &:hover {
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const StyledBlogPreviewTitle = styled.h2`
  font-size: 20px;
  color: #f1356d;
  margin-bottom: 8px;
`;

export const StyledBlogDetails = styled.div`
  & h2 {
    font-size: 20px;
    color: #f1356d;
    margin-bottom: 10px;
  }
  & div {
    margin: 20px 0;
  }
`;

export const StyledCreate = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  & h2 {
    font-size: 20px;
    color: #f1356d;
    margin-bottom: 30px;
  }
`;

export const StyledLabel = styled.label`
  text-align: left;
  display: block;
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block;
`;
export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block;
`;
export const StyledSelect = styled.select`
  width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block;
`;
export const StyledCreateButton = styled.button`
  background: #f1356d;
  color: #fff;
  border: 0;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`;
export const StyledDeleteButton = styled.button`
  background: #f1356d;
  color: #fff;
  border: 0;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`;
